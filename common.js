// ==========================================================================
// 🌟 1. 전체 지역 데이터 (시/구 + 개별 동 정적 URL 키 매핑)
// ==========================================================================
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
        { n: "행당동", k: "seoul-dongdaemun-haengdang" }, { n: "금호동", k: "seoul-seongdong-geumho" },
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

// ==========================================================================
// 🌟 2. 5개 제휴 업체 데이터
// ==========================================================================
const shopsData = [
  {
    id: 1, name: "한국골든테라피", phone: "0507-1280-3361", badge: "추천업체",
    desc: "24시 정성 가득한 타이 & 아로마 전문 바디케어", img: "/images/shop1.jpg",
    courses: [{ name: "아로마 힐링 케어 (60분)", price: "90,000원" }, { name: "스웨디시 테라피 (60분)", price: "140,000원" }]
  },
  {
    id: 2, name: "한국미인테라피", phone: "0507-1280-3303", badge: "인기폭발",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 수기 힐링 케어", img: "/images/shop2.jpg",
    courses: [{ name: "전신 건식 코스 (60분)", price: "60,000원" }, { name: "스웨디시 딥티슈 (60분)", price: "140,000원" }]
  },
  {
    id: 3, name: "오늘밤테라피", phone: "0507-1280-3223", badge: "24시상시",
    desc: "철저한 위생 관리와 25분 내 빠른 방문 힐링 서비스", img: "/images/shop3.jpg",
    courses: [{ name: "타이 & 아로마 (60분)", price: "60,000원" }, { name: "한국인 전문 스웨디시 (60분)", price: "140,000원" }]
  },
  {
    id: 4, name: "주주테라피", phone: "0507-1280-3193", badge: "신규제휴",
    desc: "베테랑 전문 테라피스트의 1:1 맞춤형 피로 회복 프로그램", img: "/images/shop4.jpg",
    courses: [{ name: "클래식 타이 (60분)", price: "60,000원" }, { name: "스페셜 힐링케어 (90분)", price: "140,000원" }]
  },
  {
    id: 5, name: "퀸즈홈테라피", phone: "0507-1280-3334", badge: "만족도1위",
    desc: "후불제 안심 이용 시스템, 해당 권역 25분 내 신속 방문 도착", img: "/images/shop5.jpg",
    courses: [{ name: "스탠다드 타이 (60분)", price: "60,000원" }, { name: "퀸즈 프리미엄 코스 (60분)", price: "140,000원" }]
  }
];

// ==========================================================================
// 🌟 3. 배열 무작위 셔플 함수
// ==========================================================================
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// ==========================================================================
// 🌟 4. 하단 지역 탭 전환
// ==========================================================================
function switchRegion(reg, el) {
  const tabs = document.querySelectorAll('.bl-tab, .hcl-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');

  const container = document.getElementById('subregion-container');
  if (container && regionData[reg]) {
    const isSub = (typeof currentLocLabel !== 'undefined' && currentLocLabel);
    const suffix = isSub ? "출장마사지" : "홈케어";
    container.innerHTML = regionData[reg].map(item =>
      `<a href="/${item.k}/" class="bl-link-item hcl-link-item">${item.n} ${suffix} ➔</a>`
    ).join('');
  }
}

// ==========================================================================
// 🌟 5. 페이지 로드 시 렌더링 (천안 필터링 + 랜덤 노출)
// ==========================================================================
window.onload = function() {
  const isSub = (typeof currentLocLabel !== 'undefined' && currentLocLabel);
  const locLabel = isSub ? currentLocLabel : "수도권 전지역";
  const serviceKeyword = isSub ? "출장마사지 / 홈타이" : "방문 힐링케어";

  // 천안 지역 여부 판별 (라벨 또는 키에 '천안' / 'cheonan' 포함 시)
  const isCheonan = (typeof currentLocKey !== 'undefined' && currentLocKey.startsWith('cheonan')) ||
                    (typeof currentLocLabel !== 'undefined' && currentLocLabel.includes('천안'));

  const shopContainer = document.getElementById('shop-list-container');
  if (shopContainer && typeof shopsData !== 'undefined') {
    shopContainer.innerHTML = "";

    // 🌟 천안 지역은 2번(한국미인테라피), 4번(주주테라피)만 노출 / 타 지역은 5개 전체 노출
    let targetShops = isCheonan
      ? shopsData.filter(shop => shop.id === 2 || shop.id === 4)
      : shopsData;

    // 무작위 순서 셔플
    const randomizedShops = shuffleArray(targetShops);

    randomizedShops.forEach(shop => {
      let coursesHtml = "";
      if (shop.courses) {
        shop.courses.forEach(c => {
          coursesHtml += `<div class="bl-course-item hcl-course-item"><span class="bl-course-name hcl-course-name">${c.name}</span><span class="bl-course-price hcl-course-price">${c.price}</span></div>`;
        });
      }

      const smsText = encodeURIComponent(`안녕하세요. 바디로그 보고 [${locLabel} ${serviceKeyword}] 예약 문의드립니다.`);

      shopContainer.innerHTML += `
        <div class="bl-shop-card hcl-shop-card">
          <img src="${shop.img}" alt="${shop.name}" class="bl-shop-img hcl-shop-img" loading="lazy">
          <div class="bl-shop-info hcl-shop-info">
            <div class="bl-shop-header hcl-shop-header">
              <span class="bl-shop-badge hcl-shop-badge">${shop.badge}</span>
              <span class="bl-shop-location hcl-shop-location">📍 ${locLabel} 25분 내 신속 방문</span>
            </div>
            <h3 class="bl-shop-name hcl-shop-name">${shop.name}</h3>
            <p class="bl-shop-desc hcl-shop-desc">${shop.desc}</p>
            <div class="bl-courses-box hcl-courses-box">${coursesHtml}</div>
          </div>
          <div class="bl-shop-action hcl-shop-action">
            <span class="bl-shop-phone-num hcl-shop-phone-num">${shop.phone}</span>
            <a href="tel:${shop.phone}" class="bl-btn-call hcl-btn-call">📞 전화 상담하기</a>
            <a href="sms:${shop.phone}?body=${smsText}" class="bl-btn-sms hcl-btn-sms">💬 문자 예약하기</a>
          </div>
        </div>`;
    });
  }

  // 구 페이지일 때 개별 동 링크 렌더링
  const dongBox = document.getElementById('dong-list-container');
  if (dongBox && typeof currentLocKey !== 'undefined') {
    let matchedDongs = [];
    for (const reg in regionData) {
      const found = regionData[reg].find(item => item.k === currentLocKey);
      if (found && found.dongs) {
        matchedDongs = found.dongs;
        break;
      }
    }
    if (matchedDongs.length > 0) {
      dongBox.innerHTML = matchedDongs.map(dong => 
        `<a href="/${dong.k}/" class="bl-dong-link" style="display:inline-block; padding:7px 14px; margin:4px 3px; background:#f8fafc; border-radius:8px; font-size:13.5px; color:#1e293b; font-weight:700; border:1px solid #cbd5e1; text-decoration:none; transition:all 0.15s ease;">📍 ${dong.n} 출장마사지 ➔</a>`
      ).join('');
    }
  }

  // 기본 서울 탭 활성화
  const defaultTab = document.querySelector('.bl-tab, .hcl-tab');
  if (defaultTab) {
    switchRegion('seoul', defaultTab);
  }
};