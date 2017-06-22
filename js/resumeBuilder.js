"use strict";
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

    //Footer Contacts
    displayContacts("#footerContacts");

    //Skills
    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace(DATA, skill));
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
    work.jobs.forEach(function(job) {
        //Create new entry
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployerTitle = HTMLworkEmployer.replace(DATA, job.employer) + HTMLworkTitle.replace(DATA, job.title);

        //Append all info to last entry
        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(HTMLworkDates.replace(DATA, job.dates))
            .append(HTMLworkLocation.replace(DATA, job.location))
            .append(HTMLworkDescription.replace(DATA, job.description));
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
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
            .append(HTMLprojectTitle.replace(DATA, project.title))
            .append(HTMLprojectDates.replace(DATA, project.dates))
            .append(HTMLprojectDescription.replace(DATA, project.description));

        project.images.forEach(function(projectImage) {
            $(".project-entry:last").append(HTMLprojectImage.replace(DATA, projectImage));
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

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolDegree = HTMLschoolName.replace(DATA, school.name) + HTMLschoolDegree.replace(DATA, school.degree);

        $(".education-entry:last")
            .append(formattedSchoolDegree.replace(LINK, school.url))
            .append(HTMLschoolDates.replace(DATA, school.dates))
            .append(HTMLschoolLocation.replace(DATA, school.location));

        school.majors.forEach(function(major) {
            $(".education-entry:last").append(HTMLschoolMajor.replace(DATA, major));
        });
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace(DATA, onlineCourse.title) + HTMLonlineSchool.replace(DATA, onlineCourse.school);

        $(".education-entry:last")
            .append(formattedOnlineTitle)
            .append(HTMLonlineDates.replace(DATA, onlineCourse.dates))
            .append(HTMLonlineURL.replace(DATA, onlineCourse.url));
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

//Display Map
$("#mapDiv").append(googleMap);
