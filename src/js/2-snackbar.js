'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.show({
  id: null,
  class: '',
  title: '',
  titleColor: '',
  titleSize: '',
  titleLineHeight: '',
  message: '',
  messageColor: '',
  messageSize: '',
  messageLineHeight: '',
  backgroundColor: '',
  theme: 'light', // dark
  color: '', // blue, red, green, yellow
  icon: '',
  iconText: '',
  iconColor: '',
  iconUrl: null,
  image: '',
  imageWidth: 50,
  maxWidth: null,
  zindex: null,
  layout: 1,
  balloon: false,
  close: true,
  closeOnEscape: false,
  closeOnClick: false,
  displayMode: 0, // once, replace
  position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  target: '',
  targetFirst: true,
  timeout: 5000,
  rtl: false,
  animateInside: true,
  drag: true,
  pauseOnHover: true,
  resetOnHover: false,
  progressBar: true,
  progressBarColor: '',
  progressBarEasing: 'linear',
  overlay: false,
  overlayClose: false,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOut',
  transitionInMobile: 'fadeInUp',
  transitionOutMobile: 'fadeOutDown',
  buttons: {},
  inputs: {},
  onOpening: function () {},
  onOpened: function () {},
  onClosing: function () {},
  onClosed: function () {},
});

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = form.delay.value;
  const state = form.state.value;

  makePromise({ value: delay, delay: delay, state: state })
    .then(value =>
      iziToast.show({
        class: 'access-svg',
        position: 'topRight',
        icon: 'access-svg',
        message: `Fulfilled promise in ${delay} ms!`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        close: false,
        closeOnClick: true,
      })
    )
    .catch(error =>
      iziToast.show({
        class: 'error-svg',
        position: 'topRight',
        icon: 'error-svg',
        message: `Rejected promise in ${delay} ms!`,
        messageColor: '#fff',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      })
    );
  form.reset();
});

const makePromise = ({ value, delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};
