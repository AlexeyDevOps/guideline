(function() {
    let dropdowns = document.querySelectorAll('.dropdown')
	
	Array.from(dropdowns).map(function(dropdown) {
		let content = dropdown.querySelector('.dropdown-content')
		let btn = dropdown.querySelector('.dropdown-button')
		let links = content.querySelectorAll('a')		
				
		btn.onclick = function() {
			content.classList.toggle('show')
		}
		
		Array.from(links).map(function(link) {
			link.onclick = function() {
				btn.innerHTML = link.innerHTML
				content.classList.toggle('show')
			}
		})
	})	
})()