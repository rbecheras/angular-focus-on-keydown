/**
 * angular-focus-on-keydown.js
 *
 * Released under MIT License.
 * Copyright (c) 2015 Rémi Becheras All rights reserved
 *
 */

(function(){
'use strict';

    angular.module('focusOnKeydown',[]).directive('focusOnKeydown', function($window) {
      function isFocus(element){
        return element[0] === document.activeElement;
      }
      function validateSymbols(evt, symbols){
        var normalKey;
        var hasCtrl, hasShift;
        var isValid;
        angular.forEach(symbols,function(symbol){
          if (angular.lowercase(symbol) === angular.lowercase('CTRL')) {
            hasCtrl = true;
          } else if (angular.lowercase(symbol) === angular.lowercase('SHIFT')) {
            hasShift = true;
          } else normalKey = symbol;
        });
        // init 'isValid' to 'true' then search if it should be set to 'false'
        isValid = true;
        if (hasCtrl && !evt.ctrlKey) isValid = false;
        if (hasShift && !evt.shiftKey) isValid = false;
        if (evt.keyCode !== normalKey.charCodeAt(0)) isValid = false;

        return isValid;
      }

      return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
          $window.onkeydown = function(e){
            console.log(e,attrs.focusOnKeydown);
            if (validateSymbols(e, attrs.focusOnKeydown.split('+'))) {
              if (!isFocus(elem)) {
                e.preventDefault();
                elem[0].focus();
              }
            }
          };
        }
      };
    });

})();
