
let JOBS_ARR= []
const loaddata=()=>{
    try{
       let jobs= JSON.parse(localStorage.getItem("JOBS"))
       JOBS_ARR = jobs.results
    }catch(error){
       console.log(error)
    }
}

loaddata()



let jobContainer = document.getElementById("jobContainer")

let allJobsCards = ""

JOBS_ARR.forEach((jobinfo)=>{
       allJobsCards += `
         <div class="job-card">
              <h3>${jobinfo?.company?.display_name}</h3>
              <p>#${jobinfo?.title}</p>
              <div class="job-info">
                  <div class="description-title">Description
                    <div class="description-container">
                        ${jobinfo?.description}
                    </div>
                  </div>
                  <div> <i class="ri-calendar-2-line"></i> added At :${jobinfo.created}</div>
                  <div> <i class="ri-map-pin-2-line"></i> location :${jobinfo?.location?.display_name}</div>
                  <div> <i class="ri-wallet-3-line"></i> expected Salary:${jobinfo?.salary_is_predicted =="0" ? "not disclosed" : jobinfo?.salary_is_predicted}</div>
                  <a href = '${jobinfo.redirect_url}' target="_blank">
                  <button class="apply-btn">Apply Here <i class="ri-megaphone-fill"></i></button>
              </div>

          </div>
       
       `
})



jobContainer.innerHTML = allJobsCards