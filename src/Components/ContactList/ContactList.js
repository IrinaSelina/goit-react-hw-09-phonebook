import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import formOperations from "../../redux/form/form-operations";
import selectors from "../../redux/form/contacts-selectors";
import "./ContactList.css";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  title: {
    fontSize: 16,
    textAlign: "left",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const ContactList = () => {
  const classes = useStyles();
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(formOperations.deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Card key={id} className={classes.root}>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              className={classes.title}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              className={classes.title}
            >
              {number}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onDelete(id)}
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </ul>
  );
};

export default ContactList;
