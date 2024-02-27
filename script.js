document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.getElementById('loader').style.display = "flex";
  } else {
    document.getElementById('loader').style.display = "none";
  }
};
