import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import multer from "multer";
import Posts from "./feedModel.js";
dotenv.config();

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const fileStorage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images");
   },
   filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + "-" + file.originalname);
   },
});

const fileFilter = (req, file, cb) => {
   if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
   ) {
      cb(null, true);
   } else {
      cb(null, false);
   }
};

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(
   multer({ storage: fileStorage, fileFilter: fileFilter }).single("postImg")
);

app.use(cors());

app.get("/", (req, res, next) => {
   res.status(200).send("hello world");
});

app.get("/tweets", (req, res, next) => {
   Posts.find()
      .sort({ createdAt: -1 })
      .then((tweets) => {
         res.status(200).json(tweets);
      })
      .catch((err) => {
         res.status(404).json({
            message: "no data found",
            error: err,
         });
      });
});

app.post("/tweet", (req, res, next) => {
   let displayName;
   let username;
   let caption;
   let path;
   let posts;
   if (req.file) {
      displayName = req.body.displayName;
      username = req.body.username;
      caption = req.body.caption;
      path = req.file.path;
      posts = new Posts({
         displayName: displayName,
         username: username,
         postImg: path,
         caption: caption,
      });
   } else {
      displayName = req.body.displayName;
      username = req.body.username;
      caption = req.body.caption;
      posts = new Posts({
         displayName: displayName,
         username: username,
         caption: caption,
      });
   }
   posts
      .save()
      .then((result) => {
         res.status(201).json({
            message: "tweet saved to db",
            result: result,
         });
      })
      .catch((err) => {
         res.status(500).json({
            message: "failed to tweet",
            error: err,
         });
      });
});

app.delete("/api/delete/:id", (req, res, next) => {
   const { id } = req.params;
   Posts.deleteOne({ _id: id })
      .then((result) => {
         res.status(201).json({
            message: "post successfully deleted",
            result,
         });
      })
      .catch((err) => {
         res.status(500).json({
            message: "unable to delete post",
            error: err,
         });
      });
});

mongoose
   .connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   })
   .then((result) => {
      console.log("connected to the db");

      app.listen(port, () => {
         console.log(`server is listening on port: http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.log(err);
   });
