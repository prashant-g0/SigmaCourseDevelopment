//DOM: The DOM represents a document with a logical tree. 
//it allows us to manipulate/change webpage content (HTML elements)

//Selecting Elements: Returns the element as an object or null (if not founnd)
//document.getElementById("mainImage");
//document.getElementByClassName
//document.getElementByTagName
//document.querySelector('p') -> selects first p element
//document.querySelector('#myid') -> selects first element with id=myid
//document.querySelector('.myclass') -> selects first element with class=myclass
//document.querySelectorAll('p') -> selects all p element

//setting content in objects
//->using properties & methods
//innerText: shows the visible text contained in a node, manipulate but doesn't understand markup
//textContent: shows all the full text, including hidden elements
//innerHtml: shows the full markup, used to manipulate along with markup

//Manipulating attributes
//obj.getAttribute(attr)
//obj.setAttribute(attr,val)

//Manipulating style  
//obj.style ->> not frequently used as it applies inline styling
//eg. heading.style.color = 'purple';

//Manipulating style --> using classList : obj.classList
//classList.add('className') to add new classes
//classList.remove('className') to remove classes
//classList.contains('className') to check if class exists
//classList.toggle('className') to toggle between add & remove

//Navigation 
//--> parentElement : to access the parent of a tag
// -->children : to access all the children of a tag; indexing can be used 
// -->previousElementSibling / nextElementSibling : to access the previous and next element of a tag
// All this can be used for style manipulation

//Adding Elements
// document.createElement('p) : creates the element and then any of the append function is used to insert the element on the page
// ->appendChild(element) : add the element to end
// ->append(element) : add the element to end 
// ->prepend(element) : add the element to the start
// ->insertAdjacent(where, element) : we can decide exactly where to add the element using 'where' attribute
// where --> beforebegin, -->afterbegin -->beforeend -->afterend

//Removing Elements
// -> removeChild(element)
// -> remove(element)