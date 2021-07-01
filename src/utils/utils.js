const preventDefault = (e) => e.preventDefault()
const root = document.getElementById('app')
export const preventScrollY = (val) => {
  if (val === true) {
    root.addEventListener(
      'touchmove',
      preventDefault,
      false
    )
  }
  if (val === false) {
    root.removeEventListener(
      'touchmove',
      preventDefault,
      false
    )
  }
}
