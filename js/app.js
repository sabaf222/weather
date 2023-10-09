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


class Person {
    constructor(userName,password,age){
        this.userName=userName,
        this.password=password,
        this.age=age
    }
    startWork(){
       console.log (`programer${this.userName} start work`)
    }
    getAge(){
        return this.age
    }
}
let personALi= new Person('ali',12344,23)
personALi.startWork()
console.log(personALi);

class Profesor extends Person{
    constructor(userName,password,age,lessen,year){
         
        super(userName,password,age)
        this.lessen=lessen,
        this.year=year



    }
    startWork(){
        console.log(super.getAge());
     console.log(`teacher  ${this.userName} start work`) 
    }
}

personHamed=new Profesor('hamed',8711,32,'animetion',10)
console.log(personHamed);
personHamed.startWork()



class Car{
    constructor(carName,year){
        this.carName=carName,
        this.year=year
    }
    getOld=(nowYear)=>{
        return nowYear- this.year
    }
}
let date=new Date
let nowYear=  date.getFullYear()

const samandCar=new Car('samand',2018)
console.log(samandCar.getOld(nowYear));

// class Mycar{
//     constructor(carName){
//         this.carName=carName
//     }
//     getName(){
//         return this.carName
// //     }
// }


// class Model extends Mycar{
//     constructor(carName,model){
//         super(carName)
//         this.model=model
//     }
//     show(){
//         return this.getName() + ` model is: ${this.model} ` 
//     }
// }
// const newmodel= new Model('pego','tu5')

// console.log(newmodel.show());



// let button=document.querySelector('button').addEventListener('click',()=>{
//     if(navigator.getBattery){

//         window.navigator.getBattery()
//         .then(BatteryInfo=>{
            
//             console.log(BatteryInfo)
//             BatteryInfo.addEventListener('levelchange',()=>{
//                 console.log('شارژ دستگاه تغییرپیدا کرد ');
//             })
//             BatteryInfo.addEventListener('chargingchange',()=>{
//                 console.log('دستگاه به شارژوصل شد یا از شارژ قطع شد ');
//         })
        
//         })
//     }
// })

// let batteryIsCharging=false
// window.navigator.getBattery().then(battery=>{
//     batteryIsCharging=battery.charging
//     console.log(batteryIsCharging);

//     battery.addEventListener('chargingchange',()=>{
//     batteryIsCharging=battery.charging

//     })
// })


// console.log(navigator.language);

