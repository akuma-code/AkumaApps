function stylelog(text) {
    const styles = [
        'color: black',
        'background-color: grey',
    ].join(';');

    return console.log('%c%s', styles, text);
}

function toggle_rs_calc(elem) {
    if (elem.dataset.calcState == "close") {
        toggleCalc();
        return elem.dataset.calcState = "open"
    } else {
        toggleCalc();
        return elem.dataset.calcState = "close"
    }
}

function hideHimp() {
    const {
        isbb
    } = document.querySelector('#imgbox').dataset;
    const {
        isfix
    } = document.querySelector('#sd').dataset;
    const isImp = (isfix == 'false')
    const needtoshow = !!(isImp && isbb);
    // console.log('isfix :>> ', isfix);
    // console.log('isbb :>> ', !!isbb);
    // console.log('isImp :>> ', isImp);
    // console.log('show Himp :>> ', !!needtoshow);
    return !needtoshow
}

function resizeWin(wintype) {
    let imp = document.querySelector('#himp')
    let fon = document.getElementById("fon");
    let img = document.getElementById('imgbox');
    // let patch = document.getElementById("patch")

    const resize = (isbb, wintype, src, width, height) => {
        img.dataset.isbb = isbb;
        img.dataset.ramaStep = "1";
        fon.setAttribute("wintype", wintype);
        img.setAttribute("wintype", wintype);

        fon.src = src;

        fon.style.width = width + 'px';
        fon.style.height = height + 'px';
        // patch.style.display = "none"
    }

    switch (wintype) {
        case "f":
            resize(false, "f", "img/f.svg", 125, 290);
            imp.style.removeProperty('display')

            break;
        case "ff":
            resize(false, "ff", "img/ff.svg", 250, 290)
            imp.style.removeProperty('display')
            break;
        case "fff":
            resize(false, "fff", "img/fff.svg", 375, 290)
            fon.style.top = "0px";
            imp.style.removeProperty('display')
            break;
        case "d":
            resize(true, "d", "img/door-clr.svg", 150, 415);
            hideimp();
            break;
        case "df":
            resize(true, "df", "img/d-f.svg", 290, 415);
            hideimp()
            break;
        case "dff":
            resize(true, "dff", "img/d-ff.svg", 400, 415);
            hideimp();
            break;
        case "fdf":
            resize(true, "fdf", "img/f-d-f.svg", 415, 415);
            hideimp();
            break;
        default:
            alert("NOT WORKS YET!! IMG Step is " + img.dataset.ramaStep)
            return;

    }
    // hideimp()
}




function opaopa(item) {
    if (item.style.opacity < 1) {
        item.style.opacity = 1;
        item.dataset.isfix = false;
    } else {
        item.style.removeProperty('opacity');
        item.dataset.isfix = true;
    }
}

//!@toggletype переключатель типа жалюзи
/**
 * @name(Toggle Type) переключает тип жалюзи
 */
async function tt() {
    let elem = document.getElementById('ztype');
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

// !@toggledepth фильтрует список ст/п в зависимости от профиля
/**
 * @name ToggleDepth - переключатель стеклопакетов в зависимости от профиля 
 */
async function td() {
    let sys = await document.getElementById('prof').value;

    let system = SizeDB[sys];
    let elems = document.getElementsByClassName('odepth');

    for (let elem of elems) {

        if (SizeDB[sys].dpt.includes(elem.value)) {
            elem.style.display = "block";
        } else {
            elem.style.display = "none"
        }
    }
    document.getElementById('gdepth').style.opacity = 1;
    document.getElementById('gdepth').value = system.dpt[0];
}




// !@Set Group - определяет группу жалюзей #zgrp
function setPriceGroup() {
    // let type = document.getElementById('ztype').textContent;
    let zcolor = document.getElementById('zlist').value;
    let elem = document.getElementById('zgrp');
    const {
        kColor,
        kGroup,
        type
    } = getKorob();

    let groups = (type == "Isolite") ? groupsI : groupsR

    for (let item of groups) {
        if (item.name.includes(zcolor)) elem.textContent = item.setKat(kGroup)
    }
}

//!@togglelist переключает списки выбора цвета жалюзи роллайт/изолайт
async function tl() {
    let type = document.getElementById('ztype').textContent;
    let list = document.getElementById('zhlist');
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