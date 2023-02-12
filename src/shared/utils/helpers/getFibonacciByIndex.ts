export function getFibonacciByIndex(n: number): number {
  if (n === 0 || n === 1) return 0
  let a = 0,
    b = 1
  for (let i = 3; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
