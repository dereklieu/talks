topojson \
  -o 2014_chicago_crimes_by_ward.topojson \
  --id-property='+AREA_NUMBE,+area' \
  --external-properties=2014_aggregate_chicago_crime.csv \
  --properties='number=AREA_NUMBE' \
  --properties='name=COMMUNITY' \
  --properties='crimes=crimes' \
  --simplify-proportion=.7 \
  community_areas.geojson
