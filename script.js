// Display Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

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

// Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Create light switch button
  const lightSwitch = document.createElement('button');
  lightSwitch.id = 'light-switch';
  lightSwitch.innerHTML = '💡';
  document.body.appendChild(lightSwitch);
  
  // Create stars
  createStars();
  
  // Handle light switch
  lightSwitch.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      lightSwitch.innerHTML = '🌙 ';
    } else {
      lightSwitch.innerHTML = '💡';
    }
  });
});

// Function to create stars in the background
function createStars() {
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    
    // Random size
    let size = Math.random() * 2;
    
    // Random animation delay
    let delay = Math.random() * 5;
    
    star.style.left = x + 'vw';
    star.style.top = y + 'vh';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animation = `twinkle 3s infinite ${delay}s`;
    
    document.body.appendChild(star);
  }
}

// Toggle Switch
const toggleSwitch = document.getElementById('toggle-switch');
const image = document.querySelector('.light-pollution-img');

toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    image.src = "img/light-polluted-sky1.jpg"; 
  } else {
    image.src = 'img/sky1.png';  
  }
});

/*** Scroll Animations ***
  Purpose:
  - Use this starter code to add scroll animations to your website.
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else {
            current.classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);


document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelectorAll("details");

  details.forEach((detail) => {
      detail.addEventListener("toggle", function () {
          if (this.open) {
              details.forEach((other) => {
                  if (other !== this) {
                      other.removeAttribute("open");
                  }
              });
          }
      });
  });
});