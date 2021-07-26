//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAIx000sJHALQyg9kEby28A7XXpQQP04AU",
    authDomain: "hi-i-am-cool.firebaseapp.com",
    databaseURL: "https://hi-i-am-cool-default-rtdb.firebaseio.com",
    projectId: "hi-i-am-cool",
    storageBucket: "hi-i-am-cool.appspot.com",
    messagingSenderId: "947051700909",
    appId: "1:947051700909:web:a5c03c07526950a44bdc24",
    measurementId: "G-Z1D9EJMNN7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
