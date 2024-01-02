import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
// import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// import { makeStyles } from "@material-ui/core/styles";
import india from "./topojsons/india.json";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     marginTop: theme.spacing(2),
  //     marginBottom: theme.spacing(2),
  //     width: 111,
  //     fontSize: "12px",
  //   },
}));

const Indmap = () => {
  const history = useHistory();
  const classes = useStyles();
  const [content, setContent] = useState("");

  const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937],
  };
  return (
    <div>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={340}
        height={220}
        data-tip=""
      >
        <ZoomableGroup zoom={1} center={[80, 22]} maxZoom={0}>
          <Geographies geography={india} stroke="#1b1d39" strokeWidth="0.015">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM } = geo.properties;
                    setContent(ST_NM);
                  }}
                  onMouseLeave={() => {
                    setContent("");
                  }}
                  onClick={() => {
                    const { ST_NM } = geo.properties;
                    history.push(`/statesdata/${ST_NM}`);
                    console.log(ST_NM, "statename");
                    //   setStateName(`${ST_NM}`);
                    //   setShowDistrict(true);
                  }}
                  style={{
                    default: {
                      fill: "#ecedff",
                      outline: "none",
                    },
                    hover: {
                      fill: "#7a7db1",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#7a7db1",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Indmap;
