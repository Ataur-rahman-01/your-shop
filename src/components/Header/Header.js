import React, { useContext } from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const [user, setUser] = useContext(userContext);
  const classes = useStyles();
  return (
    <div className="img">
      <div className={classes.root}>
        <AppBar color="transparent" position="relative">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              April Product
            </Typography>
            <Typography className="gap">
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <li>Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/admin"}>
                <li>Admin</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/order"}>
                <li>Order</li>
              </Link>
            </Typography>

            <Button className="btn" variant="contained" color="primary">
              {user && user.displayName ? (
                <h6>{user.displayName}</h6>
              ) : (
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={"/login"}
                >
                  Log in
                </Link>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
