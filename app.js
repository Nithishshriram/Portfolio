// Application Controller for Nithish Shriram Portfolio

document.addEventListener("DOMContentLoaded", () => {
    // 1. Verify Data File Integrity
    if (typeof PORTFOLIO_DATA === "undefined") {
        console.error("Error: portfolio-data.js not loaded properly.");
        return;
    }

    // 2. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // 3. Theme Management (Dark / Light Mode)
    initTheme();

    // 4. Render Layout Components
    renderHero();
    renderAbout();
    renderKPIs();
    renderSkills("All"); // Initial load of all skills
    renderSkillsTabs();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCertifications();
    renderLanguagesAndInterests();
    renderContactInfo();
    
    // 5. Setup Action Listeners
    setupNavAndMobileMenu();
    setupContactForm();
    setupScrollHandlers();
    generateDynamicQRCode();
});

// --- Theme Management ---
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check local storage or system preference
    if (localStorage.getItem("color-theme") === "dark" || 
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // Toggle click handler
    themeToggleBtn.addEventListener("click", () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    });
}

// --- Render Hero Section ---
function renderHero() {
    const info = PORTFOLIO_DATA.personalInfo;
    
    document.getElementById("hero-name").textContent = info.name;
    document.getElementById("hero-role").textContent = `${info.role} | ${info.subRole}`;
    document.getElementById("hero-summary").textContent = info.summary;
    
    // Setup social icons & download links
    const dlBtn = document.getElementById("hero-download");
    dlBtn.href = info.contact.resumeDownloadUrl;
    if (info.contact.resumeDownloadUrl === "#" || info.contact.resumeDownloadUrl === "") {
        dlBtn.addEventListener("click", (e) => {
            if (dlBtn.getAttribute("href") === "#") {
                e.preventDefault();
                alert("Resume file is being finalized. You can upload your PDF to the directory and link it inside portfolio-data.js!");
            }
        });
    }

    document.getElementById("hero-linkedin").href = info.contact.linkedin;
    document.getElementById("hero-github").href = info.contact.github;
    document.getElementById("hero-email").href = `mailto:${info.contact.email}`;
    document.getElementById("hero-phone").href = `tel:${info.contact.phone}`;
}

// --- Render About Section ---
function renderAbout() {
    const about = PORTFOLIO_DATA.about;
    document.getElementById("about-description").textContent = about.description;

    const strengthsContainer = document.getElementById("about-strengths-container");
    strengthsContainer.innerHTML = "";

    about.strengths.forEach((strength, index) => {
        const item = document.createElement("div");
        item.className = "flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 hover-glow";
        item.style.transitionDelay = `${index * 100}ms`;
        
        // Pick icons sequentially
        const icons = ["fa-circle-check", "fa-chart-pie", "fa-users-gear"];
        const iconClass = icons[index % icons.length];

        item.innerHTML = `
            <span class="w-10 h-10 rounded-xl bg-cobalt-50 dark:bg-cobalt-950 flex items-center justify-center text-cobalt-700 dark:text-sky-400 shrink-0 font-bold">
                <i class="fa-solid ${iconClass}"></i>
            </span>
            <div>
                <h4 class="font-heading font-bold text-sm text-slate-800 dark:text-white mb-1">${strength.title}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${strength.description}</p>
            </div>
        `;
        strengthsContainer.appendChild(item);
    });
}

// --- Render KPI Dashboard ---
function renderKPIs() {
    const kpisContainer = document.getElementById("kpis-container");
    kpisContainer.innerHTML = "";

    PORTFOLIO_DATA.kpis.forEach((kpi, index) => {
        const card = document.createElement("div");
        card.className = "p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover-glow text-center flex flex-col justify-between";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", (index * 150).toString());

        card.innerHTML = `
            <div class="flex justify-center mb-4">
                <span class="w-12 h-12 bg-cobalt-50 dark:bg-cobalt-950/60 border border-cobalt-100/50 dark:border-slate-800 text-cobalt-700 dark:text-sky-400 rounded-2xl flex items-center justify-center text-xl">
                    <i class="fa-solid ${kpi.icon}"></i>
                </span>
            </div>
            <div>
                <div class="font-heading font-extrabold text-3xl sm:text-4xl text-cobalt-700 dark:text-white mb-1">${kpi.value}</div>
                <div class="font-heading font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">${kpi.label}</div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-normal">${kpi.description}</p>
            </div>
        `;
        kpisContainer.appendChild(card);
    });
}

