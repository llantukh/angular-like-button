function MainController ($scope) {
  $scope.count = 0;
  $scope.string = "0 likes"

  var countUp = true;

  $scope.addCount = function () {
    let newCount = (countUp) ? $scope.count++ : $scope.count--;

    if ($scope.count === 1) {
      $scope.string = $scope.count + " like"
    } else {
      $scope.string = $scope.count + " likes"
    }
    if ($scope.count < 0) {
      $scope.count = 0
      $scope.string = "0 likes"
    }
  };

  $scope.changeCount = function () {
    countUp = !countUp;
  };

};

MainController.$inject = ['$scope'];
export { MainController };
