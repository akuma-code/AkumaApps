const rgroupE = {
    name: [
        "Аллегро(2.0)",
        "Аллегро XL(2.5)",
        "АСТРА",
        "Баблс",
        "Берлин(2.0)",
        "Берлин XL(2.5м)",
        "Берлин Шайн",
        "Бетти",
        "Блумен",
        "Дублин",
        "Каир",
        "Меланж",
        "Паласс",
        "Палетте",
        "Пап",
        "Пейсли",
        "Плейн",
        "Рондо",
        "Страйпс",
        "Фловербед",
        "Шантунг",
        "Ганни(Зебра)",
        "Симпл(Зебра)",
    ],
    setKat() {
        return "E"
    }
};

const rgroup1 = {
    name: [
        "Ажур",
        "Аллегро Xxl(3.0)",
        "Аллегро Лён",
        "Аллегро Перл",
        "Бамбук Сатин",
        "Бамбук Фокус",
        "Берлин Б/О (2.0)",
        "Верона",
        "Гана",
        "Дублин Б/О",
        "Иви",
        "Ито Сатин",
        "Ито Фокус",
        "Кофе Сат",
        "Лилли Сатин",
        "Лилли Фокус",
        "Миракл",
        "Олива Сатин",
        "Олива Фокус",
        "Палермо",
        "Сайпан(2.4)",
        "Скай Сатин",
        "Скай Фокуc",
        "Соната",
        "Спринг",
        "Спринг Сатин",
        "Спринг Фокус",
        "Твиг",
        "Триумф",
        "Флёр",
        "Бабочки(Зебра)",
        "Вега(Зебра)",
        "Глос(Зебра)",
        "Гранада(Зебра)",
        "Ибица(Зебра)",
        "Каскад(Зебра)",
        "Латте(Зебра)",
        "Натурал(Зебра)",
        "Стрип(Зебра)",
    ],
    setKat() {
        return 1
    }
};

const rgroup2 = {
    name: [
        "Адора",
        "Аллегро Б/О(2.0)",
        "Аллегро Б/О Xxl(3.0)",
        "Амалия",
        "Арабеска",
        "Берлин Сильвер(2,0)",
        "Берлин Сильвер Xl(2.5)",
        "Бостон",
        "Букле",
        "Буш",
        "Валенсия Б/O",
        "Галактика",
        "Гарден",
        "Дамаск",
        "Джунгли",
        "Дублин Сильвер Xl(2.5)",
        "Калифорния",
        "Капелли",
        "Кристалл",
        "Лима(2.4)",
        "Лино",
        "Магелл",
        "Мадр",
        "Милан Б/О",
        "Миракл Б/О",
        "Миранда",
        "Нельке",
        "Орегон",
        "Пиетра",
        "Призма",
        "Саван",
        "Сиес",
        "Тун",
        "Элегия",
        "Металлик Б/О(Зебра)",
        "Омбре(Зебра)",
        "Севилла(Зебра)",
        "Толедо(Зебра)",
    ],
    setKat() {
        return 2
    }
}

const rgroup3 = {
    name: [
        "Галактика Б/О",
        "Давос Сильвер",
        "Джунгли Б/О",
        "Лима Б/О(2.4)",
        "Лино Б/О",
        "Миранда Б/О",
        "Моделло",
        "Омега Xxl Fr(3.0)",
        "Парма Б/О(2.4)",
        "Раметто",
        "Румба(2.5)",
        "Сайпан Сильвер(2.15)",
        "Скрин Xxl(3.0) 5%",
        "Сплэш",
        "Фиори",
        "Эко",
    ],
    setKat() {
        return 3
    }
};


const rgroup4 = {
    name: [
        "Бостон Б/О",
        "Гоа",
        "Клаудиа",
        "Лаура",
        "Омега Б/О Xxl Fr(3.0)",
        "Порто Б/О(2.4)",
        "Порто Перл(2.4)",
        "Скрин Сильвер Нг 5%",

    ],
    setKat() {
        return 4
    }
};


const rgroup5 = {
    name: [
        "Африка Б/О",
        "Бомбей",
        "Бонн Б/О",
        "Винтаж",
        "Гоа Б/О",
        "Канны Б/О",
        "Клаудиа Б/О",
        "Ринго",
    ],
    setKat() {
        return 5
    }
};
const rgroup6 = {
    name: [
        "Шаде Б/О",
    ],
    setKat() {
        return 6
    }
};



