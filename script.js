const blocks = document.querySelectorAll(
  ".card, .feature, .review, .form-box"
);

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  blocks.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

function toggleMenu() {
    const menu = document.getElementById("dropdown");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function openModal(title, desc, img, price, country) {
    document.getElementById("modal").style.display = "flex";

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;

    document.getElementById("modal-price").innerText = price;
    document.getElementById("modal-country").innerText = "Страна: " + country;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function openOrder() {
    document.getElementById("order").style.display = "block";
}


function openTG() {
    window.open("https://t.me/LutovAleksander", "_blank");
}

function sendOrder() {
    let input = document.getElementById("phone");

    if (!input) {
        alert("Ошибка: поле не найдено");
        return;
    }

    let phone = input.value;

    if (!phone) {
        alert("Введите номер!");
        return;
    }

    let token = "8566600692:AAGLKYV1uxwc2b9B3XZEHR53hpZSYAOa5Bk";
    let chat_id = "6091253525";

    let message = "📩 Новая заявка! \nТелефон: +" + phone;

    fetch("https://api.allorigins.win/raw?url=" + 
        encodeURIComponent(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`)
    )
    .then(() => {
        alert("Заявка отправлена!");
        input.value = "";
    })
    .catch(() => {
        alert("Ошибка, попробуйте снова!");
    });
}
