document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const heading1 = document.querySelector('#main .text-box h1');
  const heading2 = document.querySelector('#main .text-box h2');
  const textClients = document.querySelector('#main .text-clients');
  const textDescription = document.querySelector('#main .text-description');
  const imgDuper = document.querySelector('img.duper');
  const imgMobile = document.querySelector('img.mobile');

  header.classList.add('in');
  heading1.classList.add('in');
  heading2.classList.add('in');
  textClients.classList.add('in');
  textDescription.classList.add('in');
  imgDuper.classList.add('in');
  imgMobile.classList.add('in');
});