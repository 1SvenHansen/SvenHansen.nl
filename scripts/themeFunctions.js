function getUserPreference() {
	const themeX = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
	return localStorage.getItem('theme') || themeX;
}
function saveUserPreference(userPreference) {
	localStorage.setItem('theme', userPreference);
	document.documentElement.className = userPreference;
}

function getAppliedMode(userPreference) {
	if (userPreference === 'light') {
		return 'light';
	}
	if (userPreference === 'dark') {
		return 'dark';
	}
	// system
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

function setAppliedMode(mode) {
	console.log('setting....:' + mode);
	document.body.className = mode;
	document.documentElement.className = mode;
}

function rotatePreferences(userPreference) {
	if (userPreference === 'dark') {
		return 'light';
	}
	if (userPreference === 'light') {
		return 'dark';
	}
	return 'light';
}

const themeToggler = document.getElementById('theme-toggle');

let userPreference = getUserPreference();
console.log(userPreference);
setAppliedMode(getAppliedMode(userPreference));

function triggerTheme() {
	const newUserPref = rotatePreferences(userPreference);
	userPreference = newUserPref;
	saveUserPreference(newUserPref);
	setAppliedMode(getAppliedMode(newUserPref));

	window.location = window.location;
}

// window.onload = function () {
// 	initializeTheme();
// };

// // Set a given theme scheme with corresponding elements
// function setTheme(themeName) {
// 	// Add theme to root element
// 	localStorage.setItem('theme', themeName);
// 	document.documentElement.className = themeName;

// 	// Set theme toggle icon
// 	setIcons(themeName);
// }

// // Toggle between light and dark theme
// function toggleTheme() {
// 	if (localStorage.getItem('theme') === 'theme-dark') {
// 		setTheme('theme-light');
// 	} else {
// 		setTheme('theme-dark');
// 	}
// }

// // Set icons corresponding to selected theme
// function setIcons(themeName) {
// 	if (themeName === 'theme-dark') {
// 		// Theme toggle icon
// 		document.getElementById('theme-toggle').classList.remove('fa-moon');
// 		document.getElementById('theme-toggle').classList.add('fa-sun');

// 		// Open source icon
// 		document.getElementById('open-source-icon').classList.remove('filter-black');
// 		document.getElementById('open-source-icon').classList.add('filter-white');
// 	} else {
// 		// Theme toggle icon
// 		document.getElementById('theme-toggle').classList.remove('fa-sun');
// 		document.getElementById('theme-toggle').classList.add('fa-moon');

// 		// Open source icon
// 		document.getElementById('open-source-icon').classList.remove('filter-white');
// 		document.getElementById('open-source-icon').classList.add('filter-black');
// 	}
// }

// // Set theme by checking user preferences
// function initializeTheme() {
// 	// Check if theme is not set in localStorage
// 	if (localStorage.getItem('theme') === null) {
// 		// Check if OS prefers dark mode
// 		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			setTheme('theme-dark');
// 		}
// 		// Check if OS prefers light mode
// 		else {
// 			setTheme('theme-light');
// 		}
// 	}
// 	// Theme is set in localStorage
// 	else {
// 		// Check if OS prefers dark mode
// 		if (localStorage.getItem('theme') === 'theme-dark') {
// 			setTheme('theme-dark');
// 		} else {
// 			setTheme('theme-light');
// 		}
// 	}
// }
