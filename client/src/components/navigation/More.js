import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
const useStyles = makeStyles((theme) => ({
   typography: {
      padding: theme.spacing(2),
   },
}));

export default function More() {
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const id = open ? "simple-popover" : undefined;

   return (
      <>
         <div
            className="d-flex align-items-center my-2 ml-3 nav__links waves-effect waves-dark"
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
         >
            <div className="icon__div ml-2">
               <i className="fas fa-ellipsis-h fa-2x text-secondary"></i>
            </div>
            <div className="text__div ml-3">
               <h5 className="pt-2 font-weight-bold">More</h5>
            </div>
         </div>
         {/* menu items */}
         <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "center",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "center",
            }}
         >
            <MenuItem className={classes.typography} onClick={handleClose}>
               <AnnouncementIcon /> <span className="ml-1">Topic</span>
            </MenuItem>
            <MenuItem className={classes.typography} onClick={handleClose}>
               <FlashOnIcon /> <span className="ml-1">Moments</span>
            </MenuItem>
            <MenuItem className={classes.typography} onClick={handleClose}>
               <TrendingUpIcon />
               <span className="ml-1">witter Ads</span>
            </MenuItem>
            <MenuItem className={classes.typography} onClick={handleClose}>
               <AssessmentIcon />
               <span className="ml-1">Analytics</span>
            </MenuItem>
            <hr />
            <MenuItem className={classes.typography} onClick={handleClose}>
               <SettingsIcon />
               <span className="ml-1">Setting and privacy</span>
            </MenuItem>
            <MenuItem className={classes.typography} onClick={handleClose}>
               <HelpOutlineIcon />
               <span className="ml-1">Help Center</span>
            </MenuItem>
            <MenuItem className={classes.typography} onClick={handleClose}>
               <AspectRatioIcon />
               <span className="ml-1">Display</span>
            </MenuItem>
         </Popover>
      </>
   );
}
