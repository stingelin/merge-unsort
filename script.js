// list to be randomized
const list = [1, 2, 3, 4];

// how many times to run
const executions = 1000;

// MergeSort the list into sublists
function MergeSort(arr) {
  let len = arr.length, // number of items in the array
    middle, // middle of the array
    left, // left side of the array
    right; // right side of the array

  // Arrays with 0 or 1 elements don't need sorting
  if (len < 2) {
    return arr;
  }

  middle = Math.floor(len / 2);

  left = arr.slice(0, middle); // left side, from 0 to the middle
  right = arr.slice(middle); // right side, from the middle to the end
  const l = MergeSort(left);
  const r = MergeSort(right);
  return merge(l, r);
}

// Merges 2 sorted arrays
function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    // Elements in both arrays are not compared against each other but sorted by coinflip
    const coinFlip = Math.random() < 0.5 ? "head" : "tails";
    if (coinFlip === "head") {
      result.push(left[i++]); // Each time a value from one array is added, it's
    } else {
      // corresponding index variable is incremented.
      result.push(right[j++]);
    }
  }
  // As soon as one of the arrays has been finished, the
  // remaining values are added to the end of the result array

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Execute the shuffling
var c = [];
for (let i = 0; i < executions; i++) {
  c.push(MergeSort(list));
}

// Visualize results
console.info({ executions });
console.info(
  c.reduce(
    (p, c) => {
      for (let i = 0; i < c.length; i++) {
        const e = c[i];
        if (p[i][e]) {
          p[i][e]++;
        } else {
          p[i][e] = 1;
        }
      }
      return p;
    },
    Object.assign(
      {},
      list,
      list.reduce((p, c) => {
        p.push({});
        return p;
      }, [])
    )
  )
);
