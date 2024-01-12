import { moviePage, loadGenre } from "./fetch.js";
const id = new URL(location.href).searchParams.get("id");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

console.log("생성체크용", load());

// const paintCard = document.getElementById("detailCommentReviewWrap");
const userId = document.getElementById("detailReviewUserId");
const userPwd = document.getElementById("detailReviewUserPwd");
const userStar = document.getElementById("detailReviewStar");
const submitBtn = document.getElementById("detailReviewSubmitBtn");
const userText = document.getElementById("detailReviewContent");

// let reviewStorage = [];

console.log("ddddd");

function sendReview(e) {
  e.preventDefault();

  // 리뷰키 유무 확인
  let ReviewList = {};

  if (window.localStorage.getItem(id) !== null) {
    ReviewList = JSON.parse(window.localStorage.getItem(id));
  }

  // 리뷰키 사용자키 유무 확인
  let userKey = "ID_" + userId.value;
  console.log(userKey);
  if (!ReviewList.hasOwnProperty(userKey)) {
    ReviewList[userKey] = {};
  }

  ReviewList[userKey] = userReviewInfo();

  // 사용자 리뷰 내용 저장
  window.localStorage.setItem(id, JSON.stringify(ReviewList));

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

  const ReviewList = JSON.parse(window.localStorage.getItem(id)) || {};
  console.log(ReviewList);
  Object.values(ReviewList).forEach((userReview) => {
    const entryHtml = `
    <li id=>
      <div class="detail_comment_list_img">
        <div class="detail_comment_list_user">
          <div class="detail_comment_list_user_id" id="userId">${userReview.userName}</div>
          <div class="detail_comment_list_user_text" id="userInputComment">${userReview.content}</div>
          
          <div class="detail_comment_list_user_star" id="userInputStar">${userReview.star}</div>
        </div>
        <button id="deleteReview" >삭제</button>
      </div>
    </li>`;

    guestReview.insertAdjacentHTML("beforeend", entryHtml);
  });
}

function deleteReview() {
  console.log("가나다라");
  window.localStorage.getItem(id.userKey);
  console.log("키", window.localStorage.getItem(id.userKey));
  loadReview();
}

// 페이지 로드시에 loadAndDisplay 함수 호출
window.addEventListener("load", loadReview);
document.getElementById("deleteReview").addEventListener("click", deleteReview);
