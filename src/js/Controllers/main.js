function MainController ($scope) {
  $scope.count = 0;
  $scope.string = "0 likes"

  $scope.addCount = function () {
    let newCount = $scope.count = $scope.count + 1;
    if ($scope.count === 1) {
      $scope.string = $scope.count + " like"
    } else {
      $scope.string = $scope.count + " likes"
    }
  };

};

MainController.$inject = ['$scope'];
export { MainController };
