'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import elementClosest from 'element-closest';
elementClosest(window);

import calc from './modules/calc';
import checkDigitsInput from './modules/checkDigitsInput';
import sendForm from './modules/sendForm';
import promoSlider from './modules/promoSlider';
//import carousel from './modules/carousel';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import toggleDropDownMenu from './modules/toggleDropDownMenu';
import showArrow from './modules/showArrow';


//drop down menu
toggleDropDownMenu();
//Menu
toggleMenu();
// popUp
togglePopUp();
//Slider on the top
promoSlider();
//Slider of services
//carousel();
// Only digits input allowed
checkDigitsInput();
//show small Arrow after scroll
showArrow();
//Calc
calc();
//Send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');

//possible modules:
//visitFormMenu
//callMenu
//giftMenu
//gallerySlider
//thanksMenu
//burgerMenu
//lickyBurgerMenu
//arrowScroll
//calcPromo

