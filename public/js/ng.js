var app = angular.module("app",[]);

app.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});

app.controller("postsCtrl", function ($scope, $http) {
    $http.get("/posts")
        .then(function(response){
            $scope.posts = response.data.posts;

            $scope.currentPage = 0;
            $scope.itemsPerPage = 3;

            $scope.firstPage = function() {
                return $scope.currentPage == 0;
            };
            $scope.lastPage = function() {
                var lastPageNum = Math.ceil($scope.posts.length / $scope.itemsPerPage - 1);
                return $scope.currentPage == lastPageNum;
            };
            $scope.numberOfPages = function(){
                return Math.ceil($scope.posts.length / $scope.itemsPerPage);
            };
            $scope.startingItem = function() {
                return $scope.currentPage * $scope.itemsPerPage;
            };
            $scope.pageBack = function() {
                $scope.currentPage = $scope.currentPage - 1;
            };
            $scope.pageForward = function() {
                $scope.currentPage = $scope.currentPage + 1;
            }
        });
});