import Theme from './theme'

const refs = {
  checkbox: document.getElementById('theme-switch-toggle'),
};

const onChecked = () => {
  document.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  refs.checkbox.checked = true;
};

const notChecked = () => {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    refs.checkbox.checked = false;
};

export default  (e) => {
  e.currentTarget.checked ? onChecked() : notChecked();
};
