import { Marker } from 'react-leaflet';

import OrgPopup from './OrgPopup';
import { OrgInfo } from '../common/types';

function MapMarker({ orgInfo }: { orgInfo: OrgInfo }) {

  return (
    <Marker position={[orgInfo.markerLat, orgInfo.markerLong]}>
      <OrgPopup orgInfo={orgInfo} />
    </Marker>
  );
}

export default MapMarker;
