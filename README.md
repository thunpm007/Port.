# Thunnatorn Phunmung — Portfolio

A single-page portfolio website (works on mobile and desktop). Dark forest theme, glass-panel cards, parallax scrolling, smooth scroll. **Everything lives in one file: `index.html`** — open it in any text editor (VS Code, Notepad++, etc.) to make changes.

No coding tools or build steps are needed. Edit the file, save it, open it in a browser to preview.

---

## 1. Publish it for free on GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload **all** of these files/folders, keeping the same structure:
   ```
   index.html
   .nojekyll
   assets/favicon.svg
   assets/img/…        (full-size photos)
   assets/img/thumb/…  (thumbnails)
   ```
   Easiest way: drag the whole folder into GitHub's **"Add file → Upload files"** box.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → branch **main** → folder **/ (root)** → **Save**.
5. Wait about a minute. Your site goes live at:
   `https://<your-username>.github.io/portfolio/`

> Tip: for a shorter address like `https://<your-username>.github.io/`, name the repository exactly `<your-username>.github.io`.

---

## 2. What's in each file

| File / folder | Purpose |
|---|---|
| `index.html` | The whole website — HTML structure, CSS styling, and JavaScript, all in one file. This is the only file you'll normally edit. |
| `.nojekyll` | Empty marker file. Tells GitHub Pages not to run its Jekyll build system on this site. Leave it alone. |
| `README.md` | This guide. |
| `assets/favicon.svg` | The small icon shown in the browser tab. |
| `assets/img/` | Full-size photos, used when a photo is opened full-screen. |
| `assets/img/thumb/` | Smaller/lighter copies of the same photos, used in grids so pages load fast. |

---

## 3. How to edit text

Everything text-related lives inside the `<script>` tag near the bottom of `index.html`, in a section marked `/* ============ DATA ============ */`. Each of these is a list — find it, edit the Thai (`th`) or English (`en`) part, save.

| Variable | Controls |
|---|---|
| `fieldData` | Captions for the "Field Experience" photos |
| `skills` | Skill cards — name, Thai description, English description, icon |
| `galleryData` | Captions shown when a gallery / "Through the Lens" photo is opened full-screen (Thai + English name, scientific name in *italics*) |
| `certData` | Captions for the certificate photos |
| `featured` | Which photos (by file name) appear in the "Through the Lens" slider, and in what order |

Everything **outside** the `<script>` — like the About Me bio, Experience timeline, and section headings — is plain HTML text. Just find the sentence in the file and type over it.

- **About / Experience text** — inside the `<section id="about">` and `<section id="experience">` blocks.
- **Contact links** — inside `<section id="contact">` (email, Facebook, Instagram).
- **Site title / browser tab text** — the `<title>` tag near the very top of the file.
- **Colors / theme** — top of the `<style>` block, under `:root{...}` (change `--green`, `--bg`, etc. — these are reused everywhere automatically).

### ⚠️ One thing that breaks the whole site

Every item inside a data list like `skills` or `galleryData` must be separated by a comma `,`. If you delete or forget a comma, **the entire website will appear broken** (missing text, missing images, menu not working) — because one typo stops all of the JavaScript from running, not just that one item.

```js
// ❌ Wrong — missing comma, breaks EVERYTHING below it
const featured=["gal1""gal5","gal7"];

// ✅ Correct
const featured=["gal1","gal5","gal7"];
```

If the site suddenly looks empty after an edit, this is the first thing to check — look for the line you last edited.

---

## 4. Replacing or adding photos

- Photos live in `assets/img/`. Each one has a matching smaller copy in `assets/img/thumb/` (used in grids for fast loading).
- File names are fixed: `hero1–3`, `fieldex1–6`, `gal1–33`, `pic1–5`, `profile2, profile4, profile5, profile6`.
- To **swap** a photo: replace both the file in `assets/img/` and the one with the same name in `assets/img/thumb/`.
- To **add** gallery photos: change `Array.from({length:33}…)` to your new total count, then add the new numbered files (e.g. `gal34.jpg`) to both folders — and add a matching caption to `allGalleryData`.
- Images are already web-optimized (max 1920px, compressed), so the site stays light and fast. Try to keep new photos similarly sized.

---

## 5. Features already built in

- **Hero background** — cycles through `hero1–3` automatically.
- **About Me photo slider** — slides through the profile photos every 4 seconds; click the dots below the photo to jump to a specific one.
- **Through the Lens** — a manual carousel (arrows) controlled by the `featured` list.
- **Full-screen photo viewer (lightbox)** — click any photo to view it full-screen with its caption; arrow keys / on-screen arrows to navigate, Esc or click outside to close. The viewer shows the thumbnail instantly with a loading spinner, then swaps in the full-size photo when it finishes downloading; the next/previous photos are preloaded so the arrows feel instant, and the page behind is locked from scrolling while the viewer is open. (Script version: `portfolio script v3` — visible in the browser console, F12 → Console.)
- **Image protection** — visitors can't drag-save images or right-click to save/copy (see the bottom of the `<script>` section if you ever need to remove this).
- **Scroll-triggered animations** — sections fade/slide into view as you scroll down.

---

## 6. Quick troubleshooting

| Problem | Likely cause |
|---|---|
| Whole site looks empty / text and photos missing | A syntax mistake (usually a missing comma) somewhere in the `<script>` data section — see the warning in section 3. |
| A photo doesn't show up | File name typo, or the file isn't in *both* `assets/img/` and `assets/img/thumb/`. |
| Browser tab icon not showing | Make sure `assets/favicon.svg` was uploaded along with `index.html`. |
| Changes don't appear after publishing | GitHub Pages can take a minute to update — wait and refresh, or check **Settings → Pages** for a build error. |
| Site still behaves like the old version after an update | Browser cache. On PC press **Ctrl+F5**; on mobile open the site in an incognito/private tab. To confirm which version is running, press F12 → Console — the current script prints `portfolio script v3`. |
| Photo viewer won't open other photos / page can't be clicked | This was a bug in older versions of `index.html` (fixed in v3). Make sure the latest `index.html` is uploaded, then clear the cache as above. |
