function changeTabOurServices() {
    let tabNav = document.querySelectorAll(".our-services-item");
    let tabContent = document.querySelectorAll(".our-services-item-info");
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.dataset.tabName;
        selectTabContent(tabName);
    };
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        });
    }
};
changeTabOurServices();

function blockDefault(){
    const linkTegA = document.getElementsByTagName("a");
    Array.from(linkTegA).forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
    });
});
};
blockDefault();

function addImg(){
    const spinner = document.querySelector(".spinner")
    const buttonOurWork = document.getElementById("btn-our-amazing-work")
    const imagesOurWork = ["./images/our-amazing-work/our-work-example0-js.png", "./images/our-amazing-work/our-work-example1-js.png", "./images/our-amazing-work/our-work-example2-js.png", "./images/our-amazing-work/our-work-example3-js.png", "./images/our-amazing-work/our-work-example4-js.png", "./images/our-amazing-work/our-work-example5-js.png", "./images/our-amazing-work/our-work-example6-js.png", "./images/our-amazing-work/our-work-example7-js.png", "./images/our-amazing-work/our-work-example8-js.png", "./images/our-amazing-work/our-work-example9-js.png", "./images/our-amazing-work/our-work-example10-js.png", "./images/our-amazing-work/our-work-example11-js.png"];
    const ourAmazingWorkItems = document.querySelector(".our-amazing-work-items")
    
    buttonOurWork.addEventListener("click", function(e) {
        e.preventDefault();
        imagesOurWork.forEach((item) => {
            const ourAmazingWorkExample = document.createElement("article");
            ourAmazingWorkExample.classList.add('hide');
            ourAmazingWorkExample.classList.add("our-amazing-work-example");
            ourAmazingWorkItems.append(ourAmazingWorkExample);
    
            const ourAmazingWorkImg = document.createElement("img");
            ourAmazingWorkImg.setAttribute("src", item);
            ourAmazingWorkImg.setAttribute("width", "285");
            ourAmazingWorkImg.setAttribute("height", "211");
            ourAmazingWorkImg.classList.add("our-amazing-work-image");
            ourAmazingWorkExample.prepend(ourAmazingWorkImg);
    
            const ourAmazingWorkHover = document.querySelector(".our-amazing-work-hover");
            let cloneOurAmazingWorkHover = ourAmazingWorkHover.cloneNode(true);
            ourAmazingWorkImg.after(cloneOurAmazingWorkHover);

            spinner.classList.remove('hide');
            setTimeout(() => {
                buttonOurWork.style.display = "none";
                spinner.classList.add('hide');
                ourAmazingWorkExample.classList.remove('hide');
            }, 2000);
            
        });

        function changeContent(){
        const subTitle = Array.from(document.querySelectorAll('.our-amazing-work-hover-subtitle')).slice(12);
        const newSubContent = ['Web Design', 'Graphic Design', 'Landing Pages', 'Wordpress'];
        subTitle.forEach(item => {
        const textAdd = Math.floor(newSubContent.length * Math.random()); 
            item.textContent = newSubContent[textAdd];
            if (item.textContent === 'Web Design'){
                item.closest("article").classList.add("web-design");
            } else if (item.textContent === 'Graphic Design'){
                item.closest("article").classList.add("graphic-design");
            } else if (item.textContent === 'Landing Pages'){
                item.closest("article").classList.add("landing-pages");
            } else (item.closest("article").classList.add("wordpress"));
        });
        }
        changeContent();
    });
};
addImg();

function filterImg(){
    const filterNavBlock = document.querySelector(".our-amazing-work-filter");
    filterNavBlock.addEventListener("click", (event) => {
        const filterHover = document.querySelectorAll(".our-amazing-work-item");
        filterHover.forEach(item => {
            item.classList.remove("active")
        })
        event.target.classList.add('active')
        const filterExample = document.querySelectorAll(".our-amazing-work-example");
        let filterClass = event.target.dataset['f'];
        filterExample.forEach( element => {
            element.classList.remove("hide");
            if (!element.classList.contains(filterClass) && filterClass !== "all"){
                element.classList.add('hide');
            };
        });
    });

};
filterImg();

function doSlideBlock (){
const prev = document.querySelector(".arrow-left");
const next = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".about-us-feedback");
const dots = document.querySelectorAll(".about-us-person-image");

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
};

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    };
};

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    };
};

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
    });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
};
doSlideBlock();

window.onload = () => {
    const grid = document.querySelector('.gallery-main-items');

    const masonry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        gutter: 20,
    });
};
