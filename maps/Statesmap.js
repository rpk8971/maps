import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { useParams } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import andamannicobar from "./topojsons/states/andamannicobar.json";
import andhrapradesh from "./topojsons/states/andhrapradesh.json";
import arunachalpradesh from "./topojsons/states/arunachalpradesh.json";
import assam from "./topojsons/states/assam.json";
import bihar from "./topojsons/states/bihar.json";
import chhattisgarh from "./topojsons/states/chhattisgarh.json";
import delhi from "./topojsons/states/delhi.json";
import goa from "./topojsons/states/goa.json";
import gujarat from "./topojsons/states/gujarat.json";
import haryana from "./topojsons/states/haryana.json";
import himachalpradesh from "./topojsons/states/himachalpradesh.json";
import jammukashmir from "./topojsons/states/jammukashmir.json";
import jharkhand from "./topojsons/states/jharkhand.json";
import karnataka from "./topojsons/states/karnataka.json";
import kerala from "./topojsons/states/kerala.json";
import lakshadweep from "./topojsons/states/lakshadweep.json";
import madhyapradesh from "./topojsons/states/madhyapradesh.json";
import maharashtra from "./topojsons/states/maharashtra.json";
import manipur from "./topojsons/states/manipur.json";
import meghalaya from "./topojsons/states/meghalaya.json";
import mizoram from "./topojsons/states/mizoram.json";
import nagaland from "./topojsons/states/nagaland.json";
import odisha from "./topojsons/states/odisha.json";
import punjab from "./topojsons/states/punjab.json";
import rajasthan from "./topojsons/states/rajasthan.json";
import sikkim from "./topojsons/states/sikkim.json";
import tamilnadu from "./topojsons/states/tamilnadu.json";
import telangana from "./topojsons/states/telangana.json";
import tripura from "./topojsons/states/tripura.json";
import uttarakhand from "./topojsons/states/uttarakhand.json";
import uttarpradesh from "./topojsons/states/uttarpradesh.json";
import westbengal from "./topojsons/states/westbengal.json";

