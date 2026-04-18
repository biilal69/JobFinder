document.addEventListener("DOMContentLoaded", function () {
    // 1. توحيد المفتاح ليكون "jobs" كما في صفحة الإضافة والعرض
    const STORAGE_KEY = "jobs";

    function getJobs() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    // 2. دالة تحديث أرقام الإحصائيات (Dashboard)
    function updateDashboardStats() {
        const jobs = getJobs();
        const openJobs = jobs.filter(j => j.status && j.status.toLowerCase() === "open").length;
        const closedJobs = jobs.filter(j => j.status && j.status.toLowerCase() === "closed").length;

        const openEl = document.getElementById("open-jobs-count");
        const closedEl = document.getElementById("closed-jobs-count");

        if (openEl) openEl.innerText = openJobs;
        if (closedEl) closedEl.innerText = closedJobs;
    }

    // 3. دالة عرض الجدول ديناميكياً (Admin Manage Jobs)
    function renderAdminTable() {
        const tbody = document.querySelector(".admin-main-jobs table tbody");
        if (!tbody) return; // لو مش في صفحة الجدول ميعملش حاجة

        const jobs = getJobs();
        tbody.innerHTML = ""; // مسح الصفوف الثابتة القديمة

        jobs.forEach((job, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${job.name || "No Title"}</td>
                <td>${job.salary || "N/A"} EGP</td>
                <td><span class="status ${job.status.toLowerCase()}">${job.status}</span></td>
                <td class="button"> 
                     <button class="btn-edit" onclick="alert('Edit logic goes here')">Edit</button> 
                     <button type="button" class="btn-delete" data-index="${index}">Delete</button> 
                </td>
            `;
            tbody.appendChild(row);
        });

        // تفعيل أزرار الحذف بعد رسم الجدول
        attachDeleteEvents();
    }

    // 4. دالة الحذف
    function attachDeleteEvents() {
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.onclick = function() {
                const index = this.getAttribute('data-index');
                if (confirm("هل أنتِ متأكدة من حذف هذه الوظيفة؟")) {
                    let jobs = getJobs();
                    jobs.splice(index, 1);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
                    
                    // تحديث الجدول والإحصائيات فوراً
                    renderAdminTable();
                    updateDashboardStats();
                }
            };
        });
    }

    // تشغيل الدوال عند تحميل الصفحة
    updateDashboardStats();
    renderAdminTable();
});