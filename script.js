function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);


  var typed = new Typed(".auto-type", {
    strings: ["Programmer", "Designer", "YouTuber"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true // Corrected this line
  });
  
  function copyText() {
    // Get the text to copy
    var text = document.getElementById("textToCopy").innerText;

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

}
