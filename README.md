# JobFinder
Web Technology 2026 Project
This is a Web Dev project, me and my team will be WORKING ON Showing hands-on skills on Making Websites
FCAI - CU

A simple Job search application where company admin can add/edit/delete job opportunities and users can search/apply on them. The website should have 2 types of users: either a company admin or a user. Each can sign up and choose whether to be a company admin or a user.
Company admin can:
1.	Sign up (fill in form “username, password, confirm password, email and is_company_admin”, in case is_company_admin=True then add extra field for company name)
2.	Login
3.	Add new job opportunity
(Job includes ID, job title, salary, company name, job status can hold one of the following values ”open, closed”, description and years of experience, created by logged-in admin)
4.	View list of created jobs by admin’s company.
5.	Select a job and edit its details.
6.	Delete a job

User can:
1.	Sign up (fill in form “username, password, confirm password, email and is_admin”)
2.	Login
3.	Search for tasks by job title or years of experience and results are displayed accordingly.
4.	View list of available jobs.
5.	Select a job and view its details in a job page.
6.	Apply for a job.
7.	View list of applied jobs for that user.

-	Job search website should have a navigation bar.
-	The navigation bar should be adjusted dynamically based on the logged in user.
-	The navigation bar should be accessible from all web pages
