// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnWT6gWdikwpOvro72N4MOeeagWrGqxI8",
    authDomain: "test-firebase-81671.firebaseapp.com",
    databaseURL: "https://test-firebase-81671.firebaseio.com",
    projectId: "test-firebase-81671",
    storageBucket: "test-firebase-81671.appspot.com",
    messagingSenderId: "671000360299"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var speciality = getInputVal('speciality');
  var wage = getInputVal('wage');

  // Save message
  saveMessage(name, email, phone, message, speciality, wage);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message, speciality, wage){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message,
    speciality:speciality,
    wage:wage,
  });
}