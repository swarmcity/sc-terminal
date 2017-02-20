/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


(function(document) {

  // COMMENT THIS ON LOCALHOST
  if (location.protocol != 'https:')
  {
   location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  };


	// var app;
  // console.log(window.location.pathname);

  //window.location = '/';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  // var stage = document.querySelector('#stage');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  // stage.addEventListener('dom-change', function() {
  //   console.log('Entering Swarm City Customs...');
  // });

  // See https://github.com/Polymer/polymer/issues/1381
  // window.addEventListener('WebComponentsReady', function() {
  //   //stage.generate();
  //   // imports are loaded and elements have been registered
  // });

  // function importPage(url){
  //   return new Promise(function(resolve, reject){
  //     Polymer.Base.importHref(url, function(e){
  //       resolve(e.target.import);
  //     }, reject);
  //   });
  // }

  // stage.generate = function(){
  //   console.log('New user!');
  //   importPage('/src/ac-newuser.html').then(function(){
  //     var element = document.createElement('ac-newuser');
  //     element.id = 'acnewuser';
  //     document.body.appendChild(element);
  //   }, function(err){
  //     console.log(err, 'error');
  //   });
  // };

  // stage.homestate = function(){
  //   //debugger;
  //   console.log('Existing user');
  //   if(sessionStorage.getItem('ac-password')){
  //     console.log('Password found.');
  //     importPage('/src/ac-home.html').then(function(){
  //       var element = document.createElement('ac-home');
  //       element.id = 'app';
  //       document.body.appendChild(element);
  //     }, function(err){
  //       console.log(err, 'error');
  //     });
  //   } else {
  //     importPage('/src/ac-password.html').then(function(){
  //       console.log('Password not found.');
  //       var element = document.createElement('ac-password');
  //       element.id = 'password';
  //       //var app = document.querySelector('#password');
  //       document.body.appendChild(element);
  //     }, function(err){
  //       console.log(err, 'error');
  //     });
  //   }
  // };


})(document);
