import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";

const useStyles = makeStyles((theme) => ({
   root: {
      "& .MuiTextField-root": {
         margin: theme.spacing(1),
         width: "25ch",
      },
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));

export default function News() {
   const [covidData, setcovidData] = useState(null);
   const classes = useStyles();

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

   return (
      <div
         className="col-md-3 col-lg-3 d-md-none d-lg-block d-sm-none d-none"
         style={{
            borderLeft: "3px solid lightgray",
         }}
      >
         <form className={classes.root} noValidate autoComplete="off">
            <div className="mt-2">
               <TextField
                  id="outlined-search"
                  label="Twitter Search"
                  type="search"
                  fullWidth
                  variant="outlined"
               />
            </div>
         </form>
         <div className="news__div">
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
                             <Typography className={classes.heading}>
                                <b>{covidData ? data.state : ""}</b>
                             </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                             {/* <Typography> */}
                             <div>
                                <p>
                                   <small>
                                      Active : {covidData ? data.active : ""}
                                   </small>
                                </p>
                                <p>
                                   <small>
                                      Confirmed :
                                      {covidData ? data.confirmed : ""}
                                   </small>
                                </p>
                                <p>
                                   <small>
                                      Deaths : {covidData ? data.deaths : ""}
                                   </small>
                                </p>
                                <p>
                                   <small>
                                      Recovered :{" "}
                                      {covidData ? data.recovered : ""}
                                   </small>
                                </p>
                                <p>
                                   <small>
                                      Last updated time :{" "}
                                      {covidData ? data.lastupdatedtime : ""}
                                   </small>
                                </p>
                             </div>
                             {/* </Typography> */}
                          </AccordionDetails>
                       </Accordion>
                    );
                 })
               : ""}
         </div>
      </div>
   );
}
