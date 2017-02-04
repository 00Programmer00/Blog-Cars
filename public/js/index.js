var app = angular.module("app",[]);

app.controller("postsCtrl", function ($scope, getPosts) {

            $scope.posts = getPosts.postArray;

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

app.service("getPosts", function ($scope, $http) {
    $http.get("/posts")
        .then(function(response){
            $scope.postArray = response.data.posts;
        });
    return $scope.postArray;
});

app.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});