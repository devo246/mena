window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
})

const links = document.querySelectorAll(".nav-link");
let burger = document.getElementById('burger-checkbox')

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"))
        this.classList.add("active")
        if (burger.checked) {
            burger.checked = false
        }
    })
})

const sections = document.querySelectorAll(".mainSection");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(mainSection => {
        const sectionTop = mainSection.offsetTop;
        const sectionHeight = mainSection.clientHeight;

        if (scrollY >= sectionTop - 120) {
            currentSection = mainSection.getAttribute("id");
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        currentSection = sections[sections.length - 1].getAttribute("id");
    }

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});



let services = {
    service1: {
        image: "Images/charger.webp",
        title: "تقفيل شواحن السيارات الكهربائية"
    },
    service2: {
        image: "Images/copical.webp",
        title: "سحب وتقفيل كوبيكال (ستلايت - كاميرات - انترنت - انتركم)"
    },
    service3: {
        image: "Images/interfacee.webp",
        title: "تقفيل الواجهات"
    },
    service4: {
        image: "Images/profileled.webp",
        title: "جميع اعمال البروفايل ليد والمخفي"
    },
    service5: {
        image: "Images/ladder.webp",
        title: "جميع اعمال اضاءة الدرج"
    },
}

function content() {
    const parentElement = document.getElementById("servicesContent")
    parentElement.textContent = ""
    const fragment = document.createDocumentFragment() // تحسين الأداء

    Object.values(services).forEach((item, i) => {
        let element = document.createElement("div")
        let img = document.createElement("img")
        img.src = item.image
        img.alt = item.title

        let title = document.createElement("p")
        title.textContent = item.title

        let connectBtn = document.createElement("a")
        connectBtn.href = "tel:+96566862189"
        connectBtn.className = "connectBtn"
        connectBtn.textContent = "تواصل معنا "

        let icon = document.createElement("i")
        icon.className = "fa-solid fa-phone"
        connectBtn.appendChild(icon)

        element.append(img, title, connectBtn)
        fragment.appendChild(element)
    })

    // إضافة العناصر الجديدة مرة واحدة (أفضل أداءً)
    parentElement.appendChild(fragment)
}

// استدعاء الدالة
content()
