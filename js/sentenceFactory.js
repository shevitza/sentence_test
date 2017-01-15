(function () {
    "use strict";
    angular.module("app")
        .factory("sentenceFactory", sentenceFactory);
    sentenceFactory.$inject = [];

    function sentenceFactory() {
        var list = new Map();
        list.set('l1', 'AngularJS ');
        list.set('l3', 'The dependency injection and the services ');
        list.set('l4', 'The singleton pattern ');

        list.set('m4', 'use ');
        list.set('m3', 'restricts');
        list.set('m2', 'enables ');
        list.set('m1', 'comes ');

        list.set('r2', ' with a set of these directives built-in, like ngBind, ngModel, and ngClass.');
        list.set('r6', ' singleton pattern.');
        list.set('r8', ' the use of a class more than once.');
        list.set('r7', ' using HTML as template language.');
        

        var answers = ['l1 m2 r7', 'l4 m3 r8', 'l3 m4 r6', 'l1 m1 r2'];
        var initial={
            left:'l1',
            middle:'m4',
            right:'r6'
        }
        var obj = {
            list: list,
            answers: answers,
            initial:initial
        }
        return obj;

    }

})();
