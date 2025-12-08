# 🧪 Priority 2 Testing Guide

**Status:** Implementation Complete ✅  
**Date:** December 5, 2025  
**Purpose:** Verify all form validation and styling features

---

## 📊 Test Overview

**Total Tests:** 12  
**Coverage:** Validation, Styling, Submission, Mobile, Accessibility

---

## 🧪 Manual Testing Steps

### Test Environment Setup

```bash
# Start Python HTTP server (if not already running)
python -m http.server 8080

# Open in browser:
# http://localhost:8080/contact.html
# http://localhost:8080/pages/contact.html
```

---

## ✅ Test Suite 1: Form Validation - Name Field

### Test 1.1: Empty Name Field
**Steps:**
1. Open http://localhost:8080/contact.html
2. Click "نام شما" input field
3. Click elsewhere (blur event)

**Expected:**
- [ ] Error message appears below input
- [ ] Error text: "نام باید حداقل 2 حرف باشد"
- [ ] Input has red border
- [ ] Input background has red tint

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 1.2: Single Character Name
**Steps:**
1. Type "a" in name field
2. Click elsewhere (blur)

**Expected:**
- [ ] Error shows: "نام باید حداقل 2 حرف باشد"
- [ ] Input highlighted in red

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 1.3: Valid Name (2+ characters)
**Steps:**
1. Clear name field
2. Type "علی محمدی"
3. Click elsewhere (blur)

**Expected:**
- [ ] No error appears
- [ ] Input border returns to normal
- [ ] No red highlighting

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 2: Form Validation - Email Field

### Test 2.1: Empty Email Field
**Steps:**
1. Leave email field empty
2. Click elsewhere (blur)

**Expected:**
- [ ] Error message appears
- [ ] Error text: "لطفاً یک ایمیل معتبر وارد کنید"

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 2.2: Invalid Email Format
**Steps:**
1. Type "invalid-email" (no @ symbol)
2. Click elsewhere

**Expected:**
- [ ] Error appears: "لطفاً یک ایمیل معتبر وارد کنید"

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 2.3: Incomplete Email
**Steps:**
1. Type "user@" (no domain)
2. Click elsewhere

**Expected:**
- [ ] Error appears about invalid email

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 2.4: Valid Email
**Steps:**
1. Clear email field
2. Type "ali@gmail.com"
3. Click elsewhere

**Expected:**
- [ ] No error appears
- [ ] Input returns to normal

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 3: Form Validation - Message Field

### Test 3.1: Empty Message Field
**Steps:**
1. Leave message field empty
2. Click elsewhere

**Expected:**
- [ ] Error appears
- [ ] Error text: "پیام باید حداقل 10 حرف باشد"

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 3.2: Short Message (< 10 chars)
**Steps:**
1. Type "سلام" (4 characters)
2. Click elsewhere

**Expected:**
- [ ] Error appears about minimum 10 characters

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 3.3: Valid Message (10+ chars)
**Steps:**
1. Clear message field
2. Type "سلام من یک سوال دارم درباره دوره ریاضیات"
3. Click elsewhere

**Expected:**
- [ ] No error appears
- [ ] Input returns to normal

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 4: Form Submission

### Test 4.1: Invalid Submit Attempt
**Steps:**
1. Clear all fields
2. Click "ارسال پیام" button

**Expected:**
- [ ] Form does NOT submit
- [ ] Error message appears at top: "لطفاً تمام فیلدها را صحیح پر کنید"
- [ ] Browser stays on same page

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 4.2: Valid Submit
**Steps:**
1. Fill all fields validly:
   - Name: "علی محمدی"
   - Email: "test@gmail.com"
   - Message: "سلام من یک سوال دارم درباره دوره ریاضیات"
2. Click "ارسال پیام"

**Expected:**
- [ ] Form submits to Formspree
- [ ] Page redirects to Formspree thank-you page (or shows success)
- [ ] Submission appears in Formspree dashboard

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 5: Real-Time Validation

### Test 5.1: Error Clearing on Input
**Steps:**
1. Type "a" in name field
2. Wait for error to show
3. Type "b" (now "ab")
4. Observe error

**Expected:**
- [ ] Error disappears as soon as user types
- [ ] No need to blur field for error to clear

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 6: Mobile Responsiveness

### Test 6.1: Form on Mobile
**Steps:**
1. Open DevTools (F12)
2. Toggle device toolbar (mobile view)
3. Set to iPhone 12 (390x844)
4. Interact with form

**Expected:**
- [ ] Form is readable on mobile
- [ ] Inputs are full width
- [ ] Labels are visible
- [ ] Errors display properly
- [ ] Button is clickable
- [ ] Validation still works

**Actual:** _______________

**Pass/Fail:** _______________

---

## ✅ Test Suite 7: Accessibility

### Test 7.1: Keyboard Navigation
**Steps:**
1. Press Tab key
2. Navigate through all form fields
3. Try to trigger validation with keyboard only

**Expected:**
- [ ] Can tab through all inputs
- [ ] Can see focus ring
- [ ] Can submit with Enter key
- [ ] Validation triggers on blur

**Actual:** _______________

**Pass/Fail:** _______________

---

## 🎨 Test Suite 8: Visual Styling

### Test 8.1: Error Styling
**Steps:**
1. Trigger an error in any field
2. Look at styling

