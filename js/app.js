// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
let searchInput=document.querySelector(".search-box")

let api={
    
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',

    key:'92ba6150dd86876076f6ca60c44e640b'

}
 async function fetchData(){
    let inputValue=searchInput.value;
   let res=await fetch(`${api.url}${inputValue}&&appid=${api.key}`)
   let data= await res.json()
   console.log(data);
    console.log(data);
    showData(data)
}

function showData(data){
    let citydata=document.querySelector('.city')
    citydata.innerHTML=`${data.name} ,${data.sys.country}`

    let date=document.querySelector('.date')
    date.innerHTML=showDate()

    let tempData=document.querySelector('.temp')
    tempData.innerHTML=`${Math.floor(data.main.temp -273.15)}°c`

    let weatherData=document.querySelector('.weather')
    weatherData.innerHTML=`${data.weather[0].main} `

    let humidity=document.querySelector('.humidity')
    humidity.innerHTML=` humidity:${data.main.humidity}`
     
    let tempsElem=document.querySelector('.hi-low')
    tempsElem.innerHTML=`${Math.floor(data.main.temp_min -273.15)}°c / ${Math.floor(data.main.temp_max -273.15)}°c`
    
}

function showDate(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let newDate= new Date()
    let day=days[newDate.getDay()]
    let month=months[newDate.getMonth()]
    let year=newDate.getFullYear()
    let date= newDate.getDate()
    return `${day}  ${date} ${month} ${year}`

    console.log(newDate.getDay());

}


searchInput.addEventListener('keypress',(event)=>{
    
    if(event.key==='Enter'){
        
        fetchData()
    }
})



const geMe=()=>{
    if (!token){
        return false
    }
}



