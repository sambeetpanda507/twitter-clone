import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import Post from "./Post";
import "./style.css";
// import posts from "./postData";
export default function Feed() {
   const [postData, setPostData] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:8080/tweets")
         .then((response) => {
            setPostData(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   function getTweetData(data) {
      setPostData([data, ...postData]);
   }

   const getOperation = (_id, operation) => {
      if (operation === "Delete") {
         const operatedData = postData.filter((post) => {
            return post._id !== _id;
         });
         setPostData(operatedData);
         axios
            .delete(`http://localhost:8080/api/delete/${_id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
      }
   };

   return (
      <div className="main__feed__div col-md-12 col-lg-6 col-xl-6 p-0">
         <Tweet key="tweet" tweetData={getTweetData} />
         {postData.map((post, index, arr) => {
            return (
               <Post
                  key={index}
                  displayName={post.displayName}
                  username={post.username}
                  caption={post.caption}
                  postImg={post.postImg}
                  createdAt={post.createdAt}
                  _id={post._id}
                  deleteHandler={getOperation}
               />
            );
         })}
      </div>
   );
}
