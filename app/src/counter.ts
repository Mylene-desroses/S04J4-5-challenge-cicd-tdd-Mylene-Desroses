export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export const decrementCounter = (num: number) => {
  let counter = 0
  counter = num
  const decreaseNum = num -= 1
  return decreaseNum;

}
