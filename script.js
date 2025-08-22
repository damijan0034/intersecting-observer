const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            // console.log(entry.target)
            entry.target.classList.add('show')
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
            entry.target.classList.remove('show')
        }
    })
}, {})

const todoElements = document.querySelectorAll('.todo')
const headingElements = document.querySelectorAll('.heading')
todoElements.forEach(el => observer.observe(el))
headingElements.forEach(el => observer.observe(el))