const buttons = document.querySelectorAll('.bleuk')
const bt1 = document.getElementById('1')
const bt2 = document.getElementById('2')
const bt3 = document.getElementById('3')
const bt4 = document.getElementById('4')
const bt5 = document.getElementById('5')
const bt6 = document.getElementById('6')
const bt7 = document.getElementById('7')
const bt8 = document.getElementById('8')
const bt9 = document.getElementById('9')
let changeValue
const x = [1, 2, 3, 6, 9, 8, 7, 4]

bt5.addEventListener ('click', function () {
  clockWise()
  rename()
})

for (const i of buttons) {
    i.addEventListener('click', function() { 
    antiClockWise()
    rename()
  })
}

function clockWise() {
  changeValue = x.pop()
  x.unshift(changeValue)
}

function rename() {
  bt1.innerHTML = x[0]
  bt2.innerHTML = x[1]
  bt3.innerHTML = x[2]
  bt4.innerHTML = x[7]
  bt6.innerHTML = x[3]
  bt7.innerHTML = x[6]
  bt8.innerHTML = x[5]
  bt9.innerHTML = x[4]
}

function antiClockWise() {
  changeValue = x.shift()
  x.push(changeValue)
}

