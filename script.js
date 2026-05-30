function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderSite() {
  const p = PROFILE;

  document.title = `${p.name} | ${p.title}`;
  document.getElementById("heroEyebrow").textContent = p.title;
  document.getElementById("heroName").textContent = p.name;
  document.getElementById("heroLead").textContent = p.tagline;
  document.getElementById("profileAvatar").textContent = p.initials;
  document.getElementById("profileName").textContent = p.name;
  document.getElementById("profileTitle").textContent = p.title;
  document.getElementById("footerName").textContent = p.name;

  const badge = document.getElementById("availabilityBadge");
  badge.textContent = p.available ? "Available for opportunities" : "Currently not available";
  badge.style.display = p.available ? "inline-flex" : "none";

  const profileMeta = document.getElementById("profileMeta");
  [
    ["Location", p.location],
    ["Email", p.email],
    ["Phone", p.phone],
  ].forEach(([label, value]) => {
    const li = el("li");
    li.innerHTML = `<span>${label}</span><span>${value}</span>`;
    profileMeta.appendChild(li);
  });

  const heroLinks = document.getElementById("heroLinks");
  [
    ["GitHub", p.github],
    ["LinkedIn", p.linkedin],
    ["Email", `mailto:${p.email}`],
  ].forEach(([label, href]) => {
    const a = el("a", "", label);
    a.href = href;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    heroLinks.appendChild(a);
  });

  const statsGrid = document.getElementById("statsGrid");
  STATS.forEach(({ value, label }, i) => {
    const card = el("div", `stat-card reveal reveal-delay-${(i % 3) + 1}`);
    card.innerHTML = `<strong data-value="${value}">${value}</strong><span>${label}</span>`;
    statsGrid.appendChild(card);
  });

  const aboutCopy = document.getElementById("aboutCopy");
  ABOUT.forEach((paragraph) => {
    const para = el("p", "", paragraph);
    aboutCopy.appendChild(para);
  });

  const aboutFacts = document.getElementById("aboutFacts");
  const factCard = el("dl", "fact-card");
  HIGHLIGHTS.forEach(({ label, value }) => {
    const item = el("div", "fact-item");
    item.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    factCard.appendChild(item);
  });
  aboutFacts.appendChild(factCard);

  const skillsGrid = document.getElementById("skillsGrid");
  SKILLS.forEach(({ category, items }, i) => {
    const card = el("article", `skill-card reveal reveal-delay-${(i % 3) + 1}`);
    card.innerHTML = `<h3>${category}</h3>`;
    const tags = el("div", "skill-tags");
    items.forEach((item) => tags.appendChild(el("span", "", item)));
    card.appendChild(tags);
    skillsGrid.appendChild(card);
  });

  const projectsGrid = document.getElementById("projectsGrid");
  PROJECTS.forEach((project, i) => {
    const card = el("article", `project-card reveal reveal-delay-${(i % 2) + 1}`);
    const demoLink = project.demo
      ? `<a class="project-link" href="${project.demo}" target="_blank" rel="noopener">Live demo ↗</a>`
      : "";
    card.innerHTML = `
      <div class="project-top">
        <span class="project-category">${project.category}</span>
        <span class="project-link-group">
          <a class="project-link" href="${project.github}" target="_blank" rel="noopener">View repo →</a>
          ${demoLink}
        </span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    const metrics = el("div", "project-metrics");
    project.metrics.forEach((metric) => metrics.appendChild(el("span", "", metric)));
    card.appendChild(metrics);
    const stack = el("div", "project-stack");
    project.stack.forEach((tech) => stack.appendChild(el("span", "", tech)));
    card.appendChild(stack);
    projectsGrid.appendChild(card);
  });

  const experienceList = document.getElementById("experienceList");
  EXPERIENCE.forEach((item) => {
    const card = el("article", "experience-card reveal");
    card.innerHTML = `
      <div class="experience-head">
        <h3>${item.role}</h3>
        <span class="experience-period">${item.period}</span>
      </div>
      <p class="experience-org">${item.org} · ${item.location}</p>
    `;
    const points = el("ul", "experience-points");
    item.points.forEach((point) => {
      const li = el("li", "", point);
      points.appendChild(li);
    });
    card.appendChild(points);
    experienceList.appendChild(card);
  });

  const contactGrid = document.getElementById("contactGrid");
  [
    ["Email", `mailto:${p.email}`, p.email],
    ["Phone", `tel:${p.phone.replace(/\s/g, "")}`, p.phone],
    ["Location", "#", p.location],
  ].forEach(([label, href, value]) => {
    const item = el("div", "contact-item");
    if (href.startsWith("mailto") || href.startsWith("tel")) {
      item.innerHTML = `<span>${label}</span><a href="${href}">${value}</a>`;
    } else {
      item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    }
    contactGrid.appendChild(item);
  });

  const resumeBtn = document.getElementById("resumeBtn");
  resumeBtn.href = p.resumeUrl;
  if (p.resumeUrl && p.resumeUrl !== "#") {
    resumeBtn.setAttribute("download", "Muskan-Suman-Resume.pdf");
    resumeBtn.setAttribute("target", "_blank");
    resumeBtn.setAttribute("rel", "noopener");
  } else {
    resumeBtn.style.display = "none";
  }
  document.getElementById("contactEmailBtn").href = `mailto:${p.email}`;
  document.getElementById("contactLinkedinBtn").href = p.linkedin;

  const footerLinks = document.getElementById("footerLinks");
  [
    ["GitHub", p.github],
    ["LinkedIn", p.linkedin],
    ["Email", `mailto:${p.email}`],
  ].forEach(([label, href]) => {
    const a = el("a", "", label);
    a.href = href;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    footerLinks.appendChild(a);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderSite();

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = siteNav.querySelectorAll('a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

/* ── Theme toggle (persists preference) ── */
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", initialTheme);

themeToggle.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ── Typing effect for hero roles ── */
(function typeRoles() {
  const target = document.getElementById("heroTyping");
  if (!target || typeof ROLES === "undefined" || !ROLES.length) {
    if (target) target.textContent = PROFILE.subtitle;
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    target.textContent = ROLES[0];
    return;
  }
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = ROLES[roleIndex];
    target.textContent = deleting
      ? word.substring(0, charIndex--)
      : word.substring(0, charIndex++);

    let delay = deleting ? 45 : 90;
    if (!deleting && charIndex === word.length + 1) {
      deleting = true;
      delay = 1400;
    } else if (deleting && charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      charIndex = 0;
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ── Scroll reveal + stat count-up ── */
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      const counter = entry.target.querySelector("strong[data-value]");
      if (counter) animateCount(counter);
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

function animateCount(node) {
  const raw = node.getAttribute("data-value");
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return;
  const end = parseFloat(match[1]);
  const suffix = match[2] || "";
  const decimals = (match[1].split(".")[1] || "").length;
  const duration = 1100;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = (end * eased).toFixed(decimals);
    node.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(frame);
    else node.textContent = match[1] + suffix;
  }
  requestAnimationFrame(frame);
}
