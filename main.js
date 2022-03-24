let elForm = document.querySelector('#conForm');
let sumbitBtn = document.querySelector('#sumbitBtn');
let elFirstName = document.querySelector('#firstName');
let elTelNum = document.querySelector('#telNum');
let elSelect = document.querySelector('#conSelect');
let listBox = document.querySelector('.list');
let elFamily = document.querySelector('#familyBtn');
let elFriend = document.querySelector('#friendBtn');
let elColl = document.querySelector('#collBtn');
let elListGroup = document.querySelector('#listGroup');

let newArr = [];
let newListArr = [];

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

   newArr.push({
       name: elFirstName.value,
       number:  elTelNum.value,
       category: elSelect.value
    });

    newListArr = newArr.map((item) => {
        return `
        <li class="list-group-item">
        ${item.name}: ${item.number}
         <span class="float-end badge bg-info">${item.category}</span></li>
        `
    });

    elListGroup.innerHTML = newListArr.join("");

   console.log(newArr);

   elFirstName.value = "";
   elTelNum.value = "";
   elSelect.value = "";

})









