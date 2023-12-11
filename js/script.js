/**
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 document.getElementById('animate-button').addEventListener('click', function() {
     // Verberg de specifieke elementen met de klasse "text"
     var elementsToHide = document.querySelectorAll('.text');
     for (var i = 0; i < elementsToHide.length; i++) {
         elementsToHide[i].classList.add('hidden');
     }

     // Toon de event-info
     var eventInfo = document.getElementById('event-info');
     eventInfo.classList.remove('hidden');

 document.getElementById('animate-button').addEventListener('click', function() {
     var animatedText = document.getElementById('animated-text');
     animatedText.classList.remove('hidden');
     animatedText.classList.add('fly-in');

     // Toon de event-info
     var eventInfo = document.getElementById('event-info');
     eventInfo.classList.remove('hidden');
 });
