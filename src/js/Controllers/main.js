function MainController ($scope) {
  $scope.count = 0;

  $scope.addCount = function () {
    let newCount = $scope.count = $scope.count + 1;
    console.log(newCount);
  };

};

MainController.$inject = ['$scope'];
export { MainController };
