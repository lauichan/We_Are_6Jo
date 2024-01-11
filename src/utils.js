export function checkLastPage() {
  const cardCount = document.querySelectorAll("#movies > div").length;
  const morePageBtn = document.getElementById("morePage");
  if (cardCount < 20) {
    morePageBtn.disabled = true;
    morePageBtn.textContent = cardCount === 0 ? "검색결과가 없습니다." : "다음 페이지가 없습니다.";
  }
}

export function navigateToSearch(event) {
  event.preventDefault();
  const value = document.getElementById("searchInput").value;
  location.href = `search.html?query=${value}`;
}
