function addChar (elem) {
  var display = document.getElementById('answer')
  var newText = document.createTextNode(elem.value)

  display.appendChild(newText)
}

function del (elem) {
  var display = document.getElementById('answer')
  var str = display.textContent

  str = str.substring(0, str.length - 1)
  console.log(str)
  document.getElementById('answer').innerHTML = str
}

function evaluate (elem) {
  var display = document.getElementById('answer')
  var str = display.textContent

  document.getElementById('answer').innerHTML = math.eval(str)
}
