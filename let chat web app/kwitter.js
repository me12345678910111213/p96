// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ5uxcm8EPQ3f-HdoVOaydK1FNb7CUW44",
    authDomain: "c94a-ae74f.firebaseapp.com",
    projectId: "c94a-ae74f",
    storageBucket: "c94a-ae74f.appspot.com",
    messagingSenderId: "84913970016",
    appId: "1:84913970016:web:52a8c5c42cf6f989f49c05"
  };
 src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"
 src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"
 function save()
{
      localStorage.setItem("user_name");
      localStorage.setItem("room_name")
       window.location = "Kwitter.html";
}
function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name
            message:msg
            like:0
      });
      document.getElementById("msg").value = "";
}