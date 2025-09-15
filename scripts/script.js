const API_ID = '91636f4f'
const API_KEY = '514a3131ab107688d44a2a2ed36b21d1'

const SEARCH_OPTIONS = ["Pyhton", "Java", "Web", "MI-Ml", "FullStack", "Web3", "UI-UX", "Node js "];

const COMPINES_INFO = [
    {
        logo: '<i class="ri-instagram-line"></i>',
        name: "instagram",
    },
    {
        logo: '<i class="ri-facebook-box-fill"></i>',
        name: "facebook",
    },
    {
        logo: '<i class="ri-twitter-line"></i>',
        name: "twitter",
    },
    {
        logo: '<i class="ri-youtube-line"></i>',
        name: "linked",
    },
    {
        logo: '<i class="ri-messenger-line"></i>',
        name: "messanger",
    },
    {
        logo: '<i class="ri-snapchat-fill"></i>',
        name: "snapchat",
    },
    {
        logo: '<i class="ri-google-fill"></i>',
        name: "google",
    },
]

const CATEGORIES = [
    {
        logo: '<i class="ri-bubble-chart-line"></i>',
        name: "Analytics",
        avaliable: '100 job'
    },
    {
        logo: '<i class="ri-pencil-ruler-2-fill"></i>>',
        name: "Design",
        avaliable: '100 job'
    },
    {
        logo: '<i class="ri-store-3-line"></i>',
        name: "Marketing",
        avaliable: '100 job'
    },
    {
        logo: '<i class="ri-building-2-line"></i>',
        name: "Product",
        avaliable: '20 job'
    },
    {
        logo: '<i class="ri-code-ai-fill"></i>',
        name: "Developement",
        avaliable: '100 job'
    }
]
let cardContainer = document.querySelector(".category-items");

let category_iteams = ""

CATEGORIES.forEach((catrgorie) => {
    category_iteams += `
         <div class="category-item-card">
           <div class="card-part-top">
               <div class="card-logo">${catrgorie.logo}</div>
           </div>
           <div class="card-part-bottom">
                <h3>${catrgorie.name}</h3>
                <p>${catrgorie.avaliable}</p>
           </div>
         </div>
      `
})

cardContainer.innerHTML = category_iteams;

const COUNTRIES = ['India', 'USA', 'UK', 'UAE', 'UAE', 'China', 'Japan']

let iteamns_container = document.querySelector(".search-items")

let serch_iteams = ""
SEARCH_OPTIONS.forEach((opt, index) => {
    serch_iteams += `<span class="search-item">${opt}</span>`

})


iteamns_container.innerHTML = serch_iteams


//load compines

let compines_container = document.querySelector(".compines-container")

let compines_iteams = ""

COMPINES_INFO.forEach((comp) => {
    compines_iteams += `<span class="compines-item"> ${comp.logo} ${comp.name}</span>`
})

compines_container.innerHTML = compines_iteams


// let cardContainer = document.querySelector(".category-items");

// let category_iteams = ""

// CATEGORIES.forEach((catrgorie) => {
//     category_iteams += `
//          <div class="category-item-card">
//            <div class="card-part-top">
//                <div class="card-logo">${catrgorie.logo}</div>
//            </div>
//            <div class="card-part-bottom">
//                 <h3>${catrgorie.name}</h3>
//                 <p>${catrgorie.avaliable}</p>
//            </div>
//          </div>
//       `
// })

cardContainer.innerHTML = category_iteams;


// manage options 

let selectCont = document.querySelector("#select-label")

let options = ""
COUNTRIES.forEach((country) => {
    options += `<option value="${country}">${country}</option>`
})

selectCont.innerHTML = options;



//habdel search 

let userInput = document.querySelector("#userinput")
let selectedCountry = document.querySelector("#select-label")
let searchBtn = document.querySelector(".search-btn")

//loader-comp

let loader = document.querySelector(".loader")
let loderText = document.querySelector(".loading-text")

//load jobs 



const loadJobs = async (jobrole, joblocation) => {
    try {
        let responce = await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&what=${jobrole}&where=${joblocation}&content-type=application/json`)
        let data = await responce.json()

        if (data?.results?.length == 0) {
            loderText.innerText = `no jobs found for ${jobrole?.replace("%20"," ")} in ${joblocation}...`

            setTimeout(() => {
                loader.style.display = "none"
            }, 3000);
        } else {
            loderText.innerText = `yehhh, ${data?.count} jobs found in ${joblocation}...`

            localStorage.setItem("JOBS", JSON.stringify(data))
            setTimeout(() => {
                loader.style.display = "none"
                window.location.href = "pages/jobs.html"
            }, 3000);            
        }

    } catch (error) {
        console.log(error)
    }
}

searchBtn.addEventListener('click', () => {
    
    let jobreole = userInput.value.replace(" ", "%20")
    let joblocation = selectedCountry.value || india
    if (!jobreole) { return }
    loadJobs(jobreole, joblocation)
    loader.style.display = "flex"
    loderText.innerText = `loading jobs for ${userInput?.value} in ${joblocation}...`

}) 



const JOBS = [
    {
        name: "FullStack",
        CA: "$on Diagon,CA",
        time: 'Full Time',
        date : "25Aug2025" ,
        logo : '<i class="ri-drag-move-2-line"></i>'      
    },
     {
        name: "FullStack ",
        CA: "$on Diagon,CA",
        time: 'Part Time',
        date : "30Aug2025"  ,
        logo : '<i class="ri-drag-move-2-line"></i>'     
    },
     {
        name: "FullStack",
        CA: "$on Diagon,CA",
        time: 'Full Time',
        date : "21Aug2025" ,
        logo : '<i class="ri-drag-move-2-line"></i>'      
    },
     {
        name: "FullStack",
        CA: "$on Diagon,CA",
        time: 'Part Time',
        date : "20Aug2025" ,
        logo : '<i class="ri-drag-move-2-line"></i>'       
    },
     {
        name: "FullStack",
        CA: "$on Diagon,CA",
        time: 'Part Time',
        date : "20Aug2025" ,
        logo : '<i class="ri-drag-move-2-line"></i>'       
    }
]
let JobList = document.querySelector(".category-item1");

let category_item1 = ""

JOBS.forEach((job) => {
    category_item1 +=`
        <div class="category-item1">
                <div class="card-part-center">
                <h2>${job.name}</h2>
                <h3>${job.CA} </h3>
                <h4>${job.time}</h4>
                <h5> ${job.date}</h5>
                <p>Gramerge</p>
                <div class="card">${job.logo}</div>
            </div>
           </div> `

})
JobList.innerHTML = category_item1;
