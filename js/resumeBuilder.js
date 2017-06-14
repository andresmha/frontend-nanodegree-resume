/**
* Objects declaration
*/

//Constant value to be replaced
var DATA = "%data%";

/**
* BIO Object
*/

 //Object Creation
var bio = {
	name: "Andres Hernandez",
	role: "Front End Developer",
	welcomeMessage: "Hello World",
	biopic: "images/fry.jpg",
	contacts: {
		mobile: "0980528558",
		email: "andru.h@gmail.com",
		github: "https://github.com/andresmha",
		twitter: "https://twitter.com/andru_h_a",
		location: "Guayaquil"
	},
	skills: ["HTML5", "CSS3", "JavaScript"],
};

//FUNCTIONS

//Display general Bio Information
bio.displayBio = function() {
	$("#header").prepend(HTMLheaderRole.replace(data, bio.role));
	$("#header").prepend(HTMLheaderName.replace(data, bio.name));
};

//Display Contact Info
bio.displayContacts = function() {
		
};

//Display listed Skills
bio.displaySkills= function() {
	if (bio.skills.length) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(value) {
			$("#skills").append(HTMLskills.replace(data, value));
		});
	}
};

//General function to display all Bio information
bio.display = function() {
	bio.displayBio();
	bio.displaySkills();
};

/**
* EDUCATION Object
*/

//Object Creation
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

//FUNCTIONS

//Display general Bio Information

/**
* WORK Object
*/

//Object Creation
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
			description: "Nunc ac lobortis lectus. Duis hendrerit purus tortor, quis gravida lorem pellentesque et. Fusce dignissim a felis et aliquam. Maecenas id turpis vel eros porttitor suscipit a ut nulla. Phasellus ac velit vitae arcu lobortis fringilla vitae nec quam. Etiam molestie erat consectetur ante porta malesuada. Proin faucibus arcu vitae nulla euismod hendrerit. Aenean fringilla neque et eleifend volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci leo, aliquet ac neque. Curabitur ut placerat justo, mattis accumsan purus. "
		}
	],
};

//FUNCTIONS

//Display Jobs
work.display = function() {
	work.jobs.forEach(function(value) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployerTitle = HTMLworkEmployer.replace(data, value.employer) + HTMLworkTitle.replace(data, value.title);
	$(".work-entry:last")
		.append(formattedEmployerTitle)
		.append(HTMLworkDates.replace(data, value.dates))
		.append(HTMLworkDescription.replace(data, value.description));
	});
};

/**
* PROJECTS Object
*/

//Object Creation
var projects = {
	projects: [
		{
			title: "FEND - Portfolio",
			dates: "May 2017",
			description: "Portfolio for Udacity FEND",
			images: []
		},
		{
			title: "FEND - Resume",
			dates: "May 2017",
			description: "Resume for Udacity FEND",
			images: []
		}
	],
	
};

//FUNCTIONS

//Display projects
projects.display = function() {
	projects.projects.forEach(function(value) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last")
			.append(HTMLprojectTitle.replace(data, value.title))
			.append(HTMLprojectDates.replace(data, value.dates))
			.append(HTMLprojectDescription.replace(data, value.description));

		value.images.forEach(function(value) {
			$(".project-entry").append(HTMLprojectImage.replace(data, value));
		});


	});
};

/**
* Display Page
*/

//bio
bio.display();

//Work
work.display();

//Projects
projects.display();






/*
//Internationalize Button for testing
$("#main").append(internationalizeButton);

//FUNCTIONS

//Internationalize function
function inName(name){
	name = name.split(" ");
	return name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
}*/