// build-pages.js
const fs = require('fs');
const path = require('path');

// 🌟 전체 지역 데이터 (시/구 + 동 URL 키)
const regionData = {
  seoul: [
    {
      n: "강남구", k: "seoul-gangnam",
      dongs: [
        { n: "역삼동", k: "seoul-gangnam-yeoksam" }, { n: "논현동", k: "seoul-gangnam-nonhyeon" },
        { n: "삼성동", k: "seoul-gangnam-samseong" }, { n: "대치동", k: "seoul-gangnam-daechi" },
        { n: "신사동", k: "seoul-gangnam-sinsa" }, { n: "청담동", k: "seoul-gangnam-cheongdam" },
        { n: "압구정동", k: "seoul-gangnam-apgujeong" }, { n: "개포동", k: "seoul-gangnam-gaepo" },
        { n: "도곡동", k: "seoul-gangnam-dogok" }, { n: "일원동", k: "seoul-gangnam-ilwon" },
        { n: "수서동", k: "seoul-gangnam-suseo" }
      ]
    },
    {
      n: "강동구", k: "seoul-gangdong",
      dongs: [
        { n: "천호동", k: "seoul-gangdong-cheonho" }, { n: "길동", k: "seoul-gangdong-gil" },
        { n: "명일동", k: "seoul-gangdong-myeongil" }, { n: "고덕동", k: "seoul-gangdong-godeok" },
        { n: "암사동", k: "seoul-gangdong-amsa" }, { n: "성내동", k: "seoul-gangdong-seongnae" },
        { n: "둔촌동", k: "seoul-gangdong-dunchon" }, { n: "강일동", k: "seoul-gangdong-gangil" }
      ]
    },
    {
      n: "강북구", k: "seoul-gangbuk",
      dongs: [
        { n: "수유동", k: "seoul-gangbuk-suyu" }, { n: "미아동", k: "seoul-gangbuk-mia" },
        { n: "번동", k: "seoul-gangbuk-beon" }, { n: "우이동", k: "seoul-gangbuk-ui" }
      ]
    },
    {
      n: "강서구", k: "seoul-gangseo",
      dongs: [
        { n: "화곡동", k: "seoul-gangseo-hwagok" }, { n: "가양동", k: "seoul-gangseo-gayang" },
        { n: "마곡동", k: "seoul-gangseo-magok" }, { n: "등촌동", k: "seoul-gangseo-deungchon" },
        { n: "발산동", k: "seoul-gangseo-balsan" }, { n: "방화동", k: "seoul-gangseo-banghwa" },
        { n: "공항동", k: "seoul-gangseo-gonghang" }, { n: "염창동", k: "seoul-gangseo-yeomchang" }
      ]
    },
    {
      n: "관악구", k: "seoul-gwanak",
      dongs: [
        { n: "신림동", k: "seoul-gwanak-sillim" }, { n: "봉천동", k: "seoul-gwanak-bongcheon" },
        { n: "낙성대동", k: "seoul-gwanak-nakseongdae" }, { n: "남현동", k: "seoul-gwanak-namhyeon" },
        { n: "보라매동", k: "seoul-gwanak-boramae" }
      ]
    },
    {
      n: "광진구", k: "seoul-gwangjin",
      dongs: [
        { n: "자양동", k: "seoul-gwangjin-jayang" }, { n: "화양동", k: "seoul-gwangjin-hwayang" },
        { n: "구의동", k: "seoul-gwangjin-gui" }, { n: "군자동", k: "seoul-gwangjin-gunja" },
        { n: "중곡동", k: "seoul-gwangjin-junggok" }, { n: "광장동", k: "seoul-gwangjin-gwangjang" }
      ]
    },
    {
      n: "구로구", k: "seoul-guro",
      dongs: [
        { n: "구로동", k: "seoul-guro-guro" }, { n: "신도림동", k: "seoul-guro-sindorim" },
        { n: "가리봉동", k: "seoul-guro-garibong" }, { n: "개봉동", k: "seoul-guro-gaebong" },
        { n: "오류동", k: "seoul-guro-oryu" }, { n: "고척동", k: "seoul-guro-gocheok" }
      ]
    },
    {
      n: "금천구", k: "seoul-geumcheon",
      dongs: [
        { n: "가산동", k: "seoul-geumcheon-gasan" }, { n: "독산동", k: "seoul-geumcheon-doksan" },
        { n: "시흥동", k: "seoul-geumcheon-siheung" }
      ]
    },
    {
      n: "노원구", k: "seoul-nowon",
      dongs: [
        { n: "상계동", k: "seoul-nowon-sanggye" }, { n: "중계동", k: "seoul-nowon-junggye" },
        { n: "하계동", k: "seoul-nowon-hagye" }, { n: "월계동", k: "seoul-nowon-wolgye" },
        { n: "공릉동", k: "seoul-nowon-gongneung" }
      ]
    },
    {
      n: "도봉구", k: "seoul-dobong",
      dongs: [
        { n: "쌍문동", k: "seoul-dobong-ssangmun" }, { n: "방학동", k: "seoul-dobong-banghak" },
        { n: "창동", k: "seoul-dobong-chang" }, { n: "도봉동", k: "seoul-dobong-dobong" }
      ]
    },
    {
      n: "동대문구", k: "seoul-dongdaemun",
      dongs: [
        { n: "장안동", k: "seoul-dongdaemun-jangan" }, { n: "답십리동", k: "seoul-dongdaemun-dapsimni" },
        { n: "전농동", k: "seoul-dongdaemun-jeonnong" }, { n: "용두동", k: "seoul-dongdaemun-yongdu" },
        { n: "제기동", k: "seoul-dongdaemun-jegi" }, { n: "이문동", k: "seoul-dongdaemun-imun" },
        { n: "휘경동", k: "seoul-dongdaemun-hwigyeong" }
      ]
    },
    {
      n: "동작구", k: "seoul-dongjak",
      dongs: [
        { n: "사당동", k: "seoul-dongjak-sadang" }, { n: "상도동", k: "seoul-dongjak-sangdo" },
        { n: "노량진동", k: "seoul-dongjak-noryangjin" }, { n: "흑석동", k: "seoul-dongjak-heukseok" },
        { n: "대방동", k: "seoul-dongjak-daebang" }, { n: "신대방동", k: "seoul-dongjak-sindaebang" }
      ]
    },
    {
      n: "마포구", k: "seoul-mapo",
      dongs: [
        { n: "서교동", k: "seoul-mapo-seogyo" }, { n: "동교동", k: "seoul-mapo-donggyo" },
        { n: "합정동", k: "seoul-mapo-hapjeong" }, { n: "망원동", k: "seoul-mapo-mangwon" },
        { n: "연남동", k: "seoul-mapo-yeonnam" }, { n: "공덕동", k: "seoul-mapo-gongdeok" },
        { n: "아현동", k: "seoul-mapo-ahyeon" }, { n: "상암동", k: "seoul-mapo-sangam" }
      ]
    },
    {
      n: "서대문구", k: "seoul-seodaemun",
      dongs: [
        { n: "신촌동", k: "seoul-seodaemun-sinchon" }, { n: "창천동", k: "seoul-seodaemun-changcheon" },
        { n: "연희동", k: "seoul-seodaemun-yeonhui" }, { n: "홍제동", k: "seoul-seodaemun-hongje" },
        { n: "남가좌동", k: "seoul-seodaemun-namgajwa" }, { n: "북가좌동", k: "seoul-seodaemun-bukgajwa" }
      ]
    },
    {
      n: "서초구", k: "seoul-seocho",
      dongs: [
        { n: "서초동", k: "seoul-seocho-seocho" }, { n: "반포동", k: "seoul-seocho-banpo" },
        { n: "방배동", k: "seoul-seocho-bangbae" }, { n: "양재동", k: "seoul-seocho-yangjae" },
        { n: "잠원동", k: "seoul-seocho-jamwon" }, { n: "우면동", k: "seoul-seocho-umyeon" }
      ]
    },
    {
      n: "성동구", k: "seoul-seongdong",
      dongs: [
        { n: "성수동", k: "seoul-seongdong-seongsu" }, { n: "왕십리동", k: "seoul-seongdong-wangsimni" },
        { n: "행당동", k: "seoul-seongdong-haengdang" }, { n: "금호동", k: "seoul-seongdong-geumho" },
        { n: "옥수동", k: "seoul-seongdong-oksu" }, { n: "마장동", k: "seoul-seongdong-majang" }
      ]
    },
    {
      n: "성북구", k: "seoul-seongbuk",
      dongs: [
        { n: "길음동", k: "seoul-seongbuk-gireum" }, { n: "돈암동", k: "seoul-seongbuk-donam" },
        { n: "안암동", k: "seoul-seongbuk-anam" }, { n: "정릉동", k: "seoul-seongbuk-jeongneung" },
        { n: "석관동", k: "seoul-seongbuk-seokgwan" }, { n: "종암동", k: "seoul-seongbuk-jongam" }
      ]
    },
    {
      n: "송파구", k: "seoul-songpa",
      dongs: [
        { n: "잠실동", k: "seoul-songpa-jamsil" }, { n: "가락동", k: "seoul-songpa-garak" },
        { n: "문정동", k: "seoul-songpa-munjeong" }, { n: "방이동", k: "seoul-songpa-bangi" },
        { n: "석촌동", k: "seoul-songpa-seokchon" }, { n: "삼전동", k: "seoul-songpa-samjeon" },
        { n: "송파동", k: "seoul-songpa-songpa" }, { n: "오금동", k: "seoul-songpa-ogeum" }
      ]
    },
    {
      n: "양천구", k: "seoul-yangcheon",
      dongs: [
        { n: "목동", k: "seoul-yangcheon-mok" }, { n: "신정동", k: "seoul-yangcheon-sinjeong" },
        { n: "신월동", k: "seoul-yangcheon-sinwol" }
      ]
    },
    {
      n: "영등포구", k: "seoul-yeongdeungpo",
      dongs: [
        { n: "여의도동", k: "seoul-yeongdeungpo-yeouido" }, { n: "영등포동", k: "seoul-yeongdeungpo-yeongdeungpo" },
        { n: "당산동", k: "seoul-yeongdeungpo-dangsan" }, { n: "문래동", k: "seoul-yeongdeungpo-mullae" },
        { n: "양평동", k: "seoul-yeongdeungpo-yangpyeong" }, { n: "신길동", k: "seoul-yeongdeungpo-singil" }
      ]
    },
    {
      n: "용산구", k: "seoul-yongsan",
      dongs: [
        { n: "이태원동", k: "seoul-yongsan-itaewon" }, { n: "한남동", k: "seoul-yongsan-hannam" },
        { n: "용산동", k: "seoul-yongsan-yongsan" }, { n: "청파동", k: "seoul-yongsan-cheongpa" },
        { n: "효창동", k: "seoul-yongsan-hyochang" }, { n: "이촌동", k: "seoul-yongsan-ichon" }
      ]
    },
    {
      n: "은평구", k: "seoul-eunpyeong",
      dongs: [
        { n: "불광동", k: "seoul-eunpyeong-bulgwang" }, { n: "갈현동", k: "seoul-eunpyeong-galhyeon" },
        { n: "응암동", k: "seoul-eunpyeong-eungam" }, { n: "연신내", k: "seoul-eunpyeong-yeonsinnae" },
        { n: "녹번동", k: "seoul-eunpyeong-nokbeon" }, { n: "대조동", k: "seoul-eunpyeong-daejo" }
      ]
    },
    {
      n: "종로구", k: "seoul-jongno",
      dongs: [
        { n: "종로", k: "seoul-jongno-jongno" }, { n: "혜화동", k: "seoul-jongno-hyehwa" },
        { n: "명륜동", k: "seoul-jongno-myeongnyun" }, { n: "평창동", k: "seoul-jongno-pyeongchang" }
      ]
    },
    {
      n: "중구", k: "seoul-junggu",
      dongs: [
        { n: "명동", k: "seoul-junggu-myeongdong" }, { n: "을지로", k: "seoul-junggu-euljiro" },
        { n: "충무로", k: "seoul-junggu-chungmuro" }, { n: "신당동", k: "seoul-junggu-sindang" }
      ]
    },
    {
      n: "중랑구", k: "seoul-jungnang",
      dongs: [
        { n: "면목동", k: "seoul-jungnang-myeonmok" }, { n: "상봉동", k: "seoul-jungnang-sangbong" },
        { n: "중화동", k: "seoul-jungnang-junghwa" }, { n: "묵동", k: "seoul-jungnang-muk" },
        { n: "망우동", k: "seoul-jungnang-mangu" }, { n: "신내동", k: "seoul-jungnang-sinnae" }
      ]
    }
  ],
  gyeonggi: [
    {
      n: "수원시", k: "gyeonggi-suwon",
      dongs: [
        { n: "인계동", k: "gyeonggi-suwon-ingye" }, { n: "매탄동", k: "gyeonggi-suwon-maetan" },
        { n: "영통동", k: "gyeonggi-suwon-yeongtong" }, { n: "광교동", k: "gyeonggi-suwon-gwanggyo" },
        { n: "권선동", k: "gyeonggi-suwon-gwonseon" }, { n: "정자동", k: "gyeonggi-suwon-jeongja" }
      ]
    },
    {
      n: "성남시", k: "gyeonggi-seongnam",
      dongs: [
        { n: "서현동", k: "gyeonggi-seongnam-seohyeon" }, { n: "야탑동", k: "gyeonggi-seongnam-yatap" },
        { n: "정자동", k: "gyeonggi-seongnam-jeongja" }, { n: "판교동", k: "gyeonggi-seongnam-pangyo" },
        { n: "신흥동", k: "gyeonggi-seongnam-sinheung" }
      ]
    },
    {
      n: "고양시", k: "gyeonggi-goyang",
      dongs: [
        { n: "장항동", k: "gyeonggi-goyang-janghang" }, { n: "백석동", k: "gyeonggi-goyang-baekseok" },
        { n: "마두동", k: "gyeonggi-goyang-madu" }, { n: "화정동", k: "gyeonggi-goyang-hwajeong" },
        { n: "행신동", k: "gyeonggi-goyang-haengsin" }
      ]
    },
    {
      n: "용인시", k: "gyeonggi-yongin",
      dongs: [
        { n: "풍덕천동", k: "gyeonggi-yongin-pungdeokcheon" }, { n: "죽전동", k: "gyeonggi-yongin-jukjeon" },
        { n: "보정동", k: "gyeonggi-yongin-bojeong" }, { n: "신갈동", k: "gyeonggi-yongin-singal" },
        { n: "역북동", k: "gyeonggi-yongin-yeokbuk" }
      ]
    },
    {
      n: "부천시", k: "gyeonggi-bucheon",
      dongs: [
        { n: "중동", k: "gyeonggi-bucheon-jung" }, { n: "상동", k: "gyeonggi-bucheon-sang" },
        { n: "심곡동", k: "gyeonggi-bucheon-simgok" }, { n: "소사동", k: "gyeonggi-bucheon-sosa" },
        { n: "역곡동", k: "gyeonggi-bucheon-yeokgok" }
      ]
    },
    {
      n: "안산시", k: "gyeonggi-ansan",
      dongs: [
        { n: "중앙동", k: "gyeonggi-ansan-jungang" }, { n: "고잔동", k: "gyeonggi-ansan-gojan" },
        { n: "초지동", k: "gyeonggi-ansan-choji" }, { n: "본오동", k: "gyeonggi-ansan-bono" }
      ]
    },
    {
      n: "안양시", k: "gyeonggi-anyang",
      dongs: [
        { n: "평촌동", k: "gyeonggi-anyang-pyeongchon" }, { n: "범계동", k: "gyeonggi-anyang-beomgye" },
        { n: "인덕원", k: "gyeonggi-anyang-indeogwon" }, { n: "비산동", k: "gyeonggi-anyang-bisan" }
      ]
    },
    {
      n: "남양주시", k: "gyeonggi-namyangju",
      dongs: [
        { n: "다산동", k: "gyeonggi-namyangju-dasan" }, { n: "별내동", k: "gyeonggi-namyangju-byeollae" },
        { n: "호평동", k: "gyeonggi-namyangju-hopyeong" }, { n: "평내동", k: "gyeonggi-namyangju-pyeongnae" }
      ]
    },
    {
      n: "화성시", k: "gyeonggi-hwaseong",
      dongs: [
        { n: "동탄동", k: "gyeonggi-hwaseong-dongtan" }, { n: "병점동", k: "gyeonggi-hwaseong-byeongjeom" },
        { n: "향남읍", k: "gyeonggi-hwaseong-hyangnam" }, { n: "봉담읍", k: "gyeonggi-hwaseong-bongdam" }
      ]
    },
    {
      n: "평택시", k: "gyeonggi-pyeongtaek",
      dongs: [
        { n: "고덕동", k: "gyeonggi-pyeongtaek-godeok" }, { n: "비전동", k: "gyeonggi-pyeongtaek-bijeon" },
        { n: "합정동", k: "gyeonggi-pyeongtaek-hapjeong" }, { n: "송탄동", k: "gyeonggi-pyeongtaek-songtan" }
      ]
    },
    {
      n: "의정부시", k: "gyeonggi-uijeongbu",
      dongs: [
        { n: "의정부동", k: "gyeonggi-uijeongbu-uijeongbu" }, { n: "호원동", k: "gyeonggi-uijeongbu-howon" },
        { n: "민락동", k: "gyeonggi-uijeongbu-millak" }, { n: "신곡동", k: "gyeonggi-uijeongbu-singok" }
      ]
    },
    {
      n: "시흥시", k: "gyeonggi-siheung",
      dongs: [
        { n: "정왕동", k: "gyeonggi-siheung-jeongwang" }, { n: "배곧동", k: "gyeonggi-siheung-baegot" },
        { n: "은계동", k: "gyeonggi-siheung-eungye" }, { n: "목감동", k: "gyeonggi-siheung-mokgam" }
      ]
    },
    {
      n: "파주시", k: "gyeonggi-paju",
      dongs: [
        { n: "야당동", k: "gyeonggi-paju-yadang" }, { n: "와동동", k: "gyeonggi-paju-wadong" },
        { n: "금촌동", k: "gyeonggi-paju-geumchon" }, { n: "운정동", k: "gyeonggi-paju-unjeong" }
      ]
    },
    {
      n: "광명시", k: "gyeonggi-gwangmyeong",
      dongs: [
        { n: "철산동", k: "gyeonggi-gwangmyeong-cheolsan" }, { n: "하안동", k: "gyeonggi-gwangmyeong-haan" },
        { n: "일직동", k: "gyeonggi-gwangmyeong-iljik" }, { n: "소하동", k: "gyeonggi-gwangmyeong-soha" }
      ]
    },
    {
      n: "김포시", k: "gyeonggi-gimpo",
      dongs: [
        { n: "구래동", k: "gyeonggi-gimpo-gurae" }, { n: "장기동", k: "gyeonggi-gimpo-janggi" },
        { n: "운양동", k: "gyeonggi-gimpo-unyang" }, { n: "사우동", k: "gyeonggi-gimpo-sau" }
      ]
    },
    {
      n: "하남시", k: "gyeonggi-hanam",
      dongs: [
        { n: "미사동", k: "gyeonggi-hanam-misa" }, { n: "신장동", k: "gyeonggi-hanam-sinjang" },
        { n: "위례동", k: "gyeonggi-hanam-wirye" }, { n: "덕풍동", k: "gyeonggi-hanam-deokpung" }
      ]
    }
  ],
  incheon: [
    {
      n: "부평구", k: "incheon-bupyeong",
      dongs: [
        { n: "부평동", k: "incheon-bupyeong-bupyeong" }, { n: "삼산동", k: "incheon-bupyeong-samsan" },
        { n: "청천동", k: "incheon-bupyeong-cheongcheon" }, { n: "갈산동", k: "incheon-bupyeong-galsan" }
      ]
    },
    {
      n: "남동구", k: "incheon-namdong",
      dongs: [
        { n: "구월동", k: "incheon-namdong-guwol" }, { n: "간석동", k: "incheon-namdong-ganseok" },
        { n: "논현동", k: "incheon-namdong-nonhyeon" }, { n: "서창동", k: "incheon-namdong-seochang" }
      ]
    },
    {
      n: "서구", k: "incheon-seogu",
      dongs: [
        { n: "청라동", k: "incheon-seogu-cheongna" }, { n: "루원시티", k: "incheon-seogu-luwon" },
        { n: "검암동", k: "incheon-seogu-geomam" }, { n: "당하동", k: "incheon-seogu-dangha" }
      ]
    },
    {
      n: "연수구", k: "incheon-yeonsu",
      dongs: [
        { n: "송도동", k: "incheon-yeonsu-songdo" }, { n: "연수동", k: "incheon-yeonsu-yeonsu" },
        { n: "동춘동", k: "incheon-yeonsu-dongchun" }
      ]
    },
    {
      n: "미추홀구", k: "incheon-michuhol",
      dongs: [
        { n: "주안동", k: "incheon-michuhol-juan" }, { n: "도화동", k: "incheon-michuhol-dohwa" },
        { n: "용현동", k: "incheon-michuhol-yonghyeon" }
      ]
    },
    {
      n: "계양구", k: "incheon-gyeyang",
      dongs: [
        { n: "계산동", k: "incheon-gyeyang-gyesan" }, { n: "작전동", k: "incheon-gyeyang-jakjeon" },
        { n: "효성동", k: "incheon-gyeyang-hyoseong" }
      ]
    },
    {
      n: "중구", k: "incheon-junggu",
      dongs: [
        { n: "영종동", k: "incheon-junggu-yeongjong" }, { n: "운서동", k: "incheon-junggu-unseo" },
        { n: "하늘도시", k: "incheon-junggu-haneul" }
      ]
    }
  ],
  cheonan: [
    {
      n: "천안시 서북구", k: "cheonan-seobuk",
      dongs: [
        { n: "두정동", k: "cheonan-seobuk-dujeong" }, { n: "불당동", k: "cheonan-seobuk-buldang" },
        { n: "성정동", k: "cheonan-seobuk-seongjeong" }, { n: "백석동", k: "cheonan-seobuk-baekseok" },
        { n: "쌍용동", k: "cheonan-seobuk-ssangyong" }
      ]
    },
    {
      n: "천안시 동남구", k: "cheonan-dongnam",
      dongs: [
        { n: "신부동", k: "cheonan-dongnam-sinbu" }, { n: "원성동", k: "cheonan-dongnam-wonseong" },
        { n: "청수동", k: "cheonan-dongnam-cheongsu" }, { n: "청당동", k: "cheonan-dongnam-cheongdang" }
      ]
    }
  ]
};

