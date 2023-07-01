---
title: "Supercharge Your JavaScript Skills: Discover structuredClone(), 
array.at(), and the Change Array by Copy Proposal"
date: "2023-06-23"
summery: "In this article, we will dive into three exciting features: structuredClone(), array.at(), and the Change Array by Copy Proposal, which is now in the finished stage"
slug: "supercharge_your_javaScript_skills"
image_url: "https://i.imgur.com/kqunkCm.png"
link: "https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
published_url: "https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
isFeatured: true
---

<!-- # Supercharge Your JavaScript Skills: Discover structuredClone(), array.at(), and the Change Array by Copy Proposal -->

## **Introduction**

JavaScript is a dynamic and ever-evolving language, constantly introducing new features to enhance developers’ productivity and expand the capabilities of the language. Staying up-to-date with these new features is essential for every JavaScript developer. In this article, we will dive into three exciting features: [structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone), [array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at), and the [Change Array by Copy Proposal](https://github.com/tc39/proposal-change-array-by-copy), which is now in the finished stage (4).

## **Background: The Evolution of ECMAScript and the TC39 Process**

ECMA TC39 is the governing body responsible for evolving the ECMAScript (JavaScript) standard. With contributions from volunteers representing various companies and organizations, TC39 follows a rigorous process to introduce new language features. Proposals undergo thorough discussions and evaluations before progressing through multiple stages. Upon reaching stage 4, a proposal achieves completion and official standardization. These finalized features are published on [TC39’s GitHub repository](https://github.com/tc39/ecma262), ensuring transparency and accessibility for developers worldwide.

The **`array.at()`** method was introduced in 2015 and the **`structuredClone()`** function in 2021, but I just heard of them recently. So, I wanted to explore them with you, in the hope that this knowledge will empower us all💕

The upcoming 2023 edition holds even more promises, including the introduction of **`array.with()`** and other methods from the transformative ‘Change Array by Copy’ proposal, along with an array of other exhilarating new features and notable improvements.

## **structuredClone(): Deep Cloning Made Easy!**

Introduced in ECMAScript 2015 (ES6), the `structuredClone()` method provides a convenient way to clone JavaScript objects. This method can be used to create a deep copy of an object, including its properties and methods, without any shared references to the original object's properties or values. This feature is particularly useful when dealing with complex data types like arrays, objects, Maps, and Sets, or for cloning objects that are not serializable, such as DOM elements, IndexedDB objects, and other complex data structures.

🪄No more deep cloning by non-native methods in JavaScript likeJSON.parse(JSON.stringify(object)) or Lodash cloneDeep()🏅

Here’s an example of using **structuredClone()**:

```js
// With an object:
const originalObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  hobbies: ["reading", "traveling", "photography"],
};

const clonedObject = structuredClone(originalObject);

// With an array:
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### **Browser Support:**

The `structuredClone()` method is available in Node.js v16.8.0 and above. It is also available in browsers such as Firefox, Chrome, Edge, and Safari. However, it is not available in Internet Explorer or Opera Mini.

## **`array.at():` Access Array Elements with Ease**

The [array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) method was added to JavaScript in ECMAScript 2022, in Array, String, and TypedArray. Answering a long-time request from users🥳 you can now access array elements more conveniently and handle edge cases effortlessly.

It takes an integer and allows you to access an element in an array at a specific index. It behaves much like the bracket notation `[length-1]`, but with the brackets notation, you cannot use `array[-1]` as you might in Python or Ruby, because all values inside the square brackets are treated literally as string properties, so you will end up reading `array["-1"]`. You access “length” and then calculate the index at some distance from the array’s length. This approach could lead to unexpected results or throw errors when working with negative or non-existing indices.

However, `array.at()` makes it much easier now to retrieve elements from the end of the array, by supporting negative index values. It returns `undefined` if the index is out of the array bounds, without attempting to access the corresponding property.

Here is an example:

```js
// Our array:
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

### **Browser Support:**

The `array.at()` method is available in Node.js v15.0.0 and above, as well as in browsers such as Firefox, Chrome, Edge, and Safari. However, it is not available in Internet Explorer or Opera Mini.

## **Change Array by Copy Proposal: Revolutionizing Array Manipulation**

The [Change Array by Copy Proposal](https://github.com/tc39/proposal-change-array-by-copy) is currently under consideration by the TC39 committee. It aims to enhance JavaScript arrays by introducing several methods that enable modifying arrays by returning copies, leaving the original array untouched. The proposed methods include:

- **[Array.prototype.toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)**: Returns a reversed copy of the array.
- **[Array.prototype.toSorted(compareFn)()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)**: Returns a sorted copy of the array using the specified comparison function.
- **[Array.prototype.toSpliced(start, deleteCount, ...items)()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)**: Returns a copy of the array with elements spliced in or out based on the specified parameters.
- **[Array.prototype.with(index, value)()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)**: Returns a copy of the array with the element at the given index replaced with the specified value.

These methods offer a convenient and intuitive way to perform array operations without directly modifying the original array. This approach allows for more declarative and chainable array operations while preserving data integrity. The Change Array by Copy Proposal is still in the proposal stage, but it has the potential to be a game-changer for developers who work with arrays regularly.

Here’s an example demonstrating the usage of the proposed methods:

```js
const arr = [3, 1, 4, 2, 5];

const reversed = arr.toReversed();
console.log(reversed); // Output: [5, 2, 4, 1, 3]

const sorted = arr.toSorted();
console.log(sorted); // Output: [1, 2, 3, 4, 5]

const spliced = arr.toSpliced(1, 2, "a", "b");
console.log(spliced); // Output: [3, 'a', 'b', 5]

const updated = arr.with(2, "c");
console.log(updated); // Output: [3, 1, 'c', 2, 5]
```

### **Browser Support:**

**Chrome/V8**: The methods are shipping unflagged since Chrome 110. This means that they are available in Chrome browsers without the need for additional configuration or flags, starting from the mentioned Chrome version.

**Safari/JavaScriptCore**: The methods are shipping unflagged since Safari Tech Preview 146.

**Ladybird/LibJS**: The methods are shipping unflagged.

**Firefox/SpiderMonkey**: The methods are currently flagged.

## **Conclusion**

JavaScript is an incredibly powerful programming language, and the addition of features and updates only adds to its versatility and functionality. In this article, we dived into some new exciting JavaScript features: `structuredClone()`, `array.at()`, `array.toReversed()`, `array.toSorted()`, `array.toSpliced()`, and `array.with()`.

By leveraging these features and staying up-to-date with new JavaScript advancements, developers can enhance their productivity and take advantage of the latest language capabilities.

Happy coding!

## **Additional Resources**

- **[ECMAScript Proposal Process](https://tc39.es/process-document/)**
- **[MDN Web Docs: structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)**
- **[MDN Web Docs: array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)**
- [Change Array by Copy Proposal](https://github.com/tc39/proposal-change-array-by-copy)
- **[ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/)**
- **[ECMAScript® 2021 Language Specification](https://262.ecma-international.org/12.0)**
- **[TC39 GitHub Repository](https://github.com/tc39)**
- **[Finished Proposals](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md)**

### Publications:

- [Friendly link to mudium ](https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6?source=friends_link&sk=1e0622ff73fd86798a6d84f28335a0c2)
-
