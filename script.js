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
  
