function updateTimer() {
      let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();
      document.getElementById("timer").textContent = date + " " + time;
    }

    // Update immediately on load
    updateTimer();
    // Update every second
    setInterval(updateTimer, 1000);
