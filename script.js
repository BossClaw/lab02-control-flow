// LAB 02


function do_what_number(num, modal, modalMesg) {

    var resText = "Number (" + num + ") is A Mystery!";

    if (isNaN(num) || num.trim() == "") {
        resText = "Number (" + num + ") is Not a Number!";
    }
    else {
        let num_int = parseFloat(num);

        if (num_int == null) {
            resText = "Number (" + num_int + ") is Null!";
        }

        if (num_int > 0) {
            resText = "Number (" + num_int + ") is Positive!";
        } else if (num < 0) {
            resText = "Number (" + num_int + ") is Negative!";
        }
        else if (num_int == 0) {
            resText = "Number (" + num_int + ") is Zero!";
        }
    }

    // SET TEXT ON MODAL & DISPLAY
    modalMesg.innerText = resText;
    modal.style.display = "flex";

    console.log(resText)
}


function do_dotw(day, modal, modalMesg) {

    let resText = "Impossible!";

    switch (day) {
        case "1":
            resText = "Sunday";
            break

        case "2":
            resText = "Monday";
            break

        case "3":
            resText = "Tuesday";
            break

        case "4":
            resText = "Wednesday";
            break

        case "5":
            resText = "Thursday";
            break

        case "6":
            resText = "Friday";
            break

        case "7":
            resText = "Saturday";
            break
    }

    // SET TEXT ON MODAL & DISPLAY
    modalMesg.innerText = "Day(" + day + ") of the week is " + resText;
    modal.style.display = "flex";

    console.log(resText)
}


function w() {
    return new Promise(resolve => setTimeout(resolve, 350));
}


async function do_loops(modal, modalMesg) {

    // DISP THE START MESG
    modalMesg.innerText = "Three loops of five";
    modal.style.display = "flex";
    await w();
    modalMesg.innerText += "\n";
    await w();
    modalMesg.innerText += "\n";

    // FOR
    modalMesg.innerText += "For(";
    await w();
    modalMesg.innerText += "var;";
    await w();
    modalMesg.innerText += " condition:";
    await w();
    modalMesg.innerText += "adj)\n";
    await w();

    for (let f = 1; f <= 5; f++) {
        modalMesg.innerText += " - " + f + "\n";
        await w();
    }
    modalMesg.innerText += "\n";
    await w();
    await w();


    // WHILE
    modalMesg.innerText += "While (condition)";
    await w();
    modalMesg.innerText += " {do}\n";
    await w();
    await w();

    let f = 1;
    while (f <= 5) {
        modalMesg.innerText += " - " + f + "\n";
        f++;
        await w();
    }
    modalMesg.innerText += "\n";
    await w();
    await w();


    // DO...WHILE
    modalMesg.innerText += "Do";
    await w();
    modalMesg.innerText += "...";
    await w();
    modalMesg.innerText += "While\n";
    await w();
    await w();

    f = 1;
    do {
        modalMesg.innerText += " - " + f + "\n";
        f++;
        await w();
    } while (f <= 5);
}




async function do_break(cont_at, break_at, modal, modalMesg) {

    // MAKE INT
    const cont_at_int = parseInt(cont_at);
    const break_at_int = parseInt(break_at);

    // DISP THE START MESG
    modal.style.display = "flex";
    modalMesg.innerText = "Continuing on (" + cont_at_int + ")\n";
    modalMesg.innerText += "\n";
    modalMesg.innerText += "Breaking a loop to 14 at (" + break_at_int + ")";
    await w();
    await w();
    modalMesg.innerText += "\n";
    modalMesg.innerText += "\n";


    // INTERRUPT
    if (isNaN(break_at_int)) {
        modalMesg.innerText += "Woops! Can't Break on Not a Number!";
        return;
    }
    if (isNaN(cont_at_int)) {
        modalMesg.innerText += "Woops! Can't Continue on Not a Number!";
        return;
    }


    // FOR    
    for (let f = 1; f <= 14; f++) {


        // EVAL CONTINUE FIRST IF IT'S LOWER THAN BREAK
        if (f == cont_at_int) {
            modalMesg.innerText += " CONTINUE / SKIPPING !!!\n";
            continue
        }

        // EVAL BREAK
        if (f == break_at_int) {
            modalMesg.innerText += " BREAK !!!\n";
            break;
        }

        modalMesg.innerText += " - " + f + "\n";
        await w();
    }
}





let globalVar = "A Global Var!";


async function do_scope(modal, modalMesg) {

    // DISP THE START MESG
    modalMesg.innerText = "Scoping variables!\n\n";
    modal.style.display = "flex";
    await w();


    // GLOBAL
    modalMesg.innerText += "Global value is\n";
    await w();
    modalMesg.innerText += "[" + globalVar + "]\n\n";
    await w();
    await w();


    // INNER
    let localVar = "Local Var!";
    modalMesg.innerText += "Local Var is\n";
    await w();
    modalMesg.innerText += "[" + localVar + "]\n";
}