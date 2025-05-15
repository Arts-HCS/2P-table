const elementsArray = [
    // Grupo 4
    {
        elementId: 1,
        an: 22,
        symbol: "Ti",
        name: "Titanio",
        am: 47.87,
        electrons: [2, 8, 10, 2],
        en: 1.54
    },
    {
        elementId: 2,
        an: 40,
        symbol: "Zr",
        name: "Circonio",
        am: 91.22,
        electrons: [2, 8, 18, 10, 2],
        en: 1.33
    },
    {
        elementId: 3,
        an: 72,
        symbol: "Hf",
        name: "Hafnio",
        am: 178.49,
        electrons: [2, 8, 18, 32, 10, 2],
        en: 1.3
    },
    {
        elementId: 4,
        an: 104,
        symbol: "Rf",
        name: "Rutherfordio",
        am: 267,
        electrons: [2, 8, 18, 32, 32, 10, 2],
        en: null
    },

    // Grupo 5
    {
        elementId: 5,
        an: 23,
        symbol: "V",
        name: "Vanadio",
        am: 50.94,
        electrons: [2, 8, 11, 2],
        en: 1.63
    },
    {
        elementId: 6,
        an: 41,
        symbol: "Nb",
        name: "Niobio",
        am: 92.91,
        electrons: [2, 8, 18, 12, 1],
        en: 1.6
    },
    {
        elementId: 7,
        an: 73,
        symbol: "Ta",
        name: "Tántalo",
        am: 180.95,
        electrons: [2, 8, 18, 32, 11, 2],
        en: 1.5
    },
    {
        elementId: 8,
        an: 105,
        symbol: "Db",
        name: "Dubnio",
        am: 270,
        electrons: [2, 8, 18, 32, 32, 11, 2],
        en: null
    },

    // Grupo 6
    {
        elementId: 9,
        an: 24,
        symbol: "Cr",
        name: "Cromo",
        am: 51.996,
        electrons: [2, 8, 13, 1],
        en: 1.66
    },
    {
        elementId: 10,
        an: 42,
        symbol: "Mo",
        name: "Molibdeno",
        am: 95.95,
        electrons: [2, 8, 18, 13, 1],
        en: 2.16
    },
    {
        elementId: 11,
        an: 74,
        symbol: "W",
        name: "Wolframio",
        am: 183.84,
        electrons: [2, 8, 18, 32, 12, 2],
        en: 2.36
    },
    {
        elementId: 12,
        an: 106,
        symbol: "Sg",
        name: "Seaborgio",
        am: 271,
        electrons: [2, 8, 18, 32, 32, 12, 2],
        en: null
    },

    // Grupo 7
    {
        elementId: 13,
        an: 25,
        symbol: "Mn",
        name: "Manganeso",
        am: 54.938,
        electrons: [2, 8, 13, 2],
        en: 1.55
    },
    {
        elementId: 14,
        an: 43,
        symbol: "Tc",
        name: "Tecnecio",
        am: 98.0,
        electrons: [2, 8, 18, 13, 2],
        en: 1.9
    },
    {
        elementId: 15,
        an: 75,
        symbol: "Re",
        name: "Renio",
        am: 186.21,
        electrons: [2, 8, 18, 32, 13, 2],
        en: 1.9
    },
    {
        elementId: 16,
        an: 107,
        symbol: "Bh",
        name: "Bohrio",
        am: 270,
        electrons: [2, 8, 18, 32, 32, 13, 2],
        en: null
    }
];


let elementCard = document.getElementById('elementCard');


elementsArray.forEach((element) =>{
    let elementObject = document.getElementById(`${element.elementId}`);
    
    let electronsList = ""
    for (num of element.electrons){
        electronsList += `<li>${num}</li>`
    }

    if (window.innerWidth > 900) {
        elementObject.addEventListener('mouseenter', ()=>{
            elementCard.classList.add('activated');
            elementCard.innerHTML = `
                                    <p class="atomic-number">${element.an}</p>
                                    <h4 class="symbol">${element.symbol}</h4>
                                    <p class="element-name">${element.name}</p>
                                    <p class="element-mass">${element.am}</p>
                                    <p class="element-en">${element.en}</p>
                                    <ul class="element-electrons">
                                        ${electronsList}
                                    </ul>
                                    `
        });
    } else {
        elementObject.addEventListener('click', ()=>{
            elementCard.classList.add('activated');
            elementCard.innerHTML = `
                                    <p class="atomic-number">${element.an}</p>
                                    <h4 class="symbol">${element.symbol}</h4>
                                    <p class="element-name">${element.name}</p>
                                    <p class="element-mass">${element.am}</p>
                                    <p class="element-en">${element.en}</p>
                                    <ul class="element-electrons">
                                        ${electronsList}
                                    </ul>
                                    `
        });
    }


    elementObject.innerHTML = `
                                <p class="atomic-number">${element.an}</p>
                                <h4 class="symbol">${element.symbol}</h4>
                                <p class="element-name">${element.name}</p>
                                <p class="element-mass">${element.am}</p>
                                `
})

let options = document.getElementsByClassName('option');

for (let option of options){
    option.addEventListener('click', ()=>{
        option.classList.toggle('selected');
        let groupNumber = option.innerHTML.slice(-1);
        let groupElements = document.getElementsByClassName(`g${groupNumber}`);
        for (let groupElement of groupElements){
            groupElement.classList.toggle('selected');
        }
        })
    }


let textarea = document.getElementById('textarea');

textarea.value = localStorage.getItem('text') || ""

textarea.addEventListener('input', ()=>{
    let userText = textarea.value;
    localStorage.setItem('text', userText);
})