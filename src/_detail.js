import { moviePage, loadGenre } from "./fetch.js";
const id = new URL(location.href).searchParams.get("id");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

console.log("생성체크용", load());

const paintCard = document.getElementById("detailCommentReviewWrap");
const userId = document.getElementById("detailReviewUserId");
const userPwd = document.getElementById("detailReviewUserPwd");
const userStar = document.getElementById("detailReviewStar");
const submitBtn = document.getElementById("detailReviewSubmitBtn");
const userText = document.getElementById("detailReviewContent");

let reviewStorage = [];

console.log("ddddd");

function sendReview(e) {
  e.preventDefault();

  // 리뷰키 유무 확인
  let xReviewList = {};

  if (window.localStorage.getItem("reviewList") !== null) {
    xReviewList = JSON.parse(window.localStorage.getItem("reviewList"));
  }

  // 리뷰키 사용자키 유무 확인
  let userKey = "ID_" + userId.value;

  if (!xReviewList.hasOwnProperty(userKey)) {
    xReviewList[userKey] = {};
  }

  xReviewList[userKey] = userReviewInfo();

  // 사용자 리뷰 내용 저장
  window.localStorage.setItem("reviewList", JSON.stringify(xReviewList));

  reviewForm();
}
submitBtn.addEventListener("click", sendReview);

function userReviewInfo() {
  return {
    userName: userId.value,
    pwd: userPwd.value,
    content: userText.value,
    star: userStar.value,
    profile: `img`
  };
}

function reviewForm() {
  const userForm = document.getElementById("movieReview");

  userInputReview.forEach((UserInput) => {
    const inputHTML = `
        <li>
          <div class="detail_comment_list_img">
              <img src="${UserInput.profile}" alt="댓글다는 사용자 사진" />
              <div class="detail_comment_list_user">
              <div class="detail_comment_list_user_id" id="userId">${UserInput.userName}</div>
              <div class="detail_comment_list_user_text" id="userInputComment">${UserInput.content}
              </div>
              <div class="detail_comment_list_user_star" id="userInputStar">${UserInput.star}</div>
              </div>
          </div>
       </li>`;
    userForm.insertAdjacentHTML("beforeend", inputHTML);
  });
}

document.addEventListener("DOMContentLoaded", reviewForm);
