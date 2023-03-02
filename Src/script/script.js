const firstName = document.getElementById("nameOne");
const secondName = document.getElementById('nameTwo');

function validateForm() {
    let name1 = firstName.value;
    let name2 = secondName.value;
    if (name1 == "" || name2 === '') {
      alert("Name must be filled out");
    }
  }
  function test() {
    let name1 = firstName.value;
    if( typeof(name1[name1.length-1]) === "number"){
        console.log('test passed')
    }
  }
  
  