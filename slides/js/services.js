'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        title: 'Much Maps'
    },{
        title: 'So how much map you got?'
    },{
        title: '1 or 2 maps?',
        decks: ['Everything\'s cool, Donnie', 'Just make \'em in Tilemill']
    },{
        title: '2 - 5 maps?',
        decks: ['Make \'em in Tilemill', 'But choose colors very wisely']
    },{
        title: '6 to... 10 maps?',
        decks: ['Make \'em in Tilemill', 'Complain to HR']
    },{
        title: '11 to →∞ maps?',
        smallImgUrl: 'nonono.gif'
    },{
        title: 'I got 99 mapping problems',
        decks: ['Too bad Al Shaw\'s not here to help me']
    },{
        title: 'Disclaimer',
        decks: ['Maybe this wasn\'t the best?', 'Nnnnnnnnnyyyeahhhh don\'t know'],
        cls: 'inverted'
    },{
        imgUrl: 'davie_bowie.jpg'
    },{
        hero: 'Defining the problem',
        cls: 'waycool'
    },{
        imgUrl: 'geographies.png'
    },{
        imgUrl: 'legislative_geographies.png'
    },{
        imgUrl: 'no_idea.gif'
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
        imgUrl: 'fuuuuu.gif'
    },{
        title: 'Our beloved stack',
        decks: ['Tilemill tiles, Mapbox.com hosting, Leaflet.js interaction']
    },{
        hero: 'Tilemill Data-Binding',
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
        title: '3. Write mundane javascript and dumb python',
        decks: ['The python must be dumb in a smart way though']
    },{
        imgUrl: 'dumbjs.png'
    },{
        title: '4. Write it so you can make it all over again'
    },{
        title: '//makefile'
    },{
        title: 'Drawbacks to this approach'
    }];


    return slides;
}])

;


















































