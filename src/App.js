import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	list: {
	  width: 250
	},
	fullList: {
	  width: "auto"
	}
  });

function App() {
	const classes = useStyles();
	const [state, setState] = React.useState({
	  right: false
	});
  
	const position = [45.4, -75.7];

	const toggleDrawer = (anchor, open) => (event) => {
		if (
		  event.type === "keydown" &&
		  (event.key === "Tab" || event.key === "Shift")
		) {
		  return;
		}
	
		setState({ ...state, [anchor]: open });
	  };
	  
	    const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      Hello world
    </div>
  );



	return (
		<div className="container-flex">
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
		{['right'].map((anchor) => (
			<React.Fragment key={anchor}>
			<Button onClick={toggleDrawer(anchor, true)} style={{display:'flex', justifyContent:'center'}}>{anchor}</Button>
			<Drawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
			>
				{list(anchor)}
			</Drawer>
			</React.Fragment>
		))}
			</MapContainer>
		</div>
	);
}

export default App;
