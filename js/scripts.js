var redditApp = angular.module("redditApp", []);

redditApp.controller("redditCtrl", function ($scope, $http) {
	//create empty array to store post data
	$scope.posts = [];
	//request JSON data from Reddit
	$http({
		method: "GET",
		url: "https://www.reddit.com/hot.json"
	}).then(function gotPosts(response) {
		//if the call was successful, handle the data
		//create a variable to hold the amount of posts we wish to display
		var numPosts = 25;
		//iterate through the post data we retrieved from Reddit
		for(var i = 0; i < numPosts; i++) {
			//push each post's data into the $scope.posts array we created earlier
			$scope.posts.push(response.data.data.children[i]);
		}
	}, function error(err){
		//if the call is unsuccessful, display the error message in the console window
		console.log(err);
	});
});