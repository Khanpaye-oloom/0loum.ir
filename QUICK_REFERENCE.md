# Quick Start Guide - خانه‌پایه می‌آموزد

## 🚀 شروع سریع

### Local Testing
```powershell
cd "e:\GitM0nt\0loum.ir"
python -m http.server 8080
```
سپس باز کنید: **http://localhost:8080**

### File Structure
```
مهم: تمام کامپوننت‌ها در /components/ هستند
- header.html   → یکبار نوشته شد، همه جا استفاده می‌شود
- footer.html   → یکبار نوشته شد، همه جا استفاده می‌شود
- sidebar.html  → برای صفحات درون pages استفاده می‌شود
```

### How Pages Load Components

هر صفحه اکنون این pattern استفاده می‌کند:

```html
<html>
<head>
  <link rel="stylesheet" href="/assets/CSS/style.css">
  <link rel="stylesheet" href="/assets/CSS/responsive.css">
</head>
<body>
  <!-- Header (from components/header.html) -->
  <div data-include="/components/header.html"></div>
  
  <!-- Page Content -->
  <main><!-- unique content per page --></main>
  
  <!-- Footer (from components/footer.html) -->
  <div data-include="/components/footer.html"></div>
  
  <!-- JavaScript that loads components -->
  <script src="/assets/JS/main.js"></script>
</body>
</html>
```

---

## 🎯 Common Tasks

### Update Header Navigation
Edit: `components/header.html`

تمام صفحات خودکار update می‌شوند!

### Update Footer Links
Edit: `components/footer.html`

تمام صفحات خودکار update می‌شوند!

### Add New Page
```html
<!-- Template: basic-page.html -->
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Your Page Title</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/CSS/style.css">
  <link rel="stylesheet" href="/assets/CSS/responsive.css">
</head>
<body>
  <div data-include="/components/header.html"></div>
  
  <main>
    <!-- Your content here -->
  </main>
  
  <div data-include="/components/footer.html"></div>
  <script src="/assets/JS/main.js"></script>
</body>
</html>
```

### Change Styles
- **Global styles:** Edit `assets/CSS/style.css`
- **Mobile/Tablet:** Edit `assets/CSS/responsive.css`
- **Page-specific:** Add `<style>` in page's `<head>`

### Add JavaScript
- **Global behavior:** Edit `assets/JS/main.js`
- **Page-specific:** Add `<script>` at bottom of page

---

## ✨ What Changed

| Before | After |
|--------|-------|
| 11 copies of header | 1 header component |
| 11 copies of footer | 1 footer component |
| 1000+ lines duplicate code | ~100 lines total |
| Edit 11 files for nav change | Edit 1 file |
| Inconsistent styling | Unified CSS |

---

## 🔍 Troubleshooting

### Components not loading?
1. Open Browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Make sure `/components/` files exist and are readable

### Styling not applying?
1. Hard refresh page (Ctrl+Shift+R)
2. Check that CSS files are linked correctly
3. Check browser's "Network" tab to confirm CSS loads

### Mobile menu not working?
1. Check that `assets/JS/main.js` loads
2. Browser console should be error-free
3. Make sure HTML IDs match: `hamburgerBtn`, `mobileNavContainer`, `closeBtn`

---

## 📈 Next Steps

**Priority 1 (High):**
- [ ] Test all pages at http://localhost:8080
- [ ] Verify mobile menu works
- [ ] Verify footer year updates correctly

**Priority 2 (Medium):**
- [ ] Connect contact form to Formspree or backend
- [ ] Add form validation
- [ ] Optimize images

**Priority 3 (Low):**
- [ ] Consider SSG migration (Eleventy, Jekyll)
- [ ] Add Service Worker for offline
- [ ] Implement analytics

---

## 📚 Resources

- **CSS Variables:** See `:root` in `style.css`
- **Responsive:** See media queries in `responsive.css`
- **Component Loading:** See `includeHTML()` in `main.js`
- **Mobile Menu:** See `initHeaderMenu()` in `main.js`

---

## 📞 Support

If pages don't load:
1. **Check server**: Is Python HTTP server running on port 8080?
2. **Check paths**: Are file paths absolute (/components/header.html)?
3. **Check errors**: Open DevTools console (F12)
4. **Check network**: Network tab should show successful requests

---

Generated: December 5, 2025
