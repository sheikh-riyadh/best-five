let count = 0;
function buttonDisabled(buttonID, playerNameID) {
    /* Increase count value */
    count++;

    /* Get player name */
    const playerName1 = document.getElementById(playerNameID).innerText;

    /* Get ol element */
    const listContainer = document.getElementById('order-list-container');

    /* Checking if count greater than 5 function will be break */
    if (count > 5) {
        alert("Ooop! you can't select more than five");
        return;
    }

    /* Create new li element */
    const li = document.createElement('li');
    li.innerHTML = playerName1;
    /* added tailwind class */
    li.classList.add('mt-4');
    /* Added li value in ol element */
    listContainer.appendChild(li)

    /* Button disabled */
    const btnDisabled = document.getElementById(buttonID);
    btnDisabled.setAttribute('disabled', true)
    btnDisabled.classList.add('bg-orange-50');
    console.log(count)
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



