



const SizeDB = { //дельта рама, шмпост, импост-створка, импост-рама, импост в створке

    d_rr(sys) { //*rama + rama
        const [dr, di, dsi, drs, diis] = this[sys].dsize;

        return dr * 2
        // return this[sys].dsize[0] * 2
    },
    d_ri(sys) { //*rama + impost
        return this[sys].dsize[0] + this[sys].dsize[1]
    },
    d_ii(sys) { //*impost + impost
        return this[sys].dsize[1] * 2
    },
    d_rs(sys) { //*stvorka_rama + stvorka_rama
        return this[sys].dsize[3] * 2
    },
    d_sisi(sys) { //*stvorka_impost + stvorka_impost
        return this[sys].dsize[2] * 2
    },
    d_sisr(sys) { //*stvorka_impost + stvorka_rama
        return this[sys].dsize[2] + this[sys].dsize[3]
    },
    d_doori(sys) { //*door_impost + door_full
        return this[sys].dsize[3] + this[sys].dsize[4]
    },



    "Proline": {
        "dsize": [48, 26.5, 74.5, 96, 26], //! dr, di, dsi, drs, diis
        "dpt": ["28", "36", "40"],
        "rd28": [22, 8],
        "rd36": [24, 8],
        "rd40": [32, 8],
        "idpt": [34, 34],

    },
    "Softline": {
        "dsize": [51, 26.5, 77.5, 102, 26], //! dr, di, dsi, drs, diis
        "dpt": ["28", "36", "40"],
        "rd28": [22, 8],
        "rd36": [24, 8],
        "rd40": [32, 8],
        "idpt": [34, 34],

    },
    "Premium82": {
        "dsize": [58, 32, 78, 104, 27], //! dr, di, dsi, drs, diis
        "dpt": ["40", "52"],
        "rd40": [32, 8],
        "rd52": [36, 8],
        "idpt": [34, 34],

    },
    "Euroline": {
        "dsize": [54, 28, 84.5, 110.5, 27.5], //! dr, di, dsi, drs, diis
        "dpt": ["24", "32"],
        "rd24": [22, 8],
        "rd32": [26, 8],
        "idpt": [28, 28],

    },
    "WHS60": {
        "dsize": [44, 23.5, 71.5, 92, 23], //! dr, di, dsi, drs, diis
        "dpt": ["24", "30"],
        "idpt": [30, 30],

    },
    "WHS72": {
        "dsize": [45, 25.5, 74.5, 95, 24], //! dr, di, dsi, drs, diis
        "dpt": ["24", "32", "40"],
        "rd24": [20, 8],
        "rd32": [22, 8],
        "rd40": [23, 8],
        "idpt": [34, 34],

    },
    "BasicPlus": {
        "dsize": [50, 27, 76, 99, 27], //! dr, di, dsi, drs, diis
        "dpt": ["24", "30", "38"],
        "rd24": [17, 8],
        "rd30": [23, 8],
        "rd38": [23, 8],
        "idpt": [32, 32],

    },
    "Lux": {
        "dsize": [55, 27, 81, 109, 27], //! dr, di, dsi, drs, diis
        "dpt": ["24", "30", "38"],
        "rd24": [17, 8],
        "rd30": [23, 8],
        "rd38": [23, 8],
        "idpt": [32, 32],

    },
    "TermoPlus": {
        "dsize": [55, 27, 76, 104, 22], //! dr, di, dsi, drs, diis
        "dpt": ["24", "30", "38"],
        "rd24": [23, 8],
        "rd30": [23, 8],
        "rd38": [23, 8],
        "idpt": [32, 32],

    },

    "Optima": {
        "dsize": [55, 24.5, 79, 109, 24], //! dr, di, dsi, drs, diis
        "dpt": ["24", "30"],
        "rd24": [23, 8],
        "rd30": [23, 8],
        "idpt": [32, 32],

    }
};



// !@toggledepth фильтрует список ст/п в зависимости от профиля
/**
 * @name ToggleDepth - переключатель стеклопакетов в зависимости от профиля 
 */
async function td() {
    let sys = await document.getElementById('prof').value;

    let system = await SizeDB[sys];
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
// td()



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
const Rama = {
    use: {
        "f": ["w", "h"],
        "ff": ["h", "w", "levo"],
        "fff": ["h", "w", "levo", "pravo"],
        "df": ["h", "w", "hpr", "pravo", "himp"],
        "dff": ["h", "w", "levo", "pravo", "hpr", "himp"],
        "fdf": ["h", "w", "levo", "pravo", "himp", "hlv", "hpr"],
    },

}



