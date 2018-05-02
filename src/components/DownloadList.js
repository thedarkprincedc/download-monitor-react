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
  },
  completed: {
    color: 'green'
  }
});
const iconStyles = {
  marginRight: 24,
};

const mapStateToProps = state => {
  return { downloads: state.downloads };
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
    console.log(">>", this)
  }
  handleItemClick(event){
    //alert("item was clicked");
    //event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    // className={classes.root}
//
// 
    return (
      <div >
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
const Lista = connect(mapStateToProps)(DownloadList)
export default Lista;
// const Form = connect(null, mapDispatchToProps)(DownloadList);
// export default Form;
//export default withStyles(styles)(DownloadList);