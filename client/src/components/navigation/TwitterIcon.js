import React from "react";
import Twitter from "@material-ui/icons/Twitter";

export default function TwitterIcon() {
   return (
      <>
         <div className="my-3 ml-3 ">
            <div className="ml-2 waves-effect waves-dark">
               <Twitter style={{ fontSize: "2rem" }} color="primary" />
            </div>
         </div>
      </>
   );
}
