document.addEventListener("DOMContentLoaded", () => {
    let list, i, switching, b, shouldSwitch;
    list = document.querySelectorAll(".exam");
    switching = true;

    while (switching) {
        switching = false;

        b = list.childNodes;
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }

});