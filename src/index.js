'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import elementClosest from 'element-closest';
elementClosest(window);

import calc from './modules/calc';
import sendForm from './modules/sendForm';
import promoSlider from './modules/promoSlider';
import carousel from './modules/carousel';
import toggleMenu from './modules/toggleMenu';
import toggleDropDownMenu from './modules/toggleDropDownMenu';
import showArrow from './modules/showArrow';
import gallerySlider from './modules/gallerySlider';
import burgerMenuHandler from './modules/burgerMenuHandler';

//drop down menu
toggleDropDownMenu();
//show and close menu 
toggleMenu();
//slider on the top
promoSlider();
//carousel of services
carousel();
//gallerySlider
gallerySlider();
//Burger menu handler
burgerMenuHandler();
//show small Arrow after scroll
showArrow();
//calc
calc();
//send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('banner-form');
sendForm('footer_form');
sendForm('card_order');