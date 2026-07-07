/* ==========================================================
   MAIN.JS
   Renders the entire site from PORTFOLIO_DATA (js/data.js).
   You should not need to edit this file for normal content
   updates — only edit js/data.js.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const D = PORTFOLIO_DATA;

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('done'), 350);
  });

  /* ---------- HERO ---------- */
  document.getElementById('heroName').textContent = D.site.name;
  document.getElementById('heroRole').textContent = D.site.role;
  document.getElementById('heroSummary').textContent = D.site.summary;
  document.getElementById('downloadResumeBtn').setAttribute('href', D.site.resumeFile);
  document.title = `${D.site.name} — ${D.site.role}`;

  const socials = document.getElementById('heroSocials');
  const socialLinks = [
    { url: D.site.linkedin, icon: 'fa-brands fa-linkedin-in' },
    { url: D.site.github, icon: 'fa-brands fa-github' },
    { url: `mailto:${D.site.email}`, icon: 'fa-regular fa-envelope' },
    { url: `tel:${D.site.phone.replace(/\s+/g, '')}`, icon: 'fa-solid fa-phone' }
  ];
  socialLinks.forEach(s => {
    if (!s.url) return;
    const a = document.createElement('a');
    a.href = s.url;
    a.target = s.url.startsWith('http') ? '_blank' : '_self';
    a.rel = 'noopener';
    a.innerHTML = `<i class="${s.icon}"></i>`;
    socials.appendChild(a);
  });

  const heroStatsEl = document.getElementById('heroStats');
  D.site.heroStats.forEach(s => {
    const div = document.createElement('div');
    div.className = 'dash-stat';
    div.innerHTML = `<span class="num" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span><span class="lbl">${s.label}</span>`;
    heroStatsEl.appendChild(div);
  });

  /* animate counters once hero is visible */
  const counters = document.querySelectorAll('.dash-stat .num');
  const animateCounters = () => {
    counters.forEach(el => {
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.max(target / 40, 0.5);
      const tick = () => {
        current += step;
        if (current >= target) { el.textContent = target + suffix; return; }
        el.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(tick);
      };
      tick();
    });
  };
  setTimeout(animateCounters, 500);

  /* ---------- ABOUT ---------- */
  const aboutP = document.getElementById('aboutParagraphs');
  D.about.paragraphs.forEach(p => {
    const el = document.createElement('p');
    el.textContent = p;
    aboutP.appendChild(el);
  });
  const aboutH = document.getElementById('aboutHighlights');
  D.about.highlights.forEach(h => {
    const div = document.createElement('div');
    div.className = 'highlight-item';
    div.innerHTML = `<i class="fa-solid ${h.icon}"></i><span>${h.text}</span>`;
    aboutH.appendChild(div);
  });

  /* ---------- SKILLS ---------- */
  const skillsGrid = document.getElementById('skillsGrid');
  D.skillGroups.forEach((group, gi) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(gi * 100));
    const rows = group.skills.map(s => `
      <div class="skill-row">
        <div class="lbl-row"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      </div>`).join('');
    card.innerHTML = `<h3><i class="fa-solid ${group.icon}"></i> ${group.title}</h3>${rows}`;
    skillsGrid.appendChild(card);
  });

  /* ---------- EXPERIENCE ---------- */
  const expTL = document.getElementById('experienceTimeline');
  D.experience.forEach((job, i) => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', String(i * 80));
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <span class="tl-period">${job.period}</span>
        <h3 class="tl-role">${job.role}</h3>
        <p class="tl-org">${job.org} · ${job.location}</p>
        <ul class="tl-points">${job.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`;
    expTL.appendChild(item);
  });

  /* ---------- PROJECTS ---------- */
  const projGrid = document.getElementById('projectsGrid');
  D.projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(i * 100));
    card.innerHTML = `
      <span class="project-client">${proj.client}</span>
      <h3>${proj.title}</h3>
      <div class="project-field"><b>Description</b><p>${proj.description}</p></div>
      <div class="project-field"><b>Objective</b><p>${proj.objective}</p></div>
      <div class="project-field"><b>My Contribution</b><p>${proj.contribution}</p></div>
      <div class="tech-tags">${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      ${proj.pdfLink ? `<div class="project-links"><a href="${proj.pdfLink}" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> View write-up</a></div>` : ''}
    `;
    projGrid.appendChild(card);
  });

  /* ---------- CERTIFICATIONS ---------- */
  const certsGrid = document.getElementById('certsGrid');
  D.certifications.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(i * 70));
    card.innerHTML = `
      <i class="fa-solid fa-award cert-icon"></i>
      <h3>${cert.name}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <div class="cert-meta">
        ${cert.date ? `<span><i class="fa-regular fa-calendar"></i> ${cert.date}</span>` : ''}
        ${cert.credentialId ? `<span>ID: ${cert.credentialId}</span>` : ''}
      </div>
      ${cert.verifyUrl ? `<a class="cert-verify" href="${cert.verifyUrl}" target="_blank" rel="noopener">Verify certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
    `;
    certsGrid.appendChild(card);
  });

  /* ---------- EDUCATION ---------- */
  const eduTL = document.getElementById('educationTimeline');
  D.education.forEach((ed, i) => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', String(i * 80));
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <span class="tl-period">${ed.period}</span>
        <h3 class="tl-role">${ed.degree}</h3>
        <p class="tl-org" style="margin-bottom:0">${ed.school}</p>
      </div>`;
    eduTL.appendChild(item);
  });

  /* ---------- ACHIEVEMENTS / LANGUAGES / INTERESTS ---------- */
  const achEl = document.getElementById('achievementsList');
  if (D.achievements.length === 0) {
    achEl.innerHTML = `<p class="empty-note">Add your achievements in js/data.js — this section updates automatically.</p>`;
  } else {
    D.achievements.forEach(a => {
      const div = document.createElement('div');
      div.className = 'achievement-row';
      div.innerHTML = `<b>${a.title}</b><span>${a.org || ''}</span>`;
      achEl.appendChild(div);
    });
  }

  const langEl = document.getElementById('languagesList');
  D.languages.forEach(l => {
    const div = document.createElement('div');
    div.className = 'lang-row';
    div.innerHTML = `<span>${l.name}</span><span>${l.level}</span>`;
    langEl.appendChild(div);
  });

  const intEl = document.getElementById('interestsList');
  const intWrap = document.createElement('div');
  intWrap.className = 'interest-tags';
  D.interests.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'interest-tag';
    span.textContent = tag;
    intWrap.appendChild(span);
  });
  intEl.appendChild(intWrap);

  /* ---------- CONTACT ---------- */
  const contactGrid = document.getElementById('contactGrid');
  const contactItems = [
    { icon: 'fa-regular fa-envelope', label: 'Email', value: D.site.email, href: `mailto:${D.site.email}` },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: D.site.phone, href: `tel:${D.site.phone.replace(/\s+/g, '')}` },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: 'Connect', href: D.site.linkedin },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: D.site.location, href: null }
  ];
  contactItems.forEach(c => {
    const el = document.createElement(c.href ? 'a' : 'div');
    el.className = 'contact-card';
    if (c.href) { el.href = c.href; el.target = c.href.startsWith('http') ? '_blank' : '_self'; el.rel = 'noopener'; }
    el.innerHTML = `<i class="${c.icon}"></i><div class="c-label">${c.label}</div><div class="c-value">${c.value}</div>`;
    contactGrid.appendChild(el);
  });

  /* ---------- FOOTER ---------- */
  document.getElementById('footerName').textContent = D.site.name;
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  /* ---------- QR CODE ----------
     Point this at your deployed URL once hosted (Netlify/Vercel/GitHub Pages).
     Update PORTFOLIO_URL below after deployment. */
  const PORTFOLIO_URL = window.location.href.includes('http')
    ? window.location.href.split('#')[0]
    : 'https://nithishshriram.github.io/Portfolio/';
  if (window.QRCode) {
    new QRCode(document.getElementById('qrcode'), {
      text: PORTFOLIO_URL,
      width: 128,
      height: 128,
      colorDark: '#0B1F3A',
      colorLight: '#ffffff'
    });
  }

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  /* ---------- Scroll spy for rail + skill bar reveal ---------- */
  const sections = document.querySelectorAll('main section, #hero');
  const railDots = document.querySelectorAll('.rail-dot');
  const railFill = document.getElementById('railFill');
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const revealedBars = new Set();

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    railFill.style.height = `${Math.min((scrollTop / docHeight) * 100, 100)}%`;

    let currentId = 'hero';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) currentId = sec.id;
    });
    railDots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('href') === `#${currentId}`);
    });

    skillBars.forEach(bar => {
      if (revealedBars.has(bar)) return;
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        bar.style.width = bar.dataset.level + '%';
        revealedBars.add(bar);
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }
});
