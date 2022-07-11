/* Author: 

*/


let insert = document.getElementById("insert")

window.addEventListener('keydown', function(k){
    console.log(k)
    insert.innerHTML = `
    <div class="key">
        ${k.key === ' ' ? 'Space' : k.key}
        <p>event.Key</p>
    </div>
    <div class="key">
        ${k.keyCode}
        <p>event.KeyCode</p>
    </div>
    <div class="key">
        ${k.code}
        <p>event.code</p>
    </div>
    `
})