const Statesmap = () => {
  const [content, setContent] = useState("");

  const { ST_NM } = useParams();

  let geoURL;
  let zoomMap = 1;
  let centerMap = [80, 22];
  let scaleMap = 400;

  if (ST_NM === "Andaman & Nicobar Island") {
    geoURL = andamannicobar;
    scaleMap = 1000;
    centerMap = [93, 10];
  } else if (ST_NM === "Andhra Pradesh") {
    geoURL = andhrapradesh;
    scaleMap = 800;
    centerMap = [80, 17];
  } else if (ST_NM === "Arunachal Pradesh") {
    geoURL = arunachalpradesh;
    scaleMap = 1200;
    centerMap = [94.5, 28];
  } else if (ST_NM === "Assam") {
    geoURL = assam;
    scaleMap = 1350;
    centerMap = [92.9, 26];
  } else if (ST_NM === "Bihar") {
    geoURL = bihar;
    scaleMap = 1300;
    centerMap = [85.5, 26];
  } else if (ST_NM === "Chhattisgarh") {
    geoURL = chhattisgarh;
    scaleMap = 1100;
    centerMap = [82, 21];
  } else if (ST_NM === "NCT of Delhi") {
    geoURL = delhi;
    scaleMap = 11000;
    centerMap = [77.05, 28.6];
  } else if (ST_NM === "Goa") {
    geoURL = goa;
    scaleMap = 6000;
    centerMap = [74, 15.25];
  } else if (ST_NM === "Gujarat") {
    geoURL = gujarat;
    scaleMap = 1000;
    centerMap = [71.5, 22];
  } else if (ST_NM === "Haryana") {
    geoURL = haryana;
    scaleMap = 1700;
    centerMap = [76, 29];
  } else if (ST_NM === "Himachal Pradesh") {
    geoURL = himachalpradesh;
    scaleMap = 2000;
    centerMap = [77.4, 31.8];
  } else if (ST_NM === "Jammu & Kashmir") {
    geoURL = jammukashmir;
    scaleMap = 1000;
    centerMap = [76.3, 35];
  } else if (ST_NM === "Jharkhand") {
    geoURL = jharkhand;
    scaleMap = 1700;
    centerMap = [85.7, 23.6];
  } else if (ST_NM === "Karnataka") {
    geoURL = karnataka;
    scaleMap = 800;
    centerMap = [76.5, 15];
  } else if (ST_NM === "Kerala") {
    geoURL = kerala;
    scaleMap = 1800;
    centerMap = [76, 10.5];
  } else if (ST_NM === "Lakshadweep") {
    geoURL = lakshadweep;
    scaleMap = 2300;
    centerMap = [73, 11];
  } else if (ST_NM === "Madhya Pradesh") {
    geoURL = madhyapradesh;
    scaleMap = 900;
    centerMap = [78.5, 24];
  } else if (ST_NM === "Maharashtra") {
    geoURL = maharashtra;
    scaleMap = 1000;
    centerMap = [76.8, 19.3];
  } else if (ST_NM === "Manipur") {
    geoURL = manipur;
    scaleMap = 3400;
    centerMap = [93.8, 24.7];
  } else if (ST_NM === "Meghalaya") {
    geoURL = meghalaya;
    scaleMap = 2500;
    centerMap = [91.3, 25.4];
  } else if (ST_NM === "Mizoram") {
    geoURL = mizoram;
    scaleMap = 2900;
    centerMap = [92.8, 23.25];
  } else if (ST_NM === "Nagaland") {
    geoURL = nagaland;
    scaleMap = 4000;
    centerMap = [94.3, 26.1];
  } else if (ST_NM === "Odisha") {
    geoURL = odisha;
    scaleMap = 1300;
    centerMap = [84.4, 20.25];
  } else if (ST_NM === "Punjab") {
    geoURL = punjab;
    scaleMap = 2300;
    centerMap = [75.35, 31.1];
  } else if (ST_NM === "Rajasthan") {
    geoURL = rajasthan;
    scaleMap = 900;
    centerMap = [74, 26.3];
  } else if (ST_NM === "Sikkim") {
    geoURL = sikkim;
    scaleMap = 6000;
    centerMap = [88.45, 27.6];
  } else if (ST_NM === "Tamil Nadu") {
    geoURL = tamilnadu;
    scaleMap = 1300;
    centerMap = [78.25, 10.8];
  } else if (ST_NM === "Telangana") {
    geoURL = telangana;
    scaleMap = 1800;
    centerMap = [79.5, 17.9];
  } else if (ST_NM === "Tripura") {
    geoURL = tripura;
    scaleMap = 4500;
    centerMap = [91.75, 23.75];
  } else if (ST_NM === "Uttarakhand") {
    geoURL = uttarakhand;
    scaleMap = 2000;
    centerMap = [79.3, 30];
  } else if (ST_NM === "Uttar Pradesh") {
    geoURL = uttarpradesh;
    scaleMap = 1000;
    centerMap = [80.8, 27];
  } else if (ST_NM === "West Bengal") {
    geoURL = westbengal;
    scaleMap = 1200;
    centerMap = [87.7, 24.2];
  }
  return (
    <div>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={200}
        height={152}
        projectionConfig={{ scale: scaleMap }}
      >
        <ZoomableGroup zoom={zoomMap} center={centerMap} maxZoom={0}>
          <Geographies geography={geoURL} stroke="#1b1d39" strokeWidth="0.015">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { district } = geo.properties;
                    // console.log(centerMap, "asdad");
                    setContent(`${district}`);
                  }}
                  onMouseLeave={() => {
                    setContent("");
                  }}
                  onClick={() => {
                    // const district = geo.properties.district;
                    // console.log(district, "district");
                    // console.log(
                    //   geo.geometry.coordinates[0][0],
                    //   "sasdasdas"
                    // );
                    // const lat = geo.geometry.coordinates[0][0][0][0];
                    // const lng = geo.geometry.coordinates[0][0][0][1];
                    // localStorage.setItem("amazon_state", state);
                    // navigate(
                    //   `/citydata?lat=${centerMap[0]}&lng=${centerMap[1]}`
                    // );
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

export default Statesmap;
