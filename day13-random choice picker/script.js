const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value)
})

function createTag(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.innerText = tag
        tagEl.classList.add('tag')
        tagsEl.appendChild(tagEl)
    })
}