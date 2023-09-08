function updateCurrentTimeAndDay() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const currentTime = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = daysOfWeek[currentTime.getUTCDay()];
  const currentUTCTime = currentTime.getTime();

  currentDayElement.textContent = currentDay;
  currentTimeElement.textContent = currentUTCTime;
}

// Update the current time and day every second
setInterval(updateCurrentTimeAndDay, 1000);

// Initial update
updateCurrentTimeAndDay();
