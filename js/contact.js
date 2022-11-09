var modal = document.getElementById("contactModal");
      
// Get the button that opens the modal
var btn = document.getElementById("sentMessage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let text = `<p> Sender name :  ${name} </p>
            <p> Email name :  ${email} </p><br>
            <p> Message:  ${message} </p>`;
  let modalContent = document.querySelector(".modal-body");
  modalContent.innerHTML = text
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}