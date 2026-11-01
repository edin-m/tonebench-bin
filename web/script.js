// The macOS build has no download URL yet. Put it in the data-href attribute
// of each [data-mac-download] link in index.html (both buttons) when it
// exists; until then the buttons render as a "Coming soon" state instead of
// a link that goes nowhere.
document.querySelectorAll("[data-mac-download]").forEach((link) => {
  const url = link.dataset.href;
  if (url) {
    link.href = url;
    return;
  }
  link.classList.add("is-unavailable");
  link.setAttribute("aria-disabled", "true");
  link.title = "The macOS build isn't available yet";
  link.textContent += " (coming soon)";
  link.addEventListener("click", (event) => event.preventDefault());
});

// Discourages casual saving of the product screenshots: no right-click menu
// and no drag-out on images. This can't stop anyone determined (they can
// still read the file from the network tab), it only removes the easy paths.
document.querySelectorAll("img").forEach((img) => {
  img.draggable = false;
  img.addEventListener("contextmenu", (event) => event.preventDefault());
});
