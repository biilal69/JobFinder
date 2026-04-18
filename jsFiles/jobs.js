document.addEventListener("DOMContentLoaded", function(){

const titleInput = document.getElementById("jobTitle");
const experienceInput = document.getElementById("experience");
const statusFilter = document.getElementById("statusFilter");

const container = document.querySelector(".jobs-container");


let storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

storedJobs.forEach(function(job) {

    let statusClass = job.status.toLowerCase();

    container.innerHTML += `
    <article class="job-card"
        data-title="${job.name}"
        data-experience="${job.experiance}"
        data-status="${statusClass}">

        <h3>${job.name}</h3>

        <p class="posted-date">
        <strong>Posted:</strong> 22 Feb 2026
        </p>

        <p><strong>Company:</strong> ${job.campany}</p>

        <p><strong>Salary:</strong> ${job.salary} EGP</p>

        <p><strong>Experience Required:</strong> ${job.experiance} Years</p>

        <p><strong>Job Type:</strong> ${job.type}</p>

        <p><strong>Status:</strong>
        <span class="status ${statusClass}">
            ${job.status}
        </span>
        </p>

        <a href="job1-details.html">
        <button class="btn-secondary">View Details</button>
        <button onclick="applyJob('${job.name}')">Apply</button>
        </a>

    </article>
    `;
});

function filterJobs(){

let titleValue = titleInput ? titleInput.value.toLowerCase() : "";
let expValue = experienceInput ? experienceInput.value : "";
let statusValue = statusFilter ? statusFilter.value : "all";

let visibleJobs = 0;

document.querySelectorAll(".job-card").forEach(function(card){

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
message.style.display = visibleJobs === 0 ? "block" : "none";
}

}

if(statusFilter){
statusFilter.addEventListener("change", filterJobs);
}

if(titleInput){
titleInput.addEventListener("input", filterJobs);
}

if(experienceInput){
experienceInput.addEventListener("input", filterJobs);
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

function applyJob(jobName){

let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];


if(!appliedJobs.includes(jobName)){
    appliedJobs.push(jobName);
}



localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

alert("Application submitted successfully!");

window.location.href = "applied-jobs.html";
}
