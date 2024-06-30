'use strict';
const show = document.querySelector('.service');
const message = document.querySelector('.hiddens');
const overlay = document.querySelector('.content');


show.addEventListener('click', function() {
   message.classList.remove('hiddens');

});

overlay.addEventListener('click', function() {
   message.classList.add('hiddens');
})
