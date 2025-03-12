function setTextColor() {
  const head = document.head
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = "p {color: rgba(255, 0, 0);}"
  head.appendChild(style)
}
