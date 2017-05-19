//Interaction
var data = "%data%";

//BIO
var bio = {
	name: "Andres Hernandez",
	role: "Front End Developer",
	welcomeMessage: "Hello World",
	biopic: "",
	contacts: {
		mobile: "",
		email: "",
		github: "",
		twitter: "",
		location: ""
	},
	skills: ["HTML5", "CSS3", "JavaScript"],
	displaySkills: function() {
		if (bio.skills.length) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(value){
				$("#skills").append(HTMLskills.replace(data, value));
			});
		}
	},
	displayBio: function() {
		$("#header").prepend(HTMLheaderRole.replace(data, bio.role));
		$("#header").prepend(HTMLheaderName.replace(data, bio.name));
	},
	display: function() {
		bio.displayBio();
		bio.displaySkills();
	}

};

//EDUCATION
var education = { 
	schools: [
		{
			name: "",
			location: "",
			degree: "",
			dates: "",
			url: "",
			majors: [],
		}
	],
	onlineCourses: [
		{
			title: "",
			school: "",
			dates: "",
			url: ""
		}
	]
};

//WORK 
var work = {
	jobs: [
		{
			employer: "Inalambrik",
			title: "Project Manager",
			location: "Guayaquil - Ecuador",
			dates: "2016 - current",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci leo, venenatis sed blandit tincidunt, aliquet ac neque. Curabitur ut placerat justo, mattis accumsan purus. Nunc ac lobortis lectus. Duis hendrerit purus tortor, quis gravida lorem pellentesque et. Fusce dignissim a felis et aliquam. Maecenas id turpis vel eros porttitor suscipit a ut nulla. Phasellus ac velit vitae arcu lobortis fringilla vitae nec quam. Etiam molestie erat consectetur ante porta malesuada. Proin faucibus arcu vitae nulla euismod hendrerit. Aenean fringilla neque et eleifend volutpat."
		},
		{
			employer: "Batan",
			title: "Software Development Manager",
			location: "Guayaquil - Ecuador",
			dates: "2010 - 2016",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci leo, venenatis sed blandit tincidunt, aliquet ac neque. Curabitur ut placerat justo, mattis accumsan purus. Nunc ac lobortis lectus. Duis hendrerit purus tortor, quis gravida lorem pellentesque et. Fusce dignissim a felis et aliquam. Maecenas id turpis vel eros porttitor suscipit a ut nulla. Phasellus ac velit vitae arcu lobortis fringilla vitae nec quam. Etiam molestie erat consectetur ante porta malesuada. Proin faucibus arcu vitae nulla euismod hendrerit. Aenean fringilla neque et eleifend volutpat."
		}
	],
	display: function(){
		work.jobs.forEach(function(value){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerTitle = HTMLworkEmployer.replace(data, value.employer) + HTMLworkTitle.replace(data, value.title);
		$(".work-entry:last")
			.append(formattedEmployerTitle)
			.append(HTMLworkDates.replace(data, value.dates))
			.append(HTMLworkDescription.replace(data, value.description));
		});
	}
};

//PROJECTS
var projects = {
	projects: [
		{
			title: "",
			dates: "",
			description: "",
			images: []
		}
	],
	display: function() {

	}
};




//bio
bio.display();

//Work
work.display();

//Projects
projects.display();



//Internationalize BUtton for testing
$("#main").append(internationalizeButton);



//FUNCTIONS

//Internationalize function
function inName(name){
	name = name.split(" ");
	return name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
}