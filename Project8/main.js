for(const link of document.getElementsByClassName("link")){
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;
        const basePercent = 80,
              percentRange = 20,
              adjustPercent = percentRange * decimal;
        const lightBluePercent = basePercent + adjustPercent;

        link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
    }
}