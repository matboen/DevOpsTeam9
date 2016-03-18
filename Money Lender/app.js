var app = angular.module("myApp", []);

app.controller("mapController", function($scope, $http){

	var naam = ["rember", "arthuur"];
	var bedrag = ["10", "20000"];
	var tittel = ["test", "test2"];
	var debtRec = ["receive, owes"];


	function add()
	{
		//alert("test");
		tittel.push($scope.title);
		bedrag.push($scope.money);
		naam.push($scope.name);
		debtRec.push($scope.receive);		
	};




	$scope.add = function()
	{
		console.log($scope.title);
		console.log($scope.money);
		console.log($scope.name);
		console.log($scope.receive);

		if ($scope.receive == null || $scope.title == null || $scope.money==null || $scope.name == null)
		{
			alert("Je moet nog een vakje invullen...");
		}
		else
		{
			add();
			$(".stuff").empty();
		for (var i = 0; i < naam.length; i++)
			{
				
				$(".stuff").append("<div class='pin'>");

				$(".pin").append("<span class='Persoon'>" + naam[i] + "</span>")
				.append("<span class='debtRec'>" + debtRec[i] + "</span>")
				.append("<p class='title'>" + tittel[i] + "<p>")
				.append("<p class='bedragL'> &euro; " + bedrag[i] + "</p>")
				.append("</div>");
			}
		$(".pin").css("border", "5px solid white");
		$(".stuff").css("border", "5px solid white");
		$(".stuff").css("padding", "2%");
	}

		
		
	};

	$http.get("http://172.16.136.229:3000/2")
    .success(function(posts){
    	//$scope.
    })
    .error(function(err){
    	alert("Oops...");
    });

});
