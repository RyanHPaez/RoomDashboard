import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function Room2(props: any) {
  const { data } = props;
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div className="Paper">
      <Grid container spacing={2}>
        <Grid item xs={3} md={2} sm container>
          <Typography variant="subtitle1" component="div">
            <div className="menuicon">
              <a href={""}>
                <Img
                  id="Icon"
                  alt="menubutton"
                  src={require("../images/icon.png")}
                />
              </a>
            </div>
          </Typography>
        </Grid>

        <Grid item xs={6} md={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <div className="roomInfo">
              <Grid item xs>
                <Typography variant="subtitle1">
                  <h4>{data.roomInfo[0].room[0].roomName}</h4>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.roomInfo[0].group[0].groupName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.roomInfo[0].hotel[0].hotelName}-
                  {data.roomInfo[0].room[0].roomType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      {data.roomInfo[0].room[0].travelStartDate}-
                      {data.roomInfo[0].room[0].travelEndDate}
                    </Typography>
                  </Grid>
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={3} md={2} sm container>
          <Typography variant="body2" component="div">
            <div className="menuicon">
              <a href={""}>
                <Img
                  id="menuIcon"
                  alt="menubutton"
                  src={require("../images/vertmenu.png")}
                />
              </a>
            </div>
          </Typography>
        </Grid>

        <Grid item xs={11} md={11} sm container>
          <div className="resortImg">
            <Img
              id="resortIcon"
              alt="resort"
              src={require("../images/resort.jpg")}
            />
          </div>
        </Grid>
      </Grid>

      <div className="buttons">
        <Grid container spacing={2}>
          <Grid item xs={4} md={1}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            ><i className="fa-solid fa-check"></i>
              {data.roomInfo[0].room[0].roomStatus}
            </Button>
          </Grid>

          <Grid item xs={4} md={2}>
            <Button
              style={{ borderRadius: 50 }}
              variant="outlined"
              color="secondary"
            ><i className="fa-solid fa-dollar-sign"></i>
              Balance Due - ${data.roomInfo[0].room[0].remainingBalance}
            </Button>
          </Grid>
          <Grid item xs={4} md={8}></Grid>
        </Grid>
      </div>

      <div className="divider">
        <Divider variant="middle" />
      </div>
      <div className="Guests" style={{ fontSize: "12px" }}>
        <h1>Guests in this Room</h1>
        <Grid container spacing={2}>
          <Grid item xs={4} md={1}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            ><i className="fa-solid fa-user">-</i>
              Adult 1
            </Button>
          </Grid>
          <Grid item xs={4} md={1}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            ><i className="fa-solid fa-user">-</i>
              Adult 2
            </Button>
          </Grid>
          <Grid item xs={4} md={1}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            >             
             <i className="fa-solid fa-child">-</i>Child 1
            </Button>
          </Grid>
          <Grid item xs={1} md={8}></Grid>
        </Grid>
      </div>

      <div className="divider">
        <Divider variant="middle" />
      </div>
      <div className="Extras" style={{ fontSize: "12px" }}>
        <h1>Room Extras</h1>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button
              variant="outlined"
              color="success"
              style={{ borderRadius: 50 }}
            >
              Transfer Purchased
            </Button>
          </Grid>
          <Grid item xs={9} md={8}></Grid>
        </Grid>
      </div>
      <div className="divider">
        <Divider variant="middle" />
      </div>

      <div className="Cancel">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button
              variant="contained"
              color="error"
              style={{ borderRadius: 50 }}
            >
              Cancel Room
            </Button>
          </Grid>
          <Grid item xs={9} md={8}></Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Room2;
