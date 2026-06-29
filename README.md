# Somadina & Ofure Wedding Website

Static wedding website for Somadina & Ofure, celebrating on 27 November 2026 in Lagos, Nigeria.

## Structure

- `index.html` - home page with hero, countdown, welcome copy, previews, and CTA sections.
- `story.html` - editorial story page.
- `details.html` - ceremony, reception, dress code, asoebi, location, and notes.
- `gallery.html` - masonry-style gallery with lightbox controls.
- `registry.html` - bank details, copy buttons, and placeholder gift cards.
- `faq.html` - accordion-style guest FAQs.
- `rsvp.html` - Google Form RSVP embed placeholder and deadline behavior.
- `css/styles.css` - shared styling and theme variables.
- `js/main.js` - navigation, countdown, gallery rendering, lightbox, FAQ accordions, copy buttons, RSVP deadline check, reveal animations, and active navigation.
- `Harold & Somadina/` - existing photo folder used by the website.

## Images

The site uses the existing `Harold & Somadina` folder in this workspace. Image paths are written exactly with that folder name, including the spaces and ampersand.

Gallery images are listed in `js/main.js` in the `galleryImages` array. To add or remove gallery photos, add or remove entries from that array using the real filename, for example:

```js
"Harold & Somadina/JH Intro-64.jpg"
```

## Hero Image

The home hero currently uses:

```html
style="--hero-image: url('Harold & Somadina/JH Intro-64.jpg');"
```

To replace it, update the `--hero-image` value in `index.html`. Other pages also set their own `--hero-image` value on the `<body>` tag.

## Wedding Details

Update placeholder venue, time, address, map, order of events, and notes in `details.html`. Known details already included are:

- Date: 27 November 2026
- Location: Lagos, Nigeria
- Asoebi: Asoebi details will be sent out.

## Google Form RSVP

Open `rsvp.html`.

Replace `GOOGLE_FORM_EMBED_URL_HERE` inside the iframe `src` with the Google Form embed URL.

Replace `GOOGLE_FORM_PUBLIC_URL_HERE` in the fallback button `href` with the public Google Form URL.

The RSVP deadline is controlled in `js/main.js`:

```js
const RSVP_DEADLINE = new Date("2026-08-10T23:59:59+01:00");
```

After the deadline, the page visually shows that RSVP is closed and hides the iframe area.

## Open Locally

Because this is a static site, open `index.html` directly in a browser. A local static server also works.

## Deploy

### Vercel

Create a new Vercel project from this folder and deploy as a static site. No build command is required.

### Netlify

Drag the folder into Netlify Drop or connect the repo. Leave the build command blank and set the publish directory to the project root.

### GitHub Pages

Push these files to a GitHub repository, enable Pages in repository settings, and publish from the main branch root.
