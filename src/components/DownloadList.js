import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import { connect } from "react-redux";
import { addDownload } from "../actions/index";

import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: "green"
  },
  completed: {
    color: 'green'
  }
});
const iconStyles = {
  marginRight: 24,
};

const mapStateToProps = state => {
  return { downloads: state.downloads.list };
};

class DownloadList extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      items: []
    }
  }
  componentDidMount(){

  }
  handleItemClick(event){
    //alert("item was clicked");
    //event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return ( 
      <div className={classes.root}> 
      { !this.state.show && <p class='error'>Error: Could not find any downloads</p>}
      <List>
        {
          this.props.downloads.map((item, index) => 
            <ListItem dense button key={index} onClick={this.handleItemClick} divider>
              <ListItemText primary={item.name} secondary={item.data.total} />
              <h3>{item.data.progress}%</h3>
            </ListItem>
          )
        }
      </List>
    </div>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps)(DownloadList));