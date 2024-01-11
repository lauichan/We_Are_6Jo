import { moviePage, loadGenre } from "./fetch.js";
const id = new URL(location.href).searchParams.get("id");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

console.log("생성체크용", load());

// document.getElementById("movies").addEventListener("click", handleClickCard);

//localStorage.getItem('key');
//localStorage.getItem('username'); 예시

//localStorage.setItem('key', 'value'); 저장시 임의의 키 값
//localStorage.setItem('username', 'Alice'); 저장된 임의의 키 값

//localStorage.removeItem('key');
//localStorage.removeItem('username');

// click add

// 리뷰창을 만듭니다. <innerHTML x>
// insertAdjacentHTML

// 새로고침하더라도 없어지지 않는 방식을 구현해야함.
// ui를 생성할 때 localstorage를 get한다..
//

// ----------------------------------------------------------------------------------//
// 리뷰 함수

// 위치 ?.?
const paintCard = document.getElementById("detailCommentReviewWrap");
const userId = document.getElementById("detailReviewUserId");
const userPwd = document.getElementById("detailReviewUserPwd");
const userStar = document.getElementById("userInputStar");
const submitBtn = document.getElementById("detailReviewSubmitBtn");

let reviewStorage = [];

// 리뷰 저장하기
function savedReview() {
  localStorage.setItem("review", JSON.stringify(reviewStorage));
  console.log(reviewStorage.length);
}

// 리뷰 보내기
function sendReview(e) {
  e.preventDefault();

  //리뷰 텍스트 값
  const reviewValue = {
    id: userId.value,
    pwd: userPwd.value,
    star: userStar.value
  };
  console.log(id, pwd, star);
  // 스토리지에 추가
  reviewStorage.push(reviewValue);

  // 로컬 스토리지에 저장
  savedReview();
}

submitBtn.addEventListener("click", sendReview);
