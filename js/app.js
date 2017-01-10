(function () {
    "use strict";
    angular.module("app", [])
        .controller("FormController", FormController);
    FormController.$inject = ['$scope', 'sentenceFactory'];

    function FormController($scope, sentenceFactory) {
        var list = sentenceFactory.list;

        //initial selection must be random!
        $scope.left =sentenceFactory.initial.left;
        $scope.middle =sentenceFactory.initial.middle;
        $scope.right =sentenceFactory.initial.right;

        $scope.guess = "";
    
        var correctAnswers = sentenceFactory.answers;
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
    }

})();
