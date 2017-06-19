"use strict";

//Variable declaration with HTML values

/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';





/**
 * Objects declaration
 */
//Constant value to be replaced
var DATA = "%data%";
var LINK = "#";

/**
 * BIO Object
 */

//Object Creation
var bio = {
    name: "Andres Hernandez",
    role: "Front End Developer",
    contacts: {
        mobile: "09805258885",
        email: "andru.h@gmail.com",
        github: "andresmha",
        twitter: "@andru_h_a",
        location: "Guayaquil, Ecuador"
    },
    welcomeMessage: "Duis hendrerit purus tortor, quis gravida lorem pellentesque et. Fusce dignissim a felis et aliquam",
    skills: ["HTML5", "CSS3", "JavaScript", "Grunt", "jQuery"],
    biopic: "images/fry.jpg"
};

//Display Contacts Function
var displayContacts = function(selector) {
    //Contact Info
    $(selector)
        .append(HTMLmobile.replace(DATA, bio.contacts.mobile))
        .append(HTMLemail.replace(DATA, bio.contacts.email))
        .append(HTMLtwitter.replace(DATA, bio.contacts.twitter))
        .append(HTMLgithub.replace(DATA, bio.contacts.github))
        .append(HTMLlocation.replace(DATA, bio.contacts.location));
};


//Function to display Bio object
bio.display = function() {

    //General Info
    $("#header")
        .prepend(HTMLheaderRole.replace(DATA, bio.role))
        .prepend(HTMLheaderName.replace(DATA, bio.name))
        .append(HTMLbioPic.replace(DATA, bio.biopic))
        .append(HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage));

    //Contacts
    displayContacts("#topContacts");

    //Skills
    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(value) {
            $("#skills").append(HTMLskills.replace(DATA, value));
        });
    }
};


/**
 * WORK Object
 */

//Object Creation
var work = {
    jobs: [{
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
            description: "Nunc ac lobortis lectus. Duis hendrerit purus tortor, quis gravida lorem pellentesque et. Fusce dignissim a felis et aliquam. Maecenas id turpis vel eros porttitor suscipit a ut nulla. Phasellus ac velit vitae arcu lobortis fringilla vitae nec quam. Etiam molestie erat consectetur ante porta malesuada. Proin faucibus arcu vitae nulla euismod hendrerit. Aenean fringilla neque et eleifend volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci leo, aliquet ac neque. Curabitur ut placerat justo, mattis accumsan purus."
        }
    ]
};

//Display Jobs
work.display = function() {
    //Each work entry
    work.jobs.forEach(function(value) {
        //Create new entry
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployerTitle = HTMLworkEmployer.replace(DATA, value.employer) + HTMLworkTitle.replace(DATA, value.title);

        //Append all info to last entry
        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(HTMLworkDates.replace(DATA, value.dates))
            .append(HTMLworkLocation.replace(DATA, value.location))
            .append(HTMLworkDescription.replace(DATA, value.description));
    });
};

/**
 * PROJECTS Object
 */

//Object Creation
var projects = {
    projects: [{
            title: "FEND - Portfolio",
            dates: "2017",
            description: "Portfolio for Udacity FEND",
            images: ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            title: "FEND - Resume",
            dates: "2017",
            description: "Resume for Udacity FEND",
            images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

//Display projects
projects.display = function() {
    projects.projects.forEach(function(value) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
            .append(HTMLprojectTitle.replace(DATA, value.title))
            .append(HTMLprojectDates.replace(DATA, value.dates))
            .append(HTMLprojectDescription.replace(DATA, value.description));

        value.images.forEach(function(value) {
            $(".project-entry:last").append(HTMLprojectImage.replace(DATA, value));
        });
    });
};

/**
 * EDUCATION Object
 */

//Object Creation
var education = {
    schools: [{
        name: "Santa María University",
        location: "Guayaquil - Ecuador",
        degree: "Computer Science",
        majors: ["Informatics", "Management"],
        dates: "2003-2009",
        url: "http:/www.usm.edu.ec"
    }],
    onlineCourses: [{
            title: "PHP & MySql Developer",
            school: "ESPE University",
            dates: "2016",
            url: "https:/www.espe.edu.ec"
        },
        {
            title: "Front End Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https:/www.udacity.com"
        }
    ]
};

//Display Education object
education.display = function() {

    education.schools.forEach(function(value) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolDegree = HTMLschoolName.replace(DATA, value.name) + HTMLschoolDegree.replace(DATA, value.degree);

        $(".education-entry:last")
            .append(formattedSchoolDegree.replace(LINK, value.url))
            .append(HTMLschoolDates.replace(DATA, value.dates))
            .append(HTMLschoolLocation.replace(DATA, value.location));

        value.majors.forEach(function(value) {
            $(".education-entry:last").append(HTMLschoolMajor.replace(DATA, value));
        });
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(value) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace(DATA, value.title) + HTMLonlineSchool.replace(DATA, value.school);

        $(".education-entry:last")
            .append(formattedOnlineTitle)
            .append(HTMLonlineDates.replace(DATA, value.dates))
            .append(HTMLonlineURL.replace(DATA, value.url));
    });
};


/**
 * Display Page
 */

//Bio section
bio.display();

//Work section
work.display();

//Projects section
projects.display();

//Education section
education.display();

//Footer Contacts
displayContacts("#footerContacts");

//Display Map
$("#mapDiv").append(googleMap);