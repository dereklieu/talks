'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        hero: 'Beginnings',
        imgUrl: 'mapserver.png',
        cls: 'bg-img inverted',
    },{
        imgUrl: 'osm.png',
        cls: 'bg-img inverted',
    },{
        imgUrl: 'stamen.png',
        cls: 'bg-img inverted',
    },{
        imgUrl: 'mapbox.png',
        cls: 'bg-img inverted',
    },{
        imgUrl: 'd3.png',
        cls: 'bg-img inverted',
    },{
        hero: 'Mapping nowadays is about...',
        cls: 'bg-img inverted',
    },{
        imgUrl: 'metro.png',
    },{
        imgUrl: 'afg.png',
    },{
        imgUrl: 'afgelec.png',
    },{
        imgUrl: 'portland.png',
    },{
        imgUrl: 'chicago.png',
    },{
        imgUrl: 'population.png',
    },{
        imgUrl: 'wind.png',
    },{
        imgUrl: 'taxi.png',
    },{
        imgUrl: 'romney.png',
    },{
        imgUrl: 'healthlaw.png',
    },{
        imgUrl: 'iraq.jpg',
    },{
        imgUrl: 'ground.png',
    },{
        imgUrl: 'mars.png',
    },{
        imgUrl: 'vector.gif',
    },{
        cls: 'bg-img inverted',
    },{
    }];

    return slides;
}])

;
