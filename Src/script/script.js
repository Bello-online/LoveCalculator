
  function tfName1() {
    const firstName = document.getElementById("nameOne");
    const resultName1 = document.getElementById('resultName1');
    localStorage.setItem('name1', firstName.value);
    if (firstName.value == '') {
      resultName1.innerHTML = "First name is empty!"
    }

  }
  function tfName2() {
    const secondName = document.getElementById('nameTwo');
    const resultName2 = document.getElementById('resultName2');
    localStorage.setItem('name2', secondName.value)

    if (secondName.value == "") {
      resultName2.innerHTML = "Second name is empty"
    }
  }
  //this function controls the active link for the navigation
  function activeLinkClass1() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    console.log(allocatedClasses[0].className)
    if (allocatedClasses[0].className == 'nav-item') {
      allocatedClasses[0].classList.add('colorLink');
      allocatedClasses[1].classList.remove('colorLink')
      allocatedClasses[2].classList.remove('colorLink')
    }
  }
  function activeLinkClass2() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    if (allocatedClasses[1].className == 'nav-item') {
      allocatedClasses[0].classList.remove('colorLink');
      allocatedClasses[1].classList.add('colorLink')
      allocatedClasses[2].classList.remove('colorLink')
    }
  }
  function activeLinkClass3() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    if (allocatedClasses[2].className == 'nav-item') {
      allocatedClasses[0].classList.remove('colorLink');
      allocatedClasses[1].classList.remove('colorLink')
      allocatedClasses[2].classList.add('colorLink')
    }
  }
  //Form validation

  function formValidator() {
    tfName1();
    tfName2();

  }
  //@desc putting restriction on the text fields
  function restrictionTf(event) {
    var y = event.which || event.keyCode;
    if ((y > 96 && y < 123) || (y >64 && y < 91)) {
      return true
    }
    else {
      return false;
    }
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

      if (i == combinedName.length - 1 && !testCharacters) {
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

    }
    for (i = discardedCharacters.length; i > 0; i--) {
      discardedCharacters.pop();
    }
    return numArray;
  }

  //@desc function that caluclates the love percentage using the numArray(while comparing) 
  function calculatePercentage(numArray) {
    let resultPercentage = ''

    stepsArray = []
    stepsArray.push(numArray);
    let k = 0;
    while (stepsArray[k].length > 2) {
      let tempArray = []
      for (i = 0; i < stepsArray[k].length; i++) {
        if (stepsArray[k].length > 2) {
          if (stepsArray[k].length - 1 - i > i) {
            let sum = stepsArray[k][i] + stepsArray[k][stepsArray[k].length - i - 1];
            if (sum > 9) {
              overFlowCheck = sum.toString();
              newSum = parseInt(overFlowCheck[overFlowCheck.length - 1]);
              tempArray.push(newSum)
              console.log(newSum)
            } else {
              tempArray.push(sum);
            }
          }
          else if (stepsArray[k].length - i - 1 == i) {
            let noSum = stepsArray[k][i];
            tempArray.push(noSum);
          }
        }
      }
      stepsArray.push(tempArray);
      k++;
    }

    for (i = 0; i < stepsArray[stepsArray.length - 1].length; i++) {
      resultPercentage += stepsArray[stepsArray.length - 1][i];
    }
    console.log(resultPercentage)
    var percentageOfLove = parseInt(resultPercentage);
    showPercentage(percentageOfLove);
  }

  //fuction that shows the result percentage
  function showPercentage(percentageOfLove){
    const childContainer = document.getElementById('child-container') ;
    const resultText = document.getElementById('result-percentage');
    childContainer.style.color = 'red';
    childContainer.style.width = `${percentageOfLove}%`;

    resultText.innerHTML = `${percentageOfLove}%`;

  }



  //@desc function that compares the names and calculates the percentatge
  function loveCalulation() {
    name1 = localStorage.getItem('name1').toLowerCase();
    name2 = localStorage.getItem('name2').toLowerCase();
    if (name1 != '' && name2 != '') {
      let numArray = comparingNames(name1, name2);
      calculatePercentage(numArray);
    }
  }

  //main function that run when the submit button is pressed
  function submitEvent() {
    formValidator();
    loveCalulation();
    
  }
