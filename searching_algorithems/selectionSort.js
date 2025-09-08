function selectionSort(array) {
     let n = array.length
     for (let i = 0; i < n; i++) {
          let minInd = i

          for (let j = i + 1; j < n; j++) {
               if (array[j] < array[minInd]) {
                    minInd = j
               }
          }
          if (minInd !== i) {
               [array[i], array[minInd]] = [array[minInd], array[i]]
          }
     }
     return array



}
console.log(selectionSort([5, 9, 8, 6, 3, 1, 0, 7, -33]));
