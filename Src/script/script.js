

function tfName1(){
  const firstName = document.getElementById("nameOne");
  const resultName1 = document.getElementById('resultName1');
  localStorage.setItem('name1',firstName.value);
  if (firstName.value == '') {
    resultName1.innerHTML = "First name is empty!"
  }
  
}
function tfName2(){
  const secondName = document.getElementById('nameTwo');
  const resultName2 = document.getElementById('resultName2');
  localStorage.setItem('name2',secondName.value)
  
  if (secondName.value == "") {
    resultName2.innerHTML = "Second name is empty"
  }
  
}

//Form validation

function formValidator() {
  tfName1();
  tfName2();
  
}



//function that creates the numArray by comparing the names
function comparingNames(name1, name2) {
  loveVar = "loves"
  const numArray = []
  const discardedCharacters = []

  const combinedName = name1 + loveVar + name2;
  console.log(combinedName)

  for (i = 0; i < combinedName.length; i++) {
    let counter = 1;
    let counter2 = 0

    testCharacters = false
    for (k = 0; k < discardedCharacters.length; k++) {
      if (combinedName[i] == discardedCharacters[k]) {
        testCharacters = true;
      }
    }

    if(i == combinedName.length-1 && !testCharacters){
      numArray.push(1);
    }

    else if (!testCharacters) {
      for (j = i + 1; j < combinedName.length; j++) {
        if (combinedName[i] == combinedName[j]) {
          counter += 1;
        }
        else {
          counter2 = 1
        }
      }
      
      if (counter > 1) {
        numArray.push(counter)
      }
      else if (counter2 == 1) {
        numArray.push(counter2)
      }
    }
    discardedCharacters.push(combinedName[i]);

  } console.log(discardedCharacters);
  console.log(numArray)
  for(i=discardedCharacters.length;i>0;i--){
    discardedCharacters.pop();
  }
  console.log(discardedCharacters);

  return numArray;
}

//@desc function that caluclates the love percentage using the numArray(while comparing) 
function calculatePercentage(numArray) {
 console.log(numArray);

   numArrayLength = numArray.length;
  //this to decide thow many times a loop will run
   numSteps = Math.round((numArrayLength / 2)) - 1;

   stepsArray = []
    stepsArray.push(numArray);
    console.log(stepsArray)

   for (k = 0; k < numSteps; k++) {
     let tempArray = []
     for (i = 0; i < stepsArray[k].length; i++) {

       if (stepsArray[k].length - 1 - i > i) {
         let sum = stepsArray[k][i] + stepsArray[k][numArray.length - i - 1];
         tempArray.push(sum);
       }
       else if (stepsArray[k].length - i - 1 == i) {
         let noSum = stepsArray[k][i];
         tempArray.push(noSum);
       }

     }
     console.log(tempArray)
     stepsArray.push(tempArray);
   }
   console.log(stepsArray);
}

//@desc function that compares the names and calculates the percentatge
function loveCalulation() {
  name1 = localStorage.getItem('name1').toLowerCase();
  name2 = localStorage.getItem('name2').toLowerCase();
  let numArray = comparingNames(name1, name2);
  calculatePercentage(numArray);
}

//main function that run when the submit button is pressed
function submitEvent() {
  formValidator();
  loveCalulation();
}
