
function weatherData (){
  const inputWeather = document.querySelector('input').value
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputWeather}&appid=2d36c39e8f1229ec349781478b6b3a9a`;  async function data () {
    try {
    const value = await fetch(url)
        if (value.status !== 200) {
         throw Error ('Error')
    }
    return value.json()

    }
    catch (err) {
     console.log(err);
    }
  }
  async function aa () {
    try {
          const value = await data();
          if (value === undefined){
            throw Error ('Data entered incorrectly')
          }
          responsData(value)
    }
catch (err) {
  alert(err)
}
  } 
  aa ()
}


function responsData(obj) {
  const city = document.querySelectorAll('.city_time h2');
  const date = document.querySelectorAll('.city_time h4');
  const day_all = document.querySelectorAll('.day_all');
  
  let valueCity = obj.city.name
  const arr = obj.list

  const filterDate = arr.filter((item) => {
    if (item.dt_txt.split(' ')[1].split(':')[0] % 2=== 0) {
     return item
    }
  
  })
  for (let elm of city) {
      elm.innerHTML = valueCity
  }
  const elmData = []
  elmData.push(filterDate[0].dt_txt.split(' ')[0],filterDate[4].dt_txt.split(' ')[0],filterDate[8].dt_txt.split(' ')[0],filterDate[12].dt_txt.split(' ')[0],filterDate[16].dt_txt.split(' ')[0])
  
  for(let i = 0; i < filterDate; i++) {
    date[i].innerHTML = elmData[i]
  }
  for (let i = 0; i < date.length; i++) {
    date[i].innerHTML = elmData[i]
  }
let ii = 0;
for (let i = 0; i < day_all.length; i++) {
  let a = filterDate[ii].dt_txt.split(' ')[1].split(':')[0];
  let b = day_all[i].children[1].textContent.split(':')[0];
  if (a == b) {
    day_all[i].children[5].innerHTML = filterDate[ii].wind.speed
    day_all[i].children[6].innerHTML = filterDate[ii].weather[0].description;
    day_all[i].children[4].innerHTML = `${Math.floor(filterDate[ii].main.temp_min) - 273}-${Math.ceil(filterDate[ii].main.temp_max) - 273}`
    day_all[i].children[3].innerHTML = Math.floor(filterDate[ii].main.temp - 273) 
    switch (filterDate[ii].weather[0].description) {
    case 'scattered clouds': 
    day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/5241/5241439.png'
      break;

      case 'few clouds':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/984/984539.png'
        break;

      case 'clear sky':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/4150/4150728.png'
        break;
        
      case 'overcast clouds':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/4015/4015174.png'
        break;
        
      case 'broken clouds':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/984/984539.png'
        break;
        
      case 'light rain':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/437/437724.png'
        break;
        
      case 'moderate rain':
        day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/106/106044.png'
        break;

    default:
      day_all[i].children[2].children[0].src = 'https://image.flaticon.com/icons/png/512/5241/5241439.png'
    }
    ii++
  }
  if (a != b) {
    day_all[i].children[6].innerHTML = '-'
    day_all[i].children[5].innerHTML = '-'
    day_all[i].children[4].innerHTML = '-'
    day_all[i].children[3].innerHTML = '-'
    day_all[i].children[2].innerHTML = '-'
  }


}
  

}
