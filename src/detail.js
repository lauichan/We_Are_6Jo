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
let webParseJSON;
let webStoreData = [];

let currentId = 0;

// 순차적으로 증가하는 ID 생성 함수
function generateSequentialId() {
  currentId++;
  return currentId.toString();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 키 : 값 으로 이루어진 데이터 webStoreObj 준비
  const webStoreObj = {
    countId: generateSequentialId(),
    Id: userId.value,
    Pwd: userPwd.value,
    text: userText.value,
    star: userStar.value,
    profile: `img`
  };

  console.log(webStoreObj);

  // 로컬스트리지에서 받은 문자열 데이터를 JSON으로 변환하여 저장
  webParseJSON = JSON.parse(localStorage.getItem("review"));
  webStoreData.push(webParseJSON);

  paintCard.reset();

  localStorage.setItem("review", JSON.stringify(webStoreObj));
});

let jsonParseData = JSON.parse(localStorage.getItem("review"));

console.log(jsonParseData);

let text = `
            <li class= "review__page">
            <div class="detail_comment_list_img">
              <img src="#list_img" alt="댓글다는 사용자 사진" />
              <div class="detail_comment_list_user">
                <div class="detail_comment_list_user_id" id="userId">${jsonParseData.Id}</div>
                <div class="detail_comment_list_user_text" id="userInputComment">
                   ${jsonParseData.text}
                </div>
                <div class="detail_comment_list_user_star" id="userInputStar">${jsonParseData.star}</div>
                <button  id="removeData"  data-code-id= "${jsonParseData.countId}"  >삭제</button>
              </div>
            </div>
         </li>

   `;

document.getElementById("movieReview").insertAdjacentHTML("beforeend", text);

// removeData에  데이터를 랜덤으로 부여한다.
// var codeId = document.getElementById("removebtn").dataset.codeId;
// console.log(codeId);
// removeData 버튼에 부여된 랜덤 데이터에 접근한다.
// 해당 HTML 요소를 찾아  제거한다.

document.getElementById("removeData").addEventListener("click", (event) => {
  const codeId = event.target.dataset.codeId;
  localStorage.removeItem("review");

  const reviewPage = event.target.closest(".review__page");
  reviewPage.remove();
});
