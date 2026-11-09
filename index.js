const coth1 = document.getElementById("coth1")
const coth2 = document.getElementById("coth2")
const button1 = document.getElementById("show")
const button2 = document.getElementById("swap")
const input = document.getElementById("input")
const result = document.getElementById("result")

function calulate(params) {

    if (coth1 === 'Мм') {
        if (coth2 === 'Мм') {
            result = input / 1
        } else if (coth2 === 'См') {
            result = input * (1/10)
        } else if (coth2 === 'Дм') {
            result = input * (1/100)
        } else if (coth2 === 'М') {
            result = input * (1/1000)
        } else if (coth2 === 'Км') {
            result = input * (1/1000000)
        }
    }
    else if (coth1 === 'См'){
        if (coth2 === 'Мм') {
            result = input * 10
        } else if (coth2 === 'См') {
            result = input * 1
        } else if (coth2 === 'Дм') {
            result = input * (1/10)
        } else if (coth2 === 'М') {
            result = input * (1/100)
        } else if (coth2 === 'Км') {
            result = input * (1/100000)
        }
    }
    else if (coth1 === 'Дм'){
        if (coth2 === 'Мм') {
            result = input * 100
        } else if (coth2 === 'См') {
            result = input * 10
        } else if (coth2 === 'Дм') {
            result = input * 1
        } else if (coth2 === 'М') {
            result = input * (1/10)
        } else if (coth2 === 'Км') {
            result = input * (1/10000)
        }
    }
    else if (coth1 === 'М'){
        if (coth2 === 'Мм') {
            result = input * 1000
        } else if (coth2 === 'См') {
            result = input * 100
        } else if (coth2 === 'Дм') {
            result = input * 10
        } else if (coth2 === 'М') {
            result = input * 1
        } else if (coth2 === 'Км') {
            result = input * (1/1000)
        }
    }
    else if (coth1 === 'Км'){
        if (coth2 === 'Мм') {
            result = input * 10000000
        } else if (coth2 === 'См') {
            result = input * 1000000
        } else if (coth2 === 'Дм') {
            result = input * 100000
        } else if (coth2 === 'М') {
            result = input * 1000
        } else if (coth2 === 'Км') {
            result = input * 1
        }
    }
}
button1.addEventListener('click', () => {

})