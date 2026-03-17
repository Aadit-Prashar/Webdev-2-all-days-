async function getData(city){
    try{
        const API_key="ee3b43396b89fd7239f36527946c0055";
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        const data=await response.json();
        console.log(city);
        console.log(data.main.temp)
        console.log(data.main.humidity)
    }catch(err){
        console.error(err);
    }
}
getData("gurugram")

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// getData();