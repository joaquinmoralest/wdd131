const currentYear = document.getElementById('currentYear')
const lastModified = document.getElementById('lastModified')

const date = new Date()
const year = date.getFullYear()

currentYear.innerText = year
lastModified.innerText = `Last Modification: ${document.lastModified}`