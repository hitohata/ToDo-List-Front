import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
        },
    }),
);


const TopPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <p>hogehoge</p>
        </div>
    )
}

export default TopPage
