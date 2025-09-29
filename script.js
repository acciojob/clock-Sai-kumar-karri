  function updateTimer() {
      let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();
      document.getElementById("timer").textContent = date + " " + time;
    }

    window.onload = function() {
      updateTimer();
      setInterval(updateTimer, 1000);
    };
  
