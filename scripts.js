/*Function for Dashboard, calculates ECs and determines if they're above NSBA*/

/*function to determine wether a grade is passing*/
function gradePass() {
  /*minimum grade to pass*/
  let treshold = 5.4;

  /*nbsa treshold*/
  let nbsaTreshold = 44;

  /* says gradeList means to select all variables under class 'grade'*/
  let gradeList = document.querySelectorAll(".grade"); // returns NodeList
  let gradeArray = [...gradeList]; // converts NodeList to Array

  /* says ecList means to select all variables under class 'ec'*/
  let ecList = document.querySelectorAll(".ec");
  let ecArray = [...ecList];

  /*Defines standard total EC as 0 (which it is)*/
  let totalECs = 0;

  /*takes each single element within the grade array*/
  gradeArray.forEach((gradeElement, index) => {
    /*takes the first value it finds within the gradelist, then the next*/
    let gradeValue = parseFloat(gradeElement.innerText);

    /*compares each gotten grade to the treshold number*/
    if (gradeValue > treshold) {
      /* takes the ec value in the same row and adds it to the totalec value */
      let ecValue = parseFloat(ecArray[index].innerText);
      totalECs += ecValue;

      if (totalECs > nbsaTreshold) {
        let passed = document.getElementsByClassName("nbsa")[0];
        passed.innerText = "Passed";
      }
    }
  });

  /*displays the calculated total ec value within the defined <p> of totalECs*/
  document.getElementById("totalECs").innerHTML = `${totalECs}`;
}

/*Scripts from Blog*/

/*Script for SWOT-blog*/
// Scripting for the blog posts to drop down /
// Activates script when the DOM is loaded /
document.addEventListener("DOMContentLoaded", function () {
  // Defines the target menu /
  var dropdown = document.getElementsByClassName("swot-blog");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    // Activates menu when you click it /
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      // I wish I knew what this meant /
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  // Yay I love closing bracketes! /
});

/*Script for Coding Experience Blog*/
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementsByClassName("experience-blog");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
});

/*Script for First Feedback Blog*/
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementsByClassName("feedback1-blog");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
});

/*Script for Blog from IT field*/
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementsByClassName("ict-blog");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
});
