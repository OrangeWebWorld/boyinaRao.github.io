console.log('Its working')

let theme = localStorage.getItem('theme');

if(theme == 'light'){
	setTheme('light')
}else{
	// alert("lokii=="+theme)
	setTheme(theme)
	// toggleSwitch.checked = true;
}

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

// for toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.getElementById('theme-style').href = 'blue.css'
        localStorage.setItem('theme', 'blue'); //add this
    }
    else {
        document.getElementById('theme-style').href = 'default.css'
        localStorage.setItem('theme', 'light'); //add this
	}   
	
	
}

toggleSwitch.addEventListener('change', switchTheme, false);

