type Counter = {
  getCount: number
  getDoubleCount: number
  setIncrement: () => void
  setDecrement: () => void
}

let count = $state<number>(0)

const doubleCount: number = $derived(count * 2)

const useCounter = (): Counter => ({
  get getCount() {
    return count
  },

  get getDoubleCount() {
    return doubleCount
  },

  setIncrement: () => count++,

  setDecrement: () => count--
})

export const counter = useCounter()
