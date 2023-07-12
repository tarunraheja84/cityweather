input=document.getElementById("input")
citytemp=document.getElementById("citytemp")
tem=document.getElementById("temp")

if(input.value=="")
    citytemp.style.display="none"


let fun=async ()=>{
    const apiKey = 'b50624c76d6541f742f1df0d07076464';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
    let response=await fetch(url)
    response=await response.json()
    return response
}


tem.addEventListener('click',async ()=>{
    temperature=document.getElementById("temperature")
    city=document.getElementById("city")
    if(input.value!="")
    citytemp.style.display="block"
    else
    citytemp.style.display="none"
    
    response=await fun()
    if(response.name!=undefined){
    city.innerHTML=`City:${response.name}`
    temperature.innerHTML=`Temperature:${response.main.temp}<sup>o</sup>C`
    }
    else{
        city.innerHTML="Such city does'nt exist"
    }
    input.value=""
})   

