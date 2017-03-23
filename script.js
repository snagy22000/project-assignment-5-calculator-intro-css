/**
 * Created by Sebastian Nagy on 21.12.2016.
 */

(function () {
  'use strict';

  // var number = document.querySelector( '.number' );
  var screen       = document.querySelector( '.screen' );
  var btn_0        = document.querySelector( '#btn_0' );
  var btn_1        = document.querySelector( '#btn_1' );
  var btn_2        = document.querySelector( '#btn_2' );
  var btn_3        = document.querySelector( '#btn_3' );
  var btn_4        = document.querySelector( '#btn_4' );
  var btn_5        = document.querySelector( '#btn_5' );
  var btn_6        = document.querySelector( '#btn_6' );
  var btn_7        = document.querySelector( '#btn_7' );
  var btn_8        = document.querySelector( '#btn_8' );
  var btn_9        = document.querySelector( '#btn_9' );
  var btn_minus    = document.querySelector( '#btn_minus' );
  var btn_plus     = document.querySelector( '#btn_plus' );
  var btn_divide   = document.querySelector( '#btn_divide' );
  var btn_comma    = document.querySelector( '#btn_comma' );
  var btn_multiply = document.querySelector( '#btn_multiply' );
  var btn_evals    = document.querySelector( '#btn_evals' );
  var btn_clear    = document.querySelector( '#btn_clear' );
  var btn_delete   = document.querySelector( '#btn_delete' );

  btn_0.addEventListener( 'click', function () {
    screen.value += '0';
  } );

  btn_1.addEventListener( 'click', function () {
    screen.value += '1';
  } );

  btn_2.addEventListener( 'click', function () {
    screen.value += '2';
  } );

  btn_3.addEventListener( 'click', function () {
    screen.value += '3';
  } );

  btn_4.addEventListener( 'click', function () {
    screen.value += '4';
  } );

  btn_5.addEventListener( 'click', function () {
    screen.value += '5';
  } );

  btn_6.addEventListener( 'click', function () {
    screen.value += '6';
  } );

  btn_7.addEventListener( 'click', function () {
    screen.value += '7';
  } );

  btn_8.addEventListener( 'click', function () {
    screen.value += '8';
  } );

  btn_9.addEventListener( 'click', function () {
    screen.value += '9';
  } );

  btn_minus.addEventListener( 'click', function () {
    screen.value += '-';
  } );

  btn_plus.addEventListener( 'click', function () {
    screen.value += '+';
  } );

  btn_divide.addEventListener( 'click', function () {
    screen.value += '/';
  } );

  btn_comma.addEventListener( 'click', function () {
    screen.value += '.';
  } );

  btn_multiply.addEventListener( 'click', function () {
    screen.value += '*';
  } );

  btn_evals.addEventListener( 'click', function () {
    screen.value = eval( screen.value );
  } );

  btn_clear.addEventListener( 'click', function () {
    screen.value = '';
  } );

  btn_delete.addEventListener( 'click', function () {
    var length   = screen.value.length;
    screen.value = screen.value.substring( 0, length - 1 );
  } );
}());
