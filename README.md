# Joseph Mwichigi — Portfolio

A multi-page portfolio site (desktop-OS themed) built with plain HTML, CSS, and JavaScript — no build step, ready for GitHub Pages.

## Structure

```
joseph-portfolio/
├── index.html      Home
├── work.html       Live project demos
├── skills.html     Tech stack & skills
├── about.html      About / bio
├── contact.html    Contact form
├── css/
│   └── style.css   All shared styles
└── js/
    └── script.js   Nav, clock, draggable windows, project rendering, contact form
```

## Before you publish — things to edit

1. **Live project links** — open `js/script.js`, find the `PROJECTS` array near the top,
   and set `liveUrl` (and `status: "live"`) for each project once it's actually deployed.
   Until you do, the card automatically shows "in development" instead of a live link.
2. **Social links** — in `index.html` and the footer of every page, replace the placeholder
   Instagram / X / TikTok / WhatsApp / LinkedIn URLs with your real handles.
3. **Contact details** — swap the placeholder email and WhatsApp number in `contact.html`.
4. **Contact form backend** — the form currently shows a demo toast on submit. Wire it to
   a real backend (e.g. [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/))
   inside `initContactForm()` in `js/script.js` — there's a `TODO` comment marking the spot.
5. **Resume** — the `resume.pdf` desktop icon on the home page currently links to the About
   page. Add an actual PDF to the project and point that link at it if you want a downloadable resume.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Push this folder's contents to the repository's root (or to a `docs/` folder — your choice).
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose the branch and folder you pushed to (e.g. `main` / `root`).
5. Save — GitHub will give you a URL like `https://<username>.github.io/<repo-name>/`.

That URL is what you'd eventually add as your own project's `liveUrl` in `js/script.js` once you build something new — and it's also what you'd share as this portfolio's own link.
