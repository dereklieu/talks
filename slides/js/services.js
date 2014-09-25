'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        title: 'Much Maps',
        decks: ['@jue_yang', '@dereklieu'],
        cls: 'inverted'
    },{
        title: 'So how much map you got?',
        imgUrl: 'window.jpg',
        cls: 'bg-img'
    },{
        title: '1 or 2 maps?',
        decks: ['Make \'em in Tilemill', 'Drink champagne']
    },{
        title: '2 - 5 maps?',
        decks: ['Make \'em in Tilemill', 'Choose colors wisely']
    },{
        title: '6 to... 10 maps?',
        decks: ['Make \'em in Tilemill', 'Complain to HR']
    },{
        title: '11 to →∞ maps?',
        smallImgUrl: 'nonono.gif'
    },{
        title: 'I got 99 mapping problems',
        decks: ['Too bad Al Shaw\'s not here to help me'],
        cls: 'inverted'
    },{
        imgUrl: 'geographies.png'
    },{
        imgUrl: 'legislative_geographies.png'
    },{
        title: 'x 6 years',
        decks: ["['2008', '2009', '2010', '2011', '2012', '2013']"]
    },{
        title: 'x 7 different metrics',
        decks: ['Foreclosure is complicated']
    },{
        title: 'Each with 2-4 sub-metrics',
        decks: ['Some of which were annoyingly big']
    },{
        vidUrl: 'vid/mortgage_data.mp4'
    },{
        imgUrl: 'no_idea.gif'
    },{
        title: 'Our beloved stack',
        decks: ['Tile Maps, Mapbox.com hosting, Leaflet.js interaction']
    },{
        hero: 'Tile Maps',
        imgUrl: 'buildings.png',
        cls: 'bg-img inverted'
    },{
        title: 'Not easily scriptable',
        cls: 'inverted'
    },{
        hero: 'Mapbox Hosting',
        imgUrl: 'satellite.png',
        cls: 'bg-img inverted'
    },{
        title: 'Can you change that one color just a bit?',
        decks: ['Sixteen times?'],
        cls: 'inverted'
    },{
        hero: 'Leaflet.js Everything',
        imgUrl: 'leaflet.png',
        cls: 'bg-img inverted'
    },{
        title: 'We needed a hero',
        decks: ['(We probably needed PostGIS too)'],
        cls: 'inverted'
    },{
        imgUrl: 'bostock.jpg',
    },{
        title: '1. Make it ugly and verbose',
        decks: ['Ugly and verbose wins the race']
    },{
        imgUrl: 'ugly.png'
    },{
        title: '2. Make data about data',
        decks: ['Make it different from data and logic']
    },{
        imgUrl: 'config.png'
    },{
        title: '3. Make mundane javascript and dumb python',
        decks: ['The python must be dumb in a smart way']
    },{
        imgUrl: 'dumbjs.png'
    },{
        imgUrl: 'clickdata.png'
    },{
        imgUrl: 'mapdata.png'
    },{
        title: '4. Make it write itself'
    },{
        imgUrl: 'fuuuuu.gif'
    },{
        imgUrl: 'lookup.png'
    },{
        title: 'makefile.png'
    },{
        title: 'Disclaimer',
        decks: ['Maybe this wasn\'t the best?', 'Nnnnnnnnnyyyeahhhh don\'t know'],
        cls: 'waycool'
    },{
        imgUrl: 'davie_bowie.jpg'
    },{
        imgUrl: 'Good because you can set it and forget it'
    },{
        imgUrl: 'Bad because it makes you crazy'
    }];


    return slides;
}])

;
