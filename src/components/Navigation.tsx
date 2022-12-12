import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Navigation() {
  return (
    <div className="top">
      <div className="navigation">
        <h1>Room DashBoard</h1>
      </div>
      <div className="navButons">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Button color="success" style={{ borderRadius: 50 }}>
              <NavLink className="nav-link" to="/Home">
                <i className="NavItems" style={{ fontSize: "15px" }}>
                  Home
                </i>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={3}>
            <Button color="success" style={{ borderRadius: 50 }}>
              <NavLink className="nav-link" to="/Room2">
                <i className="NavItems" style={{ fontSize: "15px" }}>
                  API DATA
                </i>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs={3} md={1}>
            <Button color="success" style={{ borderRadius: 50 }}>
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
