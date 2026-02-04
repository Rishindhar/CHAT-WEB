const socket = io();
const input = document.getElementById("msgInput");
const messages = document.getElementById("messages");

function sendMessage() {
  const msg = input.value.trim();
  if (msg !== "") {
    socket.emit("chat message", msg);
    input.value = "";
  }
}

socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});

