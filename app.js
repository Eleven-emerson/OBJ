

// var obj = {
//     s_id : '01',
//     s_name : 'FATIMA',
//     s_class : '11',
//     s_age : '16',
// }

// for ( var key in obj){
//     document.write(key,":",  obj[key] ,"<br>")
// }



// sessionStorage.setItem('firstname','fatima')

// localStorage.clear()




function signup(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    location.href='./signin.html'
}
function signin(){
    var email =document.getElementById('lemail').value
    var pass =document.getElementById('lpass').value
    if (localStorage.getItem('email')== email & localStorage.getItem('password')==pass){
        location.href='./welcome.html'
    }
    else {
        alert('jayen bhai jan wapis')
        location.href='./signup.html'
    }
}


