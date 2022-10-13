function search() {
  let guessnumber = document.getElementById("searchNumber");
  //console.log(guessnumber);

  let guess = parseInt(guessnumber.value);

  let number = 13;

  if (number === guess) {
    alert("Hurra");
  }

  if (number > guess) {
    alert("Försök igen med ett högre tal! :[");
  }

  if (number < guess) {
    alert("Försök igen med ett lägre tal! :[ ");
  }
}

/*
let number=13
if(number<13){
    console.log("weho... fel")
}

else {
    if(number===13){
        else{
            console.log("Rätt")
        }
    }
}
}*/
