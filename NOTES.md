Notes for Mapping in Tilemill
-----------------------------

### In the beginning, there was open mapping server

[Mapserver.org](http://mapserver.org/)

I made my first online mapping project when I worked at the Chronicle of Philanthropy, and it was this big project called How America Gives which we were doing for the first time with some pretty complex data. And we had never ever made an online map before, besides putting some points onto a Google map for like a college humanities class. This was in 2012, and the story published on my birthday, August 19th, same birthday as Bill Clinton.

So when we first made this map we had never used Mapbox.com, had never used Tilemill, had never used Leaflet.js, but we were determined and plucky and a little dumb so we decided to roll our own mapping server and bake out a bunch of tiles and we basically worked day and night for three months. Afterwards my employers gave me a raise because I was 25 and I think they just felt bad for me.

And of course, Josh and his team put out a new version of that project this year and they did it much better than we did. But this is 2014, and that was 2012. Lot has changed in 2 years.

### Before all this there was OSM

[OpenStreetMap.org](http://www.openstreetmap.org/)

OSM is one of those slow-moving success stories where when it first came to pass it was a dozen or so Europeans with a weird hobby, and now it has data on the entire planet Earth. I think it is important to know where things come from, and if you arent mapping with Google or Bing or something like that, then you are mapping with OSM. If you have used FourSquare, which uses Mapbox, which uses OSM, then you have used OSM.

### Stamen made some cool maps

[Cool maps](http://maps.stamen.com/#watercolor/10/38.8269/-76.9462)

I went back to the very first commit on the Stamen toner map Github page, and it read [March 15, 2011](https://github.com/Citytracking/toner/commits/master?page=9), which is actually around the same time that Mapbox.com became a real thing. Stamen did not use Mapbox.com to make toner or watercolor, they did it the OG way with mapnik stylesheets and natural earth data for land boundaries and OSM data for roads and bash scripts. Those tools are all still around today, and they are all better than they were in 2014, but thank god we dont need to use them to make maps.

When I saw those Stamen maps I wondered if I would ever make a map that nice, and man what did that take.

### D3 made some cool maps

[D3.v3.js changelog](https://github.com/mbostock/d3/wiki/Upgrading-to-3.0)

In D3 SVG land, far removed from Tilemill 256x256 tile pngs, version 3 dropped at the end of 2012. This was the release that added d3.geo, which introduced a whole new world of SVG mapping that did not require a backend server to serve tiles, or a service like Mapbox to host them. 2012 really was a renaissance for mapping, but we are only really realizing it now.

### Modern Day Cartographer


