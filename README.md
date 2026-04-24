Node version >20

# 🧠 Master Prompt (Updated for CSS Modules + Real Data)

Use this once at the beginning:

``` id="master_prompt_css_modules"
You are a senior frontend engineer helping me build a production-ready one-page dental clinic website using Next.js (App Router) and CSS Modules.

Rules:
- Use CSS Modules (.module.css) for styling (NO Tailwind)
- Use clean, modern, minimal medical UI
- Use functional React components
- Keep components modular and reusable
- Follow mobile-first responsive design
- Use semantic HTML
- Avoid unnecessary complexity and libraries

Project Details:
Clinic Name: Family Dental Care

Doctor:
Dr Mohd Sharik
BDS, MIDA (C.I.M.S.T)

Address:
Beside Islamia hospital, Badi Arjenti, Mubarakpur, Azamgarh

Phone:
+91 8400005628

Services:
- Tooth Cleaning
- Tooth Extraction
- Root Canal Treatment
- Laser Filling
- Ortho Treatment
- Dental Implant
- Smile Designing

Website Requirements:
- One-page layout
- Sections:
  1. Hero
  2. About Doctor / Clinic
  3. Services
  4. Contact
  5. Sticky CTA (Call + WhatsApp)

CTA Links:
- Call: tel:+918400005628
- WhatsApp: https://wa.me/918400005628?text=I want to book an appointment

Output Rules:
- Only provide code (no explanations unless asked)
- Always mention file paths before code
- Use proper folder structure
- Do not repeat unchanged files
- Ensure code is complete and directly usable

We will build step by step. Wait for next instruction after each step.
```

---

# 🚀 Step-by-Step Prompts (Refined & Safe)

These are **validated for flow + minimal breakage**.

---

## 🧱 Step 1: Project Base (Clean Foundation)

``` id="step1_base"
Create the base Next.js App Router structure.

Requirements:
- app/layout.tsx with basic HTML structure
- app/page.tsx as homepage
- Global CSS (app/globals.css)
- Add metadata (title: Family Dental Care, description: dental clinic in Azamgarh)

Layout:
- Simple header placeholder (clinic name)
- Footer placeholder

Return only:
- app/layout.tsx
- app/page.tsx
- app/globals.css
```

---

## 🎨 Step 2: Hero Section (First UI Block)

``` id="step2_hero"
Create Hero section component.

Requirements:
- Heading: "Bright Smiles, Trusted Care"
- Subtext about quality dental care
- Two buttons:
  - Call Now
  - Book on WhatsApp
- Clean medical UI (white/blue theme)
- Responsive (mobile-first)

Technical:
- Use CSS Modules
- Create separate CSS file

Return:
- components/Hero.tsx
- components/Hero.module.css
- Update app/page.tsx to include Hero
```

---

## 🏥 Step 3: About Section (Doctor Trust)

``` id="step3_about"
Create About section.

Requirements:
- Show doctor name and qualifications:
  Dr Mohd Sharik, BDS, MIDA (C.I.M.S.T)
- Short trust-building paragraph
- Clean layout (text-focused)
- Optional image placeholder

Technical:
- CSS Modules

Return:
- components/About.tsx
- components/About.module.css
- Update page.tsx
```

---

## 🦷 Step 4: Services Section (Structured Grid)

``` id="step4_services"
Create Services section.

Requirements:
- Show all services:
  Tooth Cleaning
  Tooth Extraction
  Root Canal Treatment
  Laser Filling
  Ortho Treatment
  Dental Implant
  Smile Designing

- Use grid layout
- Each item:
  - Title
  - Short 1-line description (generate content)

Technical:
- CSS Modules
- Responsive grid

Return:
- components/Services.tsx
- components/Services.module.css
- Update page.tsx
```

---

## 📞 Step 5: Contact Section (Conversion Focus)

``` id="step5_contact"
Create Contact section.

Requirements:
- Display:
  Clinic Name
  Address
  Phone number
- Add Call Now button
- Clean readable layout

Technical:
- CSS Modules

Return:
- components/Contact.tsx
- components/Contact.module.css
- Update page.tsx
```

---

## 📌 Step 6: Sticky CTA (Critical Feature)

``` id="step6_cta"
Create Sticky CTA component.

Requirements:
- Fixed bottom bar
- Two buttons:
  - Call Now
  - WhatsApp
- Mobile-first
- Should not overlap content (use safe spacing)

Technical:
- CSS Modules
- Add globally (in layout.tsx)

Return:
- components/StickyCTA.tsx
- components/StickyCTA.module.css
- Updated layout.tsx
```

---

## 🎯 Step 7: UI Polish (Make It Look Premium)

``` id="step7_polish"
Improve UI across all components.

Requirements:
- Better spacing and alignment
- Consistent font sizes
- Improve colors (professional dental theme)
- Add hover effects to buttons
- Improve visual hierarchy

Return:
- Only updated CSS and components (no repetition)
```

---

## ⚡ Step 8: SEO + Final Touch

``` id="step8_seo"
Improve SEO and final structure.

Requirements:
- Enhance metadata (OpenGraph tags)
- Use semantic HTML (section, header, footer)
- Ensure accessibility (alt text, contrast)
- Clean structure

Return:
- Updated layout.tsx
- Any improved components
```

---

# ✅ Why This Will Work Smoothly

This version avoids common Claude issues:

- ❌ No Tailwind confusion  
- ❌ No missing styles  
- ❌ No repeated files  
- ❌ No broken imports  

And ensures:

- ✅ Incremental builds  
- ✅ Test after each step  
- ✅ Clean separation of concerns  
- ✅ Minimal debugging  

---

# 🧭 How You Should Execute (Important)

After each step:

1. Paste prompt in Claude  
2. Copy code into project  
3. Run:
   ```bash
   npm run dev
   ```
4. Fix small issues (if any)
5. Commit:
   ```bash
   git commit -m "step X completed"
   ```

---
