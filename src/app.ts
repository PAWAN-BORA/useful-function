/* get a random integer between two numbers */
export function randomInt(a: number, b: number): number {
  if (a > b) {
    throw new Error(`${a} should be less than ${b}`);
  }
  let total = b-a+1;
  return Math.floor(Math.random()*total+a)
}
/* get an array of distinct random interger between two numbers */
export function randomIntArray(a:number, b:number):number[]{
  if (a > b) {
    throw new Error(`${a} should be less than ${b}`);
  }
  let array:number[] = [];
  let totalNumber = b-a+1;
  for(let i=0; i<totalNumber; i++) {
    let randomNum = randomInt(a, b);
    while(array.includes(randomNum)){
      randomNum =randomInt(a, b);
    }
    array.push(randomNum)
  }
  return array;
}

/* get an array of distinct random interger with certain length and range */

interface Range {
  first:number,
  last:number
}
export function ranIntArrayInRange(num:number,  range:Range):Array<number> {
  if(num > (range.last-range.first)) {
    throw Error(`${num} should be less than the range of numbers`);
  
  } 
  let array:Array<number> = [];
  for(let i=0; i<num; i++) {
    let randomNum = randomInt(range.first, range.last);
    while (array.includes(randomNum)) {
      randomNum = randomInt(range.first, range.last)
    }
    array.push(randomNum)
  }
  return array;
}

/*------------------> Get a 2D array<------------------*/ 

export function twoDArray(row:number, column:number):Array<Array<any>> {
  let array = new Array(row);
  for(let j=0; j<row; j++) {
    array[j] = new Array(column);  
  }
  return array;
}


