function shuffleIt() {
    let parentElem = document.getElementById("parent_elem");
    let parentChildren = parentElem.children;
    parentChildren = Array.prototype.slice.call(parentChildren);

    let originalNodesArray = parentChildren.slice(0);
    let count = originalNodesArray.length - 1;
    let randomIndex;
    while (count > 0) {
        randomIndex = Math.floor(Math.random() * count);
        [originalNodesArray[count], originalNodesArray[randomIndex]] = [originalNodesArray[randomIndex], originalNodesArray[count]];
        parentChildren[count] = originalNodesArray[count];
        parentElem.appendChild(parentChildren[count]);
        count--;
    }
}

function sortNumbers() {
    let parentElem, count, isSwitched, listItem, doSwitch;
    parentElem = document.getElementById("parent_elem");
    isSwitched = true;
    while (isSwitched) {
        isSwitched = false;
        listItem = parentElem.getElementsByTagName("LI");
        for (count = 0; count < (listItem.length - 1); count++) {
            doSwitch = false;
            if (listItem[count].innerHTML.toLowerCase() > listItem[count + 1].innerHTML.toLowerCase()) {
                doSwitch = true;
                break;
            }
        }
        if (doSwitch) {
            listItem[count].parentNode.insertBefore(listItem[count + 1], listItem[count]);
            isSwitched = true;
        }
    }
}