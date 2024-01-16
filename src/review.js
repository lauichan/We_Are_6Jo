import { movie_id } from "./fetch.js";

const form = document.getElementById("detailCommentReviewWrap");
const userId = document.getElementById("detailReviewUserId");
const userPwd = document.getElementById("detailReviewUserPwd");
const userStar = document.getElementById("detailReviewStar");
const userText = document.getElementById("detailReviewContent");

function getFormInput() {
  return {
    userName: userId.value,
    pwd: userPwd.value,
    content: userText.value,
    star: userStar.value
  };
}

export function sendReview(e) {
  e.preventDefault();
  let reviewList = {};
  if (window.localStorage.getItem(movie_id) !== null) {
    reviewList = JSON.parse(window.localStorage.getItem(movie_id));
  }
  let userKey = crypto.randomUUID();
  if (!reviewList.hasOwnProperty(userKey)) {
    reviewList[userKey] = {};
  }
  reviewList[userKey] = getFormInput();
  window.localStorage.setItem(movie_id, JSON.stringify(reviewList));
  alert("리뷰가 작성되었습니다.");
  form.reset();
  loadReview();
}

function deleteReview() {
  let reviewId = this.closest("li").id;
  let reviewList = JSON.parse(window.localStorage.getItem(movie_id));

  if (prompt("비밀번호를 입력해주세요") === reviewList[reviewId].pwd) {
    delete reviewList[reviewId];
    window.localStorage.setItem(movie_id, JSON.stringify(reviewList));
    alert("삭제되었습니다.");
  } else {
    alert("비밀번호가 올바르지 않습니다.");
  }

  loadReview();
  if (Object.keys(reviewList).length === 0) {
    window.localStorage.removeItem(movie_id);
  }
}

export function loadReview() {
  const guestReview = document.getElementById("movieReview");
  guestReview.innerHTML = "";

  const reviewList = JSON.parse(window.localStorage.getItem(movie_id)) || {};
  Object.entries(reviewList).forEach(([reviewId, review]) => {
    const entryHtml = `
    <li id=${reviewId}>
      <div class="detail_comment_list">
        <div class="detail_comment_list_user">
          <div class="detail_comment_list_user_id" id="userId">${review.userName}</div>
          <div class="detail_comment_list_user_text" id="userInputComment">${review.content}</div>
        </div>
        <div class ="starAndBtn">
          <div class="detail_comment_list_user_star" id="userInputStar">${review.star}</div>
          <button id="deleteReview" >삭제</button>
        </div>
      </div>
    </li>`;
    guestReview.insertAdjacentHTML("beforeend", entryHtml);
  });
  document.querySelectorAll("#deleteReview").forEach((button) => button.addEventListener("click", deleteReview));
}
