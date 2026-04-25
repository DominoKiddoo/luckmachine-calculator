globalThis.clickWow;

function onCalculate() {
    // declarations of stuff
    const chanceplabel = document.getElementById("chancep");
    const chanceinlabel = document.getElementById("chancein");

    const inputthing = document.getElementById("cinput");
    var clicks = inputthing.value;
    globalThis.clickWow = clicks;
    const ebox = document.getElementById("error");

    // check for error
    if (clicks == "") {
        ebox.textContent = "dumbass put in a value";

        return;
    }

    // actual logic
    ebox.textContent = "";
    console.log(clicks);

    var percent =  0.9 ** clicks * 100;
    var onein = 1 / 0.9 ** clicks;
    
    chanceplabel.textContent = "Chance of surviving: " + String(percent.toFixed(2)) + "%";
    chanceinlabel.textContent = "1 in " + String(onein.toFixed(2));

    const unroundbutton = document.getElementById("therecouldpossiblybeabuttonhere");
    unroundbutton.textContent = "UNROUND THE VALUES YOU COWARD!!!!";
    unroundbutton.hidden = false;
}

function onUnRound() {
    // declarations of stuff
    const chanceplabel = document.getElementById("chancep");
    const chanceinlabel = document.getElementById("chancein");

    const inputthing = document.getElementById("cinput");
    var clicks = globalThis.clickWow;

    const ebox = document.getElementById("error2");

    // check for error
    if (clicks == "") {
        ebox.textContent = "dumbass put in a value";

        return;
    }

    // actual logic
    ebox.textContent = "";
    console.log(clicks);

    var percent =  0.9 ** clicks * 100;
    var onein = 1 / 0.9 ** clicks;
    
    chanceplabel.textContent = "Chance of surviving: " + String(percent) + "%";
    chanceinlabel.textContent = "1 in " + String(onein);

    const unroundbutton = document.getElementById("therecouldpossiblybeabuttonhere");
    unroundbutton.textContent = "UNROUND THE VALUES YOU COWARD!!!!";
    unroundbutton.hidden = false;
}