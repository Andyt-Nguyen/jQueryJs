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
		showUsers();
	});


});
