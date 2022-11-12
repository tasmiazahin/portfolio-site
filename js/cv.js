const  url = "education.json";

const education = document.getElementById("education");
education.innerHTML = `<p>Loading...</p>`;

async function getData(){
    let response  = await fetch(url);
    if(response.ok){
        education.innerHTML = ``;
        let json = await  response.json();
        for(let i=0; i<json.length; i++){
            education.innerHTML += `<h2>${json[i].institute}</h2>
                        <p class="date">${json[i].duration}</p>
                        <p  class="program">${json[i].program}</p>`;
        }
    }else{
        console.log("HTTP Error: "+response.status);
    }
}

getData();