**Expected:**
- [ ] Input has red border
- [ ] Error text is red (#ef4444)
- [ ] Error text is smaller (0.875rem)
- [ ] Error appears directly below input
- [ ] Red box-shadow around input

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 8.2: Success Message (Optional - for testing only)
**Expected:**
- [ ] Success message has green background (#ecfdf5)
- [ ] Success text is dark green (#065f46)
- [ ] Left border is green (#10b981)
- [ ] Message has padding (12px 16px)
- [ ] Smooth slide-down animation

**Actual:** _______________

**Pass/Fail:** _______________

---

## 🔧 Browser Compatibility Tests

### Test 9.1: Chrome/Chromium
**Steps:**
1. Open form in Chrome
2. Run through validation tests

**Expected:**
- [ ] All tests pass

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 9.2: Firefox
**Steps:**
1. Open form in Firefox
2. Run through validation tests

**Expected:**
- [ ] All tests pass
- [ ] Validation still works

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 9.3: Safari (if available)
**Steps:**
1. Open form in Safari
2. Run through validation tests

**Expected:**
- [ ] All tests pass

**Actual:** _______________

**Pass/Fail:** _______________

---

## 📱 Specific Browser Tests

### Test 10.1: Mobile Safari
**Steps:**
1. Test on iPhone or iPad
2. Try form submission
3. Check validation works

**Expected:**
- [ ] Form is usable
- [ ] Touch targets are large enough
- [ ] Validation works

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 10.2: Chrome Mobile
**Steps:**
1. Test on Android device or emulator
2. Verify form functionality

**Expected:**
- [ ] All functionality works
- [ ] Responsive layout intact

**Actual:** _______________

**Pass/Fail:** _______________

---

## 🧪 Console Tests (Advanced)

### Test 11: JavaScript Functions Available
**Steps:**
1. Open DevTools Console (F12)
2. Paste this code:

```javascript
// Check all functions are available
console.log('Functions available:');
console.log('validateField:', typeof window.__kp.validateField);
console.log('showFieldError:', typeof window.__kp.showFieldError);
console.log('clearFieldError:', typeof window.__kp.clearFieldError);
console.log('showError:', typeof window.__kp.showError);
console.log('initFormValidation:', typeof window.__kp.initFormValidation);

// Check form exists
const form = document.querySelector('form[action*="formspree"]');
console.log('Form found:', form ? 'YES' : 'NO');

// Check inputs exist
if (form) {
  console.log('Inputs found:', form.querySelectorAll('input[required], textarea[required]').length);
}
```

**Expected Output:**
```
Functions available:
validateField: function
showFieldError: function
clearFieldError: function
showError: function
initFormValidation: function
Form found: YES
Inputs found: 3
```

**Actual:** _______________

**Pass/Fail:** _______________

---

### Test 12: Manual Validation Test
**Steps:**
1. In console, paste:

```javascript
// Get name input
const nameInput = document.getElementById('name');

// Test validation
nameInput.value = 'a';
const result = window.__kp.validateField.call(nameInput);
console.log('Single char validation result (should be false):', result);

// Test with valid name
nameInput.value = 'علی محمدی';
const result2 = window.__kp.validateField.call(nameInput);
console.log('Valid name result (should be true):', result2);
```

**Expected:**
- [ ] First result is `false`
- [ ] Second result is `true`
- [ ] Console shows these values

**Actual:** _______________

**Pass/Fail:** _______________

---

## 📋 Summary

| Test Suite | Tests | Pass | Fail | Notes |
|-----------|-------|------|------|-------|
| 1. Name Field | 3 | ___ | ___ | |
| 2. Email Field | 4 | ___ | ___ | |
| 3. Message Field | 3 | ___ | ___ | |
| 4. Submission | 2 | ___ | ___ | |
| 5. Real-Time | 1 | ___ | ___ | |
| 6. Mobile | 1 | ___ | ___ | |
| 7. Accessibility | 1 | ___ | ___ | |
| 8. Styling | 2 | ___ | ___ | |
| 9. Browsers | 3 | ___ | ___ | |
| 10. Mobile | 2 | ___ | ___ | |
| 11. Console | 1 | ___ | ___ | |
| 12. Manual | 1 | ___ | ___ | |
| **TOTAL** | **24** | **___** | **___** | |

---

## ✅ Pass/Fail Criteria

### PASS Requirements
- [ ] All 24 tests pass
- [ ] No console errors
- [ ] Form validates correctly
- [ ] Styling appears as expected
- [ ] Works on mobile
- [ ] Keyboard navigation works
- [ ] Accessible for screen readers

### FAIL - Action Items
If any test fails:
1. Note the test number and failure reason
2. Check browser console for JavaScript errors
3. Verify CSS file is loaded (Network tab)
4. Check that input IDs match: `name`, `email`, `message`
5. Verify form action contains "formspree"

---

## 🚀 Final Checklist

- [ ] All 24 manual tests passed
- [ ] Console test shows all functions available
- [ ] No JavaScript errors in console
- [ ] No CSS errors in console
- [ ] Form works on at least 2 browsers
- [ ] Form works on mobile view
- [ ] Keyboard navigation functional
- [ ] Ready for production deployment

---

## 📞 Issue Resolution

### Validation Not Working?
- Check: Is `validateField` function available in console?
- Check: Do inputs have `required` attribute?
- Check: Are input IDs exactly: `name`, `email`, `message`?
- Check: Is `main.js` file loaded? (Network tab)

### Styling Looks Wrong?
- Check: Is `style.css` loaded? (Network tab)
- Check: Are error styles present in CSS? (Ctrl+F `.form-control.error`)
- Check: Is there a CSS conflict? (Check computed styles in DevTools)

### Form Submits But Email Doesn't Arrive?
- Check: Is your Formspree ID correct?
- Check: Is Formspree account verified?
- Check: Check spam folder
- Check: Check Formspree dashboard for submissions

---

**Test Date:** _______________  
**Tester:** _______________  
**Result:** ✅ PASS / ❌ FAIL  
**Notes:** _______________

---

Generated: December 5, 2025 | Project: خانه‌پایه می‌آموزد
