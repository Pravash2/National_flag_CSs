const speech = [
  "Jay Hind",
  "Vande Mataram",
  "Jai Jawaan, Jai Kisaan",
  "Satyamev Jayathe",
  "Inquilab Zindabad"
];
let i = 0;
setInterval(() => {
  if (i < speech.length)
    document.getElementById("slogan").innerText = speech[i++];
  else {
    i = 0;
  }
}, 1000);
