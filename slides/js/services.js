'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        title: 'http://bit.ly/1prEqlN'
    },{
        title: 'http://bit.ly/1AcvUdI'
    },{
        title: 'http://bit.ly/1AcwurY'
    },{
        imgUrl: 'img/populationchg.jpg'
    },{
        imgUrl: 'img/badpolitical.png'
    },{
        imgUrl: 'img/dc.jpg'
    },{
        imgUrl: 'img/metro.png'
    },{
        title: 'http://bit.ly/1l1yErg'
    },{

    }];

    return slides;
}])

;
