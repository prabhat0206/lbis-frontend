const onScroll = () => {
  const navi = document.getElementById("navi");
  if (window.scrollY >= 200) {
    navi.style.position = "fixed";
    navi.classList.add("shadow-md");
  } else {
    navi.style.position = "relative";
    navi.classList.remove("shadow-md");
  }
};
