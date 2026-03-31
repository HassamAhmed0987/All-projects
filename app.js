const asideItems = document.querySelector(".projects-nav")
const allProjects = document.querySelectorAll(".project")


asideItems.addEventListener("click", function (e){

    let target = e.target;
    const items = document.querySelectorAll(".item")


    // console.log(e.target);
    items.forEach(function (item) {
        if(item.classList.contains("active")){
            item.classList.remove("active")
        }
    })
    if(e.target.classList.contains("item")){
        e.target.classList.add("active")
    }
    const filterValue = target.dataset.id

    console.log(filterValue);
    allProjects.forEach(function (project) {
        if(project.classList.contains(filterValue)){
            project.classList.add("active")
        } else{
            project.classList.remove("active")

        }
    })
    


















    // if(e.target.dataset.id.includes("all-projects")){
    //     console.log(e.target);
        
    //     allProjects.forEach(function (project) {
    //         if(project.classList.contains("projects")){
    //             project.classList.add("active")
    //         } else {
    //             project.style.display = "none"
    //         }
    //     })
    // }
    // if(e.target.dataset.id.includes("quiz-app")){
    //     console.log(e.target);
        
    //     allProjects.forEach(function (project) {
    //         if(project.classList.contains("quiz-app")){
    //             project.classList.add("active")
    //         } else {
    //             project.style.display = "none"
    //         }
    //     })
    // }
    // console.log(items);
    
})



// ---------------------------------


// asideItems.addEventListener("click", function (e) {
    
// })







// console.log(allProjects);

