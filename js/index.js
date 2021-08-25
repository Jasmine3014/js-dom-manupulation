
// let p = document.getElementById('para')
// console.log(p)

// let head = document.getElementsByClassName('header')
// console.log(head)

// let p1 = document.getElementsByTagName('div')
// console.log(p1)

//click function
// let btn = document.getElementById('add-me');
// btn.addEventListener('click',function(){
// alert('this is me');
// })

  

// let btn = document.getElementById('add-me');
// let colors = ['red','blue','purple']
// let i=0
// btn.addEventListener('click',function(){
//     let h1 = document.getElementById('my-h1')
//     h1.innerHTML = ("I am student of bubt")
//     h1.style.color = colors[i]
//     if(i >= colors.length){
//     i=0;
//     }
//     else{
//     i++;
//     }

//     // let p = document.getElementById('para')
//     // p.innerHTML = (" I am currently working in html5,css3,js,react")
// })



// let p = document.querySelector('#para')
// // p.style.background = 'red'
// let p1Styles ={
// color:'orange',
// fontSize:'24px',
// padding:'10px'

// }

// Object.assign(p.style,p1Styles)



btn = document.querySelector("#btn");

let para = document.querySelector ("#para");

let isShown = false;

btn.addEventListener("click", function() {

if (isShown) {
para.style.visibility = "hidden";
isShown = false;
btn.innerHTML = "Show";

}
 else {
para.style.visibility = "visible";
isShown = true;
btn.innerHTML = "Hide";

} 
});


