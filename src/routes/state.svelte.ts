interface ICounter {
  count: number
  increment(): void
  decrement(): void
  doubleCount(): number
}

class Counter implements ICounter {
  count = $state<number>(0)

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  doubleCount(): number {
    return this.count * 2
  }
}

export const counter = new Counter()
