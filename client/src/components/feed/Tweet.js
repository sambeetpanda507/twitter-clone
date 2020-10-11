import React, { useState, useEffect } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import ImageIcon from "@material-ui/icons/Image";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import EventIcon from "@material-ui/icons/Event";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText,
    Drawer,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import NavData from "../navigation/navLinkData";
import InfoIcon from "@material-ui/icons/Info";
import { storage, firebase } from "../../firebase";

const useStyles = makeStyles((theme) => ({
    leftRightDiv: {
        height: "100vh",
        borderRight: "3px solid lightgrey",
        overflowY: "auto",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Tweet(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const [tweetText, setTweetText] = useState("");
    const [tweetImg, setTweetImg] = useState(null);

    const [covidData, setcovidData] = useState(null);
    const [inputLenght, setinputLenght] = useState(0);

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setcovidData(data.statewise);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const toggleDrawerSwipe = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    //  /////////////////////////////////////||||||||||||||||||\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // const tweetImgHandler=(e)=>{
    //    set
    // }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ListItem button key="more">
                <ListItemIcon className="list__icon">
                    <i className="fab fa-twitter fa-2x text-primary"></i>
                </ListItemIcon>
            </ListItem>
            <List>
                {NavData.map((value, index, arr) => {
                    return (
                        <ListItem button key={value.linkText}>
                            <ListItemIcon className="list__icon">
                                <i className={value.iconClass}></i>
                            </ListItemIcon>
                            <ListItemText primary={value.linkText} />
                        </ListItem>
                    );
                })}
                <ListItem button key="more">
                    <ListItemIcon className="list__icon">
                        <i className="fas fa-ellipsis-h fa-2x"></i>
                    </ListItemIcon>
                    <ListItemText primary="More" />
                </ListItem>
                <Divider />
                <div className="p-2">
                    <Button
                        style={{
                            borderRadius: "25px",
                        }}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Tweet
                    </Button>
                </div>
                <div className="user__div d-flex align-items-center mt-2">
                    <img
                        src="https://picsum.photos/200"
                        height="35px"
                        style={{ borderRadius: "50%" }}
                        alt="profile_pic"
                    ></img>
                    <div className="profile__name ml-2">
                        <h6 className="font-weight-bolder">test test test</h6>
                        <h6
                            className="text-secondary"
                            style={{ lineHeight: "0px" }}
                        >
                            @test
                        </h6>
                    </div>

                    <i
                        className="fas fa-chevron-down ml-auto mr-1 text-center btn-floating waves-effect waves-dark text-dark"
                        style={{ backgroundColor: "#ffff" }}
                    ></i>
                </div>
            </List>
        </div>
    );

    const info = (anchor) => (
        <div className="container mt-2">
            <form className={classes.root} noValidate autoComplete="off">
                <div className="mt-2">
                    <TextField
                        id="outlined-search"
                        label="Twitter Search"
                        type="search"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div className="news__div mt-2">
                    <h4 className="text-center mb-2">India's Covid Count</h4>
                    {covidData
                        ? covidData.map((data, index) => {
                              return (
                                  <Accordion key={index}>
                                      <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                      >
                                          <Typography
                                              className={classes.heading}
                                          >
                                              <b>
                                                  {covidData ? data.state : ""}
                                              </b>
                                          </Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                          <div>
                                              <p>
                                                  <small>
                                                      Active :{" "}
                                                      {covidData
                                                          ? data.active
                                                          : ""}
                                                  </small>
                                              </p>
                                              <p>
                                                  <small>
                                                      Confirmed :
                                                      {covidData
                                                          ? data.confirmed
                                                          : ""}
                                                  </small>
                                              </p>
                                              <p>
                                                  <small>
                                                      Deaths :{" "}
                                                      {covidData
                                                          ? data.deaths
                                                          : ""}
                                                  </small>
                                              </p>
                                              <p>
                                                  <small>
                                                      Recovered :{" "}
                                                      {covidData
                                                          ? data.recovered
                                                          : ""}
                                                  </small>
                                              </p>
                                              <p>
                                                  <small>
                                                      Last updated time :{" "}
                                                      {covidData
                                                          ? data.lastupdatedtime
                                                          : ""}
                                                  </small>
                                              </p>
                                          </div>
                                      </AccordionDetails>
                                  </Accordion>
                              );
                          })
                        : ""}
                </div>
            </form>
        </div>
    );

    const postTweet = () => {
        if (tweetImg) {
            uploadFile();
        } else {
            const formData = new FormData();
            formData.append("displayName", "test Test");
            formData.append("username", "@test");
            formData.append("caption", tweetText);
            fetch("http://localhost:8080/tweet", {
                method: "POST",
                body: formData,
            })
                .then((res) => {
                    return res.json();
                })
                .then((resData) => {
                    props.tweetData(resData.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    // initiate firebase storage
    const uploadFile = () => {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef
            .child(`tweets/${tweetImg.name}`)
            .put(tweetImg);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log("Upload is paused");
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log("Upload is running");
                        break;
                    default:
                        console.log("something went wrong");
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                    console.log("File available at", downloadUrl);
                    const formData = new FormData();
                    formData.append("displayName", "test Test");
                    formData.append("username", "@test");
                    formData.append("postImg", downloadUrl);
                    formData.append("caption", tweetText);
                    fetch("http://localhost:8080/tweet", {
                        method: "POST",
                        body: formData,
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((resData) => {
                            props.tweetData(resData.result);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            }
        );
    };

    const tweetHandler = (event) => {
        //   setTweetText("");
        //   setTweetImg(null);
        //   setinputLenght(0);
        if (inputLenght > 0) {
            postTweet();
        } else {
            alert("Your tweet is empty");
        }
    };

    return (
        <div className="tweet__div p-3">
            {/* test */}
            <div className="d-flex">
                <div className="d-lg-none d-xl-none d-sm-block d-block">
                    {["left"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <MenuIcon
                                className="menu__icon"
                                onClick={toggleDrawer(anchor, true)}
                            />

                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>

                <div className="ml-auto d-lg-none d-xl-none d-sm-block d-block">
                    {["right"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <InfoIcon
                                className="menu__icon"
                                onClick={toggleDrawer(anchor, true)}
                            />

                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawerSwipe(anchor, false)}
                                onOpen={toggleDrawerSwipe(anchor, true)}
                            >
                                {info(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {/* test */}
            <div className="d-flex align-items-center justify-content-between pt-2">
                <h4 className="font-weight-bold">Home</h4>
                <StarBorderIcon color="primary" />
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-around">
                <div className="image__div">
                    <img
                        src="https://picsum.photos/200"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                        alt="profile_pic"
                    ></img>
                </div>
                <TextField
                    id="standard-textarea"
                    label="What's happening?"
                    multiline
                    fullWidth
                    className="ml-3 font-weight-bold"
                    spellCheck
                    inputProps={{ maxLength: 200 }}
                    value={tweetText}
                    onChange={(e) => {
                        setinputLenght(e.target.value.length);
                        setTweetText(e.target.value);
                    }}
                />
                <br />
            </div>
            <div className="text-right">
                <small className="text-secondary">{inputLenght} / 200</small>
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12 ">
                        <div
                            className="icon__div pl-5 d-flex"
                            style={{ width: "inherit" }}
                        >
                            <form
                                autoComplete="off"
                                noValidate
                                encType="multipart/form-data"
                            >
                                <label htmlFor="feedImage">
                                    <ImageIcon
                                        color="action"
                                        fontSize="large"
                                        className="feed__icons"
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="feedImage"
                                    name="feedImage"
                                    className="d-none"
                                    onChange={(e) => {
                                        setTweetImg(e.target.files[0]);
                                    }}
                                />
                            </form>
                            <EqualizerIcon
                                color="action"
                                fontSize="large"
                                className="feed__icons"
                            />
                            <InsertEmoticonIcon
                                color="action"
                                fontSize="large"
                                className="feed__icons"
                            />
                            <EventIcon
                                color="action"
                                fontSize="large"
                                className="feed__icons"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="btn__div text-right">
                            <Button
                                style={{ borderRadius: "23px" }}
                                variant="contained"
                                color="primary"
                                onClick={tweetHandler}
                            >
                                Tweet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
