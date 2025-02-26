let count = $state(0)
const count2 = $state(['abc'])
const doubleCount = $derived(count * 2)

export const counterState = {
  get getCount() {
    return count
  },

  get getCount2(): readonly string[] {
    return count2
  },

  get getDoubleCount() {
    return doubleCount
  },

  setIncrement: () => count++,

  setDecrement: () => count--
}
