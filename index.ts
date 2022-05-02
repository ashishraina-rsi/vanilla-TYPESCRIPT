console.log("hello hello!!");

let initFunct= () => {
    let heading = document.querySelector('h1');
    if(heading == null) return;
    heading.innerHTML = 'Changed By JS';
    heading.style.border = '5px solid red';
    heading.style.width = '300px';
}

initFunct(); 

//This page can be treated as play ground for typescript
