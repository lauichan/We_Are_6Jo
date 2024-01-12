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
