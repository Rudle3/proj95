const firebaseConfig = {
      apiKey: "AIzaSyCx8_oEuirVP_9LYKoK_XaEvY_t4vAh_G0",
      authDomain: "classtest-97d22.firebaseapp.com",
      projectId: "classtest-97d22",
      storageBucket: "classtest-97d22.appspot.com",
      messagingSenderId: "221460027095",
      appId: "1:221460027095:web:74c6b313f6932a674d4292"
    };
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" _Room_names)
row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>"
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"

}
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
      
}