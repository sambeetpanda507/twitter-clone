import React from "react";
import navLinkData from "./navLinkData";

export default function NavLink(props) {
   return navLinkData.map((value, index, arr) => {
      return (
         <>
            <div
               key={index}
               className="d-flex align-items-center my-2 ml-3 nav__links waves-effect waves-dark"
            >
               <div className="icon__div ml-2">
                  <i className={value.iconClass}></i>
               </div>
               <div className="text__div ml-3">
                  <h5 className="pt-2 font-weight-bold">{value.linkText}</h5>
               </div>
            </div>
         </>
      );
   });
}
