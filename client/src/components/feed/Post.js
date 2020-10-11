import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Social from "./Social";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

export default function Post({
    displayName,
    username,
    caption,
    postImg,
    createdAt,
    _id,
    deleteHandler,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        deleteHandler(e.target.id, e.target.innerHTML.split("<")[0]);
    };

    return (
        <div className="post__div p-3">
            <div className="d-flex align-items-center">
                <div className="image__div">
                    <img
                        src="https://picsum.photos/200"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                        alt="profile_pic"
                    ></img>
                </div>
                <div className="pl-2">
                    <h5 className="d-inline font-weight-bold">{displayName}</h5>
                    &nbsp;
                    <span>
                        <CheckCircleIcon color="primary" fontSize="small" />
                    </span>
                    &nbsp;
                    <small className="text-secondary">{username}</small>
                    <br />
                    <small className="text-secondary">{createdAt}</small>
                </div>
                <div className="ml-auto d-flex align-items-center justify-content-between">
                    <div className="option__btn">
                        <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            style={{ border: "px", outline: "none" }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem
                                id={_id}
                                onClick={handleClose}
                                name="delete"
                            >
                                Delete
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="capson__div pl-5 m-2">
                <p>{caption}</p>
            </div>
            {postImg ? (
                <div className="post__image m-2 pl-5">
                    <img
                        src={postImg}
                        className="img-thumbnail img-fluid"
                        alt="profile_pic"
                    ></img>
                    <Social />
                </div>
            ) : (
                <Social />
            )}
            <hr />
        </div>
    );
}
