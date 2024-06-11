const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const listItem = document.createElement('li')
        const deleteButton = document.createElement('button')

        listItem.textContent = input.value
        deleteButton.textContent = '❌'

        listItem.append(deleteButton)
        list.append(listItem)

        deleteButton.addEventListener('click', function() {
            listItem.remove()
            input.focus()
        })

        input.value = ''
        input.focus()
    } else {
        input.focus()
    }
})