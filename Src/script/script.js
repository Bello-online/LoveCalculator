const firstName = document.getElementById("nameOne");
const secondName = document.getElementById('nameTwo');
const submitBtn = document.getElementById('submitButton');
const resultName1 = document.getElementById('resultName1');
const resultName2 = document.getElementById('resultName2');
discardedCharacters = []
numArray = []


//Form validation

function formValidator() {
  let name1 = firstName.value;
  let name2 = secondName.value;
  if (name1 == '') {
    resultName1.innerHTML = "First name is empty!"
  }
  if (name2 == "") {
    resultName2.innerHTML = "Second name is empty"
  }
}

//method to check the canceled out characters while doing the love calculations
function charactersCheck(check){
  result = false
  for(i=0; i < discardedCharacters.length;i++){
    if(check == discardedCharacters[i]){
      result = true;
    }
  }return result;
}

//function that creates the numArray by comparing the names
function comparingNames(name1,name2){
  loveVar = "loves"

  const combinedName = name1 + loveVar + name2;
  console.log(combinedName)

  for (i = 0; i < combinedName.length; i++) {
    counter = 1;
    counter2 = 0

    if(!charactersCheck(combinedName[i])){
      for(j=i+1 ; j < combinedName.length;j++){
        console.log(combinedName[i] == combinedName[j])
        if(combinedName[i] == combinedName[j]){
          counter += 1;
          console.log(counter)
        }
        else{
          counter2 = 1
        }
      }
    }
    
    if(counter2 == 1){
      numArray.push(counter)
    }
    else if(counter > 1){
      numArray.push(counter)
    }
    discardedCharacters.push(combinedName[i]);  
    
  }
  console.log(numArray);

}

//@desc function that caluclates the love percentage using the numArray(while comparing) 
function calculatePercentage(numArray){
  console.log(numArray);
}

function loveCalulation() {
  name1 = firstName.value.toLowerCase();
  name2 = secondName.value.toLowerCase();
  comparingNames(name1,name2);
  calculatePercentage(numArray);
}

//main function that run when the submit button is pressed
function submitEvent() {
  formValidator();
  loveCalulation();
}


