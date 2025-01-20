document.querySelectorAll("a").forEach(function (elem) {
  if (elem.getAttribute("href") != "mailto:azizul.hazim.00@gmail.com") {
    elem.setAttribute("target", "_blank");
    elem.setAttribute("rel", "noopener");
  }
});
