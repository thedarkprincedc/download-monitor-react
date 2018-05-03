import React, {Component} from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, LineSeries,AreaSeries
} from 'react-jsx-highcharts';
import { withStyles } from 'material-ui/styles';
import { connect } from "react-redux";
const styles = theme => ({
    root: {
      width: '100%',
      height: '100%',
    },
  });
const mapStateToProps = state => {
    return { network: state.root.network };
};
class NetworkGraph extends Component{
    constructor (props) {
        super(props);
        const now = Date.now();
        this.state = {
            data1: [0],
            data2: null,
            liveUpdate: true
          };
        for (let index = 0; index < 150; index++) {
            this.state.data1.push(0);
        }
    }
    componentDidMount(){
     
        this.fetchData();
    }
    fetchData(){
        this.setState({
            data1:  this.getDataPoint()
        });     
        setTimeout(this.fetchData.bind(this), 3000)
    }
    getDataPoint(){
        var distance = (this.state.data1.length > 150)?(this.state.data1.length - 150):0;
        const newData = this.state.data1.slice(distance);
        newData.push(Math.random() * (200 - 0) + 0);
        return newData;
    }
    render(){
        const { classes } = this.props;
        const { data1, data2 } = this.state;
        return (<HighchartsChart className={classes.root}>
            <Chart />
            {/* <Title>Dynamically updating data</Title> */}
            {/* <Legend>
              <Legend.Title>Legend</Legend.Title>
            </Legend> */}
            <XAxis type="datetime">
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>
            <YAxis id="pressure">
              <YAxis.Title>Download / Upload (MB/s)</YAxis.Title>
              <AreaSeries id="p1" name="Sensor 1" data={data1} />
              <LineSeries id="p2" name="Sensor 2" data={data2} />
            </YAxis>
          </HighchartsChart>);
    }
}

export default withStyles(styles)(connect(mapStateToProps)(withHighcharts(NetworkGraph,Highcharts)));