// --- Render Skills Grid & Tabs ---
function renderSkillsTabs() {
    const tabsContainer = document.getElementById("skills-tabs");
    tabsContainer.innerHTML = "";

    // Default "All" Tab
    const allTab = document.createElement("button");
    allTab.className = "px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all tab-active";
    allTab.textContent = "All Skills";
    allTab.addEventListener("click", (e) => {
        setActiveTab(e.target);
        renderSkills("All");
    });
    tabsContainer.appendChild(allTab);

    // Dynamic Categories Tabs
    PORTFOLIO_DATA.skills.forEach(cat => {
        const tab = document.createElement("button");
        tab.className = "px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all";
        tab.textContent = cat.category;
        tab.addEventListener("click", (e) => {
            setActiveTab(e.target);
            renderSkills(cat.category);
        });
        tabsContainer.appendChild(tab);
    });
}

function setActiveTab(clickedTab) {
    const tabs = document.querySelectorAll("#skills-tabs button");
    tabs.forEach(t => t.classList.remove("tab-active"));
    clickedTab.classList.add("tab-active");
}

function renderSkills(categoryFilter) {
    const gridContainer = document.getElementById("skills-grid-container");
    gridContainer.innerHTML = "";

    let delay = 0;
    PORTFOLIO_DATA.skills.forEach(cat => {
        if (categoryFilter === "All" || cat.category === categoryFilter) {
            cat.items.forEach(skill => {
                const card = document.createElement("div");
                card.className = "p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between hover-glow animate-fade-in";
                card.style.animationDelay = `${delay}ms`;
                delay += 50;

                // SVG Circular Indicator calculations
                // circumference = 2 * pi * r => r=16 => 100
                const radius = 14;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (skill.level / 100) * circumference;

                card.innerHTML = `
                    <div class="flex items-center gap-4">
                        <span class="w-11 h-11 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-cobalt-700 dark:text-sky-400 shadow-sm shrink-0 border border-slate-100 dark:border-slate-800">
                            <i class="fa-solid ${skill.icon} text-lg"></i>
                        </span>
                        <div>
                            <h4 class="font-heading font-bold text-sm text-slate-800 dark:text-white">${skill.name}</h4>
                            <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">${skill.detail || cat.category}</p>
                        </div>
                    </div>
                    
                    <div class="relative flex items-center justify-center w-12 h-12 shrink-0">
                        <svg class="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                            <circle class="stroke-slate-200 dark:stroke-slate-800" cx="18" cy="18" r="${radius}" stroke-width="3" fill="none" />
                            <circle class="stroke-cobalt-700 dark:stroke-sky-400 transition-all duration-1000" cx="18" cy="18" r="${radius}" stroke-width="3" fill="none"
                                    stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" />
                        </svg>
                        <span class="absolute text-[10px] font-heading font-extrabold text-slate-700 dark:text-slate-200">${skill.level}%</span>
                    </div>
                `;
                gridContainer.appendChild(card);
            });
        }
    });
}

