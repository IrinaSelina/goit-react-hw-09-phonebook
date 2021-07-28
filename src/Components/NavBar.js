import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import selectors from "../redux/auth/auth-selectors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    justifyContent: "space-between",
  },
}));

// const AppBar = ({ isAuthenticated }) => (
//   <header>
//     <Navigation />
//     {isAuthenticated ? <UserMenu /> : <AuthNav />}
//   </header>
// );
// const mapStateToProps = (state) => ({
//   isAuthenticated: selectors.isAuthenticated(state),
// });
// AppBar.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };
const NavBar = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menu} color="white">
          <Navigation color="inherit" />
          {isAuthenticated ? (
            <UserMenu color="inherit" />
          ) : (
            <AuthNav color="inherit" />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   isAuthenticated: selectors.isAuthenticated(state),
// });
// NavBar.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };
export default NavBar;
