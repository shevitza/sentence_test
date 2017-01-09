var app = angular.module("app", []);
app.controller("FormController", ['$scope', function ($scope) {
    var list = new Map();
    list.set('l1', 'AngularJS ');
    list.set('l3', 'The dependency injection and in the services ');
    list.set('l4', 'The singleton pattern ');
    list.set('l2', 'Angular ');

    list.set('m4', 'use ');
    list.set('m3', 'restricts');
    list.set('m2', 'enables ');
    list.set('m1', 'comes ');

    list.set('r2', ' with a set of these directives built-in, like ngBind, ngModel, and ngClass.');
    list.set('r6', ' singleton pattern.');
    list.set('r8', ' the use of a class more than once.');
    list.set('r7', ' using HTML as template language.');


//initial selection must be random!
    $scope.left = 'l1';
    $scope.middle = 'm4';
    $scope.right = 'r6';

    $scope.guess = "";
    var correctAnswers = ['l1 m2 r7', 'l4 m3 r8', 'l3 m4 r6', 'l2 m1 r2'];

    $scope.checkResult = function () {

        var i;
        var sentence = list.get($scope.left) + ' ' + list.get($scope.middle) + ' ' + list.get($scope.right);
        var checked = $scope.left + ' ' + $scope.middle + ' ' + $scope.right;
        console.log(checked);
        if (correctAnswers.length === 0) {
            $scope.result = "No more sentences for guess.";
        } else {
            if (correctAnswers.indexOf(checked) === -1) {
                $scope.result = "Wrong answer!";
            } else {
                i = correctAnswers.indexOf(checked);
                correctAnswers.splice(i, 1);
                $scope.guess = $scope.guess + " " + sentence;
                $scope.result = "Congratulations! Correct!!";
            }
        }


    }

}]);



