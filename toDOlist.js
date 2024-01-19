let arr = [];

while (true) {
    let action = prompt("What would you like to do");
    if (action === 'quit') break;
    else if (action === 'new') {
        let addl = prompt("Type new ");
        arr.push(addl);
    }
    else if (action === 'delete') {
        let ind = parseInt(prompt("Type index "));
        if (!Number.isNaN(ind)) {
            arr.splice(ind, 1);
        }
    }
    else if (action === 'list') {
        console.log("********");
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i} ":", ${arr[i]}`);
        }
        console.log("********");
    }
}