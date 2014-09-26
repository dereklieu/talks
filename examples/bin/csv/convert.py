import csv
import json

def read_csv(filename):
    data = []
    with open(filename, 'rU') as f:
        f = csv.reader(f)
        for row in f:
            data.append(row)

    return data

def write_csv(data, filename):
    with open(filename, 'wb') as f:
        writer = csv.writer(f)
        writer.writerows(data)

def write_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f)


raw = read_csv('2014_chicago_crime.csv')
headers = raw.pop(0)

community_area = headers.index('Community Area')
crime_type = headers.index('Primary Type')

parsed = dict()
for row in raw:
  area = row[community_area]
  crime = row[crime_type].lower()
  try:
    area = int(area)
  except:
    continue

  if not area in parsed:
    parsed[area] = dict()
    parsed[area]['total'] = 0

  if not crime in parsed[area]:
    parsed[area][crime] = 0

  parsed[area][crime] += 1
  parsed[area]['total'] += 1

result = list()
new_header = ['Community Area', 'crimes']
result.append(new_header)

for area_number, crimes in parsed.items():
  row = [area_number, crimes['total']]
  result.append(row)

write_csv(result, '2014_aggregate_chicago_crime.csv')
