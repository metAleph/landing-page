$ = global.jQuery = require('jquery');
require('bootstrap');
var Handlebars = require("handlebars");

$(function () {
    "use strict";
	var longContent = "According to Borges: '... the Aleph is a point in space that contains all other points. Anyone who gazes into it can see everything in the universe from every angle simultaneously, without distortion, overlapping or confusion.' ... and meta goes for abstraction: an Aleph explaining itself. This is a data startup!!!";
	var authors = "Cristhian Seminario {Economics, 1988}, Daniel Llatas {Software, 1989}";

    var templates = [
        ["#page-header-home",".hb-page-header-home",{title: 'metAleph', content: "Touching what you can't see!"}],
        ["#page-header-about",".hb-page-header-about",{title: 'About', content: longContent}],
        ["#page-header-project",".hb-page-header-project",{title: 'Projects', content: "eese - data", link: "http://www.metaleph.com/eese-data"}],
        ["#page-header-team",".hb-page-header-team",{title: 'Team', content: authors}],
        ["#footer",".hb-footer",{content: "metAleph 2015"}]
	];

    function render(template) {
    	for(var i=0;i<template.length;i++){
    		var templateCompiled = Handlebars.compile($(template[i][0]).html());
    		var html = templateCompiled(template[i][2]);
    		$(template[i][1]).html(html);
    	}
    }

    render(templates);

});



