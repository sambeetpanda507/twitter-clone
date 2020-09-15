import React from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";

export default function Social() {
   const [like, setLike] = useState("");
   const [comment, setComment] = useState("");
   const [retweet, setRetweet] = useState("");
   const [share, setShare] = useState("");

   const likeHandler = (event) => {
      if (like === "secondary") {
         setLike("");
      } else {
         setLike("secondary");
      }
   };
   const commentHandler = (event) => {
      if (comment === "secondary") {
         setComment("");
      } else {
         setComment("secondary");
      }
   };
   const retweetHandler = (event) => {
      if (retweet === "secondary") {
         setRetweet("");
      } else {
         setRetweet("secondary");
      }
   };
   const shareHandler = (event) => {
      if (share === "secondary") {
         setShare("");
      } else {
         setShare("secondary");
      }
   };

   return (
      <div className="feedback__div mt-3 d-flex justify-content-around">
         <span>
            <Tooltip title="comment" placement="bottom">
               <IconButton
                  color={comment}
                  onClick={commentHandler}
                  style={{ border: "0px", outline: "none" }}
               >
                  <ChatBubbleOutlineIcon fontSize="small" />
               </IconButton>
            </Tooltip>
         </span>
         <span>
            <Tooltip title="retweet" placement="bottom">
               <IconButton
                  color={retweet}
                  onClick={retweetHandler}
                  style={{ border: "0px", outline: "none" }}
               >
                  <RepeatIcon fontSize="small" />
               </IconButton>
            </Tooltip>
         </span>
         <span>
            <Tooltip title="like" placement="bottom">
               <IconButton
                  color={like}
                  onClick={likeHandler}
                  style={{ border: "0px", outline: "none" }}
               >
                  <FavoriteBorderIcon fontSize="small" />
               </IconButton>
            </Tooltip>
         </span>
         <span>
            <Tooltip title="share">
               <IconButton
                  color={share}
                  onClick={shareHandler}
                  style={{ border: "0px", outline: "none" }}
               >
                  <ShareIcon fontSize="small" />
               </IconButton>
            </Tooltip>
         </span>
      </div>
   );
}
