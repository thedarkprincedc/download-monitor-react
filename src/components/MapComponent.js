import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class MapComponent extends Component{
    render(){
        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1IjoiYm1vc2xleSIsImEiOiJjamdrN29vM3YwamExMzNxamNmZTV6ajNmIn0.xrkM2YhRcDknotxjCgb7dQ"
          });
    return (<Map style="mapbox://styles/mapbox/streets-v9" 
                containerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                zoom={["0"]} >
      <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
    </Map>);
    }
}
export default MapComponent;

