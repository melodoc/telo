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
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import toggleDropDownMenu from './modules/toggleDropDownMenu';
import toggleVisitMenu from './modules/toggleVisitMenu';

//drop down menu
toggleDropDownMenu();
//free vivit form window
toggleVisitMenu()
//Menu
toggleMenu();
// popUp
togglePopUp();
//Slider on the top
promoSlider();
// Only digits input allowed
checkDigitsInput();
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

