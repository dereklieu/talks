'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        title: 'TOPO-what?'
    },{
        title: 'what-JSON?'
    },{
        title: 'what-end?',
        decks: [
            'Front-end is actually kind of a misnomer'
        ]
    },{
        title: 'whatever-end',
        decks: [
            'But the complex stuff lives on the front-end'
        ]
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
