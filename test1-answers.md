# Test 1 Answers

1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

Jawaban:
```
const sortDesc = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}
```
 
2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

Jawaban
```

const maxSubArraySum = (arr: number[], k: number): number => {
  if (k > arr.length || k <= 0) return 0

  let maxSum = -Infinity

  for (let i = 0; i <= arr.length - k; i++) {
    const windowSum = arr.slice(i, i + k).reduce((sum, num) => sum + num, 0)
    if (windowSum > maxSum) maxSum = windowSum
  }

  return maxSum
}
```
 
3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
Input :
```
{
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
```
Output: 6
 
Input:
```
{
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};
```
Output: 12

Jawaban
```
const sumEven = (obj: any): number => {
  let total = 0

  for (const key in obj) {
    const value = obj[key]

    if (typeof value === 'number' && value % 2 === 0) {
      total += value
    } else if (typeof value === 'object' && value !== null) {
      total += sumEven(value)
    }
  }

  return total
}
```