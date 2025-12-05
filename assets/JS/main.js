// Simple client-side include utility: loads HTML fragments into elements with `data-include` attribute
async function includeHTML() {
	const nodes = document.querySelectorAll('[data-include]');
	await Promise.all(Array.from(nodes).map(async (el) => {
		const url = el.getAttribute('data-include');
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error('Failed to load ' + url);
			const html = await res.text();
			el.innerHTML = html;
		} catch (err) {
			console.error(err);
		}
	}));
}

function initHeaderMenu() {
	const hamburgerBtn = document.getElementById('hamburgerBtn');
	const mobileNavContainer = document.getElementById('mobileNavContainer');
	const closeBtn = document.getElementById('closeBtn');
	const backdrop = document.querySelector('.mobile-nav-backdrop');
	if (!hamburgerBtn || !mobileNavContainer) return;

	const openMenu = () => { mobileNavContainer.classList.add('open'); mobileNavContainer.setAttribute('aria-hidden', 'false'); document.body.classList.add('menu-open'); };
	const closeMenu = () => { mobileNavContainer.classList.remove('open'); mobileNavContainer.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open'); };

	hamburgerBtn.addEventListener('click', openMenu);
	if (closeBtn) closeBtn.addEventListener('click', closeMenu);
	if (backdrop) backdrop.addEventListener('click', closeMenu);
	document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && mobileNavContainer.classList.contains('open')) { closeMenu(); } });
}

// ========== Form Validation Functions ==========

function validateField() {
	const input = this;
	const value = input.value.trim();
	
	if (input.id === 'name' && value.length < 2) {
		showFieldError(input, 'نام باید حداقل 2 حرف باشد');
		return false;
	}
	
	if (input.id === 'email') {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			showFieldError(input, 'لطفاً یک ایمیل معتبر وارد کنید');
			return false;
		}
	}
	
	if (input.id === 'message' && value.length < 10) {
		showFieldError(input, 'پیام باید حداقل 10 حرف باشد');
		return false;
	}
	
	clearFieldError(input);
	return true;
}

function showFieldError(input, message) {
	clearFieldError(input);
	const errorDiv = document.createElement('div');
	errorDiv.className = 'form-error';
	errorDiv.textContent = message;
	input.classList.add('error');
	input.parentNode.appendChild(errorDiv);
}

function clearFieldError(input) {
	const error = input.parentNode.querySelector('.form-error');
	if (error) error.remove();
	input.classList.remove('error');
}

function clearError() {
	clearFieldError(this);
}

function showError(message) {
	const form = document.querySelector('form[action*="formspree"]');
	if (!form) return;
	const existing = form.querySelector('.form-message');
	if (existing) existing.remove();
	const errorDiv = document.createElement('div');
	errorDiv.className = 'form-message form-error';
	errorDiv.textContent = message;
	form.insertBefore(errorDiv, form.firstChild);
	setTimeout(() => errorDiv.remove(), 5000);
}

function initFormValidation() {
	const form = document.querySelector('form[action*="formspree"]');
	if (!form) return;
	const inputs = form.querySelectorAll('input[required], textarea[required]');
	inputs.forEach(input => {
		input.addEventListener('blur', validateField);
		input.addEventListener('input', clearError);
	});
	form.addEventListener('submit', (e) => {
		let isValid = true;
		inputs.forEach(input => {
			if (!validateField.call(input)) {
				isValid = false;
			}
		});
		if (!isValid) {
			e.preventDefault();
			showError('لطفاً تمام فیلدها را صحیح پر کنید');
		}
	});
}

// ========== Initialize Everything ==========

document.addEventListener('DOMContentLoaded', async () => {
	await includeHTML();
	initHeaderMenu();
	const copyYear = document.getElementById('copy-year');
	if (copyYear) copyYear.textContent = new Date().getFullYear();
	initFormValidation();
});

window.__kp = { includeHTML, initHeaderMenu, validateField, showFieldError, clearFieldError, showError, initFormValidation };

