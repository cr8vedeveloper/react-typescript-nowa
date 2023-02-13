import React from "react";
import { Card, Col, Row,Breadcrumb } from "react-bootstrap";
import {
  MapContainer, TileLayer, Popup, CircleMarker, Polyline, Rectangle, Polygon, Circle
} from "react-leaflet";
const LeafletMaps = () =>{
  const position: any = [51.505, -0.09];
  const redOptions: any = { color: "red" };
  const center: any = [51.51, -0.12];
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const polyline:any = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const multiPolyline:any = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];
  
  const polygon:any = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];
  
  const multiPolygon:any = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];
  
  const rectangle:any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          LEAFLET MAPS
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Maps
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Leaflet maps
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Basic</div>
            <p className="mg-b-20">A default map style by Leaflet Maps.</p>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='mapleaflet ht-300' id="leaflet1" style={{ height: "300px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">With Popup</div>
            <p className="mg-b-20">
              Popups are usually used when you want to attach some information
              to a map.
            </p>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="ht-200 ht-sm-300 ht-md-400" id="leaflet3" style={{height:"300px"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </MapContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Map with circle</div>
            <p className="mg-b-20">
              Adding a circle is the same (except for specifying the radius in
              meters as a second argument), but lets you control how it looks by
              passing options as the last argument when creating the object.
            </p>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="ht-300" id="leaflet2" style={{ height: "300px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >

        <Popup >Popup in CircleMarker</Popup>
     
      </CircleMarker>
    </MapContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </div>
);}

LeafletMaps.propTypes = {};

LeafletMaps.defaultProps = {};

export default LeafletMaps;
