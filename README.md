# Quick Haulers — Dumpster Rentals Website

Static marketing site for **Quick Haulers**, a dumpster rental company serving Long Island's East End, NY. Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** [https://jimmyflame77.github.io/Quick-Haulers/](https://jimmyflame77.github.io/Quick-Haulers/)  
**Phone:** 631-315-5555

---

## Architecture Overview

This site uses Jekyll's `_data`, `_includes`, and `_layouts` system so that shared content is defined once and inherited everywhere. No copy-pasting markup across pages.

```
Quick-Haulers/
├── _config.yml                    # Site config (url, baseurl, plugins)
├── _data/
│   ├── pricing.yml                # Dumpster sizes, prices, features
│   ├── services.yml               # Service callout card definitions
│   ├── service_areas.yml          # All 28 service area links
│   ├── navigation.yml             # Header/footer nav links
│   └── site.yml                   # Phone, hours, company name, domain
├── _includes/
│   ├── head.html                  # <head> — meta, OG, Twitter, favicon, CSS
│   ├── header.html                # Sticky nav, logo, hamburger, mobile menu
│   ├── footer.html                # Footer (location + default variants)
│   ├── pricing-cards.html         # Data-driven pricing card grid
│   ├── service-cards.html         # Data-driven service callout grid
│   ├── cta-band.html              # Call-to-action band
│   ├── area-tags.html             # Service area tag buttons
│   ├── schema-local-business.html # LocalBusiness JSON-LD
│   ├── schema-faq.html            # FAQPage JSON-LD
│   ├── schema-breadcrumb.html     # BreadcrumbList JSON-LD
│   └── scripts.html               # Shared JS reference
├── _layouts/
│   ├── default.html               # Base layout (homepage, blog, map)
│   └── location.html              # Full location page layout
├── css/style.css                  # Global stylesheet (single file)
├── js/main.js                     # Shared JS (hamburger, FAQ, CTA)
├── assets/images/                 # hero.png, logo.png, favicon.jpg
├── index.html                     # Homepage
├── blog.html                      # Blog (WordPress API)
├── map.html                       # Interactive Leaflet map
└── [city]-ny.html                 # Location pages (8 currently built)
```

---

## How to Update Things Globally

### Update pricing everywhere

Edit **`_data/pricing.yml`**. Change the `price`, `dimensions`, `features`, `badge`, or `featured` flag for any dumpster size. Every page that displays pricing cards and every LocalBusiness schema will update automatically on the next build.

```yaml
# Example: raise the 15-yard price to $597
- size: "15"
  title: "15-Yard Dumpster"
  price: "597"          # ← change this one value
  ...
```

### Update service callout cards everywhere

Edit **`_data/services.yml`** to change the default cards (icon, title, description). These appear on the homepage and any location page that doesn't override them.

Location pages with city-customized descriptions use the `service_cards` array in their own front matter — edit that page's YAML block directly.

### Add or remove a service area

Edit **`_data/service_areas.yml`** — add or remove entries. The area tag buttons on every page and the map page grid update automatically.

```yaml
# Example: add a new area
- name: "Montauk"
  url: "montauk-ny.html"
```

If the area has a map pin, also add its coordinates to the `AREA_COORDS` array inside `map.html`.

### Update the header / navigation

- **Nav links:** Edit **`_data/navigation.yml`** to add, remove, or reorder links.
- **Header markup/layout:** Edit **`_includes/header.html`**.

All pages inherit changes immediately.

### Update the footer

Edit **`_includes/footer.html`**. The location-page footer variant uses `page.city` from each page's front matter to show "Serving [City], NY."

### Update shared JS behavior

Edit **`js/main.js`**. This single file contains the hamburger menu toggle, FAQ accordion, and desktop CTA visibility logic.

### Update global site info (phone, hours, company name)

Edit **`_data/site.yml`**. These values are used across all includes, layouts, and schema markup.

```yaml
phone: "631-315-5555"
phone_formatted: "(631) 315-5555"
phone_link: "tel:6313155555"
company_name: "Quick Haulers"
hours: "Mon–Sat 7 AM – 6 PM"
```

### Update SEO / meta tags

- **Sitewide defaults:** `_config.yml` (title, description) and `_includes/head.html` (OG, Twitter Card structure).
- **Per-page:** Each page's YAML front matter controls its `title`, `description`, `canonical`, `og_title`, `og_description`, etc.
- **Schema markup:** `_includes/schema-local-business.html`, `schema-faq.html`, `schema-breadcrumb.html` — these pull from `_data/` and page front matter automatically.

---

## How to Add a New Location Page

1. Create a new file at the root, e.g. `montauk-ny.html`.
2. Use `layout: location` and fill in the front matter — copy from an existing location page like `bridgehampton-ny.html` as a template.
3. Customize: `city`, `hero_description`, `why_*` fields, `service_cards` (city-specific descriptions), `faqs`, `how_steps`, etc.
4. Add the area to `_data/service_areas.yml` so it appears in the tag buttons sitewide.
5. Add coordinates to the `AREA_COORDS` array in `map.html` for the map pin.
6. Commit and push — GitHub Pages builds automatically.

---

## Local Development

```bash
# Install dependencies (requires Ruby)
bundle install

# Run local server
bundle exec jekyll serve

# Site available at http://localhost:4000/Quick-Haulers/
```

---

## Deployment

The site deploys automatically via **GitHub Pages** on push to `main`. The build runs Jekyll and publishes to:

**https://jimmyflame77.github.io/Quick-Haulers/**

When migrating to a custom domain (e.g. `quickdumpsters.digidev.solutions`):
1. Set the custom domain in repo Settings → Pages.
2. Change `baseurl` in `_config.yml` from `"/Quick-Haulers"` to `""`.
3. Update `url` in `_config.yml` to `"https://quickdumpsters.digidev.solutions"`.
4. Push the changes.

---

## Key Files Quick Reference

| I want to change...             | Edit this file                          |
|---------------------------------|-----------------------------------------|
| Dumpster prices / sizes         | `_data/pricing.yml`                     |
| Service callout cards           | `_data/services.yml`                    |
| Service area list               | `_data/service_areas.yml`               |
| Phone number / hours            | `_data/site.yml`                        |
| Nav links                       | `_data/navigation.yml`                  |
| Header markup                   | `_includes/header.html`                 |
| Footer markup                   | `_includes/footer.html`                 |
| Global CSS                      | `css/style.css`                         |
| Shared JS                       | `js/main.js`                            |
| Homepage content                | `index.html`                            |
| Location page content           | `[city]-ny.html` (front matter)         |
| Map pins / coordinates          | `map.html` (`AREA_COORDS` array)        |
| Blog                            | `blog.html`                             |
| SEO meta (sitewide)             | `_includes/head.html`, `_config.yml`    |
| SEO meta (per page)             | Front matter of each `.html` file       |
| Schema / structured data        | `_includes/schema-*.html`               |

---

## Tech Stack

- **Jekyll 3.10** (GitHub Pages compatible)
- **Leaflet.js** for the interactive service area map
- **Vanilla JS** — no frameworks or build tools
- **GitHub Pages** for hosting and CI/CD
