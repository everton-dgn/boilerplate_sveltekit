export const useCount = () => {
  let count = $state(0)

  return {
    get getCount() {
      return count
    },

    setIncrement: () => count++
  }
}
