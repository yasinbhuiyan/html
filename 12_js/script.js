//js can change content
function changetitle() {
  document.getElementById('title').innerHTML = 'Use JavaScript in HTML Page';
}
  
/* //js can change style
 function changePara() {   
  document.getElementById('para').style.color = '#707070';
  document.getElementById('para').style.lineHeight = '25px';
  document.getElementById('para').style.fontFamily = 'sans-serif';
} */

/* //js can change style
function changePara(){
  const para = document.getElementById('para');
  para.style.color = '#707070';
  para.style.lineHeight = '25px';
  para.style.fontFamily = 'sans-serif';
} */

function changePara(){
  const para = document.getElementById('para');
  para.style = 'color: #707070; line-height: 25px; font-family: sans-serif;';
}