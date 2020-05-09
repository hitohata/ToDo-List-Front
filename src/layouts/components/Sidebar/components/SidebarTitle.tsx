import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "fit-content",
    },
    title: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      fontFamily: "Times New Roman",
    },
    subtitle: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      fontFamily: "Times New Roman",
    },
  }),
);

const SidebarTitle: React.SFC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={ classes.title } variant="h4">
        Todo List
      </Typography>
      <Typography className={ classes.subtitle } variant="body2">
        v 0.0.3
      </Typography>
    </div>
  );
};

export default SidebarTitle;
