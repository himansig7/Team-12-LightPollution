/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and state they
    entered should be added to the list of participants.
***/

// Step 1: Add your query for the submit RSVP button here
let connectButton = document.getElementById("connect-button");
let count = 3;

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const homeStateInput = document.getElementById("home-state").value;

    const entry = document.createElement("p");
    entry.textContent= "✨ " + nameInput + " from " + homeStateInput + " wants to learn more!"

    const connectParticipants = document.querySelector(".connect-participants");
    connectParticipants.appendChild(entry);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("home-state").value = "";
    
    const countElement = document.getElementById("connect-count");
    countElement.remove();

    count = count + 1;

    const countEntry = document.createElement("p");
    countEntry.id = 'connect-count';
    countEntry.textContent= "🌆 " + count + " people have joined!";

    connectParticipants.appendChild(countEntry);
}

// Step 3: Add a click event listener to the submit RSVP button here
connectButton.addEventListener("click", addParticipant);
