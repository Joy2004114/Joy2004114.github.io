# Joy Das — Personal Academic Research Website

A lightweight, minimalist, responsive academic website built with plain HTML, CSS, and JavaScript. Designed for **GitHub Pages** with **zero build steps**, no backend, and a single centralized content file (`data/profile.js`) so you can update your academic profile in minutes.

---

## Project Structure

```text
joy-das-academic-website/
├── index.html                 # Main single-page academic website
├── 404.html                   # Custom 404 page (automatically used by GitHub Pages)
├── .nojekyll                  # Tells GitHub Pages to serve static files directly
├── css/
│   └── styles.css             # Minimalist academic stylesheet (responsive & accessible)
├── js/
│   └── main.js                # Renders sections from data/profile.js & handles interactions
├── data/
│   └── profile.js             # <-- EDIT THIS FILE for all content updates
├── assets/
│   ├── cv/
│   │   └── Joy_Das_CV.pdf     # <-- Replace this PDF to update your downloadable CV
│   └── images/
│       └── favicon.svg        # Browser tab icon (place your portrait as profile.jpg here)
└── README.md
```

---

## 1. Download and Extract

1. Download `joy-das-academic-website.zip`.
2. Extract (unzip) it on your computer.
3. Open `index.html` in any web browser (Chrome, Firefox, Edge, Safari) to preview the site locally immediately.

---

## 2. How to Edit Your Content (`data/profile.js`)

Almost every update is done in **`data/profile.js`** using any text editor (VS Code, Notepad++, TextEdit, or directly on GitHub's web editor):

| What you want to update | Where to edit in `data/profile.js` |
| --- | --- |
| **Introduction / Bio** | `introParagraphs` and `focusTags` |
| **Academic Status** | `status` (e.g., `"Seeking Fall 2027 PhD Positions"` or `""` to hide) |
| **Research Interests** | `researchInterests` array (add/edit `title`, `description`, `topics`) |
| **Research Experience** | `researchExperience` and `industryExperience` arrays |
| **Research Projects** | `projects` array (set `featured: true` and `highlightLabel` to highlight recent work) |
| **Publications** | `publications` array (includes paper/PDF links and BibTeX; if empty `[]`, the section hides automatically) |
| **Education** | `education` array |
| **Technical Skills** | `skills` array |
| **Awards / Certs / Service** | `achievements` (`awards`, `certifications`, `service`) |
| **Social / Academic Links** | `links` (`email`, `github`, `linkedin`, `aclAnthology`, `googleScholar`, `orcid`) |

> **Tip:** To add **Google Scholar** or **ORCID**, simply paste your profile URL into `links.googleScholar` or `links.orcid` in `data/profile.js` — they will automatically appear in the sidebar and contact section.

---

## 3. How to Add or Replace Your Profile Photo

1. Save a square, well-lit portrait photograph (recommended: `500×500 px` JPG or WebP) as:
   ```text
   assets/images/profile.jpg
   ```
2. Open `data/profile.js` and change:
   ```js
   photo: "",
   ```
   to:
   ```js
   photo: "assets/images/profile.jpg",
   ```
3. To return to the minimalist monogram (`JD`), set `photo: ""`.

---

## 4. How to Replace Your CV PDF

Your current CV is already included at `assets/cv/Joy_Das_CV.pdf`.

- **Easiest method (zero code edits):** Overwrite `assets/cv/Joy_Das_CV.pdf` with your updated PDF using the exact same filename.
- **Using a different filename or external link:** Update `cv.path`, `cv.filename`, and `cv.lastUpdated` in `data/profile.js`.

---

## 5. How to Publish on GitHub Pages (Free Hosting)

### Option A: Your Main GitHub Pages URL (`https://joy2004114.github.io/`) — Recommended
1. Sign in to GitHub and create a new **public** repository named exactly:
   ```text
   Joy2004114.github.io
   ```
   *(Replace `Joy2004114` if your GitHub username is different.)*
2. Upload all files and folders **inside** `joy-das-academic-website/` (so `index.html` sits at the root of the repository, not inside a subfolder).
   - You can drag and drop them in GitHub's web interface (**Add file → Upload files**), or push via Git:
     ```bash
     cd joy-das-academic-website
     git init
     git add .
     git commit -m "Initial academic research website"
     git branch -M main
     git remote add origin https://github.com/Joy2004114/Joy2004114.github.io.git
     git push -u origin main
     ```
3. In your repository on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes and visit `https://joy2004114.github.io/`.

### Option B: Project Repository URL (`https://joy2004114.github.io/academic-site/`)
Because all paths in this project are relative (`css/styles.css`, `assets/cv/Joy_Das_CV.pdf`, etc.), you can also publish from any repository name without changing any paths.

---

## 6. How to Connect a Custom Domain (Optional)

If you purchase a personal domain (e.g., `joydas.org` or `joydas.me`):

1. In your GitHub repository, go to **Settings → Pages → Custom domain**, enter your domain (e.g., `joydas.org`), and click **Save** (this creates a `CNAME` file in your repo).
2. At your domain registrar's DNS settings, add `A` records pointing your apex domain (`@`) to GitHub Pages' IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   And optionally a `CNAME` record for `www` pointing to `joy2004114.github.io`.
3. Back in **Settings → Pages**, enable **Enforce HTTPS** once DNS propagation finishes (usually 15–60 minutes).

---

## 7. Updating the Website in the Future

- **On GitHub Web UI:** Open `data/profile.js`, click the pencil (**Edit**) icon, make your change, and click **Commit changes**. GitHub Pages automatically republishes within 1–2 minutes.
- **Locally with Git:** Edit `data/profile.js` (or replace `assets/cv/Joy_Das_CV.pdf`), then run:
  ```bash
  git add .
  git commit -m "Update publications and CV"
  git push
  ```
