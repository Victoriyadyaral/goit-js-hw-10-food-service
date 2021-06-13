import menuListMarkup from './js/menu-list';
import currentTheme from './js/storage';
import changeInput from './js/change-theme';
import './sass/main.scss';

const refs = {
  list: document.querySelector('.js-menu'),
  checkbox: document.getElementById('theme-switch-toggle'),
};

refs.list.insertAdjacentHTML(
  'beforeend',
  menuListMarkup);

currentTheme();

refs.checkbox.addEventListener('change', changeInput);
