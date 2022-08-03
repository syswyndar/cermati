if (localStorage.getItem("isCookieAccepted")) {
  document.getElementById("cookie-panel").style.display = "none";
} else {
  document.getElementById("cookie-panel").style.display = "flex";
}

// if (localStorage.getItem("isJoinPanelClosed")) {
//   document.getElementById("sliding-panel").style.display = "none";
// } else {
//   document.getElementById("sliding-panel").style.animation = "showUp 2s";
//   setTimeout(() => {
//     document.getElementById("sliding-panel").style.display = "block";
//   }, 1900);
// }

const acceptedCookie = () => {
  document.getElementById("cookie-panel").style.animation = "SlideUp 1s";
  window.scrollTo(0, 0);
  setTimeout(() => {
    localStorage.setItem("isCookieAccepted", true);
    document.getElementById("cookie-panel").style.display = "none";
  }, 980);
};

const closeSlidingPanel = () => {
  document.getElementById("sliding-panel").style.animation = "SlideDown 2s";
  setTimeout(() => {
    localStorage.setItem("isJoinPanelClosed", true);
    document.getElementById("sliding-panel").style.display = "none";
  }, 1900);
};

window.addEventListener("scroll", () => {
  // get max scroll position
  let limit = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // get one of third of the max scroll position
  let third = limit / 3;

  if (window.scrollY > third) {
    if (localStorage.getItem("isJoinPanelClosed")) {
      document.getElementById("sliding-panel").style.display = "none";
    } else {
      document.getElementById("sliding-panel").style.animation = "showUp 2s";
      setTimeout(() => {
        document.getElementById("sliding-panel").style.display = "block";
      }, 1900);
    }
  }
});
