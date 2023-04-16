import L from 'leaflet';
import { Marker } from 'react-leaflet';

import OrgPopup from './OrgPopup';
import { OrgInfo } from '../common/types';

const ICON_URL = require('../assets/map-marker-icon.png');

const CUSTOM_MARKER_ICON = new L.Icon({
  iconUrl: ICON_URL,
  iconRetinaUrl: ICON_URL,
  iconAnchor: [15, 46],   // [x, y] here should be [0.5x, 1x] the iconSize (to set the anchor to the tip of the map marker)
  popupAnchor: [0, -16],
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(30, 46),
});

function MapMarker({ orgInfo }: { orgInfo: OrgInfo }) {

  return (
    <Marker icon={CUSTOM_MARKER_ICON} position={[orgInfo.markerLat, orgInfo.markerLong]} >
      <OrgPopup orgInfo={orgInfo}/>
    </Marker>
  );
}

export default MapMarker;
