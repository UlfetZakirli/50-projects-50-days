const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItem = []
getDate()

async function getDate() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const {
        results
    } = await res.json()
    console.log(results);


    filter.addEventListener('input', (e) => getFilterData(e.target.value))
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        listItem.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city} ${user.location.country}</p>
        </div>
        `
        result.appendChild(li)
    })
}

function getFilterData(searchTerm) {
    listItem.forEach(item => {
        if (item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}