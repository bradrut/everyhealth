import React from 'react';

import { Popup } from 'react-leaflet';

import { OrgInfo } from '../common/types';

function OrgPopup({ orgInfo }: { orgInfo: OrgInfo }) {

  // TODO: Make url a hyperlink when rendered
  // TODO: Styling

  return (
    <Popup>
      <h3>{orgInfo.name}</h3>
      <p>location-placeholder</p>
      <p>{orgInfo.url}</p>
    </Popup>
  );
}

export default OrgPopup;
