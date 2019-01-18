import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".section-title"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
new RevealOnScroll($(".headline"), "85%");
new RevealOnScroll($('p'), "60%");
new RevealOnScroll($('img'), "60%");

