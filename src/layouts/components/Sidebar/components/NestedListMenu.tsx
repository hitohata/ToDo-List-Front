import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Collapse, List, ListItem, Button, colors } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

interface INestItem {
  nestDesplay: string;
  linkAddr: string;
}

interface IProps {
  mainDisplayLetter: string;
  nest: INestItem[];
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
      textAlign: "left",
      width: "100%",
      fontWeight: theme.typography.fontWeightMedium,
    },
    nestedButton: {
      color: colors.blueGrey[800],
      paddingLeft: theme.spacing(2),
      padding: "10px 8px",
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      textAlign: "left",
      width: "100%",
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
);

const NestedListMenu: React.FC<IProps> = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem disableGutters className={classes.item} onClick={handleClick}>
        <Button className={classes.button}>
          <ListItemText primary={props.mainDisplayLetter} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.nest.map(data => (
            <ListItem disableGutters key={data.nestDesplay}>
              <Button
                className={classes.nestedButton}
                component={Link}
                to={`/one/${data.linkAddr}`}
              >
                <ListItemText primary={data.nestDesplay} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default NestedListMenu;
