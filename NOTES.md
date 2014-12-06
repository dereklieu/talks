Notes for Mapping in Tilemill
-----------------------------

## In the beginning, there was open mapping server

[Mapserver.org](http://mapserver.org/)

I made my first online mapping project when I worked at the Chronicle of Philanthropy, and it was this big project called How America Gives which we were doing for the first time with some pretty complex data. And we had never ever made an online map before, besides putting some points onto a Google map for like a college humanities class. This was in 2012, and the story published on my birthday, August 19th, same birthday as Bill Clinton.

So when we first made this map we had never used Mapbox.com, had never used Tilemill, had never used Leaflet.js, but we were determined and plucky and a little dumb so we decided to roll our own mapping server and bake out a bunch of tiles and we basically worked day and night for three months. Afterwards my employers gave me a raise because I was 25 and I think they just felt bad for me.

And of course, Josh and his team put out a new version of that project this year and they did it much better than we did. But this is 2014, and that was 2012. Lot has changed in 2 years.

## Before all this there was OSM

[OpenStreetMap.org](http://www.openstreetmap.org/)

OSM is one of those slow-moving success stories where when it first came to pass it was a dozen or so Europeans with a weird hobby, and now it has data on the entire planet Earth. I think it is important to know where things come from, and if you arent mapping with Google or Bing or something like that, then you are mapping with OSM. If you have used FourSquare, which uses Mapbox, which uses OSM, then you have used OSM.

## Stamen made some cool maps

[Cool maps](http://maps.stamen.com/#watercolor/10/38.8269/-76.9462)

I went back to the very first commit on the Stamen toner map Github page, and it read [March 15, 2011](https://github.com/Citytracking/toner/commits/master?page=9), which is actually around the same time that Mapbox.com became a real thing. Stamen did not use Mapbox.com to make toner or watercolor, they did it the OG way with mapnik stylesheets and natural earth data for land boundaries and OSM data for roads and bash scripts. Those tools are all still around today, and they are all better than they were in 2014, but thank god we dont need to use them to make maps.

When I saw those Stamen maps I wondered if I would ever make a map that nice, and man what did that take.

## Mapbox let you make some cool maps

I dont have a link for this, but if you have an install of Tilemill, you can click on the road trip map that comes with that piece of software and see it.

Mapbox made maps like the web. It let you change the color of the ocean and land and the streets just like you would change CSS on a web page. The only drawback is you had to wait until all those tiles rendered. This would change soon though.

## D3 made some cool maps

[D3.v3.js changelog](https://github.com/mbostock/d3/wiki/Upgrading-to-3.0)

In D3 SVG land, far removed from Tilemill 256x256 tile pngs, version 3 dropped at the end of 2012. This was the release that added d3.geo, which introduced a whole new world of SVG mapping that did not require a backend server to serve tiles, or a service like Mapbox to host them. 2012 really was a renaissance for mapping, but we are only really realizing it now.

## Mapping nowadays is about...

Thankfully, data.

These days, we dont have to worry so much about rolling our own mapping servers, or which format our map tiles should be in. We only have to worry about the data we put on our map, which is how it should be.

Because mapping is not just about the sphere of the world. Rarely do we get our insights from the geographic data alone. We at this point know what the world looks like. Even if we are very bad at geography, geographical data does nothing to surprise us.

And maps should always aim to surprise us and delight us.

### People and how they interact with their surroundings.

[Afghanistan voting station locator](http://www.votehere.af/en/#/manual-map)

One of the really cool things about mapping as a form of visualization, is that the metaphor is our lives. Maps are about the worlds that we experience.

[DC Metro Map, real scale](http://i.imgur.com/aenBfGn.png)

Maps lie to us all the time, and when we are so accustomed to the falsehoods, the truthful maps can be a breath of fresh air.

There are many institutional reasons for making your map conform to a certain spec (such as a square). Some maps are better as squares. It all depends on the purpose of the map.

### Aggregate information and specific information

[Age of buildings in Portland, Ore](http://labratrevenge.com/pdx/#12/45.5197/-122.7782)

One of the inherently cool things about maps is their level of detail. A good map can tell you the summary or the nitty gritty, depending on how you use your zoom bar. Depending on where you position yourself, they tell you a different story.

### Intuitive exploration of data

[Population dot map of the USA](http://demographics.coopercenter.org/DotMap/index.html)

From the onset, map technology has exposed different zoom layers of information - that at the county, country, state, and planet. We have data at each of those levels, and if you think of each zoom level as a different summary of humanity, map technology makes it easy to switch between them.

## By the way

[Afghanistan election fraud](http://2014.afghanistanelectiondata.org/runoff/#home)

Its pretty easy to know where fraud happened in an Afghanistan election.

## Where is mapping a concern?

### When it equates people with area

[USA Today 2008 election map](http://i.usatoday.net/news/graphics/elections-2012-app/index.html#map/president)

This was not a close election, but if you just looked at the map, you might believe otherwise.

In the United States, we are very accustomed to seeing what we call choropleth maps, or what other people call heat maps. This is popular here because it is what Census uses to show relative population and race.

Sometimes, though, this type of map can be extremely misleading. For example, looking at the map above, you might think it was 50/50, or maybe even a Romney advantage.

Area does not equal population. Land mass does not equal human mass.

### When it tries to do too much

[NYC taxicab](http://nyctaxi.herokuapp.com/)

Just because you can map a large amount of data, does not mean that you should.

## When you should map one way and not another

When should you do a static map? Satellite? Slippy?

[One of my favorite, simple maps: change in uninsured Americans](http://www.nytimes.com/interactive/2014/10/29/upshot/obamacare-who-was-helped-most.html)

And a way to keep it simple on mobile, which is always important. [DC Homicide Map](http://apps.washingtonpost.com/investigative/homicides/).

## Yo

Satellites, yo [ISIS attack on oil refinery](http://www.developmentseed.org/blog/2014/06/25/iraq-oil-fire/)

[Bl.ocks.org](http://bl.ocks.org/)
