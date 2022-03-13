const firebaseConfig = {
      apiKey: "AIzaSyBHVck0u6PGzo8m9g8Lxxaf2NGltv6JfWM",
      authDomain: "kwitter-d36ff.firebaseapp.com",
      databaseURL: "https://kwitter-d36ff-default-rtdb.firebaseio.com",
      projectId: "kwitter-d36ff",
      storageBucket: "kwitter-d36ff.appspot.com",
      messagingSenderId: "350099363033",
      appId: "1:350099363033:web:d959fba60b57ab9045dac8",
      measurementId: "G-PFVF82V0P5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}
