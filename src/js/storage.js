import Theme from './theme'

const refs = {
  checkbox: document.getElementById('theme-switch-toggle'),
};

export default  () => {
  if (localStorage.getItem('theme') === Theme.LIGHT || localStorage.getItem('theme') === null) {
    document.body.classList.add(Theme.LIGHT);
    return;
  } else {
    document.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
    return;
  };
};