// --- Render Experience Section ---
function renderExperience() {
    const timeline = document.getElementById("experience-timeline");
    timeline.innerHTML = "";

    PORTFOLIO_DATA.experience.forEach((job, index) => {
        const item = document.createElement("div");
        item.className = "relative timeline-item pl-4 md:pl-0 animate-on-scroll";
        item.setAttribute("data-aos", "fade-up");

        // Format bullet points
        const bulletsHtml = job.highlights.map(pt => `
            <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-cobalt-700 dark:bg-sky-400 shrink-0"></span>
                <span>${pt}</span>
            </li>
        `).join("");

        // Format tools badges
        const toolsHtml = job.tools.map(tool => `
            <span class="px-2.5 py-1 text-[10px] font-bold text-cobalt-700 dark:text-sky-300 bg-cobalt-50 dark:bg-slate-900 border border-cobalt-100 dark:border-slate-800 rounded-md uppercase tracking-wider">
                ${tool}
            </span>
        `).join("");

        item.innerHTML = `
            <!-- Left timeline bubble metadata for Desktop -->
            <div class="md:absolute md:right-[calc(100%+3.5rem)] md:top-2 md:text-right w-full md:w-28 mb-3 md:mb-0 shrink-0">
                <span class="inline-block font-heading font-extrabold text-xs text-cobalt-700 dark:text-sky-400 bg-cobalt-50 dark:bg-cobalt-950/50 px-3 py-1.5 rounded-full border border-cobalt-100 dark:border-slate-800 uppercase tracking-widest">${job.period}</span>
            </div>
            
            <!-- Core Content Panel -->
            <div class="timeline-dot p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover-glow transition-all">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                    <div class="flex items-center gap-4">
                        <img src="${job.logo}" alt="${job.company}" class="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-800 shadow-xs shrink-0">
                        <div>
                            <h3 class="font-heading font-extrabold text-xl text-slate-800 dark:text-white leading-tight">${job.role}</h3>
                            <p class="font-medium text-slate-500 dark:text-slate-400 text-sm mt-0.5">${job.company}</p>
                        </div>
                    </div>
                    <div class="text-left sm:text-right shrink-0">
                        <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                            <i class="fa-solid fa-location-dot"></i>
                            ${job.location}
                        </span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                    ${bulletsHtml}
                </ul>
                
                <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">Key Tools:</span>
                    ${toolsHtml}
                </div>
            </div>
        `;
        timeline.appendChild(item);
    });
}

// --- Render Education Section ---
function renderEducation() {
    const timeline = document.getElementById("education-timeline");
    timeline.innerHTML = "";

    PORTFOLIO_DATA.education.forEach((edu, index) => {
        const item = document.createElement("div");
        item.className = "relative timeline-item pl-4 md:pl-0 animate-on-scroll";
        item.setAttribute("data-aos", "fade-up");

        item.innerHTML = `
            <!-- Left Timeline Date for Desktop -->
            <div class="md:absolute md:right-[calc(100%+3.5rem)] md:top-2 md:text-right w-full md:w-28 mb-3 md:mb-0 shrink-0">
                <span class="inline-block font-heading font-extrabold text-xs text-cobalt-700 dark:text-sky-400 bg-cobalt-50 dark:bg-cobalt-950/50 px-3 py-1.5 rounded-full border border-cobalt-100 dark:border-slate-800 uppercase tracking-widest">${edu.period}</span>
            </div>
            
            <!-- Panel Content -->
            <div class="timeline-dot p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover-glow">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                        <span class="inline-block px-2.5 py-1 text-[10px] font-bold text-cobalt-700 dark:text-sky-300 bg-cobalt-50 dark:bg-slate-900 border border-cobalt-100 dark:border-slate-800 rounded-md uppercase tracking-wider mb-2">
                            ${edu.grade}
                        </span>
                        <h3 class="font-heading font-extrabold text-xl text-slate-800 dark:text-white leading-tight">${edu.degree}</h3>
                        <p class="font-semibold text-slate-500 dark:text-slate-400 text-sm mt-1">${edu.institution}</p>
                        <p class="text-xs text-slate-400 dark:text-slate-500 mt-2 leading-relaxed max-w-xl">${edu.details}</p>
                    </div>
                    <div class="shrink-0 text-left sm:text-right">
                        <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                            <i class="fa-solid fa-location-dot"></i>
                            ${edu.location}
                        </span>
                    </div>
                </div>
            </div>
        `;
        timeline.appendChild(item);
    });
}

