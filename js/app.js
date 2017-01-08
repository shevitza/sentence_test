var app = angular.module("app", []);
app.controller("FormController", ['$scope', function ($scope) {
    $scope.left ='Left1';
    $scope.middle ='Mid4';
    $scope.right ='Right6';

    $scope.guess = "";
    var correctAnswers = ['Left1 Mid3 Right7', 'Left4 Mid4 Right8', 'Left3 Mid4 Right6'];

    $scope.checkResult = function () {
        console.log('check');
        var i;
        var checked = $scope.left + ' ' + $scope.middle + ' ' + $scope.right;
        if (correctAnswers.length === 0) {
            $scope.result = "No more sentences for guess.";
        } else {
            if (correctAnswers.indexOf(checked) === -1) {
                $scope.result = "Wrong answer!";
            } else {
                i = correctAnswers.indexOf(checked);
                correctAnswers.splice(i, 1);
                $scope.guess = $scope.guess + "-->" + checked;
                $scope.result = "Congratulations! Correct!!";
            }
        }


    }

}]);



