import csv

def combine_line(line):
  str = ''
  for entry in line:
    str = str + entry
  return str
 
# opening the CSV file
with open('../aptc-training-clinics.csv', mode ='r')as inputFile:
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
      outputFile.write("  {\n    ");
      outputFile.write("name: '" + combine_line(line) + "',\n    ")
    
    if recordLineIndex == 1:
      outputFile.write("director: '" + combine_line(line) + "',\n    ")

    if recordLineIndex == 2:

      outputFile.write("markerLat: " + line[0] + ',\n    ')
      outputFile.write("markerLong: " + line[1].strip() + ',\n    ')
    
    if recordLineIndex == 3:
      outputFile.write("url: '" + combine_line(line) + "'\n  },\n")

    recordLineIndex = recordLineIndex + 1
  
  outputFile.write("]")
  outputFile.close()
