window.onload = function () {
	initializeTheme();
};

// Set a given theme scheme with corresponding elements
function setTheme(themeName) {
	// Add theme to root element
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;

	// Set theme toggle icon
	setIcons(themeName);
}

// Toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

function getTheme() {
	const localTheme = localStorage.getItem('theme');
	if (localTheme === null) {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	} else {
		return localTheme;
	}
}

// Set icons corresponding to selected theme
function setIcons(themeName) {
	if (themeName === 'theme-dark') {
		// Theme toggle icon
		document.getElementById('theme-toggle').classList.remove('fa-moon');
		document.getElementById('theme-toggle').classList.add('fa-sun');

		// Open source icon
		document.getElementById('open-source-icon').classList.remove('filter-black');
		document.getElementById('open-source-icon').classList.add('filter-white');
	} else {
		// Theme toggle icon
		document.getElementById('theme-toggle').classList.remove('fa-sun');
		document.getElementById('theme-toggle').classList.add('fa-moon');

		// Open source icon
		document.getElementById('open-source-icon').classList.remove('filter-white');
		document.getElementById('open-source-icon').classList.add('filter-black');
	}
}

// Set theme by checking user preferences
function initializeTheme() {
	// Check if theme is not set in localStorage
	setTheme(getTheme());
}
