gsap.registerPlugin(Flip);

window.addEventListener("resize", responsiveUI);

const projectContents = document.querySelectorAll(".project-slide .project-section");
let size;

function loadFunctions() {
    size = projectContents[0].clientWidth;
    textHover();
    imageSlider();
}

function getLogicalDeviceDimensions() {
    // cross browser way to get the common viewport width:
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // cross browser way to get the orientation:
    var isLandscape = document.documentElement.clientWidth > document.documentElement.clientHeight;

    // then get the logical screen size if the screen is smaller than the viewport
    // otherwise get the viewport size
    var screenWidth = screen.width < viewportWidth ?
        Math[isLandscape ? 'max' : 'min'](screen.width, screen.height) :
        viewportWidth;

    var screenHeight = screen.height < viewportHeight ?
        Math[isLandscape ? 'min' : 'max'](screen.width, screen.height) :
        viewportHeight;

    return [screenWidth, screenHeight];
}

function responsiveUI() {
    var screen = getLogicalDeviceDimensions();
    size = projectContents[0].clientWidth;

    if (screen[0] < 600) {

        document.getElementsByClassName("phone-responsive")[0].style.visibility = "hidden";
        document.getElementsByClassName("phone-responsive")[1].style.visibility = "hidden";

        // SECTIONS
        var sections = document.getElementsByTagName("section");
        for (let index = 1; index < sections.length - 1; index++) {
            const element = sections[index];
            element.style.height = "fit-content";
            element.style.paddingBottom = "17vh";
            element.style.paddingLeft = "100px";
        }

        document.querySelector(".section.about").style.padding = "17vh 0 100px 100px";

        var lines = document.getElementsByClassName("line");
        for (let index = 0; index < lines.length; index++) {
            const element = lines[index];
            element.style.width = "76px";
            element.style.top = "18vh";
        }

        // document.querySelector(".section.about .line").style.top = "11vh";

        var h3elements = document.getElementsByTagName("h3");
        for (let index = 0; index < h3elements.length; index++) {
            const element = h3elements[index];
            element.style.fontSize = "50px";
        }

        // HOME SECTION
        document.getElementsByClassName("home")[0].style.paddingTop = "0";
        document.getElementsByClassName("name")[0].style.marginLeft = "100px";
        document.querySelector(".name h1").style.fontSize = "5rem";
        document.querySelector(".name h2").style.fontSize = "2.5rem";



        // SKILLS SECTION


        // PROJECTS SECTION
        document.querySelector(".project-container").style.left = "-100px";

        var projectNo = document.querySelector(".project-numbers");
        projectNo.style.visibility = "hidden";
        // projectNo.style.padding = "0 0 0 50px";
        // projectNo.style.marginBottom = "50px";
        // projectNo.style.height = "50px";

        // document.querySelector(".invisible-section").style.width = "0";

        // var numbers = document.querySelector(".numbers");
        // numbers.style.fontSize = "35px";
        // numbers.style.gap = "60px";

        // var number = document.getElementsByClassName("number");
        // for (let index = 0; index < number.length; index++) {
        //     const element = number[index];
        //     element.style.width = "4vw";
        // }

        // document.querySelector('.active-number-bar').style.width = "45px";

        var projectSlide = document.querySelector(".project-slide");
        projectSlide.style.scrollSnapType = "x mandatory";
        projectSlide.style.overflowX = "auto";
        projectSlide.style.transform = "translateX(0)";

        for (let index = 0; index < projectContents.length; index++) {
            const element = projectContents[index];
            element.style.flexWrap = "wrap";
            element.style.padding = "0 200px 100px 100px";
            element.style.height = "950px";
            element.style.scrollSnapAlign = "start";
        }

        var projectimages = document.getElementsByClassName("project-image");
        var images = document.getElementsByClassName("image");

        for (let index = 0; index < projectimages.length; index++) {
            const projectImage = projectimages[index];
            projectImage.style.width = "80vw";
            projectImage.style.transform = "translateY(15%)";

            const image = images[index];
            image.style.width = "80vw";
        }

        var imageLinks = document.querySelectorAll(".project-image a");
        for (let index = 0; index < imageLinks.length; index++) {
            const element = imageLinks[index];
            element.style.pointerEvents = "none";
        }

        var infos = document.getElementsByClassName("project-info");
        for (let index = 0; index < infos.length; index++) {
            const element = infos[index];
            element.style.width = "74vw";
        }

        var projectTitle = document.getElementsByClassName("project-title");
        for (let index = 0; index < projectTitle.length; index++) {
            const element = projectTitle[index];
            element.style.padding = "0";
            element.style.fontSize = "3rem";

        }

        var projectTags = document.getElementsByClassName("project-tags");
        for (let index = 0; index < projectTags.length; index++) {
            const element = projectTags[index];
            element.style.fontSize = "1.5rem";
        }

        var tags = document.querySelectorAll(".project-tags div");
        for (let index = 0; index < tags.length; index++) {
            const element = tags[index];
            element.style.margin = "0 10px 10px 0";
            element.style.padding = "10px";
            element.style.borderRadius = "25px";
        }

        var projectsDescription = document.getElementsByClassName("project-description");
        for (let index = 0; index < projectsDescription.length; index++) {
            const element = projectsDescription[index];
            element.style.width = "75vw";
            element.style.fontSize = "1.6rem";
        }

        var buttons = document.getElementsByClassName("button");
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.transform = "scale(1.7)";
            element.style.margin = "25px 0 0 50px";
        }


        // ABOUT SECTION

        document.querySelector(".section.about h3").style.margin = "0 0 3rem 0";

        var paragraphs = document.getElementsByTagName("p");
        for (let index = 0; index < paragraphs.length; index++) {
            const element = paragraphs[index];
            element.style.width = "85%";
            element.style.fontSize = "0.9rem";
        }


        var technologies = document.querySelector(".technologies")
        technologies.style.width = "80vw";
        technologies.style.margin = "3rem 0 0 0";


        var skillsTitle = document.getElementsByClassName("skills-title");
        for (let index = 0; index < skillsTitle.length; index++) {
            const element = skillsTitle[index];
            element.style.fontSize = "30px";
        }

        var skillsItems = document.querySelectorAll(".skills-items ul");
        for (let index = 0; index < skillsItems.length; index++) {
            const element = skillsItems[index];
            element.style.fontSize = "20px";
        }

        document.getElementsByClassName("button-container")[0].style.margin = "60px 0 0 0";

        //CONTACT SECTION
        document.querySelector(".contact-title").style.fontSize = "45px";
        var contactTypes = document.getElementsByClassName("contact-type");

        for (let index = 0; index < contactTypes.length; index++) {
            const type = contactTypes[index];
            type.style.fontSize = "35px";
        }

        var contacts = document.getElementsByClassName("contact");
        for (let index = 0; index < contacts.length; index++) {
            const contact = contacts[index];
            contact.style.fontSize = "30px";
        }

        var contactForm = document.querySelector(".contact-form");
        contactForm.style.transform = "translateX(-20px)";
        contactForm.style.padding = "70px 30px";


        contactForm.style.justifyItems = "start";
        document.querySelector(".item2").style.gridRow = "2";
        document.querySelector(".item2").style.gridColumn = "1";
        document.querySelector(".item3").style.gridRow = "3";
        document.querySelector(".item3").style.gridColumn = "1";
        document.querySelector(".message").style.width = "770px";
        document.querySelector(".message").style.minWidth = "0";
        document.querySelector(".message").style.maxWidth = "100%";
        document.querySelector(".message").style.minHeight = "200px";

        document.querySelector(".form-button-container").style.gridRow = "4";
        document.querySelector(".form-button-container").style.gridColumn = "1";

        var labels = document.getElementsByClassName("name-label");
        for (let index = 0; index < labels.length; index++) {
            const element = labels[index];
            element.style.fontSize = "28px";
        }

        var nameContainer = document.getElementsByClassName("name-container");
        for (let index = 0; index < nameContainer.length; index++) {
            const element = nameContainer[index];
            element.style.width = "735px";
            element.style.height = "45px";
        }

        document.getElementsByTagName("input")[0].style.fontSize = "28px";
        document.getElementsByTagName("input")[0].style.padding = "15px 20px";

        document.getElementsByTagName("input")[1].style.fontSize = "28px";
        document.getElementsByTagName("input")[1].style.padding = "15px 20px";

        document.getElementsByTagName("textarea")[0].style.fontSize = "16px";
        document.getElementsByTagName("textarea")[0].style.padding = "15px 20px";


        // FOOTER
        var socials = document.getElementsByClassName("social");
        for (let index = 0; index < socials.length; index++) {
            const element = socials[index];
            element.setAttribute("height", "40px");
            element.setAttribute("width", "40px");
            element.setAttribute("transform", "scale(1.5)");
        }

        var aSocials = document.querySelectorAll(".socials a");
        for (let index = 0; index < aSocials.length; index++) {
            const element = aSocials[index];
            element.style.padding = "40px";
        }


        // NAVIGATION BAR
        document.getElementsByClassName("logo")[0].style.height = "100px";
        document.getElementsByClassName("nav")[0].style.fontSize = "2em";

        var nav = document.getElementsByClassName("nav")[0];
        nav.style.top = "20px";
        nav.style.right = "270px";
        nav.style.justifyContent = "center";
        nav.style.transform = "rotate(0deg)";
        nav.style.top = "10px";

        var navList = document.querySelector(".nav ul");
        navList.style.flexDirection = "row";

        var navElements = document.getElementsByClassName("nav-section");
        for (let index = 0; index < navElements.length; index++) {
            const element = navElements[index];
            element.style.paddingLeft = "1em";
            element.style.fontSize = "45px";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    } else {
        document.getElementsByClassName("phone-responsive")[0].style.visibility = "visible";
        document.getElementsByClassName("phone-responsive")[1].style.visibility = "visible";

        // SECTIONS
        var sections = document.getElementsByTagName("section");
        for (let index = 1; index < sections.length - 1; index++) {
            const element = sections[index];
            element.style.height = "100vh";
            element.style.paddingBottom = "";
            element.style.paddingLeft = "200px";
        }

        // document.querySelector(".section.about").style.padding = "10vh 0 0 200px";


        var lines = document.getElementsByClassName("line");
        for (let index = 0; index < lines.length; index++) {
            const element = lines[index];
            element.style.width = "176px";
            element.style.top = "18.5vh";
        }

        // document.querySelector(".section.about .line").style.top = "11.5vh";

        var h3elements = document.getElementsByTagName("h3");
        for (let index = 0; index < h3elements.length; index++) {
            const element = h3elements[index];
            element.style.fontSize = "37px";
        }


        // HOME SECTION
        document.getElementsByClassName("home")[0].style.paddingTop = "0";
        document.getElementsByClassName("name")[0].style.marginLeft = "200px";
        document.querySelector(".name h1").style.fontSize = "67px";
        document.querySelector(".name h2").style.fontSize = "30px";

        // SKILLS SECTION


        // PROJECTS SECTION
        document.querySelector(".project-container").style.left = "-200px";

        var projectNo = document.querySelector(".project-numbers");
        projectNo.style.visibility = "visible";

        // projectNo.style.padding = "0 0 0 200px";
        // projectNo.style.marginBottom = "0";
        // projectNo.style.height = "40px";

        // document.querySelector(".invisible-section").style.width = "40vw";

        // var numbers = document.querySelector(".numbers");
        // numbers.style.fontSize = "25px";
        // numbers.style.gap = "40px";

        // var number = document.getElementsByClassName("number");
        // for (let index = 0; index < number.length; index++) {
        //     const element = number[index];
        //     element.style.width = "2.7vw";
        // }

        // document.querySelector('.active-number-bar').style.width = "33px";

        var projectSlide = document.querySelector(".project-slide");
        projectSlide.style.scrollSnapType = "none";
        projectSlide.style.overflowX = "";

        for (let index = 0; index < projectContents.length; index++) {
            const element = projectContents[index];
            element.style.flexWrap = "nowrap";
            element.style.padding = "0 200px 0";
            element.style.height = "fit-content";
            element.style.scrollSnapAlign = "";
        }

        projectContents[projectContents.length - 1].style.padding = "0 250px 0 200px";

        var projectimages = document.getElementsByClassName("project-image");
        var images = document.getElementsByClassName("image");

        for (let index = 0; index < projectimages.length; index++) {
            const projectImage = projectimages[index];
            projectImage.style.width = "auto";
            projectImage.style.transform = "translateY(-10%)";

            const image = images[index];
            image.style.width = "40vw";
        }

        var imageLinks = document.querySelectorAll(".project-image a");
        for (let index = 0; index < imageLinks.length; index++) {
            const element = imageLinks[index];
            element.style.pointerEvents = "all";
        }

        var infos = document.getElementsByClassName("project-info");
        for (let index = 0; index < infos.length; index++) {
            const element = infos[index];
            element.style.width = "31vw";
        }

        var projectsTitle = document.getElementsByClassName("project-title");
        for (let index = 0; index < projectsTitle.length; index++) {
            const element = projectsTitle[index];
            element.style.padding = "40px 0 0 0";
            element.style.fontSize = "2rem";
        }

        var projectTags = document.getElementsByClassName("project-tags");
        for (let index = 0; index < projectTags.length; index++) {
            const element = projectTags[index];
            element.style.fontSize = "12px";
        }

        var tags = document.querySelectorAll(".project-tags div");
        for (let index = 0; index < tags.length; index++) {
            const element = tags[index];
            element.style.margin = "0 5px 5px 0";
            element.style.padding = "5px";
            element.style.borderRadius = "15px";
        }

        var projectsDescription = document.getElementsByClassName("project-description");
        for (let index = 0; index < projectsDescription.length; index++) {
            const element = projectsDescription[index];
            element.style.width = "31vw";
            element.style.fontSize = "1rem";
        }

        var buttons = document.getElementsByClassName("button");
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.transform = "scale(1)";
            element.style.margin = "0";
        }


        // ABOUT SECTION
        var paragraphs = document.getElementsByTagName("p");
        for (let index = 0; index < paragraphs.length; index++) {
            const element = paragraphs[index];
            element.style.width = "750px";
            element.style.fontSize = "1.1rem";
        }

        var technologies = document.querySelector(".technologies");
        technologies.style.width = "750px";
        technologies.style.margin = "1.5em 0 0 0";

        var skillsTitles = document.getElementsByClassName("skills-title");
        for (let index = 0; index < skillsTitles.length; index++) {
            const element = skillsTitles[index];
            element.style.fontSize = "1.1rem";
        }

        var skillsItems = document.querySelectorAll(".skills-items ul");
        for (let index = 0; index < skillsItems.length; index++) {
            const element = skillsItems[index];
            element.style.fontSize = "0.85rem";
        }

        document.getElementsByClassName("button-container")[0].style.margin = "1rem 0 0 0";


        //CONTACT SECTION
        document.querySelector(".contact-title").style.fontSize = "1.3em";
        var contactTypes = document.getElementsByClassName("contact-type");

        for (let index = 0; index < contactTypes.length; index++) {
            const type = contactTypes[index];
            type.style.fontSize = "0.9em";
        }

        var contacts = document.getElementsByClassName("contact");
        for (let index = 0; index < contacts.length; index++) {
            const contact = contacts[index];
            contact.style.fontSize = "0.7em";
        }

        var contactForm = document.querySelector(".contact-form");
        contactForm.style.transform = "translateY(-50px)";
        contactForm.style.padding = "40px 20px";
        contactForm.style.justifyItems = "end";

        document.querySelector(".item2").style.gridColumn = "2";
        document.querySelector(".item2").style.gridRow = "1";
        document.querySelector(".item3").style.gridColumn = "1/3";
        document.querySelector(".item3").style.gridRow = "2";

        var labels = document.getElementsByClassName("name-label");
        for (let index = 0; index < labels.length; index++) {
            const element = labels[index];
            element.style.fontSize = "0.6em";
        }

        var nameContainer = document.getElementsByClassName("name-container");
        for (let index = 0; index < nameContainer.length; index++) {
            const element = nameContainer[index];
            element.style.width = "300px";
            element.style.height = "30px";
        }

        document.querySelector(".message").style.width = "655px";
        document.querySelector(".message").style.minWidth = "655px";
        document.querySelector(".message").style.maxWidth = "655px";
        document.querySelector(".message").style.minHeight = "100px";
        document.querySelector(".message").style.height = "100px";


        document.getElementsByTagName("input")[0].style.fontSize = "0.7em";
        document.getElementsByTagName("input")[0].style.padding = "8px 12px";

        document.getElementsByTagName("input")[1].style.fontSize = "0.7em";
        document.getElementsByTagName("input")[1].style.padding = "8px 12px";

        document.getElementsByTagName("textarea")[0].style.fontSize = "0.7em";
        document.getElementsByTagName("textarea")[0].style.padding = "8px 12px";

        document.querySelector(".form-button-container").style.gridColumn = "2";
        document.querySelector(".form-button-container").style.gridRow = "3";

        // FOOTER
        document.getElementsByClassName("footer")[0].style.marginTop = "0";

        var socials = document.getElementsByClassName("social");
        for (let index = 0; index < socials.length; index++) {
            const element = socials[index];
            element.setAttribute("height", "30px");
            element.setAttribute("width", "30px");
            element.setAttribute("transform", "scale(1)");
        }

        var aSocials = document.querySelectorAll(".socials a");
        for (let index = 0; index < aSocials.length; index++) {
            const element = aSocials[index];
            element.style.padding = "20px";
        }


        // NAVIGATION BAR
        document.getElementsByClassName("logo")[0].style.height = "50px";
        document.getElementsByClassName("nav")[0].style.fontSize = "1em";

        var nav = document.getElementsByClassName("nav")[0];
        nav.style.top = "200px";
        nav.style.right = "-190px";
        nav.style.justifyContent = "space-between";
        nav.style.transform = "rotate(270deg)";
        nav.style.top = "200px";

        var navList = document.querySelector(".nav ul");
        navList.style.flexDirection = "row-reverse";

        var listElements = document.getElementsByClassName("nav-section");
        for (let index = 0; index < listElements.length; index++) {
            const element = listElements[index];
            element.style.paddingLeft = "0";
            element.style.fontSize = "16px";
            element.style.opacity = "";
            element.style.transform = "";
        }

    }

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

    function deleteClass(object, removedclassName, addedClassName, currentItem) {
        document.querySelectorAll(object).forEach(obj => {
            if (currentItem != obj) {
                obj.classList.remove(removedclassName);
                obj.classList.add(addedClassName)
            }

        })
    }

    const buttons = document.getElementsByClassName("number");
    size = projectContents[0].clientWidth;

    const buttonPressed = e => {
        size = projectContents[0].clientWidth;

        const currentSection = e.target.parentNode.parentNode.parentNode;
        if (e.target.classList.contains("project01")) {
            const targetSection = document.getElementsByClassName("section01")[0];

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project02")) {
            const targetSection = document.getElementsByClassName("section02")[0];

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 1) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project03")) {
            const targetSection = document.getElementsByClassName("section03")[0];

            currentSection.classList.remove("opened-section");

            projectSlide.style.transition = "transform 0.4s ease-in-out";
            projectSlide.style.transform = 'translateX(' + (-size * 2) + 'px)';

            targetSection.classList.add("opened-section");
        }

        else if (e.target.classList.contains("project04")) {
            const targetSection = document.getElementsByClassName("section04")[0];

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
    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener("click", event => {
            const state = Flip.getState(activeBar);
            event.target.appendChild(activeBar);
            event.target.classList.add("active");
            event.target.classList.remove("nonactive");
            deleteClass(".number", "active", "nonactive", number);

            Flip.from(state, {
                absolute: true,
                duration: 0.5,
                ease: "expo.inOut",
            });
        })
    });

    const projectSlide = document.querySelector(".project-slide");


    const figures = document.getElementsByClassName("figure");
    for (let figure of figures) {
        figure.addEventListener("mouseenter", () => {
            document.querySelector('.cursor').classList.add("active");
        })

        figure.addEventListener("mouseleave", () => {
            document.querySelector('.cursor').classList.remove("active");
        })
    }
}

loadFunctions();