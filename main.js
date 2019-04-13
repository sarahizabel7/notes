let id = 0

function addCard() {
	const input = document.getElementById('input')
	const content = document.getElementById('content')
	const select = document.getElementById('select')
	const text = input.value
	const color = select.value
	const card = createCard(color, text)
	const actions = createActions()
	card.appendChild(actions)
	content.insertAdjacentElement('beforeend', card)
	id++
	resetHeader()
}

function createActions() {
	const div = document.createElement('div')
	const editButton = createEditButton()
	const deleteButton = createDeleteButton()
	div.classList.add('actions')
	div.appendChild(editButton)
	div.appendChild(deleteButton)
	return div
}

function createEditButton() {
	const button = document.createElement('a')
	button.setAttribute('id', `button-${id}`)
	button.setAttribute('onclick', `editCardInit(${id})`)
	button.classList.add('action-button')
	button.classList.add('fa')
	button.classList.add('fa-pencil')
	return button
}

function createDeleteButton() {
	const button = document.createElement('a')
	button.setAttribute('id', `button-delete-${id}`)
	button.setAttribute('onclick', `deleteCard(${id})`)
	button.classList.add('action-button')
	button.classList.add('fa')
	button.classList.add('fa-times')
	return button
}

function createCard(color, text) {
	const card = document.createElement('div')
	const p = document.createElement('p')
	p.innerText = text
	p.setAttribute('id', `p-${id}`)
	p.classList.add('card-paragraph')
	card.setAttribute('id', `card-${id}`)
	card.appendChild(p)
	card.setAttribute('color', color + '')
	card.classList.add('card')
	card.classList.add(color)
	return card
}

function deleteCard(id) {
	const card = document.getElementById(`card-${id}`)
	resetHeader()
	return card.parentNode.removeChild(card)
}

function editCardInit(id) {
	const input = document.getElementById('input')
	const select = document.getElementById('select')
	const button = document.getElementById('addBtn')
	const card = document.getElementById(`card-${id}`)
	const p = document.getElementById(`p-${id}`)
	const color = card.getAttribute('color')
	select.value = color
	input.value = p.innerText
	button.innerHTML = 'Save'
	button.setAttribute('onclick', `editCard(${id})`)
}

function editCard(id) {
	const select = document.getElementById('select')
	const input = document.getElementById('input')
	const p = document.getElementById(`p-${id}`)
	const card = document.getElementById(`card-${id}`)
	card.classList.remove(card.getAttribute('color'))
	card.classList.add(select.value)
	card.setAttribute('color', select.value)
	p.innerText = input.value
	resetHeader()
}

function resetHeader() {
	const select = document.getElementById('select')
	const input = document.getElementById('input')
	const button = document.getElementById('addBtn')
	button.innerHTML = 'Add'
	input.value = ''
	select.value = 'yellow'
	button.setAttribute('onclick', 'addCard()')
}
