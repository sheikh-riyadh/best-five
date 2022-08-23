

/* Clear calculate input field and set value */
function fieldClear() {
    /* Get per player cost */
    const perPlayerField = document.getElementById('per-player-field');

    /* Get ol element */
    const listContainer = document.getElementById('order-list-container');

    /* Get total players list */
    const selectedPlayerListNumber = listContainer.childNodes.length - 1;

    /* Check player is select or not */
    if (selectedPlayerListNumber === 0) {
        alert('You must select player');
        perPlayerField.value = '';
        return;
    }/* Check field is empty or not */
    else if (perPlayerField.value === '') {
        alert('Field is empty');
        return;
    } /* Check field value is negative */
    else if (perPlayerField.value < 0) {
        alert('Please insert positive number');
        perPlayerField.value = '';
        return;
    }

    /* Calculate  */
    const totalCost = parseInt(perPlayerField.value) * selectedPlayerListNumber;

    /* Set player expenses price */
    const playerExpensesPrice = document.getElementById('player-expenses-price');
    playerExpensesPrice.innerText = totalCost;
    perPlayerField.value = '';
}


/* Player-1 button */
document.getElementById('player-1-btn').addEventListener('click', function () {
    buttonDisabled('player-1-btn', 'player-1')
})

/* Player-2 button */
document.getElementById('player-2-btn').addEventListener('click', function () {
    buttonDisabled('player-2-btn', 'player-2')
})

/* Player-3 button */
document.getElementById('player-3-btn').addEventListener('click', function () {
    buttonDisabled('player-3-btn', 'player-3')
})

/* Player-4 button */
document.getElementById('player-4-btn').addEventListener('click', function () {
    buttonDisabled('player-4-btn', 'player-4')
})

/* Player-5 button */
document.getElementById('player-5-btn').addEventListener('click', function () {
    buttonDisabled('player-5-btn', 'player-5')
})

/* Player-6 button */
document.getElementById('player-6-btn').addEventListener('click', function () {
    buttonDisabled('player-6-btn', 'player-6')
})

/* Player-7 button */
document.getElementById('player-7-btn').addEventListener('click', function () {
    buttonDisabled('player-7-btn', 'player-7')
})

/* Player-8 button */
document.getElementById('player-8-btn').addEventListener('click', function () {
    buttonDisabled('player-8-btn', 'player-8')
})

/* Player-9 button */
document.getElementById('player-9-btn').addEventListener('click', function () {
    buttonDisabled('player-9-btn', 'player-9')
})

/* Calculate button */
document.getElementById('calculate-btn').addEventListener('click', function () {
    fieldClear();
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    /* Get manager field element */
    const managerFieldElement = document.getElementById('manager-field');
    /* Get coach field element */
    const coachFieldElement = document.getElementById('coach-field');

    /* Get manager field value and convert integer number */
    const managerFieldValue = parseInt(managerFieldElement.value)
    /* Get coach field value and convert integer number */
    const coachFieldValue = parseInt(coachFieldElement.value)

    /* Get ol element */
    const listContainer = document.getElementById('order-list-container');

    /* Get total players list */
    const selectedPlayerListNumber = listContainer.childNodes.length - 1;

    if (selectedPlayerListNumber === 0) {
        alert('You must select player');
        managerFieldElement.value = '';
        coachFieldElement.value = '';
        return;
    }
    else if (managerFieldElement.value === '' || coachFieldElement.value === '') {
        alert('Field empty')
        managerFieldElement.value = '';
        coachFieldElement.value = '';
        return;
    } else if (managerFieldValue < 0 || coachFieldValue < 0) {
        alert('Please insert positive number');
        managerFieldElement.value = '';
        coachFieldElement.value = '';
        return;
    }

})


