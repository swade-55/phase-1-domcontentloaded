document.addEventListener('DOMContentLoaded',function(){
    console.log('The DOM has loaded');
    let text = document.getElementById('text');
    console.log(text);
    text.textContent = "This is really cool!";
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );