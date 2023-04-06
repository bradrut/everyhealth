import React from 'react';
import { Marker } from 'react-leaflet';

import OrgPopup from './OrgPopup';
import { OrgInfo } from '../common/types';

interface MapMarkerProps {
  positionLat: number;
  positionLong: number;
  orgInfo: OrgInfo;
}

function MapMarker(props: MapMarkerProps) {

  return (
    <Marker position={[props.positionLat, props.positionLong]}>
      <OrgPopup orgInfo={props.orgInfo} />
    </Marker>
  );
}

export default MapMarker;
