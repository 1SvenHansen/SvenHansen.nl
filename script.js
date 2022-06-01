// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
	setThemeToggleIcon(themeName);
}

// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

function setThemeToggleIcon(themeName) {
	if (themeName === 'theme-dark') {
		document.getElementById('theme-toggle').class.remove('fa-moon');
		document.getElementById('theme-toggle').classList.add('fa-sun-bright');
	} else {
		document.getElementById('theme-toggle').classList.remove('fa-sun-bright');
		document.getElementById('theme-toggle').classList.add('fa-moon');
	}
}

// Immediately invoked function to set the theme on initial load
(function () {
	// Check if theme is not set in localStorage
	if (localStorage.getItem('theme') === null) {
		// Check if OS prefers dark mode
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('theme-dark');
		}
		// Check if OS prefers light mode
		else {
			setTheme('theme-light');
		}
	}
	// Theme is set in localStorage
	else {
		// Check if OS prefers dark mode
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	}
})();
