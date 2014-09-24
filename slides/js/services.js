'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Derek Lieu',
            decks: ['dereklieu.github.io/hackshackers2014', '@dereklieu'],
            cls: 'lightsalmon',
            cap: 'Need help? Use your left and right arrows to navigate.'
        },

        {
            imgUrl: '/img/progression-initial.png',
            cap: 'So two weeks ago I stopped being a journalist. And, I\'ve noticed a few things that have changed.'
        },

        {
            imgUrl: '/img/grumpy-cat-coffee.png',
            cap: 'First, I stopped seeing versions of this sign pop up in our office kitchen.'
        },

        {
            imgUrl: '/img/beer-fridge.jpg',
            cap: 'Now we literally have this in our office. I still drink just as much, now I just drink on the job.'
        },

        {
            imgUrl: '/img/progression-college.png',
            cap: 'But what was weird was how easy it was. Like many journalists I grew UP thinking I\'d work in the field.'
        },

        {
            imgUrl: '/img/old-ye-thrower.gif',
            cap: 'I grew up thinking it was my calling to like throw news into the barren wilderness or something.'
        },

        {
            imgUrl: '/img/hunter-thompson.jpg',
            cap: 'And if I just put in my work, one day I\'d get to be him.'
        },

        {
            imgUrl: '/img/peter-parker.jpg',
            cap: 'Or maybe him. By the way did you know there is a live action Spiderman series from the 70\'s?'
        },

        {
            imgUrl: '/img/japanese-spiderman-spidersense.gif',
            cap: 'It was made in Japan, and he\'s basically a power ranger.'
        },

        {
            imgUrl: '/img/japanese-spiderman-shooting.gif',
            cap: 'Seeing this was really confusing to me because that just wasn\'t the kind of journalist I had envisioned becoming.'
        },

        {
            imgUrl: '/img/progression-web-producer.png',
            cap: 'But anyway, so I graduated and began working as a web producer. Which was a great job for me, because I needed a paycheck and it required like basic HTML and WordPress level web skillz.'
        },

        {
            imgUrl: '/img/wordpress.png',
            cap: 'And, if you happen to be born before the 90\'s, you made some version of this WordPress site. Don\'t lie.'
        },

        {
            imgUrl: '/img/cubicle.jpg',
            cap: 'But so I ended up as a web producer doing this job that is the future, you get to become this conduit between all these different people, this translator of mediums. But you\'re mostly working with other people\'s work.'
        },

        {
            imgUrl: '/img/visible-word.png',
            cap: 'It\'s not that it\'s underappreciated, everyone agrees it\'s important work, but it\'s not visible. And if that sounds whiny, consider that you probably won\'t work where you\'re working forever, and when that time comes people are going to look at what I\'m about to show you.'
        },

        {
            imgUrl: '/img/github.png',
            cap: 'This is the history of my activity on Github.com. It\'s really sad. It\'s a miracle I even got hired at Dev Seed, because now I do everything on Github. We stopped sending each other e-mails and started sending tickets, and you don\'t have to work at a capital \'S\' startup to use Github this way. And the best part is, it\'s visible by default.'
        },

        {
            imgUrl: '/img/devseed-map.png',
            cap: 'I think you should prioritize visible work as much as you prioritize job development opportunities. We\'re mapping Afghanistan election data right now.'
        },

        {
            imgUrl: '/img/devseed-map-dogs.png',
            cap: 'But even if I were mapping Afghan dogs, I could point to it one day and someone could say "that\'s a dumb project but at least you know angular."'
        },

        {
            hero: 'haaaaaaaaay',
            cap: 'I don\'t think you should leave journalism. I am saying, if your work isn\'t visible, you should try to go someplace where it will be, or make it on your own time.'
        },

        {
            hero: 'hoooooooooow?',
            cap: 'Here are some open data iniatives that we work on. If you need data to hack on and make something with, this is a starting point.'
        },

        {
            imgUrl: '/img/open-undp.png',
            cap: 'UNDP is the United Nations Development Program. This is a list of what they\'re doing it, it breaks down a lot, and you can download it. My colleague @jue_yang worked on it.'
        },

        {
            imgUrl: '/img/relief-web.png',
            cap: 'Relief Lab is just getting ready to release a REST API, and they have really good disaster data going back decades. I\'m actually working on an app with this now, if you want to see it hit me up.'
        },

        {
            imgUrl: '/img/brazil-transparencia.png',
            cap: 'Not our project, but the Brazilian government releases all of it\'s transaction data, and it puts out new data every night.'
        },

        {
            imgUrl: '/img/wikipedia-open-data.png',
            cap: 'And if you go to the open data page on Wikipedia, there is a list of government open data portals.'
        },

        {
            imgUrl: '/img/world-bank.png',
            cap: 'We work with the world bank, and they also have a data portal. They\'re also hosting an open data day hackathon next weekend, February 22, 2014, you should go to that. You should also come to the Development Seed happy hour on Friday, February 21, just saying.'
        },

        {
            imgUrl: '/img/japanese-spiderman-armrockets.gif',
            cap: 'That\'s it for me. Work on visible projects, and stay awesome.'
        },

        {
            title: 'thanks! - @dereklieu',
            decks: ['github.com/dereklieu/hackshackers2014', 'opendataday.org', 'developmentseed.org/blog <- open data preparty', 'open.undp.org', 'labs.reliefweb.int', 'portaltransparencia.gov.br', 'en.wikipedia.org/wiki/Open_data', 'data.worldbank.org'],
            cap: 'Thanks!'
        }
    ];

    return slides;
}])

;
