import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

function App() {
	const position = [45.4, -75.7];

	const { fullmap, setFullMap } = useState(true);

	const toogle = () => setFullMap(!fullmap);

	return (
		<div className="container-flex">
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				style={{ width: fullmap ? "70%" : "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{parkData.features.map((park) => (
					<Marker
						key={park.properties.PARK_ID}
						position={[
							park.geometry.coordinates[1],
							park.geometry.coordinates[0],
						]}
						// onClick={console.log("hello")}
					></Marker>
				))}
			</MapContainer>

			<div className="flex-2" style={{ width: fullmap ? "30%" : "0%" }}>
				<h2>location name of the marker</h2>
				<p>discription of the marker selected</p>
			</div>
		</div>
	);
}

export default App;
