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

async function handleClickCard(event) {
  const cardList = document.getElementById("detail_section");
}

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
const userStar = document.getElementById("detailReviewStar");
const submitBtn = document.getElementById("detailReviewSubmitBtn");
const userText = document.getElementById("detailReviewContent");
// 리뷰글들을 배열로 받자

let reviewStorage = [];

function sendReview(e) {
  e.preventDefault();

  //리뷰 텍스트 값
  const reviewValue = {
    id: userId.value,
    pwd: userPwd.value,
    comment: userText.value,
    star: userStar.value
  };

  // 스토리지에 추가
  reviewStorage.push(reviewValue.id, reviewValue.pwd, reviewValue.comment, reviewValue.star);

  // 그러면 그대로 냄둘까요.... 그건 아닌데
  paintCard.reset();

  // 로컬 스토리지에 저장
  localStorage.setItem("review", JSON.stringify(reviewStorage));
}

submitBtn.addEventListener("click", sendReview);

let getData = localStorage.getItem("review");
console.log(getData, typeof getData);

let array = [];
if (getData) {
  array = getData.split(",");
} else {
  //  console.log(`getData에 값이 없어`);
}

// console.log(array);

document.getElementById("movieReview").innerHTML += `
           <li>
           <div class="detail_comment_list_img">
             <img src="#list_img" alt="댓글다는 사용자 사진" />
             <div class="detail_comment_list_user">
               <div class="detail_comment_list_user_id" id="userId"></div>
               <div class="detail_comment_list_user_text" id="userInputComment">
                   
               </div>
               <div class="detail_comment_list_user_star" id="userInputStar"></div>
             </div>
           </div>
         </li>

   `;
