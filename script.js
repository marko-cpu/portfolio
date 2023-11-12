function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function printPDF() {
        
  const pdfPath = './assets/English-CV.pdf';


 const iframe = document.createElement('iframe');
iframe.style.display = 'none';


iframe.src = pdfPath;


document.body.appendChild(iframe);


iframe.onload = function() {
    iframe.contentWindow.print();
};
}
