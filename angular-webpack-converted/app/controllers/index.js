(function () {
    'use strict';
    var angular = require('angular');
    angular.module('dashboard')
           .controller('dashboardController', require('./dashboard.controller'))
           .controller('messagesController', require('./messages-controller'));
}());