
let accessKey = 'RyDZF4Zl9PZkfFdndhGp+w==30HJ3UneryXekUf6';
let get_joke = document.querySelector('.getjoke');
let display_joke = document.querySelector('.para');
let value = "updating..."
let url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

get_joke.addEventListener("click",()=>{
    display_joke.innerHTML = `${value}`;
    setTimeout(()=>{
     fetch(url,{
        method:'GET',
        headers:{'X-Api-Key':'RyDZF4Zl9PZkfFdndhGp+w==30HJ3UneryXekUf6'}
     })
     .then(response=>response.json())
     .then(responseCheck=>{
        console.log(responseCheck);
        const res = responseCheck;
        res.forEach((ele)=>{
             display_joke.innerHTML =`${ele.joke}`
        })
     })
    },2000)
})



