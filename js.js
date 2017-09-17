$(document).ready(function(){
	state = {
		people: [{
			name:"Henry",
			lastName: "Ford"
		},
		{
			name:"Gregory",
			lastName: "Long"
		},
		{
			name:"Kingdom",
			lastName:"Kome"
		}]
	};

	var showUsers = function(){
		var people = document.getElementById("people");
		var output = "";
		var peeps = state.people.map( a => {
			output += `<h1>${a.name} ${a.lastName}</h1>`;
		});
		people.innerHTML = output;
	};
	showUsers();


	$("#addPeople").on('submit', function(e){
		e.preventDefault();
		var people = state.people;
		var name = $("#name").val();
		var lastName = $("#lastname").val();
		let fullName = {name, lastName};
		people.push(fullName);
		$("#name").val("");
		$("#lastname").val("");
		showUsers();
	});

	// $.ajax({
	// 	method:"GET",
	// 	url:"https://jsonplaceholder.typicode.com/posts",
	// 	dataType:"json"
	// }).done(function(data){
	// 	data.map(function(a,i){
	// 		$("#description").append(`<p>${a.title}</p>`)
	// 	})
	// });

	//Find Github User
	$("#githubFinder").on('submit', function(e){
		e.preventDefault();
		var name = $("#githubName").val();
		$.ajax({
			method:"GET",
			url: "https://api.github.com/users/" + name
		}).done(function(data){
			var image = data.avatar_url;
			var userName = data.login;
			var followers = data.followers;
			$("#githubInfo").html(
					"<img width='100px' src="+image+"> " +
					"<h3>"+userName+"</h3>" +
					"<h3>"+followers+"</h3>"
				);

				$("#githubName").val("");
		});
	});


});

// <img src="https://placehold.it/75" alt="">
// <h3>Username</h3>
// <h3>23.24</h3>
