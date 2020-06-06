const container= document.querySelector('.container');
// all the uncoccupied seats on the row
const seats = document.querySelectorAll(".row.seat:not(.occupied");
const count=document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie"); 
const ticketPrice = parseInt(movieSelect.value);



function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //nodelist length
    const selectedSeatsCount=selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice;
    // innerText retrieves and sets the content of the tag as plain text, 
    // whereas innerHTML retrieves and sets the content in HTML format.
}

// seat selection 
container.addEventListener('click',(eventParameter) => {
    //instead of adding event parameter to each seat individually,
    //we add event parmeter to container that basically 

    //console.log(eventParameter.target);
    // console out clicked item,".target" select element we  clicked on
    if(eventParameter.target.classList.contains('seat')
        && !eventParameter.target.classList.contains('occupied')
        ){  //selecting the seats which are  only occupied
            //  console.log(eventParameter.target);
            eventParameter.target.classList.toggle('selected');
// The toggleAttribute() a Boolean attribute 
// (removing it if it is present and adding it if it is not present) 
// on the given element.
            updateSelectedCount();
    }
});
