let array = []
for (let i = 0; i < 30; i++) {
    array[i] = Math.round(Math.random(0, 99) * 99)
}

let num = 1
for (let i in array) {
    let key = document.getElementById(`${num}`)
    key.textContent = array[i]
    if (array[i] >= 50) {
        key.className = 'yellow'
    }
    num++

}

function foo() {
    let count = 0
    let random = Math.round(Math.random(0, 99) * 99)
    let random2 = Math.round(Math.random(0, 99) * 99)

    let tr = document.createElement('tr')
    tr.innerHTML = `<td class="yellow">${random}</td>`
    // let td = document.createElement('td')
    if (count == 0) {
        if (random >= 50) {
            tr.innerHTML = `<td class="yellow">${random}</td>`
            document.body.append(tr)
            count++
        } else if (random < 50) {
            tr.innerHTML = `<td>${random}</td>`
            document.body.append(tr)
            count++
        }
    } else if (count <= 5) {
        if (random >= 50) {
            tr.innerHTML = ` ${innerHTML} <td class="yellow">${random2}</td>`
            count++
        } else if (random < 50) {
            tr.innerHTML = `${innerHTML} <td>${random2}</td>`
            count++
        }
    }
}
