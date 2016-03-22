'use strict';

angular.module('yeoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


