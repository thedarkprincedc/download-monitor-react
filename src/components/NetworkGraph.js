import React, {Component} from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({
    root: {
      width: '100%',
      height: '100%',
    },
  });

class NetworkGraph extends Component{
    constructor (props) {
        super(props);
        const now = Date.now();
        this.state = {
            data1: [[0, 0], [30,30],[40,30]],
            data2: null,
            liveUpdate: false
          };
    }

    componentDidMount(){
        (function pollServerForData(state){
          
            var x = state.data1[state.data1.length-1];
            debugger;
            state.data1.push([x + 40,30])
            setTimeout(pollServerForData, 1000)
        })(this.state);
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
              <YAxis.Title>Download/Upload (MB/s)</YAxis.Title>
              <LineSeries id="p1" name="Sensor 1" data={data1} />
              <LineSeries id="p2" name="Sensor 2" data={data2} />
            </YAxis>
          </HighchartsChart>);
    }
}
let r = withStyles(styles)(NetworkGraph);
export default withHighcharts(r,Highcharts);