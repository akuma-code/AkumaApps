
const rdo = {
    coef: 2,
    dollar: +localStorage.getItem("dollarRDO") || 80,
    sizes: {
        "Rollite": {
            w: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5],
            h: [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4],
        },
        "Isolite": {
            w: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8],
            h: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4],
        },
    },
    get rate() {
        return (this.coef * this.dollar)
    },

};

// const getGroupScale = (group = [], scaleFactor = 1) => {
//     return group.map(elem => elem * scaleFactor)
// }
const getGroups = (pricelist, type) => {
    return pricelist[type]
}


const RollScaled = (rate) => {
    const groups = getGroups(Pricelist, "Rollite")
    for (let grp in groups) {
        groups[grp] = groups[grp].map(line => line.map(item => Math.ceil(item * rate)))

    }

    return groups
}
const IsoScaled = (rate) => {
    const groups = getGroups(Pricelist, "Isolite")
    for (let grp in groups) {
        groups[grp] = groups[grp].map(line => line.map(item => Math.ceil(item * rate)))
    }
    return groups
}


const zPrice = {
    "Rollite": RollScaled(rdo.rate),
    "Isolite": IsoScaled(rdo.rate)
}

/**
 * @class считает цену
 */
class PriceCalculator {
    constructor () {
        this.type = document.getElementById('ztype').innerText || "";
        this.grp = document.getElementById('zgrp').innerText || "";
        // @ts-ignore
        this.sizepool = rdo.sizes[this.type];

    }
    get price() {
        if (this.grp == "") return alert(`Укажите цвет жалюзи!`);

        return zPrice[this.type][this.grp]
    }
    /**
     * 
     * @param {number} w ширина жалюзей
     * @param {number} h высота жалюзей
     * @returns наценку на жалюзи Изолайт
     */
    S_rate(w, h) {

        let S = Math.round((w * h) / 1e4) / 100
        // console.log({ S });
        if (this.type === 'Rollite') return 1
        return (S <= 1) ? 1 : S
    }

    /**
     * 
     * @param {number} width 
     * @param {number} height 
     * @returns индекс размеров в таблице цен
     */
    getind(width, height) {

        if (this.type === "Rollite") {
            if (height < 500) height = 500;
            if (width < 400) width = 400;
            if (height > 2400) return alert(`Высота выходит за гарантийные размеры (${height} мм)`);
            if (width > 1500) return alert(`Ширина выходит за гарантийные размеры (${width} мм)`);
        }
        // if (this.type === "Isolite") {
        else {
            if (height < 300) height = 300;
            if (width < 300) width = 300;
            if (height > 2400) return alert(`Высота выходит за гарантийные размеры (${height} мм)`);
            if (width > 1800) return alert(`Ширина выходит за гарантийные размеры (${width} мм)`);
        }

        let indH = this.sizepool.h.indexOf((Math.ceil(height / 100)) / 10);
        let indW = this.sizepool.w.indexOf((Math.ceil(width / 100)) / 10);
        const result = [indH, indW]
        console.log('[idxH, idxW] :>> ', result);
        return result
    }
    /**
     * 
     * @param {number} zw ширина жалюзи
     * @param {number} zh высота жалюзи
     * @returns цену
     */
    calcIt(zw, zh) {



        //@ts-ignore
        const [indH, indW] = this.getind(zw, zh);
        const result = Math.floor(this.price[indH][indW])

        // return Math.round(result * this.S_rate(zw, zh))
        return result
    }
    /**
     * 
     * @param {array} sizes массив размеров 
     * @returns массив цен
     */
    calc(sizes) {
        let result = [];
        for (let size of sizes) {
            let w = size[0];
            let h = size[1];
            let [indH, indW] = this.getind(w, h);
            result.push(this.price[indH][indW]);
            // result.push(this.price[indH][indW] * this.S_rate(w, h));
        }
        return result
    }

}