const igroup0 = {
    name: ["Стандарт 0225"],

    setKat(korob) {
        if (korob === "white") return "А";
        if (korob === "color") return "Д";
        if (korob === "lamin") return "И";
    },

};

const igroup1 = {
    name: [
        "Стандарт 0120",
        "Стандарт 1606",
        "Стандарт 1852",
        "Стандарт 1908",
        "Стандарт 2259",
        "Стандарт 23",
        "Стандарт 2406",
        "Стандарт 2746",
        "Стандарт 2871",
        "Стандарт 3204",
        "Стандарт 3209",
        "Стандарт 3458",
        "Стандарт 3499",
        "Стандарт 188",
        "Стандарт 4059",
        "Стандарт 4063",
        "Стандарт 4077",
        "Стандарт 4082",
        "Стандарт 4158",
        "Стандарт 4261",
        "Стандарт 490",
        "Стандарт 491",
        "Стандарт 5150",
        "Стандарт 5173",
        "Стандарт 5608",
        "Стандарт 5713",
        "Стандарт 5850",
        "Стандарт 5853",
        "Стандарт 7005",
        "Стандарт 7013",
        "Стандарт 7122",
        "Стандарт 7125",
        "Стандарт 50",
        "Стандарт 50/48",
        "Стандарт 7128",
        "Стандарт 7255",
        "Стандарт 7256",
        "Стандарт 7257",
        "Стандарт 7258",
    ],
    setKat(korob) {
        if (korob === "white") return "Б";
        if (korob === "color") return "Е";
        if (korob === "lamin") return "К";
    },
};

const igroup2 = {
    name: [
        "Замша 2549",
        "Перфорация 0225П",
        "Перфорация 1908П",
        "Перфорация 2259П",
        "Перфорация 7005П",
        "Перфорация 7125П",
        "Перламутр 2303",
        "Перламутр 2307",
        "Перламутр 2311",
    ],
    setKat(korob) {
        if (korob === "white") return "В";
        if (korob === "color") return "Ж";
        if (korob === "lamin") return "Л";
    },
}

const igroup3 = {
    name: ["Классик 9002",
        "Люкс 7505",
        "Люкс 7525",
        "Люкс 7528",
        "Люкс 7536",
        "Под дерево 6009",
        "Под дерево 6010",
        "Под дерево 6012",
        "Под дерево 6013",
        "Под дерево 6015",
        "Под дерево 6016",
    ],
    setKat(korob) {
        if (korob === "white") return "Г";
        if (korob === "color") return "З";
        if (korob === "lamin") return "М";
    },
}

let groupsR = [rgroupE, rgroup1, rgroup2, rgroup3, rgroup4, rgroup5, rgroup6];
let groupsI = [igroup0, igroup1, igroup2, igroup3];


function listSelector() {
    let type = document.getElementById('ztype').textContent;
    let list = document.getElementById('zlist');
    let groups = (type == "Isolite") ? groupsI : groupsR;

    document.getElementById('zlist').value = "";
    document.getElementById('zgrp').innerText = "";
    list.innerHTML = "";


    for (let gr of groups) {
        for (let name of gr.name) {
            let option = document.createElement("option");
            option.textContent = name;
            list.appendChild(option)
        }
    }
    setPriceGroup()
}
async function tt() {
    let elem = await document.getElementById('ztype');
    let type;
    let showelems = document.getElementsByClassName("show");

    if (elem.textContent == "Rollite") {
        elem.textContent = "Isolite";
        elem.style.color = "white";
        elem.style.transform = "rotateX(0deg)";
        type = "Isolite";
        // tl()
        listSelector();

    } else {
        elem.style.color = "black";
        elem.textContent = "Rollite";
        elem.style.transform = "rotateX(360deg)";
        type = "Rollite";
        // tl();
        listSelector()
    }
    for (let el of showelems) {
        el.style.display = (type == "Isolite") ? "flex" : "none";
    }
}

//!@togglelist переключает списки выбора цвета жалюзи роллайт/изолайт
async function tl() {
    let type = await document.getElementById('ztype').textContent;
    let list = await document.getElementById('zhlist');
    let groups = (type == "Isolite") ? groupsI : groupsR;

    document.getElementById('zlist').value = "";
    document.getElementById('zgrp').innerText = "";
    list.innerHTML = "";


    for (let gr of groups) {
        for (let name of gr.name) {
            let option = document.createElement("option");
            option.value = name;
            list.appendChild(option)
        }
    }
}

tt()


