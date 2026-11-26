/**
 * Personal Academic Research Website — Renderer & Interactions
 * Reads all content from window.ACADEMIC_PROFILE (data/profile.js).
 */
(function () {
  "use strict";

  const profile = window.ACADEMIC_PROFILE;
  if (!profile) return;

  // Minimal inline SVG icons (no external icon library required)
  const ICONS = {
    location:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    scholar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    orcid:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="8" y1="9" x2="8" y2="16"/><circle cx="8" cy="6.5" r="0.6" fill="currentColor"/><path d="M12 16V9h2.5a3.5 3.5 0 0 1 0 7H12z"/></svg>',
    book:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    copy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
  };

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function copyText(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      onSuccess();
    } catch (e) {
      // Clipboard unavailable
    }
    document.body.removeChild(ta);
  }

  // --------------------------------------------------------------------------
  // 1. Navigation Bar
  // --------------------------------------------------------------------------
  function renderNav() {
    var brand = document.getElementById("site-brand");
    if (brand) brand.textContent = profile.name;

    var hasPubs = Array.isArray(profile.publications) && profile.publications.length > 0;
    var items = [
      { id: "home", label: "Home" },
      { id: "thesis", label: " Undergraduate Thesis" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" }
    ];
    if (hasPubs) items.push({ id: "publications", label: "Publications" });
    items.push(
      { id: "education", label: "Education" },
    );

    var navList = document.getElementById("nav-links");
    if (!navList) return;
    navList.innerHTML = items
      .map(function (item) {
        return '<li><a href="#' + item.id + '">' + escapeHtml(item.label) + "</a></li>";
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // 2. Left Profile Sidebar
  // --------------------------------------------------------------------------
  function renderSidebar() {
    var el = document.getElementById("profile-sidebar");
    if (!el) return;

    var avatarHtml = profile.photo
      ? '<img src="' +
        escapeHtml(profile.photo) +
        '" alt="' +
        escapeHtml(profile.photoAlt || profile.name) +
        '" onerror="this.remove(); this.parentNode.innerHTML=\'<span class=avatar-monogram>' +
        escapeHtml(profile.initials || "JD") +
        '</span>\';" />'
      : '<span class="avatar-monogram" aria-hidden="true">' +
        escapeHtml(profile.initials || "JD") +
        "</span>";

    var metaItems = [];
    if (profile.location) {
      metaItems.push("<li>" + ICONS.location + "<span>" + escapeHtml(profile.location) + "</span></li>");
    }
    if (profile.links.email) {
      metaItems.push(
        "<li>" +
          ICONS.mail +
          '<a href="mailto:' +
          escapeHtml(profile.links.email) +
          '">Email</a></li>'
      );
    }
    if (profile.links.github) {
      metaItems.push(
        "<li>" +
          ICONS.github +
          '<a href="' +
          escapeHtml(profile.links.github) +
          '" target="_blank" rel="noopener noreferrer">GitHub</a></li>'
      );
    }
    if (profile.links.linkedin) {
      metaItems.push(
        "<li>" +
          ICONS.linkedin +
          '<a href="' +
          escapeHtml(profile.links.linkedin) +
          '" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>'
      );
    }
    if (profile.links.aclAnthology) {
      metaItems.push(
        "<li>" +
          ICONS.book +
          '<a href="' +
          escapeHtml(profile.links.aclAnthology) +
          '" target="_blank" rel="noopener noreferrer">ACL Anthology</a></li>'
      );
    }
    if (profile.links.googleScholar) {
      metaItems.push(
        "<li>" +
          ICONS.scholar +
          '<a href="' +
          escapeHtml(profile.links.googleScholar) +
          '" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>'
      );
    }
    if (profile.links.orcid) {
      metaItems.push(
        "<li>" +
          ICONS.orcid +
          '<a href="' +
          escapeHtml(profile.links.orcid) +
          '" target="_blank" rel="noopener noreferrer">ORCID</a></li>'
      );
    }

    el.innerHTML =
      '<div class="avatar-frame">' +
      avatarHtml +
      "</div>" +
      "<div>" +
      '<h2 class="sidebar-name">' +
      escapeHtml(profile.name) +
      "</h2>" +
      '<p class="sidebar-title">' +
      escapeHtml(profile.affiliation) +
      "</p>" +
      (profile.status
        ? '<div class="status-badge"><span class="status-dot" aria-hidden="true"></span>' +
          escapeHtml(profile.status) +
          "</div>"
        : "") +
      "</div>" +
      '<ul class="sidebar-meta">' +
      metaItems.join("") +
      "</ul>" +
      '<div class="sidebar-actions">' +
      '<a class="btn btn-primary" href="' +
      escapeHtml(profile.cv.path) +
      '" download="' +
      escapeHtml(profile.cv.filename) +
      '">' +
      ICONS.download +
      "Download CV (PDF)</a>" +
      '<a class="btn btn-secondary" href="mailto:' +
      escapeHtml(profile.links.email) +
      '">' +
      ICONS.mail +
      "Email Me</a>" +
      "</div>";
  }

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 3. Hero / About
  // --------------------------------------------------------------------------
  function renderHero() {
    var el = document.getElementById("home");
    if (!el) return;

    var bioHtml = (profile.introParagraphs || [])
      .map(function (p) {
        return "<p>" + escapeHtml(p) + "</p>";
      })
      .join("");

    var tagsHtml = (profile.focusTags || [])
      .map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + "</span>";
      })
      .join("");

    el.innerHTML =
      '<h1 class="hero-heading">' +
      escapeHtml(profile.name) +
      "</h1>" +
      '<p class="hero-subtitle">' +
      escapeHtml(profile.title) +
      "</p>" +
      '<div class="hero-bio">' +
      bioHtml +
      "</div>" +
      (tagsHtml
        ? '<div class="focus-row"><span class="focus-label">Research Focus</span>' +
          tagsHtml +
          "</div>"
        : "");
  }
  // --------------------------------------------------------------------------
  // 4. Research Interests
  // --------------------------------------------------------------------------
  function renderThesis() {
    var container = document.getElementById("thesis-content");
    var th = profile.thesis;
    if (!container || !th) return;

    var inst = th.institutionUrl
      ? '<a href="' + escapeHtml(th.institutionUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(th.institution) + "</a>"
      : escapeHtml(th.institution || "");

    var sup = th.supervisor
      ? " · Supervisor: " +
        (th.supervisorUrl
          ? '<a href="' + escapeHtml(th.supervisorUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(th.supervisor) + "</a>"
          : escapeHtml(th.supervisor))
      : "";

    var highlightsHtml = (th.highlights || [])
      .map(function (h) {
        return "<li>" + escapeHtml(h) + "</li>";
      })
      .join("");

    var techHtml = (th.technologies || [])
      .map(function (t) {
        return '<span class="topic-pill">' + escapeHtml(t) + "</span>";
      })
      .join("");

    var linksHtml = (th.links || [])
      .map(function (lk) {
        return (
          '<a class="inline-link" href="' +
          escapeHtml(lk.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(lk.label) +
          ICONS.external +
          "</a>"
        );
      })
      .join("");

    container.innerHTML =
      '<article class="project-card is-featured">' +
      '<div class="project-header">' +
      '<div class="project-title-wrap">' +
      '<h3 class="project-title">' + escapeHtml(th.title) + "</h3>" +
      (th.grade ? '<span class="tag tag-accent">' + escapeHtml(th.grade) + "</span>" : "") +
      "</div>" +
      (th.duration ? '<span class="project-date">' + escapeHtml(th.duration) + "</span>" : "") +
      "</div>" +
      '<p class="experience-meta" style="margin:0 0 12px;">' + inst + sup + "</p>" +
      (th.summary ? '<p style="margin:0 0 12px; font-size:0.92rem; color:var(--text-secondary);">' + escapeHtml(th.summary) + "</p>" : "") +
      (highlightsHtml ? '<ul class="edu-details" style="margin-bottom:14px;">' + highlightsHtml + "</ul>" : "") +
      '<div class="project-footer">' +
      '<div class="topic-list">' + techHtml + "</div>" +
      (linksHtml ? '<div class="inline-links">' + linksHtml + "</div>" : "") +
      "</div>" +
      "</article>";
  }

  // --------------------------------------------------------------------------
  // 5. Research & Industry Experience
  // --------------------------------------------------------------------------
  function renderExperience() {
    var container = document.getElementById("experience-list");
    if (!container) return;

    var researchHtml = (profile.researchExperience || [])
      .map(function (exp) {
        var inst = exp.institutionUrl
          ? '<a href="' +
            escapeHtml(exp.institutionUrl) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(exp.institution) +
            "</a>"
          : escapeHtml(exp.institution);

        var sup = exp.supervisor
          ? " · Supervisor: " +
            (exp.supervisorUrl
              ? '<a href="' +
                escapeHtml(exp.supervisorUrl) +
                '" target="_blank" rel="noopener noreferrer">' +
                escapeHtml(exp.supervisor) +
                "</a>"
              : escapeHtml(exp.supervisor))
          : "";

        var tracksHtml = (exp.tracks || [])
          .map(function (tr) {
            var linksHtml = (tr.links || [])
              .map(function (lk) {
                return (
                  '<a class="inline-link" href="' +
                  escapeHtml(lk.url) +
                  '" target="_blank" rel="noopener noreferrer">' +
                  escapeHtml(lk.label) +
                  ICONS.external +
                  "</a>"
                );
              })
              .join("");

            return (
              '<div class="track-card">' +
              '<div class="track-header">' +
              '<h4 class="track-title">' +
              escapeHtml(tr.title) +
              "</h4>" +
              (tr.badge
                ? '<span class="tag tag-accent">' + escapeHtml(tr.badge) + "</span>"
                : "") +
              "</div>" +
              '<dl class="track-dl">' +
              '<div class="track-dl-row"><dt>Problem</dt><dd>' +
              escapeHtml(tr.problem) +
              "</dd></div>" +
              '<div class="track-dl-row"><dt>Contribution</dt><dd>' +
              escapeHtml(tr.contribution) +
              "</dd></div>" +
              '<div class="track-dl-row"><dt>Methods</dt><dd>' +
              escapeHtml(tr.methods) +
              "</dd></div>" +
              '<div class="track-dl-row"><dt>Outcome</dt><dd>' +
              escapeHtml(tr.outcome) +
              "</dd></div>" +
              "</dl>" +
              (linksHtml
                ? '<div class="inline-links" style="margin-top:10px;">' + linksHtml + "</div>"
                : "") +
              "</div>"
            );
          })
          .join("");

        return (
          '<article class="experience-entry">' +
          '<div class="experience-header">' +
          '<h3 class="experience-role">' +
          escapeHtml(exp.role) +
          "</h3>" +
          '<span class="experience-date">' +
          escapeHtml(exp.duration) +
          "</span>" +
          "</div>" +
          '<p class="experience-meta">' +
          inst +
          sup +
          "</p>" +
          '<div class="track-list">' +
          tracksHtml +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    var industryHtml = "";
    if (profile.industryExperience && profile.industryExperience.length) {
      industryHtml =
        '<h3 class="subsection-title">Industry &amp; Security Experience</h3>' +
        '<div class="industry-list">' +
        profile.industryExperience
          .map(function (job) {
            var org = job.organizationUrl
              ? '<a href="' +
                escapeHtml(job.organizationUrl) +
                '" target="_blank" rel="noopener noreferrer">' +
                escapeHtml(job.organization) +
                "</a>"
              : escapeHtml(job.organization);
            return (
              '<article class="industry-item">' +
              '<div class="experience-header">' +
              '<h4 class="track-title">' +
              escapeHtml(job.role) +
              " — " +
              org +
              "</h4>" +
              '<span class="experience-date">' +
              escapeHtml(job.duration) +
              "</span>" +
              "</div>" +
              "<p>" +
              escapeHtml(job.summary) +
              "</p>" +
              "</article>"
            );
          })
          .join("") +
        "</div>";
    }

    container.innerHTML = '<div class="timeline">' + researchHtml + "</div>" + industryHtml;
  }

  // --------------------------------------------------------------------------
  // 6. Research Projects
  // --------------------------------------------------------------------------
function renderProjects() {
    var container = document.getElementById("projects-list");
    if (!container) return;

    container.innerHTML = (profile.projects || [])
      .map(function (proj) {
        var techHtml = (proj.technologies || [])
          .map(function (t) {
            return '<span class="topic-pill">' + escapeHtml(t) + "</span>";
          })
          .join("");

        var linksHtml = (proj.links || [])
          .map(function (lk) {
            return (
              '<a class="inline-link" href="' +
              escapeHtml(lk.url) +
              '" target="_blank" rel="noopener noreferrer">' +
              escapeHtml(lk.label) +
              ICONS.external +
              "</a>"
            );
          })
          .join("");

        var rowsHtml = "";
        if (proj.whatIDid) {
          var bulletsHtml = proj.whatIDid
            .map(function (b) {
              return "<li>" + escapeHtml(b) + "</li>";
            })
            .join("");
          rowsHtml =
            '<div class="project-detail-row"><dt>Goal</dt><dd>' + escapeHtml(proj.goal) + "</dd></div>" +
            '<div class="project-detail-row"><dt>' + escapeHtml(proj.modelLabel || "Model") + "</dt><dd>" + escapeHtml(proj.models) + "</dd></div>" +
            (proj.results
              ? '<div class="project-detail-row"><dt>Result</dt><dd class="project-result">' + escapeHtml(proj.results) + "</dd></div>"
              : "") +
            '<div class="project-detail-row"><dt>What I did</dt><dd><ul class="edu-details">' + bulletsHtml + "</ul></dd></div>";
        } else {
          rowsHtml =
            '<div class="project-detail-row"><dt>Problem</dt><dd>' + escapeHtml(proj.problem) + "</dd></div>" +
            '<div class="project-detail-row"><dt>Motivation</dt><dd>' + escapeHtml(proj.whyItMatters) + "</dd></div>" +
            '<div class="project-detail-row"><dt>Methodology</dt><dd>' + escapeHtml(proj.methodology) + "</dd></div>" +
            '<div class="project-detail-row"><dt>Contribution</dt><dd>' + escapeHtml(proj.contribution) + "</dd></div>" +
            (proj.results
              ? '<div class="project-detail-row"><dt>Results</dt><dd class="project-result">' + escapeHtml(proj.results) + "</dd></div>"
              : "");
        }

        return (
          '<article class="project-card' +
          (proj.featured ? " is-featured" : "") +
          '">' +
          '<div class="project-header">' +
          '<div class="project-title-wrap">' +
          '<h3 class="project-title">' +
          escapeHtml(proj.title) +
          "</h3>" +
          (proj.highlightLabel
            ? '<span class="tag tag-accent">' + escapeHtml(proj.highlightLabel) + "</span>"
            : "") +
          "</div>" +
          (proj.date ? '<span class="project-date">' + escapeHtml(proj.date) + "</span>" : "") +
          "</div>" +
          '<dl class="project-details">' +
          rowsHtml +
          "</dl>" +
          '<div class="project-footer">' +
          '<div class="topic-list">' +
          techHtml +
          "</div>" +
          (linksHtml ? '<div class="inline-links">' + linksHtml + "</div>" : "") +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // 7. Publications (rendered only if actual publications are provided)
  // --------------------------------------------------------------------------
  function renderPublications() {
    var section = document.getElementById("publications");
    var container = document.getElementById("publications-list");
    if (!section || !container) return;

    if (!profile.publications || profile.publications.length === 0) {
      section.remove();
      return;
    }

    container.innerHTML = profile.publications
      .map(function (pub, idx) {
        var authorsHtml = (pub.authors || [])
          .map(function (a) {
            return a === pub.highlightAuthor ? "<strong>" + escapeHtml(a) + "</strong>" : escapeHtml(a);
          })
          .join(", ");

        var linksHtml = (pub.links || [])
          .map(function (lk) {
            return (
              '<a class="btn btn-subtle" href="' +
              escapeHtml(lk.url) +
              '" target="_blank" rel="noopener noreferrer">' +
              escapeHtml(lk.label) +
              ICONS.external +
              "</a>"
            );
          })
          .join("");

        var bibBtn = pub.bibtex
          ? '<button type="button" class="btn btn-subtle js-toggle-bib" data-bib="bib-' +
            idx +
            '" aria-expanded="false" aria-controls="bib-' +
            idx +
            '">BibTeX</button>' +
            '<button type="button" class="btn btn-subtle js-copy-bib" data-bib-idx="' +
            idx +
            '">' +
            ICONS.copy +
            "Copy Citation</button>"
          : "";

        return (
          '<article class="pub-item">' +
          '<h3 class="pub-title">' +
          escapeHtml(pub.title) +
          "</h3>" +
          '<p class="pub-authors">' +
          authorsHtml +
          "</p>" +
          '<p class="pub-venue">' +
          escapeHtml(pub.venue) +
          (pub.publisher ? ", " + escapeHtml(pub.publisher) : "") +
          (pub.pages ? ", " + escapeHtml(pub.pages) : "") +
          (pub.date ? " (" + escapeHtml(pub.date) + ")" : "") +
          ".</p>" +
          (pub.note ? '<p class="pub-note">' + escapeHtml(pub.note) + "</p>" : "") +
          '<div class="pub-actions">' +
          linksHtml +
          bibBtn +
          "</div>" +
          (pub.bibtex
            ? '<div class="bibtex-box" id="bib-' +
              idx +
              '"><pre>' +
              escapeHtml(pub.bibtex) +
              "</pre></div>"
            : "") +
          "</article>"
        );
      })
      .join("");

    // Bind BibTeX toggles & copy buttons
    container.querySelectorAll(".js-toggle-bib").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = document.getElementById(btn.getAttribute("data-bib"));
        if (!target) return;
        var open = target.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    container.querySelectorAll(".js-copy-bib").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-bib-idx"), 10);
        var pub = profile.publications[idx];
        if (!pub || !pub.bibtex) return;
        var original = btn.innerHTML;
        copyText(pub.bibtex, function () {
          btn.textContent = "Copied BibTeX";
          setTimeout(function () {
            btn.innerHTML = original;
          }, 1800);
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Education
  // --------------------------------------------------------------------------
  function renderEducation() {
    var container = document.getElementById("education-list");
    if (!container) return;

    container.innerHTML = (profile.education || [])
      .map(function (edu) {
        var inst = edu.institutionUrl
          ? '<a href="' +
            escapeHtml(edu.institutionUrl) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(edu.institution) +
            "</a>"
          : escapeHtml(edu.institution);

        var detailsHtml = (edu.details || [])
          .map(function (d) {
            return "<li>" + escapeHtml(d) + "</li>";
          })
          .join("");

        return (
          '<article class="edu-item">' +
          '<div class="experience-header">' +
          '<h3 class="edu-degree">' +
          escapeHtml(edu.degree) +
          "</h3>" +
          '<span class="experience-date">' +
          escapeHtml(edu.duration) +
          "</span>" +
          "</div>" +
          '<p class="edu-inst">' +
          inst +
          (edu.department ? " · " + escapeHtml(edu.department) : "") +
          "</p>" +
          (detailsHtml ? '<ul class="edu-details">' + detailsHtml + "</ul>" : "") +
          "</article>"
        );
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // 9. Technical Skills
  // --------------------------------------------------------------------------
  function renderSkills() {
    var container = document.getElementById("skills-list");
    if (!container) return;

    container.innerHTML = (profile.skills || [])
      .map(function (group) {
        return (
          '<div class="skill-row">' +
          '<div class="skill-category">' +
          escapeHtml(group.category) +
          "</div>" +
          '<div class="skill-items">' +
          escapeHtml((group.items || []).join(" · ")) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // 10. Awards, Certifications & Academic Service
  // --------------------------------------------------------------------------
  function renderAchievements() {
    var section = document.getElementById("achievements");
    var container = document.getElementById("achievements-list");
    if (!section || !container) return;

    var ach = profile.achievements || {};
    var hasAny =
      (ach.awards && ach.awards.length) ||
      (ach.certifications && ach.certifications.length) ||
      (ach.service && ach.service.length);

    if (!hasAny) {
      section.remove();
      return;
    }

    var blocks = [];

    if (ach.awards && ach.awards.length) {
      blocks.push(
        '<div><h3 class="subsection-title" style="margin-top:0;">Honors &amp; Competitions</h3><ul class="clean-list">' +
          ach.awards
            .map(function (a) {
              var org = a.url
                ? '<a href="' +
                  escapeHtml(a.url) +
                  '" target="_blank" rel="noopener noreferrer">' +
                  escapeHtml(a.organization) +
                  "</a>"
                : escapeHtml(a.organization);
              return (
                "<li><strong>" +
                escapeHtml(a.title) +
                "</strong>" +
                (a.organization ? " · " + org : "") +
                "</li>"
              );
            })
            .join("") +
          "</ul></div>"
      );
    }

    if (ach.certifications && ach.certifications.length) {
      blocks.push(
        '<div><h3 class="subsection-title" style="margin-top:0;">Selected Certifications</h3><ul class="clean-list">' +
          ach.certifications
            .map(function (c) {
              var title = c.url
                ? '<a href="' +
                  escapeHtml(c.url) +
                  '" target="_blank" rel="noopener noreferrer">' +
                  escapeHtml(c.title) +
                  "</a>"
                : escapeHtml(c.title);
              return (
                "<li><strong>" +
                title +
                "</strong> — " +
                escapeHtml(c.issuer) +
                (c.topics ? '<span class="cert-meta">' + escapeHtml(c.topics) + "</span>" : "") +
                "</li>"
              );
            })
            .join("") +
          "</ul></div>"
      );
    }

    if (ach.service && ach.service.length) {
      blocks.push(
        '<div><h3 class="subsection-title" style="margin-top:0;">Academic Service &amp; Leadership</h3><ul class="clean-list">' +
          ach.service
            .map(function (s) {
              return "<li>" + escapeHtml(s) + "</li>";
            })
            .join("") +
          "</ul></div>"
      );
    }

    container.innerHTML = blocks.join("");
  }

  // --------------------------------------------------------------------------
  // 11. CV Section
  // --------------------------------------------------------------------------
  function renderCV() {
    var container = document.getElementById("cv-panel");
    if (!container) return;

    container.innerHTML =
      "<div>" +
      "<p>" +
      escapeHtml(profile.cv.note) +
      (profile.cv.lastUpdated
        ? " <strong>Last updated:</strong> " + escapeHtml(profile.cv.lastUpdated) + "."
        : "") +
      "</p>" +
      "</div>" +
      '<div class="cv-actions">' +
      '<a class="btn btn-primary" href="' +
      escapeHtml(profile.cv.path) +
      '" download="' +
      escapeHtml(profile.cv.filename) +
      '">' +
      ICONS.download +
      "Download CV (PDF)</a>" +
      '<a class="btn btn-secondary" href="' +
      escapeHtml(profile.cv.path) +
      '" target="_blank" rel="noopener noreferrer">' +
      ICONS.external +
      "View in Browser</a>" +
      "</div>";
  }

  // --------------------------------------------------------------------------
  // 12. Contact Section
  // --------------------------------------------------------------------------
  function renderContact() {
    var container = document.getElementById("contact-panel");
    if (!container) return;

    var profileLinks = [];
    if (profile.links.github) {
      profileLinks.push(
        '<a class="inline-link" href="' +
          escapeHtml(profile.links.github) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.github +
          "GitHub</a>"
      );
    }
    if (profile.links.linkedin) {
      profileLinks.push(
        '<a class="inline-link" href="' +
          escapeHtml(profile.links.linkedin) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.linkedin +
          "LinkedIn</a>"
      );
    }
    if (profile.links.aclAnthology) {
      profileLinks.push(
        '<a class="inline-link" href="' +
          escapeHtml(profile.links.aclAnthology) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.book +
          "ACL Anthology</a>"
      );
    }
    if (profile.links.googleScholar) {
      profileLinks.push(
        '<a class="inline-link" href="' +
          escapeHtml(profile.links.googleScholar) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.scholar +
          "Google Scholar</a>"
      );
    }
    if (profile.links.orcid) {
      profileLinks.push(
        '<a class="inline-link" href="' +
          escapeHtml(profile.links.orcid) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.orcid +
          "ORCID</a>"
      );
    }

    container.innerHTML =
      '<div class="contact-grid">' +
      "<p>I welcome inquiries regarding Fall 2027 PhD opportunities, research collaborations, or questions about my work on multimodal learning and NLP.</p>" +
      '<div class="email-row">' +
      '<a class="email-display" href="mailto:' +
      escapeHtml(profile.links.email) +
      '">' +
      escapeHtml(profile.links.email) +
      "</a>" +
      '<button type="button" class="btn btn-secondary" id="copy-email-btn">' +
      ICONS.copy +
      "Copy Email</button>" +
      '<span class="copy-feedback" id="copy-email-feedback" role="status" aria-live="polite">Email copied</span>' +
      "</div>" +
      '<div class="contact-links">' +
      profileLinks.join("") +
      "</div>" +
      "</div>";

    var copyBtn = document.getElementById("copy-email-btn");
    var feedback = document.getElementById("copy-email-feedback");
    if (copyBtn && feedback) {
      copyBtn.addEventListener("click", function () {
        copyText(profile.links.email, function () {
          feedback.classList.add("is-visible");
          setTimeout(function () {
            feedback.classList.remove("is-visible");
          }, 2000);
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 13. Footer
  // --------------------------------------------------------------------------
  function renderFooter() {
    var footer = document.getElementById("footer-inner");
    if (!footer) return;
    var year = new Date().getFullYear();

    footer.innerHTML =
      "<div>&copy; " +
      year +
      " " +
      escapeHtml(profile.name) +
      (profile.footerNote ? " · " + escapeHtml(profile.footerNote) : "") +
      "</div>" +
      '<div class="footer-links">' +
      '<a href="mailto:' +
      escapeHtml(profile.links.email) +
      '">Email</a>' +
      '<a href="' +
      escapeHtml(profile.links.github) +
      '" target="_blank" rel="noopener noreferrer">GitHub</a>' +
      '<a href="' +
      escapeHtml(profile.links.linkedin) +
      '" target="_blank" rel="noopener noreferrer">LinkedIn</a>' +
      '<a href="' +
      escapeHtml(profile.cv.path) +
      '" download="' +
      escapeHtml(profile.cv.filename) +
      '">CV (PDF)</a>' +
      "</div>";
  }

  // --------------------------------------------------------------------------
  // 14. Mobile Menu & Active Nav Highlighting
  // --------------------------------------------------------------------------
  function bindNavigation() {
    var toggle = document.getElementById("nav-toggle");
    var navLinks = document.getElementById("nav-links");
    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Subtle active section highlight on scroll
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));

    if ("IntersectionObserver" in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.getAttribute("id");
              links.forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === "#" + id);
              });
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      sections.forEach(function (sec) {
        observer.observe(sec);
      });
    }
  }

  // Initialize everything
  renderNav();
  renderSidebar();
  renderHero();
  renderThesis();
  renderExperience();
  renderProjects();
  renderPublications();
  renderEducation();
  renderSkills();
  renderAchievements();
  renderCV();
  renderContact();
  renderFooter();
  bindNavigation();
})();
