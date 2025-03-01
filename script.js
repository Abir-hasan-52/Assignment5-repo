// theme color change

document.getElementById('color-theme-changing-btn').addEventListener('click',function(){
    // console.log('clicked');
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
 })


