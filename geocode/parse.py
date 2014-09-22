import csv


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

success = list()
with open('data/successes.txt', 'r') as f:
    success = f.readlines()

crimes = read_csv('data/crime_incidents_2013_CSV.csv')
header = crimes.pop(0)

result = list()
for i, s in enumerate(success):
    strs = s.split(' ')
    result.append([strs[1], strs[2]])

write_csv(result, 'geocoded')
