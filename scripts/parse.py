import csv
from geopy.geocoders import Nominatim

def combine_line(line):
  str = ''
  for entry in line:
    str = str + entry
  return str
 
# opening the CSV file
with open('../aptc-training-clinics.csv', mode ='r')as inputFile:
  # initialize Nominatim API
  geolocator = Nominatim(user_agent="care-4-everyone")

  outputFile = open("aptcTrainingClinics.ts", "a")
  outputFile.write("export const APTC_TRAINING_CLINICS = [\n")
   
  # reading the CSV file
  parsedCsvFile = csv.reader(inputFile)

  recordLineIndex = 0
  for line in parsedCsvFile:
    if len(line) == 0:
      recordLineIndex = 0
      continue

    if recordLineIndex == 0:
      outputFile.write("  {\n    ")
      outputFile.write("orgName: '" + combine_line(line) + "',\n    ")
    
    if recordLineIndex == 1:
      outputFile.write("director: '" + combine_line(line) + "',\n    ")

    if recordLineIndex == 2:
      outputFile.write("markerLat: " + line[0] + ',\n    ')
      outputFile.write("markerLong: " + line[1].strip() + ',\n    ')

      estimatedRawAddressObj = geolocator.reverse(line[0] + "," + line[1], addressdetails=True).raw
      outputFile.write("addressObjFromGeocoordinates: " + str(estimatedRawAddressObj) + ",\n    ")
      estimatedAddressObj = estimatedRawAddressObj["address"]

      cityTownMunicipalityOrCounty = ''
      if 'city' in estimatedAddressObj:
        cityOrMunicipalityOrCounty = estimatedAddressObj["city"]
      elif 'town' in estimatedAddressObj:
        cityOrMunicipalityOrCounty = estimatedAddressObj["town"]
      elif 'municipality' in estimatedAddressObj:
        cityOrMunicipalityOrCounty = estimatedAddressObj["municipality"]
      elif 'county' in estimatedAddressObj:
        cityOrMunicipalityOrCounty = estimatedAddressObj["county"]
      else:
        print('*** No city or city alternative found ***')

      stateOrCounty = ''
      if 'state' in estimatedAddressObj:
        stateOrCounty = estimatedAddressObj["state"]
      elif 'county' in estimatedAddressObj:
        stateOrCounty = estimatedAddressObj["county"]
      else:
        print('*** No state or state alternative found ***')

      cityStateStr = cityOrMunicipalityOrCounty + ", " + stateOrCounty
      outputFile.write("cityAndState: '" + cityStateStr + "',\n    ")

    if recordLineIndex == 3:
      outputFile.write("url: '" + combine_line(line) + "'\n  },\n")

    recordLineIndex = recordLineIndex + 1
  
  outputFile.write("]")
  outputFile.close()
