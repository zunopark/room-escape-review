# 방탈출 마니아를 위한 전국 방탈출 리뷰 및 검색 사이트
## 페이지 구성
- [ ] 메인
- [ ] 각 테마 페이지
- [ ] 검색 페이지
- [ ] 어드민 페이지
- [ ] 로그인 페이지
- [ ] 회원 프로필 페이지

## Container - Presenter 패턴
* Container : Request APIs.
* Presenter : UI, no logic ONLY show UI based on responses of Containers.
* Routes 폴더 아래 이름으로 서비스 페이지 구분(HOME, DETAIL, SEARCH...)

## Component 구성
1. Section : theme 컴포넌트를 여러개 포함할 수 있는 컴포넌트로 테마 R을 보여주는 역할
2. Theme : 각 방탈출 테마의 정보를 보여주는 UI
3. Header : 각 페이지로 이동할 수 있는 모든 페이지 공통 헤더
4. Comment : 후기 댓글
5. Detail : 디테일 페이지 영역에서 comment 부분을 제외하고
6. Search : 검색 컴포넌트 UI

## 서비스 핵심 API 구성
- [x] 현재 등록된 베스트 테마(사용자 평점 기반)
- [ ] 지역별 베스트 테마(사용자 평점 기반 지역별 필터링)
- [ ] 카테고리별 베스트 테마(사용자 평점 기반 카테고리 필터링)
- [ ] 전국 테마 후기 많은 순
- [ ] 전국 테마 사용자 체감 난이도 순
- [ ] 전국 테마 사용자 체감 공포도 순
- [ ] 테마 이름/지역/방탈출 카페 이름 통합 검색

## 기타 필수 기능
- [ ] 회원가입(카카오, 네이버, 구글)
- [ ] 방탈출 테마 후기 / 카페 후기 -> 코멘트 댓글 남기기
- [ ] 각 유저별 방 클리어 개수, 후기 남긴 순으로 유저 등급 설정
- [ ] 각 날짜별 해당하는 테마 예약 현황 알려주기 -> 추가 기능으로 넣기

## 유저 등급(후기 남긴 것을 해당 테마를 클리어했다고 판단)
1. ~10방 : 뉴비
2. 11방 ~ 30방 : 초보 탈출러
3. 31방 ~ 50방 : 중수 탈출러
4. 51방 ~ 80방 : 고수 탈출러
5. 81방 ~ 100방 : 전문 탈출러
5. 101방 ~ : 전설 탈출러

### 유저 프로필 API
1. 해당 유저가 몇방을 클리어 했는지
2. 해당 유저가 클리어 한 방의 평균 난이도
3. 해당 유저가 가장 많이 즐긴 카테고리