function bubbleSort(array) {
     let n = array.length
     for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++) {
               if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]]
               }
          }
     }
     console.log(array);



}
bubbleSort([5, 9, 8, 6, 3, 1, 0, 7, -33])