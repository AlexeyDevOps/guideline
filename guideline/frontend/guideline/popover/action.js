(function() {
    const appendPxAttribute = function(value) {
		return value + "px"
	}
	
	const setToggle = function(btn, toggle, position) {
		let wb = btn.offsetWidth
		let hb = btn.offsetHeight
		
		let wt = toggle.offsetWidth
		let ht = toggle.offsetHeight

		if (position == null || position === "top" || position === "bottom") {
			let mrgLeft = parseInt((wt - wb) / 2) * -1
			toggle.style.marginLeft = appendPxAttribute(mrgLeft)
			
			if (position === "top") {
				let mrgTop = (hb + ht) * -1
				toggle.style.marginTop = appendPxAttribute(mrgTop)
			} else {
				toggle.style.marginTop = appendPxAttribute(0)
			}
		} else {
			let mrgTop = parseInt(hb + (ht - hb) / 2) * -1
			toggle.style.marginTop = appendPxAttribute(mrgTop)
			
			if (position === "left") {
				let mrgLeft = wt * -1;
				toggle.style.marginLeft = appendPxAttribute(mrgLeft)
			} else {
				let mrgLeft = wb;
				toggle.style.marginLeft = appendPxAttribute(mrgLeft)
			}
		}
	}
	
	const setToggles = function() {
		let containers = document.querySelectorAll('.popover')

		Array.from(containers).map(function(container) {
			let btn = container.querySelector('.popover-button')
			let toggle = container.querySelector('.popover-toggle')
			let trigger = container.dataset.trigger
			let position = container.dataset.position
			
			setToggle(btn, toggle, position)
			
			if (trigger === 'click') {
				btn.onclick = function() {
					if (toggle.className.indexOf('hidden') === -1) {
						toggle.classList.add('hidden')
					} else {
						toggle.classList.remove('hidden')
					}
				}
			} else {
				btn.onmouseover = function() { 
					toggle.classList.remove('hidden')
				}
				btn.onmouseout = function() {
					toggle.classList.add('hidden')
				}
			}
		})
	}
	
	setTimeout(setToggles, 200);
})()