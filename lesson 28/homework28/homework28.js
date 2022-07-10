const output = document.querySelector('#bills')

let arr = [200, 100, 50, 20, 10, 5, 1, 0.5, 0.1]

let i = 0;
document.querySelector('#btn').addEventListener('click', () => {
    output.innerHTML = ""
    const val = +document.querySelector('#inp').value;
    reminder = val;

    arr.forEach(element => {
        let res = Math.floor(reminder / element);
        reminder = reminder % element;
        if (res === 0) {} else {
            output.innerHTML += `<div> <h1>${res}</h1>`
            for (let x = 0; x < res; x++) {
                output.innerHTML += `<img src="img (${element}).png" id="img-${i}"> `
            }
            output.innerHTML += `</div>
            <br>
           `
        }
        i++
    });

})
