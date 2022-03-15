let elForm = document.querySelector('#conForm');
let elFirstName = document.querySelector('#firstName');
let elLastName = document.querySelector('#lastName');
let elTelNum = document.querySelector('#telNum');
// select qismi
let elSelect = document.querySelector('#conSelect');
let elAll = document.querySelector('#conAll');
let elFamily = document.querySelector('#conFamily');
let elFriend = document.querySelector('#conFriend');
let elCollect = document.querySelector('#conColl');
// buttons 
let elFamilyBtn = document.querySelector('#familyBtn')
let elFriendBtn = document.querySelector('#friendBtn')
let elCollective = document.querySelector('#collectivBtn');
// qo'shiladigan list
let elNewBox = document.querySelector('#familyBox');




elForm.addEventListener('submit', (e) => {
    e.preventDefault();

   let firstNameVal = elFirstName.value;
   let lastNameVal = elLastName.value;
   let tellNumVal = elTelNum.value;
   let selectiv = elSelect.value;

    for (let i = 0; i < Array.from(selectiv).length; i++) {
        if (selectiv[i] == 1) {
            let box = document.createElement('div');

            box.innerHTML = `
             <div class="contact-box" id="familyBox">
                 <ul class="contact-list">
                     <li class="contact-item" id="listItem">
                         <p class="f-name">${firstNameVal}</p>
                         <p class="l-name">${lastNameVal}</p>
                         <a class="t-tell" href="tel:998992002020">${tellNumVal}</a> 
                     </li>
                 </ul>
             </div>
            `
             
            elNewBox.appendChild(box);
            elFamilyBtn.appendChild(elNewBox);
            
        } else if (selectiv[i] == 2) {
            let box = document.createElement('div');

            box.innerHTML = `
             <div class="contact-box" id="familyBox">
                 <ul class="contact-list">
                     <li class="contact-item" id="listItem">
                         <p class="f-name">${firstNameVal}</p>
                         <p class="l-name">${lastNameVal}</p>
                         <a class="t-tell" href="tel:998992002020">${tellNumVal}</a> 
                     </li>
                 </ul>
             </div>
            `
    
            elNewBox.appendChild(box);
            elFriendBtn.appendChild(elNewBox);

        } else if (selectiv[i] == 3) {
            let box = document.createElement('div');

            box.innerHTML = `
             <div class="contact-box" id="familyBox">
                 <ul class="contact-list">
                     <li class="contact-item" id="listItem">
                         <p class="f-name">${firstNameVal}</p>
                         <p class="l-name">${lastNameVal}</p>
                         <a class="t-tell" href="tel:998992002020">${tellNumVal}</a> 
                     </li>
                 </ul>
             </div>
            `
    
            elNewBox.appendChild(box);
            elCollective.appendChild(elNewBox);

        }

    }   

    elFirstName.value = "";
    elLastName.value = "";
    elTelNum.value = "";
    elSelect.value = "";
});

