export function checkLastPage() {
  if (document.querySelectorAll("#movies > div").length < 20) {
    console.log("none");
    document.getElementById("morePage").style.display = "none";
  }
}

export function navigateToSearch(event) {
  event.preventDefault();
  const value = document.getElementById("searchInput").value;
  location.href = `search.html?query=${value}`;
}