// --- Render Projects Section ---
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = "";

    PORTFOLIO_DATA.projects.forEach((proj, index) => {
        const card = document.createElement("div");
        card.className = "project-card rounded-[32px] p-6 shadow-md hover-glow transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 animate-on-scroll";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", (index * 150).toString());

        // Format tags
        const tagsHtml = proj.technologies.map(tag => `
            <span class="px-2 py-0.5 text-[9px] font-extrabold text-white bg-white/10 rounded border border-white/10 uppercase tracking-widest">
                ${tag}
            </span>
        `).join("");

        // Optional PDF link setup
        let linksHtml = "";
        if (proj.pdfLink) {
            linksHtml += `
                <a href="${proj.pdfLink}" target="_blank" class="px-3.5 py-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
                    <i class="fa-solid fa-file-pdf"></i> PDF Doc
                </a>
            `;
        }
        if (proj.demoLink) {
            linksHtml += `
                <a href="${proj.demoLink}" target="_blank" class="px-3.5 py-2 bg-cobalt-700 hover:bg-cobalt-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                </a>
            `;
        }

        card.innerHTML = `
            <!-- background dynamic image representation -->
            <div class="project-bg-img" style="background-image: url('${proj.image}')"></div>
            <!-- dark overlay mask -->
            <div class="project-overlay"></div>
            
            <!-- content panel -->
            <div class="project-content w-full flex flex-col justify-end h-full">
                <!-- Tag row -->
                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${tagsHtml}
                </div>
                
                <span class="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">${proj.subtitle}</span>
                <h3 class="font-heading font-extrabold text-2xl text-white mb-3 leading-tight">${proj.title}</h3>
                <p class="text-xs text-slate-300 leading-relaxed mb-4">${proj.description}</p>
                
                <!-- Expanded details on hover (CSS triggers rendering visibility/height transitions) -->
                <div class="border-t border-white/10 pt-4 mt-2 space-y-3">
                    <div class="text-[11px] text-slate-300 leading-normal">
                        <strong class="text-white block mb-0.5 text-xs font-heading font-semibold uppercase tracking-wider">Objective:</strong> 
                        ${proj.objective}
                    </div>
                    <div class="text-[11px] text-slate-300 leading-normal">
                        <strong class="text-white block mb-0.5 text-xs font-heading font-semibold uppercase tracking-wider">My Contribution:</strong> 
                        ${proj.contribution}
                    </div>
                    
                    <!-- Dynamic Links block if present -->
                    ${linksHtml ? `<div class="flex items-center gap-2 pt-2">${linksHtml}</div>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- Render Certifications Section ---
function renderCertifications() {
    const grid = document.getElementById("certifications-grid");
    grid.innerHTML = "";

    PORTFOLIO_DATA.certifications.forEach((cert, index) => {
        const card = document.createElement("div");
        card.className = "p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 shadow-xs hover-glow transition-all animate-on-scroll";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", (index * 100).toString());

        card.innerHTML = `
            <div class="flex items-start justify-between gap-4 mb-4">
                <span class="w-10 h-10 rounded-xl bg-cobalt-50 dark:bg-cobalt-950 flex items-center justify-center text-cobalt-700 dark:text-sky-400 border border-cobalt-100/50 dark:border-slate-800/80 text-lg">
                    <i class="fa-solid fa-award"></i>
                </span>
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-[9px] uppercase tracking-wider">
                    <i class="fa-solid fa-circle-check"></i> Verified
                </span>
            </div>
            
            <h3 class="font-heading font-extrabold text-base text-slate-800 dark:text-white mb-1.5 leading-snug">${cert.name}</h3>
            <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">${cert.issuer} • ${cert.date}</p>
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/80 mt-auto">
                <div class="text-[10px] text-slate-400">
                    <span class="block uppercase font-bold text-[8px] text-slate-400 tracking-wider">Credential ID</span>
                    <code class="font-mono text-slate-500 dark:text-slate-300 font-bold">${cert.credentialId}</code>
                </div>
                <a href="${cert.verifyUrl}" target="_blank" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-cobalt-700 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold transition-all shrink-0">
                    Verify Certificate <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- Render Languages & Interests ---
function renderLanguagesAndInterests() {
    // Render Languages
    const langContainer = document.getElementById("languages-container");
    langContainer.innerHTML = "";

    PORTFOLIO_DATA.languages.forEach((lang, index) => {
        const item = document.createElement("div");
        item.className = "flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800";
        item.innerHTML = `
            <span class="text-sm font-semibold text-slate-800 dark:text-white">${lang.name}</span>
            <span class="text-xs font-bold text-cobalt-700 dark:text-sky-400 uppercase tracking-wide bg-cobalt-50 dark:bg-cobalt-950/30 border border-cobalt-100 dark:border-slate-800 px-3 py-1 rounded-lg">${lang.level}</span>
        `;
        langContainer.appendChild(item);
    });

    // Render Interests
    const intGrid = document.getElementById("interests-grid");
    intGrid.innerHTML = "";

    PORTFOLIO_DATA.interests.forEach((interest, index) => {
        const card = document.createElement("div");
        card.className = "p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 flex items-center gap-3 hover-glow";
        card.innerHTML = `
            <span class="w-9 h-9 rounded-xl bg-cobalt-50 dark:bg-cobalt-950 flex items-center justify-center text-cobalt-700 dark:text-sky-400 border border-cobalt-100/50 dark:border-slate-800/80">
                <i class="fa-solid ${interest.icon}"></i>
            </span>
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300 leading-snug">${interest.name}</span>
        `;
        intGrid.appendChild(card);
    });
}

// --- Render Contact Info details ---
function renderContactInfo() {
    const info = PORTFOLIO_DATA.personalInfo;
    
    document.getElementById("contact-email").href = `mailto:${info.contact.email}`;
    document.getElementById("contact-email-text").textContent = info.contact.email;
    
    document.getElementById("contact-phone").href = `tel:${info.contact.phone}`;
    document.getElementById("contact-phone-text").textContent = info.contact.phone;
    
    document.getElementById("contact-location-text").textContent = info.contact.location;
}

// --- Setup Nav Elements and Mobile Slider ---
function setupNavAndMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const links = document.querySelectorAll(".mobile-nav-link");

    const toggle = () => {
        menu.classList.toggle("hidden");
    };

    btn.addEventListener("click", toggle);
    links.forEach(l => l.addEventListener("click", () => {
        menu.classList.add("hidden");
    }));

    // Shrink header on scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("py-2.5", "shadow-md");
            header.classList.remove("py-4");
        } else {
            header.classList.add("py-4");
            header.classList.remove("py-2.5", "shadow-md");
        }
    });
}

// --- Dynamic QR Code Setup ---
function generateDynamicQRCode() {
    const qrBox = document.getElementById("qr-box");
    const currentUrl = window.location.href;
    
    // Check if hosted or local
    const qrData = currentUrl.startsWith("file://") 
        ? `https://linkedin.com/in/nithishshriram` // Fallback to LinkedIn link if run locally
        : currentUrl;
        
    // Use clear public QR generator API to generate actual live QR Code!
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    
    qrBox.innerHTML = `
        <img src="${qrApiUrl}" alt="Portfolio QR Code" class="w-full h-full object-contain rounded-lg shadow-sm border border-slate-100">
    `;

    // Copy to clipboard setup
    const copyBtn = document.getElementById("copy-link-btn");
    copyBtn.addEventListener("click", () => {
        const copyText = currentUrl.startsWith("file://") ? "https://linkedin.com/in/nithishshriram" : currentUrl;
        
        navigator.clipboard.writeText(copyText).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            copyBtn.classList.remove("text-cobalt-700", "dark:text-sky-400", "bg-cobalt-50");
            copyBtn.classList.add("bg-emerald-500", "text-white");
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove("bg-emerald-500", "text-white");
                copyBtn.classList.add("text-cobalt-700", "dark:text-sky-400", "bg-cobalt-50");
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy link: ", err);
        });
    });
}

// --- Setup Form Validation & Submission mockup ---
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector("button[type='submit']");
        const originalHtml = submitBtn.innerHTML;
        
        // Simulating loader
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin mr-2"></i> Sending...`;
        
        setTimeout(() => {
            feedback.className = "p-4 rounded-xl text-sm text-center font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50";
            feedback.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5"></i> Thank you! Your message has been sent successfully.`;
            feedback.classList.remove("hidden");
            
            // Clear inputs
            form.reset();
            
            // Restore btn
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHtml;
            
            // Fade out success banner
            setTimeout(() => {
                feedback.classList.add("hidden");
            }, 6000);
        }, 1500);
    });
}

// --- Handles Back-to-top show/hide & triggers scroll checks ---
function setupScrollHandlers() {
    const toTopBtn = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            toTopBtn.classList.remove("hidden");
            toTopBtn.classList.add("flex");
        } else {
            toTopBtn.classList.add("hidden");
            toTopBtn.classList.remove("flex");
        }
    });

    toTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
