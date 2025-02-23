type Counter = {
  getCount: () => number
  getDoubleCount: () => number
  setIncrement: () => void
  setDecrement: () => void
}

export const useCounter = (): Counter => {
  let count = $state<number>(0)

  const getCount = () => count

  const getDoubleCount = () => count * 2

  const setIncrement = () => count++

  const setDecrement = () => count--

  return { getCount, getDoubleCount, setIncrement, setDecrement }
}
