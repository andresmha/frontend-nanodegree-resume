//DATA Definition
var work = {
	jobs: [
		{
			employer: "Inalambrik",
			title: "Project Manager",
			location: "Guayaquil - Ecuador",
			dates: "2016 - current",
			description: ""
		},
		{
			employer: "Batan",
			title: "Software Development Manager",
			location: "Guayaquil - Ecuador",
			dates: "2010 - 2016",
			description: ""
		}
	]
};

var projects = {
	projects: [
		{
			title: "",
			dates: "",
			description: "",
			images: []
		}
	]
};

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
	skills: ["HTML5", "CSS3", "JavaScript"]
};

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


//Interaction

//Skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}
