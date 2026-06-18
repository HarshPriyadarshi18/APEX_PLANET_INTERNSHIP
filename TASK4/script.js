// CONTACT FORM

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

let msg=document.getElementById("formMsg");

if(name===""||email===""||message===""){
msg.innerText="All fields required";
msg.style.color="red";
return;
}

msg.innerText="Form Submitted Successfully";
msg.style.color="green";

});
}

// TODO LOCAL STORAGE

function saveTasks(){

let tasks=[];

document.querySelectorAll("#taskList li span")
.forEach(task=>tasks.push(task.textContent));

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function createTask(taskText){

let li=document.createElement("li");

let span=document.createElement("span");

span.textContent=taskText;

let btn=document.createElement("button");

btn.textContent="X";

btn.onclick=()=>{

li.remove();

saveTasks();

};

li.appendChild(span);

li.appendChild(btn);

document.getElementById("taskList")
.appendChild(li);

}

function addTask(){

let input=document.getElementById("taskInput");

if(!input) return;

let task=input.value.trim();

if(task==="") return;

createTask(task);

saveTasks();

input.value="";

}

function loadTasks(){

let tasks=
JSON.parse(localStorage.getItem("tasks"))
|| [];

tasks.forEach(task=>createTask(task));

}

// PRODUCTS

const products=[

{
name:"Laptop",
category:"electronics",
price:50000
},

{
name:"Phone",
category:"electronics",
price:25000
},

{
name:"T-Shirt",
category:"clothing",
price:500
},

{
name:"Jeans",
category:"clothing",
price:1500
}

];

function displayProducts(items){

const productList=
document.getElementById("productList");

if(!productList) return;

productList.innerHTML="";

items.forEach(product=>{

productList.innerHTML+=`

<div class="card">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p>₹${product.price}</p>
</div>

`;

});

}

function filterProducts(){

let category=
document.getElementById("filter").value;

if(category==="all"){

displayProducts(products);

return;

}

displayProducts(

products.filter(
p=>p.category===category
)

);

}

function sortProducts(){

let value=
document.getElementById("sort").value;

let sorted=[...products];

if(value==="low"){

sorted.sort((a,b)=>
a.price-b.price
);

}

if(value==="high"){

sorted.sort((a,b)=>
b.price-a.price
);

}

displayProducts(sorted);

}

window.onload=function(){

loadTasks();

displayProducts(products);

};