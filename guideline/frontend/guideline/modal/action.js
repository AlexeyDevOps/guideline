(function() {
    const appendPxAttribute = function(value) {
		return value + "px"
	}
	
	const openModal = function(modal) {
		if (modal.className.indexOf('hidden') === -1) {
			return			
		}
		modal.classList.remove('hidden')		
	}
	
	const closeModal = function(modal) {
		if (modal.className.indexOf('hidden') !== -1) {
			return			
		}
		modal.classList.add('hidden')
	}
	
	window.openModal = openModal
	window.closeModal = closeModal
	
	let btns = document.querySelectorAll('.modal-button')

	Array.from(btns).map(function(btn) {
		let target = btn.dataset.target
		let modal = document.getElementById(target)
		let sizeRaw = modal.dataset.size
		let contentRaw = modal.dataset.content
		let backdrop = modal.dataset.backdrop
		
		let modalBody = modal.querySelector('.modal-body')
		let modalBackdrop = modal.querySelector('.modal-backdrop')
		let modalClose = modalBody.querySelector('.modal-close')
		let modalHeader = modalBody.querySelector('.modal-header')
		let modalContent = modalBody.querySelector('.modal-content')		
		
		let w = window.innerWidth
		let h = window.innerHeight
		
		let size = JSON.parse(sizeRaw)
		
		let wm = w * size.width
		let hm = h * size.height
		
		let left = parseInt((w - wm) / 2)
		let top = parseInt((h - hm) / 2)
		
		modalBody.style.left = appendPxAttribute(left)
		modalBody.style.top = appendPxAttribute(top)
		
		modalBody.style.width = appendPxAttribute(wm)
		modalBody.style.height = appendPxAttribute(hm)
		
		let content = JSON.parse(contentRaw)
		
		modalHeader.innerHTML = content.header
		modalContent.innerHTML = content.content
		
		btn.onclick = function() {
			openModal(modal)
		}
		
		modalClose.onclick = function() {
			closeModal(modal)
		}
		
		if (backdrop === 'true') {
			modalBackdrop.onclick = function() {
				closeModal(modal)
			}
		}
	})	
})()