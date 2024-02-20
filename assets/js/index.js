document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar-nav .nav-item .nav-link, .contact-btn");
    let linkClicked = false;

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove line-active class from all links
            links.forEach(otherLink => {
                otherLink.classList.remove("line-active");
            });

            // Add line-active class to the clicked link
            this.classList.add("line-active");

            // Set linkClicked to true to prevent scroll event from updating the active link
            linkClicked = true;

            // Scroll to the corresponding section smoothly after a short delay
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: "smooth" });

            // Reset linkClicked after a short delay (adjust the delay time as needed)
            setTimeout(() => {
                linkClicked = false;
            }, 500); // 500 milliseconds delay
        });
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function updateActiveLink() {
        if (!linkClicked) {
            links.forEach(link => {
                const sectionId = link.getAttribute("href").substring(1);
                const section = document.getElementById(sectionId);

                if (isInViewport(section)) {
                    links.forEach(otherLink => {
                        otherLink.classList.remove("line-active");
                    });
                    link.classList.add("line-active");
                }
            });
        }
    }

    updateActiveLink();

    window.addEventListener('scroll', updateActiveLink);
});

function visit() {
    const elementToScrollTo = document.getElementById('vision');
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
}

const project_info = document.querySelectorAll('#project-info');
let projectsShown = 0;
let totalProjects = project_info.length;

function hide_all_projects() {
    project_info.forEach(element => {
        element.setAttribute('hidden', 'true'); // To hide the element
    });
}

function load_projects() {

    document.getElementById('loading').removeAttribute('hidden');
    document.getElementById('view-text').setAttribute('hidden', 'true');

    setTimeout(function () {
        for (let i = 0; i < 3 && projectsShown < totalProjects; i++) {
            if (project_info[projectsShown]) {
                project_info[projectsShown].removeAttribute('hidden');
                projectsShown++;
            }
        }

        document.getElementById('loading').setAttribute('hidden', 'true');
        document.getElementById('view-text').removeAttribute('hidden');
    }
        , 3000)

}

document.addEventListener('DOMContentLoaded', hide_all_projects);
document.addEventListener('DOMContentLoaded', load_projects);