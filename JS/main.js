var firebaseConfig = {
  apiKey: "AIzaSyBsUMBgS8PKGv-AWOt9ttRtui04bc7ybw0",
  authDomain: "freelo-251e2.firebaseapp.com",
  databaseURL: "https://freelo-251e2-default-rtdb.firebaseio.com",
  projectId: "freelo-251e2",
  storageBucket: "freelo-251e2.appspot.com",
  messagingSenderId: "484231946088",
  appId: "1:484231946088:web:46bb813e0d5f2ea74680dd",
};
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("ContactForm");

let form = document.getElementById("contact");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let tel = e.target.tel.value;
  let comentarios = e.target.comentarios.value;
  saveContactInfo(name, email, tel, comentarios);
  document.getElementById("contact").reset();
});

function saveContactInfo(name, email, tel, comentarios) {
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    email: email,
    tel: tel,
    comentarios: comentarios,
  });
}
