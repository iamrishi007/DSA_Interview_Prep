function reverseString(s) {
     let i = 0
     let j = s.length - 1
     while (i < j) {
          let t = s[i]
          s[i] = s[j]
          s[j] = t
          i++
          j--
     }
     return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
