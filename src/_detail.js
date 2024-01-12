import { moviePage, loadGenre } from "./fetch.js";
const id = new URL(location.href).searchParams.get("id");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

async function loadAndDisplay() {
  // 리뷰 표시
  loadReview();
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

  if (window.localStorage.getItem(id) !== null) {
    xReviewList = JSON.parse(window.localStorage.getItem(id));
  }

  // 리뷰키 사용자키 유무 확인
  let userKey = "ID_" + userId.value;

  if (!xReviewList.hasOwnProperty(userKey)) {
    xReviewList[userKey] = {};
  }

  xReviewList[userKey] = userReviewInfo();

  // 사용자 리뷰 내용 저장
  window.localStorage.setItem(id, JSON.stringify(xReviewList));

  loadReview();
}
submitBtn.addEventListener("click", sendReview);

function userReviewInfo() {
  return {
    userName: userId.value,
    pwd: userPwd.value,
    content: userText.value,
    star: userStar.value
  };
}

function loadReview() {
  const guestReview = document.getElementById("movieReview");

  guestReview.innerHTML = "";
  //   guestReview = "";

  const xReviewList = JSON.parse(window.localStorage.getItem(id)) || {};

  Object.values(xReviewList).forEach((userReview) => {
    const entryHtml = `
    <li>
      <div class="detail_comment_list_img">
        <div class="detail_comment_list_user">
          <div class="detail_comment_list_user_id" id="userId">${userReview.userName}</div>
          <div class="detail_comment_list_user_text" id="userInputComment">${userReview.content}</div>
          <div class="detail_comment_list_user_star" id="userInputStar">${userReview.star}</div>
        </div>
      </div>
    </li>`;

    guestReview.insertAdjacentHTML("beforeend", entryHtml);
  });
}

// 페이지 로드시에 loadAndDisplay 함수 호출
window.addEventListener("load", loadAndDisplay);
