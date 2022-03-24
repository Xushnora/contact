let elForm = document.querySelector('#conForm');
let elFirstName = document.querySelector('#firstName');
let elTelNum = document.querySelector('#telNum');
let elSelect = document.querySelector('#conSelect');
let elListGroup = document.querySelector('#listGroup');
let elBtnGroup = document.querySelector('#btnGroup');
let elFamily = document.querySelector('#familyBtn');
let elFriend = document.querySelector('#friendBtn');
let elCollective = document.querySelector('#collBtn');

let newArr = [
    {name: 'Onajonim', number: '998942971280', category: 'Family'},
    {name: 'Laziza', number: '998332971280', category: 'Friends'},
    {name: 'Xumora', number: '998992971280', category: 'Collective'},
];
let newListArr = [];

newArr.forEach((item) => {
    newListArr = newArr.map((item) => {
        return `
        <li class="list-group-item">
        ${item.name}: ${item.number}
         <span class="float-end badge bg-info">${item.category}</span></li>
        `
    });

    elListGroup.innerHTML = newListArr.join("");
})

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

elBtnGroup.addEventListener('click', (e) => {
    function myFunc (index) {
        if(e.target.textContent === index) {
            let newFamily = newArr.filter((item) => {
                return item.category == index;
            })
    
            newListArr = newFamily.map((item) => {
                return `
                <li class="list-group-item">
                ${item.name}: ${item.number}
                 <span class="float-end badge bg-info">${item.category}</span></li>
                `
            });
            elListGroup.innerHTML = newListArr.join("");
        }
    }

    myFunc(e.target.textContent);
})
















