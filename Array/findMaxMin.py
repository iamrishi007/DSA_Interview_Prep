# Maximum and minimum of an array using minimum number of comparisons

array = [1, 4, 3, 2, 6, 5]

maxElement = array[0]
minElement = array[0]

for i in range(len(array)):
    if array[i] > maxElement:
        maxElement = array[i]
    if array[i] < minElement:
        minElement = array[i]
        
print(maxElement)
print(minElement)
