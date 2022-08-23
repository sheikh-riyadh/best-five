

let count = 0;
/* Set value and button disabled */
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
}