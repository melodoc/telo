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
import slider from './modules/slider';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';

//Menu
toggleMenu();
// popUp
togglePopUp();
//Slider
slider();
// Only digits input allowed
checkDigitsInput();
//Calc
calc();
//Send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');

//possible modules:
//dropDownMenu
//visitMenu
//callMenu
//giftMenu
//gallerySlider
//thanksMenu
//burgerMenu
//lickyBurgerMenu
//arrowScroll
//calcPromo

