import { MapContainer, TileLayer } from 'react-leaflet';

import MapMarker from './MapMarker';
import './Map.css';
import { OrgInfo } from '../common/types';

interface MapProps {
  centerLat?: number;
  centerLong?: number;
  zoom?: number;
  scrollWheelZoom?: boolean;
  orgData?: OrgInfo[] | undefined;
}

function Map({ centerLat=37.0902, centerLong=-95.7129, zoom=4, scrollWheelZoom=true, orgData=undefined }: MapProps) {

  // TODO: Render multiple MapMarkers dynamically below

  return (
    <MapContainer id='trainingClinicsMap' center={[centerLat, centerLong]} zoom={zoom} scrollWheelZoom={scrollWheelZoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map marker icons generated with <a href="https://www.geoapify.com/">Geoapify</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      {/* <MapMarker positionLat={37.0902} positionLong={-95.7129} orgInfo={{ name: 'Test Clinic', url: 'https://testClinicWebsite.com/' }}/> */}
      <>
        {orgData?.map(data => (
          <MapMarker key={data.orgName + '; ' + data.markerLat} orgInfo={data}/>
        ))}
      </>
    </MapContainer>
  );
}

export default Map;
