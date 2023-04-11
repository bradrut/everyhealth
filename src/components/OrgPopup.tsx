import React from 'react';

import { Popup } from 'react-leaflet';

import { OrgInfo } from '../common/types';
import './OrgPopup.css';

function OrgPopup({ orgInfo }: { orgInfo: OrgInfo }) {

  // TODO: Make url a hyperlink when rendered
  // TODO: Styling

  return (
    <Popup>
      <h3 className='orgNameText'>{orgInfo.orgName}</h3>
      <p className='locationText'>{orgInfo.cityAndState}</p>
      <a href={orgInfo.url} target="_blank" rel="noopener noreferrer">Clinic Website</a>
    </Popup>
  );
}

export default OrgPopup;
