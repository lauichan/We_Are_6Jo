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

// ----------------------------------------------------------------------------------
/* 리뷰 함수 */

const paintCard = document.getElementById("detailCommentReviewWrap");
const userId = document.getElementById("detailReviewUserId");
const userPwd = document.getElementById("detailReviewUserPwd");
const userReview = document.getElementById("detailReviewContent");
const starPoint = document.getElementById("detailReviewStar");
const submitBtn = document;

// 리뷰 보내는 함수
function sendReview(e) {
  e.preventDefault();

  //리뷰 텍스트 값
  const reviewValue = {
    id: userId.value,
    pwd: userPwd.value,
    content: userReview.value,
    starPoint: star.value
  };

  // window.localStorage.setItem
}
// async function loadReview(){
//   const querySnapshot = await getItem(userId){

//     querySnapshot.forEach(window.localStorage)

//     `<li>
//       <div class="detail_comment_list_img">
//         <img src="#list_img" alt="댓글다는 사용자 사진" />
//         <div class="detail_comment_list_user">
//           <div class="detail_comment_list_user_id" id="userId">사용자 id</div>
//           <div class="detail_comment_list_user_text" id="userInputComment">사용자가 쓴 내용</div>
//           <div class="detail_comment_list_user_star" id="userInputStar">사용자의 영화 점수</div>
//         </div>
//       </div>
//     </li>`

//   }

// }

const comment1 = new ReviewValue(getItem);

async function makeReview() {}

// 입력한 정보를 가져와 추가하는 함수
