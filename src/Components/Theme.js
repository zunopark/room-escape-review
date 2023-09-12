import { Link } from "react-router-dom";
import defaultImage from "../Assets/noImage.png"

const testTheme = {
    id : 1,
    escapeCafeId : 3,
    title : "콜러",
    description : "나는 기억을 잃었다.",
    themeUrl : "https://www.zerogangnam.com/storage/jsU0eVFchFzKRGTR7k63ia6eVUFviJ2mdFmEt932.jpg", // 변동 가능성이 있어 onError 처리 필수 themeUrl 저장 -> 없으면 DB 조회 이미지?
    siteLevel : 5,
    siteHorror : 5,
    siteTime : 75,
    category : "공포", // 카테고리는 개발자 협의하여 정해놓은 것들 중에서만 정함(사이트 정보 말고)
    minimumUser : 0, // 0인 경우 최소인원 없는 것, 1 이상은 최소인원 노출
    userMachineryRate : 50, // 기계장치 비율만 저장하면 자물쇠는 자동으로 퍼센트 계산
    userLevel : 0, // 유저 후기 등록 시 체감 난이도 5만점
    userHorror : 0, // 유저 후기 등록 시 체감 공포도 5만점
    userActive : 0, // 유저 후기 등록 시 체감 활동성 5만점
    userSize : 0, // 유저 후기 등록 시 체감 테마 내부 크기 5만점
    userRating : 7, // 유저 평점(최대 10점 만점, 별 5개로 부여?)
}

const testEscapeCafe = {
  id : 3,
  name : "제로월드 강남점",
  loaction : "서울특별시 서초구 서초대로73길 40.(서초동, 강남오피스텔) 지하1층",
  siteUrl : "https://www.zerogangnam.com",
  reservationUrl : "https://www.zerogangnam.com/reservation",
  number : "02-599-1661",
  region : "강남" // 미리 정해둔 지역별 카테고리
}

const testUser = {
  id : 1,
  userNickName : 1,
  kakaoAuth : "",
  naverAuth : "",
}

const testComment = {
  id : 1,
  userId : 1, // 후기 쓴 유저
  themeId : 1, // 후기 남긴 테마
  comment : "너무 재밌었습니다. 아주 좋은 테마였어요", // 최대 글자수 제한으로 영화평 같은 느낌의 후기를 지향
  rating : 10, // 유저 평점
  horror : 5,
  active : 5,
  machineryRate : 4,
  size : 5,
  level : 5,
  date : "2023-08-04 17:00", // 후기 남긴 시간
  isSpoiler : false, // 스포일러 신고 여부, 신고가 들어왔다면 해당 후기 코멘트가 true 로 변하고 어드민 페이지에서 코멘트 중 true 것들 "스포일러 댓글로 내가 직접 변경"
}

const Theme = ({ item }) => {
  const handleImageOnError = (e) => {
    e.target.src = defaultImage;
  }

    return (
        <Link to={`/theme/${item.id}`}>
        <div className="theme-container">
          <div className="image-container">
            <img
            className="theme-image"
            alt="theme"
            src={
              item.themeUrl
                  ? item.themeUrl
                  : require("../Assets/noImage.png")
              }
            onError={handleImageOnError}
            />
            <span className="theme-rating">{item.title}</span>
            <span className="theme-rating">{item.description}</span>
            <span className="theme-rating">{item.userRating}</span>
          </div>
        </div>
      </Link>
    )
}

export default Theme