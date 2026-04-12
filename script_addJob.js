var jopPositioInput = document.getElementById("jobName");
var jobCampanyInput = document.getElementById("campany");
var jobSalaryInput = document.getElementById("salary");
var jobExperienceInput = document.getElementById("experience");
var jobStatusInput = document.getElementById("options");
var jobTypeInput = document.getElementById("type");

var jobContainer = [];

function addJOB() {
    var job = {
        name: jopPositioInput.value,
        campany: jobCampanyInput.value,
        salary: jobSalaryInput.value,
        experiance: jobExperienceInput.value,
        status: jobStatusInput.value,
        type: jobTypeInput.value
    };

    jobContainer.push(job);
    display();
}

function display() {
    let cartona = "";

    for (let i = 0; i < jobContainer.length; i++) {
        cartona += `
            <section class="jobs-container">

            <article class="job-card"
            data-title=""
            data-experience="2"
            data-status="open">

            <h3>${jobContainer[i].name}</h3>

            <p class="posted-date">
            <strong>Posted:</strong> 22 Feb 2026
            </p>

            <p><strong>Company:</strong> ${jobContainer[i].campany}</p>

            <p><strong>Salary:</strong> ${jobContainer[i].salary}</p>

            <p><strong>Experience Required:</strong> ${jobContainer[i].experiance}</p>

            <p><strong>Job Type:</strong> ${jobContainer[i].type}</p>

            <p><strong>Status:</strong>
            <span class="status open">${jobContainer[i].status}</span>
            </p>

            <a href="job1-details.html">
            <button class="btn-secondary">View Details</button>
            </a>

            </article>
            </section>
        `;
    }

    document.getElementById("jobs-container").innerHTML = cartona;
}