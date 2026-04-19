# Sudarson Prabhu Portfolio

This is a responsive multi-page portfolio website for Sudarson Prabhu R.E, built to publish easily on GitHub Pages.

## Files

- `index.html` is the summary homepage.
- `work.html` contains the detailed work page.
- `about.html` contains the detailed profile page.
- `experience.html` contains the role-by-role career timeline.
- `credentials.html` contains certifications, education, and achievements.
- `styles.css` contains the shared design system and responsive layout.
- `script.js` handles navigation state, the mobile menu, unique-visitor tracking, Turnstile verification, and the enquiry form submission flow.
- `config.js` holds the backend URL and Turnstile site key used for secure tracking and enquiry submission.
- `docs/lead-capture-setup.md` explains how to connect the site to a live Apps Script and Turnstile-backed setup.
- `integrations/google-apps-script/Code.gs` is the ready-to-paste backend template for deduped visitor tracking and enquiry email alerts.
- `assets/Resume_Sudarson_Prabhu_RE.pdf` contains the downloadable resume linked from the site.

## Customize the Portfolio

Before publishing, review the page content in the HTML files:

- Check the summary, achievements, and experience bullets for any wording you want to refine.
- Update the page text directly in `index.html`, `work.html`, `about.html`, `experience.html`, and `credentials.html`.
- Add your GitHub profile if you want a code portfolio link in the contact section.
- Replace the resume file in `assets/` whenever you update your CV.
- Adjust the section copy if you want to emphasize different engagements or achievements.
- Add your deployed backend URL and Turnstile site key to `config.js` when you are ready to enable the enquiry form and visitor tracking.

## Publish on GitHub Pages

1. Create a new repository on GitHub.
2. Upload these files to the repository root.
3. Commit and push the files to the `main` branch.
4. Open the repository on GitHub.
5. Go to `Settings` -> `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select the `main` branch and `/root`.
8. Save the settings and wait for GitHub Pages to publish the site.

If you want the enquiry form and visitor tracker to work, complete the setup in `docs/lead-capture-setup.md` after publishing.

Your site will usually be available at:

`https://your-github-username.github.io/repository-name/`

## Optional Next Improvements

- Add a real profile image or custom illustrations.
- Keep the PDF resume in `assets/` updated as your profile changes.
- Add deeper case studies for major consulting engagements.
- Add a custom analytics platform later if you want richer traffic reporting than the built-in unique-visitor counter.
- Connect a custom domain if you want a more personal URL.
