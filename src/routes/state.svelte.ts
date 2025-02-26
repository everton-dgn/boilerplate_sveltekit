let count = $state(0)
const doubleCount = $derived(count * 2)

export const counterState = {
  get getCount() {
    return count
  },

  get getDoubleCount() {
    return doubleCount
  },

  setIncrement: () => count++,

  setDecrement: () => count--
}
