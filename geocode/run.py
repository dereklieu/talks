import csv
import time
from geocode.google import GoogleGeocoderClient

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



crimes = read_csv('data/crime_incidents_2013_CSV.csv')
header = crimes.pop(0)

geocoded = list()
for crime in crimes:

    address = crime[header.index('BLOCKSITEADDRESS')] + ', WASHINGTON DC'

    try:
        geocoder = GoogleGeocoderClient(False)
        result = geocoder.geocode(address)
    except:
        continue

    if result.is_success():
        location = result.get_location()
        if len(location) == 2:
            latitude = location[0]
            longitude = location[1]

            print 'success', latitude, longitude
            crime.extend([latitude, longitude])

            geocoded.append(crime)

    time.sleep(0.5)

header.extend(['LATITUDE', 'LONGITUDE'])
write_csv([header] + geocoded, 'geocoded.csv')
