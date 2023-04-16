export interface OrgInfo {
  orgName: string;  // Name of the organization that created the clinic (e.g. University of Denver)
  director?: string;
  markerLat: number;
  markerLong: number;
  addressObjFromGeocoordinates: object;  // Address object that may not be the precisely accurate street address, since it was reverse looked up using the geocoordinates
  cityAndState?: string;
  url: string;
  clinicName?: string;  // Name of the clinic itself, if applicable (e.g. Center for Child & Family Psychology)
}
