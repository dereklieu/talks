'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        hero: 'topo-what?',
        imgUrl: 'topowhat.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'jay-what?',
        imgUrl: 'jaywhat.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'what-end?',
        imgUrl: 'cat_screen.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'whatever-end',
        imgUrl: 'whatever.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'whatever-it-takes-end',
        imgUrl: 'ruthless.gif',
        cls: 'bg-img inverted'
    },{
        marquee: 'the-end',
        imgUrl: 'funvader.gif',
        cls: 'bg-img inverted'
    }];

    return slides;
}])

;
