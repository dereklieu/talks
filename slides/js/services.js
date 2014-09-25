'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        hero: 'topo-what?',
        imgUrl: 'topowhat.gif',
        cls: 'bg-img'
    },{
        hero: 'jay-what?',
        imgUrl: 'jaywhat.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'what-end?',
        imgUrl: 'navywhat.gif',
        cls: 'bg-img inverted'
    },{
        title: 'whatever-end',
    },{
        title: 'whatever-it-takes--end',
        decks: [
            'This way kind of sucks',
            'But other ways suck in different ways'
        ],
        cls: 'lightsalmon'
    },{
        title: 'way cool',
        cls: 'waycool'
    },{

    }];

    return slides;
}])

;
