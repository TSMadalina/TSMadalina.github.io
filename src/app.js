gsap.registerPlugin(Flip);

const projectContents = document.querySelectorAll(".project-slide .project-section");
let size;

function loadFunctions() {
    size = projectContents[0].clientWidth;
    textHover();
    imageSlider();
}

function textHover() {
    document.body.addEventListener("mousemove", event => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        gsap.set(".cursor", {
            x: mouseX,
            y: mouseY
        });

        gsap.to(".shape", {
            x: mouseX,
            y: mouseY,
            stagger: -0.1
        });

    });
}

function imageSlider() {

    function deleteClass(object, removedClass, addedClass, currentItem) {
        document.querySelectorAll(object).forEach(obj => {
            if (currentItem != obj) {
                obj.classList.remove(removedClass);
                obj.classList.add(addedClass)
            }
        })
    }

    const buttons = document.querySelectorAll(".numbers li");
    size = projectContents[0].clientWidth;

    const buttonPressed = e => {
        size = projectContents[0].clientWidth;

        const currentSection = e.target.parentNode.parentNode.parentNode;
        if (e.target.classList.contains("project01")) {
            const targetSection = document.querySelector(".section01");

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project02")) {
            const targetSection = document.querySelector(".section02");

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 1) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project03")) {
            const targetSection = document.querySelector(".section03");

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 2) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project04")) {
            const targetSection = document.querySelector(".section04");

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 3) + 'px)';

            targetSection.classList.add("opened-section");
        }
    }

    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }

    const activeBar = document.querySelector('.active-number-bar');
    document.querySelectorAll(".numbers ul li").forEach(number => {
        number.addEventListener("click", event => {
            const state = Flip.getState(activeBar);
            event.target.appendChild(activeBar);
            event.target.classList.add("active");
            event.target.classList.remove("nonactive");
            deleteClass(".numbers ul li", "active", "nonactive", number);

            Flip.from(state, {
                absolute: true,
                duration: 0.5,
                ease: "expo.inOut",
            });
        })
    });

    const projectSlide = document.querySelector(".project-slide");

    const figures = document.querySelector(".figure");
    for (let figure of figures) {
        figure.addEventListener("mouseenter", () => {
            document.querySelector('.cursor').classList.add("active");
        })

        figure.addEventListener("mouseleave", () => {
            document.querySelector('.cursor').classList.remove("active");
        })
    }
}

function animateOnRefresh() {
    AOS.init({
        duration: 1200,
        once: true,
    })
}

loadFunctions();