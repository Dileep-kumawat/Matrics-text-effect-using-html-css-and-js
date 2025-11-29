let letters = "अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
let h1 = document.querySelector("h1");
let text = h1.textContent;

let i = 0;

h1.addEventListener("mouseenter", () => {
    i = 0;
    let interId = setInterval(() => {
        let rntxt = text.split("").map((char, idx) => {
            if (idx < i) return char;
            return letters.split("")[Math.floor(Math.random() * letters.length)];
        }).join("");
        h1.textContent = rntxt;
        i += .6;
        if (rntxt === text) {
            clearInterval(interId);
        }
    }, 50);
});