/* get a random integer between two numbers */
export function randomInt(a: number, b: number): number {
  if (a > b) {
    throw new Error(`${a} should be less than ${b}`);
  }
  let total = a+b;
  return Math.floor(Math.random()*total+a)
}