'use strict';

var a = 0;
var b = 1;

var desc = 'a is ' + a + ' and b is ' + b;

console.log(desc);

console.log('jquery ' + $('.page-wrap').length);

$(function () {
	$('.page-wrap').css('border', 'solid');
});