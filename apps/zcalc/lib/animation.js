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




