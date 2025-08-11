# 🧠 Personal Website Project Plan (Astro-Based)

## 🏁 Goals
- Minimal-maintenance personal site, with a community feel
- Blog with RSS feeds per topic, including combined topics
- Email subscriptions (immediate + weekly)
- Topic-based content structure (e.g., Tech, Music, Tarot, Life)
- Showcase of web development skills
- Custom branding and style; no ads or heavy subscription nags
- Eventually include commenting and voice messaging features
- Accessibility is a key priority; use semantic HTML and accessible components

---

## ❓ Decisions To Make

### Need to Know Before Starting to Build

- [x] Which Astro starter/template to use: **Minimal custom setup, start with minimal styling and a little Bootstrap for CSS. Add styling/layouts gradually.**
- [x] Initial controlled topic list: **Technology, Music, Tarot, Craft, Life**

### Decisions for Later

- Email provider: Buttondown or ConvertKit
- Commenting system: Commento, Giscus, or custom
- Hosting provider: Netlify, Vercel, or Cloudflare Pages
- When to add analytics and which provider to choose

---

## 🗂️ Project Structure

```
/  
├── public/ # Static assets  
├── src/  
│ ├── components/ # Reusable UI components  
│ ├── layouts/ # Page/post layouts  
│ ├── pages/ # Static + dynamic routes (e.g. /blog, /[slug])  
│ ├── content/ # All Markdown/MDX posts (organized by topic via frontmatter)
│ └── styles/ # Tailwind CSS; ready for custom CSS later  
├── astro.config.mjs # Astro config  
├── package.json # Dependencies and scripts  
├── tsconfig.json # TypeScript config  
└── README.md
```

---

## 🛠️ Initial Setup Tasks

- [x] Install Node.js (LTS v18+)
- [x] Run `npm create astro@latest` to scaffold base project (with TypeScript)
- [x] Choose blog starter (or minimal + markdown)
- [ ] Install and configure:
    - [ ] Markdown/MDX support
    - [ ] Tailwind CSS (custom CSS can be added later)
    - [ ] RSS plugin (`@astrojs/rss`)
    - [ ] Syntax highlighting (Shiki or Prism)
- [ ] Add favicon/logo/branding

---

## ✍️ Content Model

- Blog posts in Markdown/MDX
- Frontmatter fields:
```yaml
  ---
  title: "Example Post"
  description: "Short summary for metadata and RSS"
  pubDate: "2025-08-01"
  topics: ["tech", "astro"] # Controlled list
  draft: false
  ---
```
- Topics used for:
    - Filtering views (`/topic/tech`)
    - Generating topic-specific RSS feeds
    - Email segmentation (future)
    - Controlled list, updated as needed

---

## 📡 RSS Feeds
- [ ]  Site-wide RSS (`/rss.xml`) with full post content
- [ ]  Topic-based feeds (`/topics/[topic]/rss.xml`)
- [ ]  Include post metadata in feed (title, link, summary, pubDate)

---
## 📬 Email Subscriptions (Phase 2)

**Tool:** [Buttondown](https://buttondown.email) or [ConvertKit](https://convertkit.com)

- [ ]  Add email signup forms
    - [ ]  Global signup (all posts)
    - [ ]  Topic-specific (via custom fields)
- [ ]  Configure RSS-to-email automations
- [ ]  Enable instant and weekly options
- [ ]  Add unsubscribe/update profile links
    

---

## 💬 Comments (Phase 2 or 3)

### Option A: Commento or Commento++
-  Set up hosted or self-hosted instance
-  Embed per-post comment widget
-  Enable email notifications for replies
-  Ensure data export is configured
### Option B: Giscus (GitHub Discussions)
-  Enable GitHub login
-  Configure per-post discussion threads
### Option C: **Build your own**
-  Design comment submission form
-  Add hCaptcha or Cloudflare Turnstile
-  Store in DB or flat file
-  Render comments with moderation

---

## 🎙️ Voice Message Feature (Phase 3)
- [ ]  Use **MediaRecorder API** to capture audio
- [ ]  Allow users to preview + upload
- [ ]  Submit via fetch to:
    - [ ]  Serverless API (e.g., Vercel Function)
    - [ ]  Cloud storage (e.g., S3, R2)
- [ ]  Notify site owner of new message (optional)
- [ ]  Show playback UI for approved messages

---

## 🌐 Hosting Options
- [ ]  Local development (`npm run dev`)
- [ ]  GitHub (optional, not required)
- [ ]  Deploy to:
    - [ ]  Netlify (free tier)
    - [ ]  Vercel (free tier)
    - [ ]  Cloudflare Pages
- [ ]  Set up custom domain + HTTPS

---

## ✨ Future Developer Showcases
- [ ]  Add interactive demos (e.g., React/Vue/Svelte islands)
- [ ]  Embed widgets in MDX posts
- [ ]  Use animation or WebGL in project posts
- [ ]  Add portfolio or `/lab` section
- [ ]  Build and style custom 404 page

---

## 🧪 Test Plan
-  Test responsive design (mobile/tablet/desktop)
-  Test RSS feeds in Feedly/NetNewsWire
-  Test email subscription + delivery
-  Test voice recording in major browsers
-  Verify comment anti-spam measures
-  Check accessibility (semantic HTML, keyboard navigation, color contrast, etc.)

---

## 🧹 Maintenance Checklist
-  Update dependencies monthly
-  Moderate new comments (if enabled)
-  Monitor email delivery (Buttondown/SMTP)
-  Rotate backups if using local storage
-  Check site performance periodically (Lighthouse)
    
---

## 📊 Analytics (Future)
- Add privacy-respecting analytics later (e.g., Plausible, Fathom)
- Avoid invasive tracking; prefer solutions not easily blocked

---

## 🔗 Useful Links
- Astro Docs: https://docs.astro.build/
- RSS Plugin: https://docs.astro.build/en/guides/rss/
- MDX Support: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Buttondown API: https://docs.buttondown.com
- Commento:
    - https://commento.io
    - https://github.com/souramoo/commentoplusplus
