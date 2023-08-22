// SET CONTACT
function addContact() {
    let cName = document.querySelector('#name').value.toUpperCase();
    let cNumber = document.querySelector('#number').value;
    let displayNotification = document.querySelector('#displayNoti');
  
    if (cName == '' || cNumber == '') {
      displayNotification.innerHTML = 'Please enter details !';
      displayNotification.style.color = 'red';
    } else {
      // Set Items
      localStorage.setItem(cName, cNumber);
      displayNotification.innerHTML = '✓ Successfully Added New Contact ';
      displayNotification.style.color = 'green';
    }
    setInterval(() => {
      displayNotification.innerHTML = '';
    }, 2000);
  }
  
  // GET CONTACT
  function getContact() {
    let displayDetail = document.querySelector('#displayContact');
    let displayOutput = document.getElementById('displayContact');
    displayOutput.classList.add('displayContactStyle');
    let getContactName = document
      .querySelector('#getContactName')
      .value.toUpperCase();
  
    // GetItem
    let output = localStorage.getItem(getContactName);
    displayDetail.innerHTML = `${getContactName} : ${
      output == null ? '(   This contact detail is not added' : `+91 ${output}`
    }`;
    getContactName = '';
  }
  
  function reset() {
    location.reload();
  }
  