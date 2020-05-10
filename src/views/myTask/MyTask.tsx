import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { myTask } from "dev-data/myTask";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

const MyTask: React.FC = () => {
    const classes = useStyles();

    const [panels, setPanels] = useState<boolean[] | undefined>(undefined)

    useEffect(() => {
        const taskLength = myTask.length
        setPanels(new Array(taskLength).fill(false))
    }, [setPanels])

    return (
        <div className={ classes.root }>
            { typeof panels !== "undefined"
                ? myTask.map((el, index) => (
                    <ExpansionPanel disabled={ panels[index]
                        ? true
                        : false } >
                        <ExpansionPanelSummary
                            expandIcon={ <ExpandMoreIcon /> }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={ classes.heading }>Task: { el.title }</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Detail: { el.detail }
                            </Typography>
                        </ExpansionPanelDetails>
                    </ ExpansionPanel>
                ))
                : <p>no task</p>
            }
        </div >
    )
}

export default MyTask
