

# 1. Mürəkkəb List Əməliyyatları
list1 = [3, 7, 2, 8, 2, 5, 7, 9, 1, 4]
list2 = [5, 2, 6, 3, 2, 8, 9, 7, 4, 4]

common_elements = list(set(list1) & set(list2))
sorted_common = sorted(common_elements)
reversed_tuple = tuple(reversed(sorted_common))
print(reversed_tuple)

# 2. Tuple və Dövr Kombinasiyası
numbers = (10, 3, 5, 7, 2, 8, 4, 6, 9, 1)
sum_even = 0
product_odd = 1

for i in range(len(numbers)):
    if i % 2 == 0:
        sum_even += numbers[i]
    else:
        product_odd *= numbers[i]

result = {
    "sum_even_indices": sum_even,
    "product_odd_indices": product_odd
}
print(result)

#3. Set və List Arasında Çevirmələr
elements = ["a", "b", "c", "a", "d", "b", "e", "f", "c", "a", "b"]
unique_elements = set(elements)
counts = {element: elements.count(element) for element in unique_elements}
print(counts)

#4. Mürəkkəb Dövr və Şərtlər
div_3 = []
div_5 = []
div_3_and_5 = []

for num in range(1, 101):
    if num % 3 == 0:
        div_3.append(num)
    if num % 5 == 0:
        div_5.append(num)
    if num % 3 == 0 and num % 5 == 0:
        div_3_and_5.append(num)

combined_list = list(set(div_3 + div_5 + div_3_and_5))
total_sum = sum(combined_list)
average = total_sum / len(combined_list)
print("Cəm:", total_sum)
print("Orta:", average)

#5. List, Tuple və Set Üzərində Kompleks Əməliyyat
numbers = [1, 2, 3, 4, 5]
letters = ['a', 'b', 'c', 'a', 'd', 'b', 'e']

combined = numbers + letters
combined_tuple = tuple(combined)
# letters_set = set([x for x in combined_tuple if isinstance(x, str)])
# index_dict = {char: [i for i, v in enumerate(combined_tuple) if v == char] for char in letters_set}
print(index_dict)


