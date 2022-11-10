const url = "https://api.github.com/users/tasmiazahin/repos";
const  imagesUrl = "images.json";

const projects = document.querySelector(".portfolio");

async function getData(){
    let response  = await fetch(url);
    if(response.ok){
        let json = await  response.json();
        let responseImages = await fetch (imagesUrl);
        let imagesJson = await responseImages.json()
        let imagesJsonIds=imagesJson.map(o=>o.id);
        let filteredJson = json.filter(o=> imagesJsonIds.includes(o.id));
        console.log(filteredJson); 
        for(let i=0; i<filteredJson.length; i++){
            let foundObject = imagesJson.find(function(obj){return obj.id  ===  filteredJson[i].id});
            console.log(foundObject);
            projects.innerHTML += `<div class="portfolio-item" style="background-image: url(${foundObject.src}); background-size:cover">
                                        <div class="item-details">
                                        <a href="${filteredJson[i].html_url}" target="_blank">
                                            <h3>${foundObject.title ? foundObject.title : ''}</h3> 
                                            <p>${filteredJson[i].description?filteredJson[i].description:''}</p> 
                                        </a
                                        </div>
                                    </div>`;
        }
    }else{
        console.log("HTTP Error: "+response.status);
    }
}

getData();