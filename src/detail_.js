import { moviePage, loadGenre } from "./fetch.js";
const id = new URL(location.href).searchParams.get("id");
const submitBtn = document.getElementById("detailReviewSubmitBtn");
const userPwd = document.getElementById("detailReviewUserPwd");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

console.log("생성체크용", load());

/* 리뷰 함수 */

console.log(id);

// 리뷰 보내는 함수
function sendReview(e) {
  e.preventDefault();

  //리뷰 텍스트 값
  const reviewValue = {
    userName: userId.value,
    pwd: userPwd.value,
    content: userReview.value,
    star: starPoint.value,
    profile: `img`
  };

  const userReviews = JSON.parse(window.localStorage.getItem(id)) || [];
  userReviews.push(reviewValue);
  window.localStorage.setItem(id, JSON.stringify(userReviews));
}

submitBtn.addEventListener("click", sendReview);

async function loadReview() {
  const guestReview = document.getElementById("movieReview");

  userReviews.forEach((reviewEntry) => {
    const entryHtml = `
    <li>
      <div class="detail_comment_list_img">
        <img src="${reviewEntry.profile}" alt="댓글다는 사용자 사진" />
        <div class="detail_comment_list_user">
          <div class="detail_comment_list_user_id" id="userId">${reviewEntry.userName}</div>
          <div class="detail_comment_list_user_text" id="userInputComment">${reviewEntry.content}/div>
          <div class="detail_comment_list_user_star" id="userInputStar">${reviewEntry.star}</div>
        </div>
      </div>
    </li>`;
    guestReview.insertAdjacentHTML("beforeend", entryHtml);
  });
}
document.addEventListener("DOMContentLoaded", loadReview);

// 입력한 정보를 가져와 추가하는 함수
