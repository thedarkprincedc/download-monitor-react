import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import DownloadList from './DownloadList'
import MapComponent from './MapComponent'
import NetworkGraph from './NetworkGraph'
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 15
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        overflowY:'scroll'
    },
    cont: {
        height: "94vh",
    },
    papera: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '25%',
        overflowY:'scroll'
    },
    paperb: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '70%',
        marginTop: "10px",
        overflowY:'scroll'
    },
});


function MainContainer(props){
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid className={classes.cont} container spacing={Number(16)}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>   
                        <DownloadList></DownloadList>
                    </Paper>      
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.papera}>
                        <NetworkGraph></NetworkGraph>
                    </Paper>
                    <Paper className={classes.paperb}>
                        <MapComponent></MapComponent>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

MainContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MainContainer);