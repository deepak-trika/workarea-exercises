/**
 * @namespace WORKAREA.revealPassword
 */
 WORKAREA.registerModule('revealPassword', (function () {
  'use strict';

  var buttonTemplate = JST['workarea/core/templates/reveal_password_button'],

      toggleButton = function ($field, event) {
          var $button = $(event.currentTarget);

          if ($button.data('revealPassword') === 'show') {
              $button.data('revealPassword', 'hide')
              $field.attr('type', 'password');
          } else {
              $button.data('revealPassword', 'show')
              $field.attr('type', 'text');
          }
      },

      bindButtonEvents = function ($field) {
          var $container = $field.closest('.property');

          $('[data-reveal-password]', $container)
          .on('click', _.partial(toggleButton, $field));
      },

      injectButtons = function (index, field) {
          return $(field).after(buttonTemplate());
      },

      initRevealPassword = _.flow(injectButtons, bindButtonEvents),

      /**
       * @method
       * @name init
       * @memberof WORKAREA.revealPassword
       */
      init = function ($scope) {
          // $('input[type=password]', $scope).each(initRevealPassword);
      };

  return {
      init: init
  };
}()));
