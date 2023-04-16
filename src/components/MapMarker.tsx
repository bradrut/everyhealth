import L from 'leaflet';
import { Marker } from 'react-leaflet';

import OrgPopup from './OrgPopup';
import { OrgInfo } from '../common/types';

const ICON_URL = require('../assets/map-marker-icon.png');

const CUSTOM_MARKER_ICON = new L.Icon({
  iconUrl: ICON_URL,
  iconRetinaUrl: ICON_URL,
  iconAnchor: undefined,
  popupAnchor: [0, -16],
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(30, 46),
  // className: 'leaflet-div-icon'
});

function MapMarker({ orgInfo }: { orgInfo: OrgInfo }) {

  return (
    <Marker icon={CUSTOM_MARKER_ICON} position={[orgInfo.markerLat, orgInfo.markerLong]} >
      <OrgPopup orgInfo={orgInfo}/>
    </Marker>
  );
}

export default MapMarker;
