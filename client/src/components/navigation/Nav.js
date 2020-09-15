import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import NavLink from "./NavLink";
import More from "./More";
import TwitterIcon from "./TwitterIcon";
import Button from "@material-ui/core/Button";

import "./style.css";

const useStyles = makeStyles({
   leftRightDiv: {
      // maxWidth: "250px",
      height: "100vh",
      borderRight: "3px solid lightgrey",
      overflowY: "auto",
   },
});

const Nav = () => {
   const classes = useStyles();
   return (
      <div
         className={`col-md-3 col-lg-3 d-md-none d-lg-block d-sm-none d-none nav__bar ${classes.leftRightDiv}`}
      >
         <TwitterIcon key="twitterIcon" />
         <NavLink key="navlink" />
         <More key="more" />
         <Button
            style={{ borderRadius: "25px", width: "260px", height: "45px" }}
            variant="contained"
            color="primary"
         >
            Tweet
         </Button>
         {/* <button
            style={{ borderRadius: "25px", width: "260px", height: "45px" }}
            className="waves-effect waves-light font-weight-bold btn btn-block btn-primary"
         >
            Tweet
         </button> */}
         <div className="user__div d-flex align-items-center mt-3">
            <img
               src="https://picsum.photos/200"
               height="40px"
               style={{ borderRadius: "50%" }}
               alt="profile_pic"
            ></img>
            <div className="profile__name ml-2">
               <h5 className="font-weight-bolder">test test test</h5>
               <h6 className="text-secondary" style={{ lineHeight: "0px" }}>
                  @test
               </h6>
            </div>

            <i
               className="fas fa-chevron-down ml-auto text-center btn-floating waves-effect waves-dark text-dark"
               style={{ backgroundColor: "#ffff" }}
            ></i>
         </div>
      </div>
   );
};
export default Nav;
