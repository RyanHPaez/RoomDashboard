import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


function Navigation() {
  return (
    <div className="top">
      <div className="navigation">
      <Grid container spacing={2}>
      <Grid item xs={2} md={4.5}></Grid>
      <Grid item xs={7} md={5}>
        <p>Room DashBoard</p>
        </Grid>
        <Grid item xs={3} md={1.75} container justifyContent="flex-end">
        <Button id="AN"
         
              variant="contained"              
              style={{ borderRadius: 60 }}             
            >             
              AN
            </Button>
        </Grid>
        </Grid>
      </div>
      <div className="navButons">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button style={{ backgroundColor: 'transparent' }}>
              <NavLink className="nav-link" to="/Home">
                <i className="NavItems" style={{ fontSize: "15px" }}>
                  Home
                </i>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={3}>
            <Button  style={{ backgroundColor: 'transparent' }}>
              <NavLink className="nav-link" to="/Room2">
                <i className="NavItems" style={{ fontSize: "15px" }}>
                  API DATA
                </i>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={1}>
            <Button  style={{ backgroundColor: 'transparent' }}>
              <NavLink className="nav-link" to="/Room3">
                <i className="NavItems" style={{ fontSize: "15px" }}>
                  Room 3
                </i>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Navigation;
