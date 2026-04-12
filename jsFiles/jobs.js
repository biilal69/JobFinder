document.addEventListener("DOMContentLoaded", function(){

const titleInput = document.getElementById("jobTitle");
const experienceInput = document.getElementById("experience");
const statusFilter = document.getElementById("statusFilter");

const jobCards = document.querySelectorAll(".job-card");

const params = new URLSearchParams(window.location.search);

const searchTitle = params.get("title");
const searchExperience = params.get("experience");

if(titleInput && searchTitle){
titleInput.value = searchTitle;
}

if(experienceInput && searchExperience){
experienceInput.value = searchExperience;
}


function filterJobs(){

let titleValue = titleInput ? titleInput.value.toLowerCase() : "";
let expValue = experienceInput ? experienceInput.value : "";
let statusValue = statusFilter ? statusFilter.value : "all";

let visibleJobs = 0;

jobCards.forEach(function(card){

let jobTitle = card.dataset.title.toLowerCase();
let jobExperience = card.dataset.experience;
let jobStatus = card.dataset.status;

let titleMatch = jobTitle.includes(titleValue);

let experienceMatch =
expValue === "" || parseInt(jobExperience) >= parseInt(expValue);

let statusMatch =
statusValue === "all" || jobStatus === statusValue;

if(titleMatch && experienceMatch && statusMatch){

card.style.display = "block";
visibleJobs++;

}else{

card.style.display = "none";

}

});

let message = document.getElementById("noJobsMessage");

if(message){

if(visibleJobs === 0){
message.style.display = "block";
}else{
message.style.display = "none";
}

}

}

if(titleInput){
titleInput.addEventListener("input", filterJobs);
}

if(experienceInput){
experienceInput.addEventListener("input", filterJobs);
}

if(statusFilter){
statusFilter.addEventListener("change", filterJobs);
}
const form = document.querySelector(".search-form");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();
filterJobs();
});
}

filterJobs();


});
function applyJob(jobTitle){

let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

appliedJobs.push(jobTitle);

localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

alert("Application submitted successfully!");

window.location.href = "applied-jobs.html";

}   