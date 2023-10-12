# Chapter08 - Array Methods

[< Previous Chapter](/Modern-Javascript-Course/chapter06-FormAndFormEvents) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter10-DatesAndTimes)

---

Array Methods are functions that are built into JavaScript and can be called on arrays. They are used to make working with arrays easier and more efficient.

## Filter Method

The filter method is used to filter out elements in an array based on a condition. It returns a new array with the filtered elements.

> Use `.filter` to filter out elements in an array based on a condition.

```javascript
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const passingGrades = grades.filter((grade) => {
	return grade >= 70; // returns true or false
});

console.log(passingGrades); // [87, 96, 92, 88, 99, 73, 70]
```

## Map Method

The map method is used to create a new array from an existing array. It returns a new array with the modified elements.

> Use `.map` to create a new array from an existing array and apply a function to each element.

```javascript
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const inflationPrices = prices.map((price) => {
	return (price * 1.05).toFixed(2); // returns a new array with the modified elements
});
```

## Reduce Method

The reduce method is used to reduce an array to a single value. It returns a single value.

> Use `.reduce` to reduce an array to a single value.

```javascript
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((accumulator, currentValue) => {
	return accumulator + currentValue; // returns a single value
});
```

## Find Method

The find method is used to find the first element in an array that matches a condition. It returns the first element that matches the condition.

> Use `.find` to find the first element in an array that matches a condition. It runs in O(n) time.

```javascript
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const foundItem = prices.find((price) => {
	return price >= 20; // returns the first element that matches the condition
});
```

## Sort Method

The sort method is used to sort the elements in an array. It returns the sorted array.

> Use `.sort` to sort the elements in an array. It runs in O(n log n) time.

```javascript
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const sortedPrices = prices.sort((a, b) => {
	return a - b; // returns the sorted array ascending
});

console.log(sortedPrices); // [1.5, 9.99, 19.99, 30.5, 49.99]
```

## Chaining Array Methods

Array methods can be chained together to perform multiple operations on an array.

```javascript
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores
  .filter((score) => score > 20;)
  .map((score) => score / 2;)
  .sort((a, b) => a - b;);

const products = [
  { name: 'Bio Bananen', price: 10 },
  { name: 'Paprika', price: 5 },
  { name: 'Bio Gurke', price: 8 },
  { name: 'Bio Pilze', price: 12 },
  { name: 'Zucchini', price: 7 },
];

const bioSale = products
    .filter(product => product.name.include('Bio'))
    .map(product => product.price * 0.90)

console.log(bioSale); // [9, 7.2, 10.8]

```

---

[< Previous Chapter](/Modern-Javascript-Course/chapter06-FormAndFormEvents) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter10-DatesAndTimes)
