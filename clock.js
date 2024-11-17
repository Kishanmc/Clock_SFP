// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementsByClassName("date")[0].textContent=`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`
    document.getElementsByClassName("hours")[0].textContent = ` ${hours}`;
    document.getElementsByClassName("minute")[0].textContent = ` ${minutes}`;
    document.getElementsByClassName("seconds")[0].textContent = ` ${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display immediately
updateClock();