// HTML 템플릿 생성기
function generateHtml(locTitle, locKey, parentKey, isDong = false) {
  const metaDesc = isDong
    ? `${locTitle} 24시 출장마사지, 홈타이, 방문안마 추천 제휴 업체 안내. 자택, 호텔, 오피스텔 25분 내 빠른 방문!`
    : `${locTitle} 전지역 24시 출장마사지, 홈타이, 방문안마 추천 제휴 업체. 25분 내 신속 힐링 케어!`;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <title>${locTitle} 출장마사지 24시 홈타이 | 바디로그 (BodyLog)</title>
  <meta name="description" content="${metaDesc}">
  <meta name="keywords" content="${locTitle} 출장마사지, ${locTitle} 홈타이, ${locTitle} 방문안마, ${locTitle} 스웨디시, ${locTitle} 24시 마사지">

  <meta property="og:type" content="website">
  <meta property="og:title" content="${locTitle} 출장마사지 24시 홈타이 | 바디로그">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:url" content="https://bodylog.netlify.app/${locKey}/">
  <meta property="og:image" content="/images/banner.jpg">
  <meta property="og:site_name" content="바디로그">

  <link rel="canonical" href="https://bodylog.netlify.app/${locKey}/">

  <style>
    #bodylog-page, #bodylog-page * { box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif !important; }
    #bodylog-page { width: 100% !important; margin: 0 !important; padding: 0 !important; color: #23272e !important; background: #f8fafc !important; overflow: hidden !important; }
    #bodylog-page a { text-decoration: none !important; }
    .bl-container { width: 100% !important; max-width: 1180px !important; margin: 0 auto !important; padding: 0 20px !important; }
    .bl-eyebrow { display: inline-flex !important; align-items: center !important; gap: 8px !important; padding: 6px 14px !important; border-radius: 999px !important; background: rgba(30, 41, 59, 0.08) !important; color: #0f172a !important; font-size: 13px !important; font-weight: 800 !important; }
    .bl-eyebrow::before { content: "" !important; width: 7px !important; height: 7px !important; border-radius: 50% !important; background: #2563eb !important; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2) !important; }
    .bl-section-title { margin: 16px 0 0 !important; font-size: clamp(24px, 3.5vw, 36px) !important; line-height: 1.25 !important; font-weight: 900 !important; color: #0f172a !important; word-break: keep-all !important; }
    .bl-nav-bar { background: #0f172a !important; color: #fff !important; padding: 14px 0 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; }
    .bl-nav-content { display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 10px !important; }
    .bl-logo-text { font-size: 22px !important; font-weight: 950 !important; color: #38bdf8 !important; letter-spacing: -0.5px !important; }
    .bl-hero { padding: 45px 0 25px !important; background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%) !important; text-align: center !important; }
    .bl-hero h1 { margin: 14px 0 0 !important; font-size: clamp(26px, 3.8vw, 40px) !important; line-height: 1.3 !important; font-weight: 950 !important; color: #0f172a !important; word-break: keep-all !important; }
    .bl-hero p { margin-top: 12px !important; color: #475569 !important; font-size: 15.5px !important; }
    .bl-banner-section { padding: 10px 0 20px !important; }
    .bl-main-banner-img { width: 100% !important; max-height: 380px !important; object-fit: cover !important; border-radius: 20px !important; box-shadow: 0 10px 25px rgba(0,0,0,0.06) !important; border: 1px solid rgba(0,0,0,0.06) !important; display: block !important; }
    .bl-shop-section { padding: 35px 0 55px !important; background: #f1f5f9 !important; }
    .bl-shop-list { display: flex !important; flex-direction: column !important; gap: 20px !important; margin-top: 24px !important; }
    .bl-shop-card { background: #fff !important; border-radius: 20px !important; padding: 24px !important; border: 1px solid rgba(0, 0, 0, 0.06) !important; box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05) !important; display: flex !important; align-items: center !important; gap: 24px !important; }
    .bl-shop-img { width: 170px !important; height: 170px !important; min-width: 170px !important; border-radius: 14px !important; object-fit: cover !important; border: 1px solid rgba(0,0,0,0.06) !important; }
    .bl-shop-info { flex: 1 !important; }
    .bl-shop-header { display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 8px !important; flex-wrap: wrap !important; }
    .bl-shop-badge { display: inline-block !important; padding: 4px 10px !important; border-radius: 6px !important; background: #e0f2fe !important; color: #0369a1 !important; font-size: 12px !important; font-weight: 850 !important; }
    .bl-shop-location { font-size: 13px !important; color: #0f172a !important; font-weight: 700 !important; background: #f1f5f9 !important; padding: 4px 10px !important; border-radius: 6px !important; }
    .bl-shop-name { font-size: 22px !important; font-weight: 950 !important; color: #0f172a !important; margin: 4px 0 !important; }
    .bl-shop-desc { color: #475569 !important; font-size: 14.5px !important; margin: 0 0 12px 0 !important; line-height: 1.5 !important; }
    .bl-courses-box { background: #f8fafc !important; border-radius: 12px !important; padding: 10px 14px !important; border: 1px solid #e2e8f0 !important; }
    .bl-course-item { display: flex !important; justify-content: space-between !important; align-items: center !important; font-size: 13.5px !important; padding: 5px 0 !important; border-bottom: 1px dashed #cbd5e1 !important; }
    .bl-course-item:last-child { border-bottom: none !important; }
    .bl-course-name { color: #1e293b !important; font-weight: 700 !important; }
    .bl-course-price { color: #2563eb !important; font-weight: 900 !important; }
    .bl-shop-action { display: flex !important; flex-direction: column !important; justify-content: center !important; align-items: center !important; min-width: 180px !important; border-left: 1px solid rgba(0,0,0,0.06) !important; padding-left: 20px !important; gap: 8px !important; }
    .bl-shop-phone-num { font-size: 16px !important; font-weight: 900 !important; color: #0f172a !important; margin-bottom: 4px !important; }
    .bl-btn-call { background: #0f172a !important; color: #fff !important; padding: 12px 18px !important; border-radius: 10px !important; font-size: 14px !important; font-weight: 900 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 100% !important; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2) !important; }
    .bl-btn-sms { background: #fee500 !important; color: #191919 !important; padding: 11px 18px !important; border-radius: 10px !important; font-size: 14px !important; font-weight: 900 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 100% !important; border: 1px solid rgba(0,0,0,0.06) !important; }
    .bl-region-box { padding: 45px 0 !important; background: #fff !important; border-top: 1px solid #e2e8f0 !important; border-bottom: 1px solid #e2e8f0 !important; }
    .bl-tabs { display: flex !important; justify-content: center !important; gap: 10px !important; margin-bottom: 22px !important; flex-wrap: wrap !important; }
    .bl-tab { padding: 10px 22px !important; border-radius: 999px !important; background: #f1f5f9 !important; color: #334155 !important; font-weight: 850 !important; font-size: 15px !important; border: 1px solid #cbd5e1 !important; cursor: pointer !important; transition: all 0.2s ease !important; }
    .bl-tab.active { background: #0f172a !important; color: #fff !important; border-color: #0f172a !important; }
    .bl-links-grid { display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 8px !important; margin-top: 15px !important; }
    .bl-link-item { background: #fff !important; color: #1e293b !important; border: 1px solid #cbd5e1 !important; padding: 8px 14px !important; border-radius: 8px !important; font-size: 13.5px !important; font-weight: 700 !important; text-decoration: none !important; transition: all 0.15s ease !important; }
    .bl-link-item:hover { background: #0f172a !important; color: #fff !important; border-color: #0f172a !important; }
    .bl-footer { background: #0b0f19 !important; color: #94a3b8 !important; padding: 40px 0 !important; text-align: center !important; font-size: 13px !important; line-height: 1.8 !important; }
    @media(max-width: 768px) {
      .bl-shop-card { flex-direction: column !important; align-items: stretch !important; }
      .bl-shop-img { width: 100% !important; height: 180px !important; }
      .bl-shop-action { border-left: none !important; border-top: 1px dashed rgba(0,0,0,0.1) !important; padding-left: 0 !important; padding-top: 16px !important; min-width: auto !important; }
    }
  </style>
</head>
<body>

<div id="bodylog-page">
  <header class="bl-nav-bar">
    <div class="bl-container">
      <div class="bl-nav-content">
        <a href="/" class="bl-logo-text">BodyLog</a>
        <span style="font-size:13px; color:#94a3b8; font-weight:700;">${locTitle} 24시 출장마사지 & 홈타이</span>
      </div>
    </div>
  </header>

  <section class="bl-hero">
    <div class="bl-container">
      <span class="bl-eyebrow">${locTitle} 전지역 24시 출장마사지</span>
      <h1>${locTitle} 24시 출장마사지 & 홈타이</h1>
      <p>자택, 호텔, 오피스텔 어디서나 25분 내 신속 방문 테라피를 경험해 보세요.</p>
    </div>
  </section>

  <!-- 🌟 구 페이지일 때 하위 동 링크 노출 / 동 페이지일 때 상위 구로 돌아가기 링크 노출 -->
  <section style="padding: 16px 0; text-align: center; background: #fff; border-bottom: 1px solid #e2e8f0;">
    <div class="bl-container">
      ${
        isDong
          ? `<div style="font-size: 14px; font-weight: 700; color: #475569;">
               <a href="/${parentKey}/" style="color: #2563eb; font-weight: 800; text-decoration: underline;">⬅️ 상위 지역(${parentKey}) 전체보기</a>
             </div>`
          : `<div style="font-size: 13px; font-weight: 800; color: #475569; margin-bottom: 8px;">📍 ${locTitle} 세부 동별 출장마사지 바로가기</div>
             <div id="dong-list-container"></div>`
      }
    </div>
  </section>

  <section class="bl-shop-section">
    <div class="bl-container">
      <div style="text-align:center;">
        <span class="bl-eyebrow">VERIFIED PARTNERS</span>
        <h2 class="bl-section-title">${locTitle} 추천 출장마사지 제휴점</h2>
      </div>
      <div class="bl-shop-list" id="shop-list-container"></div>
    </div>
  </section>

  <section class="bl-region-box">
    <div class="bl-container">
      <div style="text-align:center; margin-bottom: 20px;">
        <span class="bl-eyebrow">OTHER LOCATIONS</span>
        <h2 class="bl-section-title">타 지역 출장마사지 찾기</h2>
      </div>
      <div class="bl-tabs">
        <button class="bl-tab active" onclick="switchRegion('seoul', this)">서울특별시</button>
        <button class="bl-tab" onclick="switchRegion('gyeonggi', this)">경기도</button>
        <button class="bl-tab" onclick="switchRegion('incheon', this)">인천광역시</button>
        <button class="bl-tab" onclick="switchRegion('cheonan', this)">천안시</button>
      </div>
      <div id="subregion-container" class="bl-links-grid"></div>
    </div>
  </section>

  <footer class="bl-footer">
    <div class="bl-container">
      <p><strong>바디로그 (${locTitle} 안내관)</strong> | 24시 출장마사지, 홈타이, 방문안마 안내 플랫폼</p>
      <p>© BodyLog. All Rights Reserved.</p>
    </div>
  </footer>
</div>

<script>
  const currentLocLabel = "${locTitle}";
  const currentLocKey = "${locKey}";
</script>
<script src="/common.js"></script>
</body>
</html>`;
}

// 🌟 전체 구 + 동 폴더 및 index.html 일괄 빌드
let guCount = 0;
let dongCount = 0;

for (const [regionCategory, guList] of Object.entries(regionData)) {
  guList.forEach(gu => {
    // 1. 구(Gu) 단위 폴더 및 index.html 생성
    const guDir = path.join(__dirname, gu.k);
    if (!fs.existsSync(guDir)) fs.mkdirSync(guDir, { recursive: true });
    fs.writeFileSync(path.join(guDir, 'index.html'), generateHtml(gu.n, gu.k, null, false), 'utf-8');
    guCount++;

    // 2. 동(Dong) 단위 폴더 및 index.html 생성
    if (gu.dongs && gu.dongs.length > 0) {
      gu.dongs.forEach(dong => {
        const dongDir = path.join(__dirname, dong.k);
        if (!fs.existsSync(dongDir)) fs.mkdirSync(dongDir, { recursive: true });
        fs.writeFileSync(path.join(dongDir, 'index.html'), generateHtml(`${gu.n} ${dong.n}`, dong.k, gu.k, true), 'utf-8');
        dongCount++;
      });
    }
  });
}

console.log(`🎉 성공! [시/구: ${guCount}개] + [세부 동: ${dongCount}개] 총 ${guCount + dongCount}개 독립 페이지가 자동 빌드되었습니다!`);