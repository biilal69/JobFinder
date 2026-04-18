document.addEventListener("DOMContentLoaded", function () {
    // 1. توحيد المفتاح ليكون "jobs" عشان يقرأ نفس بيانات صفحة العرض
    const STORAGE_KEY = "jobs";

    function getJobs() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    // 2. دالة تحديث أرقام الإحصائيات (Dashboard)
    function updateDashboardStats() {
        const jobs = getJobs();
        
        // تعديل: التأكد من حالة الوظيفة (Open/Closed) بغض النظر عن حالة الحروف
        const openJobs = jobs.filter(j => j.status && j.status.toString().toLowerCase() === "open").length;
        const closedJobs = jobs.filter(j => j.status && j.status.toString().toLowerCase() === "closed").length;

        const openEl = document.getElementById("open-jobs-count");
        const closedEl = document.getElementById("closed-jobs-count");

        // لو العناصر دي موجودة في الـ HTML بتاعك، الكود هيحدث الأرقام فوراً
        if (openEl) openEl.innerText = openJobs;
        if (closedEl) closedEl.innerText = closedJobs;
    }

    // 3. دالة عرض الجدول ديناميكياً (Manage Jobs)
    function renderAdminTable() {
        const tbody = document.querySelector(".admin-main-jobs table tbody");
        if (!tbody) return; // لو مش في صفحة الجدول، الكود مش هيضرب Error

        const jobs = getJobs();
        tbody.innerHTML = ""; // مسح أي صفوف Static مكتوبة يدوياً

        jobs.forEach((job, index) => {
            const row = document.createElement("tr");
            
            // تعديل مهم: استخدمنا job.name و job.salary عشان تطابق الملف اللي إنتي بعتيه
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${job.name || "No Title"}</td>
                <td>${job.salary || "0"} EGP</td>
                <td><span class="status ${(job.status || 'open').toLowerCase()}">${job.status || 'Open'}</span></td>
                <td class="button"> 
                     <button class="btn-edit" onclick="alert('Edit logic coming soon!')">Edit</button> 
                     <button type="button" class="btn-delete" data-index="${index}">Delete</button> 
                </td>
            `;
            tbody.appendChild(row);
        });

        // تفعيل أزرار الحذف بعد ما الجدول يترسم
        attachDeleteEvents();
    }

    // 4. دالة الحذف (Delete)
    function attachDeleteEvents() {
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.onclick = function() {
                const index = this.getAttribute('data-index');
                if (confirm("هل أنتِ متأكدة من حذف هذه الوظيفة؟")) {
                    let jobs = getJobs();
                    jobs.splice(index, 1); // حذف الوظيفة من المصفوفة
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs)); // حفظ التعديل
                    
                    // تحديث الصفحة فوراً بدون عمل Refresh
                    renderAdminTable();
                    updateDashboardStats();
                }
            };
        });
    }

    // تشغيل الدوال بمجرد فتح الصفحة
    updateDashboardStats();
    renderAdminTable();
});