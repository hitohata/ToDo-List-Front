import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ListItem, Button, colors } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

interface IProps {
  displayLetter: string;
  linkAddr: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      display: "flex",
      paddingTop: 0,
      paddingBottom: 0,
    },
    button: {
      color: colors.blueGrey[800],
      padding: "10px 8px",
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      width: "100%",
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
);

const ListMenu: React.FC<IProps> = props => {
  const classes = useStyles();

  return (
    <ListItem disableGutters className={ classes.item }>
      <Button
        className={ classes.button }
        component={ Link }
        to={ `/${props.linkAddr}` }
      >
        <ListItemText primary={ props.displayLetter } />
      </Button>
    </ListItem>
  );
};

export default ListMenu;
