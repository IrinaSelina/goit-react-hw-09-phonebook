import React from "react";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/auth/auth-selectors";
import operations from "../../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const UserMenu = () => {
  const email = useSelector(selectors.getEmail);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(operations.logOut());
  };
  return (
    <div>
      <span>Welcome, {email}</span>
      <Button onClick={logOut} type="button">
        <ExitToAppIcon />
      </Button>
    </div>
  );
};

export default UserMenu;
