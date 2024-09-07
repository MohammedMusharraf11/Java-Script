# Document Object Model (DOM)

## Introduction

- The **Document Object Model (DOM)** is a programming interface for HTML and XML documents.
- It represents the page so that programs can change the document structure, style, and content.
- The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## Basic Concepts

### Nodes

- **Node**: The basic unit of the DOM, representing a single point in the document tree.
  - **Element Node**: Represents an HTML element (e.g., `<div>`).
  - **Text Node**: Contains the text content inside an element.
  - **Attribute Node**: Represents attributes of an HTML element.

### The Document Object

- The `document` object represents the whole HTML document.
- Methods like `getElementById`, `querySelector`, and `createElement` allow interaction with the DOM.

## DOM Tree

- The document is represented as a tree structure, with the root being the `document` object.
- **Parent Node**: A node containing other nodes.
- **Child Node**: A node within another node.
- **Sibling Nodes**: Nodes that share the same parent.

## Accessing Elements

### Methods

- `document.getElementById('id')`: Returns the element with the specified `id`.

- `document.getElementsByClassName('className')`: Returns a collection ( HTML Collection ) of elements with the specified class name.
    - An HTMLCollection is a collection of HTML elements, similar to a NodeList, but with some key differences. It's an array-like object, meaning it has a length property and allows indexed access, but it's not a true array.
    - We have to convert it to an array to use functions on it.

- `document.querySelectorAll('selector')`: Returns a NodeList of elements matching the CSS selector.

    - NodeList : A "NodeList" is a collection of nodes, typically returned by methods like 'document.querySelectorAll()' or 'document.getElementsByClassName()'. 
    - It represents a list of DOM elements, which can be accessed like an array, although it's not a true array.
    - Although Nodelist is not an array but it can be accessed like an array by using indexing.

- `document.getElementsByTagName('tagName')`: Returns a collection of elements with the specified tag name.

- `document.querySelector('selector')`: Returns the first element matching the CSS selector.

```javascript

// Accessing Elements

const elementId = document.getElementById('myElement');
const elementsClass = document.getElementsByClassName('myClass');
const elementsQuery = document.querySelectorAll('.myClass');
const elementsTag = document.getElementsByTagName('p');
const elementQuery = document.querySelector('#myElement');

```

### Modifying Attributes

- `element.setAttribute('attribute', 'value')`: Sets the value of an attribute.
- `element.getAttribute('attribute')` : Gets the attribute value.
- `element.removeAttribute('attribute')`: Removes an attribute.


``` javascript 

// Modifying Attributes

// Example Element
let title = document.getElementById('title');

// Setting an Attribute
title.setAttribute('class', 'highlighted'); 
// This sets the 'class' attribute of the 'title' element to 'highlighted'.

// Getting an Attribute
let classValue = title.getAttribute('class'); 
console.log(classValue); 
// This retrieves the value of the 'class' attribute, which is 'highlighted'.

// Removing an Attribute
title.removeAttribute('class'); 
// This removes the 'class' attribute from the 'title' element.

title.style.backgroundColor = '#212121'
title.style.color = '#fff'
title.style.padding = '10px'
title.style.margin = '10px'
title.style.borderRadius = '10px'
title.style.width = '100%'
title.style.height = '100%'

```

### What is difference between 'textContent', 'innerHTML' and 'innerText'

- `textContent`: Returns the text content of an elements, including text within script and style elements.
- `innerText`: Returns the text content of an element, excluding text within script and style elements.
- `innerHTML`: Returns the HTML content of an element and its descendants.




### Example


``` javascript

// Accessing elements in Nodelist

const headCollection = document.querySelectorAll('h2')
headCollection[0].style.color = 'orange'


// Accessing elements in HTML collection

const listName = document.getElementsByClassName('list-item')

console.log(listName)

// converting HTML Collection into an array
const convertedArray = Array.from(listName)
console.log(convertedArray)

convertedArray.forEach( (item) => {
    item.style.color = 'orange'
})

```