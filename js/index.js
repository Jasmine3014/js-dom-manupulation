
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

  

let btn = document.getElementById('add-me');
btn.addEventListener('click',function(){
    let h1 = document.getElementById('my-h1')
    h1.innerHTML = ("I am student of bubt")

    let p = document.getElementById('para')
    p.innerHTML = (" I am currently working in html5,css3,js,react")
})



