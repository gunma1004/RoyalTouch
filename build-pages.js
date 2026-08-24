// build-pages.js
const fs = require('fs');
const path = require('path');

// 🌟 전체 지역 및 세부 동 데이터
const regionData = {
  seoul: [
    { n: "강남구", k: "seoul-gangnam", dongs: ["역삼동", "논현동", "삼성동", "대치동", "신사동", "청담동", "압구정동", "개포동", "도곡동", "일원동", "수서동"] },
    { n: "강동구", k: "seoul-gangdong", dongs: ["천호동", "길동", "명일동", "고덕동", "암사동", "성내동", "둔촌동", "강일동", "상일동"] },
    { n: "강북구", k: "seoul-gangbuk", dongs: ["수유동", "미아동", "번동", "우이동"] },
    { n: "강서구", k: "seoul-gangseo", dongs: ["화곡동", "가양동", "마곡동", "등촌동", "발산동", "방화동", "공항동", "염창동"] },
    { n: "관악구", k: "seoul-gwanak", dongs: ["신림동", "봉천동", "낙성대동", "남현동", "보라매동", "조원동"] },
    { n: "광진구", k: "seoul-gwangjin", dongs: ["자양동", "화양동", "구의동", "군자동", "중곡동", "광장동"] },
    { n: "구로구", k: "seoul-guro", dongs: ["구로동", "신도림동", "가리봉동", "개봉동", "오류동", "고척동", "천왕동"] },
    { n: "금천구", k: "seoul-geumcheon", dongs: ["가산동", "독산동", "시흥동"] },
    { n: "노원구", k: "seoul-nowon", dongs: ["상계동", "중계동", "하계동", "월계동", "공릉동"] },
    { n: "도봉구", k: "seoul-dobong", dongs: ["쌍문동", "방학동", "창동", "도봉동"] },
    { n: "동대문구", k: "seoul-dongdaemun", dongs: ["장안동", "답십리동", "전농동", "용두동", "제기동", "이문동", "휘경동", "청량리동"] },
    { n: "동작구", k: "seoul-dongjak", dongs: ["사당동", "상도동", "노량진동", "흑석동", "대방동", "신대방동"] },
    { n: "마포구", k: "seoul-mapo", dongs: ["서교동", "동교동", "합정동", "망원동", "연남동", "공덕동", "아현동", "상암동", "성산동"] },
    { n: "서대문구", k: "seoul-seodaemun", dongs: ["신촌동", "창천동", "연희동", "홍제동", "남가좌동", "북가좌동", "홍은동"] },
    { n: "서초구", k: "seoul-seocho", dongs: ["서초동", "반포동", "방배동", "양재동", "잠원동", "우면동", "내곡동"] },
    { n: "성동구", k: "seoul-seongdong", dongs: ["성수동", "왕십리동", "행당동", "금호동", "옥수동", "마장동", "송정동"] },
    { n: "성북구", k: "seoul-seongbuk", dongs: ["길음동", "돈암동", "안암동", "정릉동", "석관동", "종암동", "장위동"] },
    { n: "송파구", k: "seoul-songpa", dongs: ["잠실동", "가락동", "문정동", "방이동", "석촌동", "삼전동", "송파동", "오금동", "장지동"] },
    { n: "양천구", k: "seoul-yangcheon", dongs: ["목동", "신정동", "신월동"] },
    { n: "영등포구", k: "seoul-yeongdeungpo", dongs: ["여의도동", "영등포동", "당산동", "문래동", "양평동", "신길동", "대림동"] },
    { n: "용산구", k: "seoul-yongsan", dongs: ["이태원동", "한남동", "용산동", "청파동", "효창동", "원효로동", "이촌동", "보광동"] },
    { n: "은평구", k: "seoul-eunpyeong", dongs: ["불광동", "갈현동", "응암동", "연신내", "녹번동", "대조동", "역촌동", "진관동"] },
    { n: "종로구", k: "seoul-jongno", dongs: ["종로", "혜화동", "명륜동", "평창동", "무악동", "숭인동", "창신동"] },
    { n: "중구", k: "seoul-junggu", dongs: ["명동", "을지로", "충무로", "신당동", "황학동", "다산동", "중림동"] },
    { n: "중랑구", k: "seoul-jungnang", dongs: ["면목동", "상봉동", "중화동", "묵동", "망우동", "신내동"] }
  ],
  gyeonggi: [
    { n: "수원시", k: "gyeonggi-suwon", dongs: ["인계동", "매탄동", "영통동", "광교동", "권선동", "세류동", "곡반정동", "정자동", "율전동", "화서동"] },
    { n: "성남시", k: "gyeonggi-seongnam", dongs: ["서현동", "야탑동", "정자동", "판교동", "삼평동", "백현동", "신흥동", "태평동", "상대원동"] },
    { n: "고양시", k: "gyeonggi-goyang", dongs: ["장항동", "백석동", "마두동", "주엽동", "대화동", "화정동", "행신동", "식사동", "탄현동"] },
    { n: "용인시", k: "gyeonggi-yongin", dongs: ["풍덕천동", "죽전동", "보정동", "상현동", "기흥동", "신갈동", "구갈동", "처인구 김량장동", "역북동"] },
    { n: "부천시", k: "gyeonggi-bucheon", dongs: ["중동", "상동", "심곡동", "원미동", "소사동", "역곡동", "괴안동", "고강동", "오정동"] },
    { n: "안산시", k: "gyeonggi-ansan", dongs: ["중앙동", "고잔동", "초지동", "원곡동", "선부동", "본오동", "사동", "일동", "와동"] },
    { n: "안양시", k: "gyeonggi-anyang", dongs: ["평촌동", "범계동", "인덕원", "비산동", "호계동", "안양동", "석수동", "박달동"] },
    { n: "남양주시", k: "gyeonggi-namyangju", dongs: ["다산동", "별내동", "호평동", "평내동", "화도읍", "진접읍", "오남읍", "와부읍"] },
    { n: "화성시", k: "gyeonggi-hwaseong", dongs: ["동탄동", "병점동", "향남읍", "봉담읍", "남양읍", "우정읍", "새솔동"] },
    { n: "평택시", k: "gyeonggi-pyeongtaek", dongs: ["고덕동", "비전동", "합정동", "서정동", "송탄동", "안중읍", "포승읍", "청북읍"] },
    { n: "의정부시", k: "gyeonggi-uijeongbu", dongs: ["의정부동", "호원동", "장암동", "신곡동", "용현동", "민락동", "낙양동", "가능동"] },
    { n: "시흥시", k: "gyeonggi-siheung", dongs: ["정왕동", "배곧동", "은계동", "목감동", "은행동", "대야동", "신천동", "거모동"] },
    { n: "파주시", k: "gyeonggi-paju", dongs: ["야당동", "와동동", "목동동", "금촌동", "문산읍", "운정동", "교하동"] },
    { n: "광명시", k: "gyeonggi-gwangmyeong", dongs: ["철산동", "하안동", "소하동", "일직동", "광명동"] },
    { n: "김포시", k: "gyeonggi-gimpo", dongs: ["구래동", "장기동", "운양동", "사우동", "풍무동", "걸포동", "통진읍", "고촌읍"] },
    { n: "군포시", k: "gyeonggi-gunpo", dongs: ["산본동", "당동", "금정동", "대야미동", "부곡동"] },
    { n: "광주시", k: "gyeonggi-gwangju", dongs: ["경안동", "쌍령동", "송정동", "탄벌동", "태전동", "오포읍", "초월읍"] },
    { n: "이천시", k: "gyeonggi-icheon", dongs: ["창전동", "증포동", "중리동", "관고동", "부발읍", "장호원읍"] },
    { n: "양주시", k: "gyeonggi-yangju", dongs: ["옥정동", "회천동", "삼숭동", "고읍동", "덕정동", "백석읍"] },
    { n: "오산시", k: "gyeonggi-osan", dongs: ["원동", "오산동", "궐동", "세교동", "금암동", "수청동"] },
    { n: "구리시", k: "gyeonggi-guri", dongs: ["인창동", "교문동", "수택동", "토평동", "갈매동"] },
    { n: "안성시", k: "gyeonggi-anseong", dongs: ["대덕면", "공도읍", "석정동", "아양동", "옥산동"] },
    { n: "포천시", k: "gyeonggi-pocheon", dongs: ["신읍동", "소흘읍", "송우리", "가산면", "일동면"] },
    { n: "의왕시", k: "gyeonggi-uiwang", dongs: ["내손동", "포일동", "오전동", "고천동", "삼동"] },
    { n: "하남시", k: "gyeonggi-hanam", dongs: ["미사동", "신장동", "덕풍동", "풍산동", "위례동", "감이동"] },
    { n: "여주시", k: "gyeonggi-yeoju", dongs: ["홍문동", "교동", "오학동", "가남읍"] },
    { n: "동두천시", k: "gyeonggi-dongducheon", dongs: ["지행동", "생연동", "보산동", "송내동"] },
    { n: "과천시", k: "gyeonggi-gwacheon", dongs: ["별양동", "중앙동", "원문동", "갈현동"] },
    { n: "양평군", k: "gyeonggi-yangpyeong", dongs: ["양평읍", "양서면", "용문면", "강상면"] },
    { n: "가평군", k: "gyeonggi-gapyeong", dongs: ["가평읍", "청평면", "설악면"] },
    { n: "연천군", k: "gyeonggi-yeoncheon", dongs: ["연천읍", "전곡읍"] }
  ],
  incheon: [
    { n: "부평구", k: "incheon-bupyeong", dongs: ["부평동", "삼산동", "청천동", "갈산동", "산곡동", "십정동", "부개동"] },
    { n: "남동구", k: "incheon-namdong", dongs: ["구월동", "간석동", "논현동", "만수동", "서창동", "도림동"] },
    { n: "서구", k: "incheon-seogu", dongs: ["청라동", "루원시티", "검암동", "당하동", "원당동", "마전동", "가정동", "석남동", "가좌동"] },
    { n: "연수구", k: "incheon-yeonsu", dongs: ["송도동", "연수동", "동춘동", "청학동", "옥련동", "선학동"] },
    { n: "미추홀구", k: "incheon-michuhol", dongs: ["주안동", "도화동", "용현동", "학익동", "숭의동", "관교동", "문학동"] },
    { n: "계양구", k: "incheon-gyeyang", dongs: ["계산동", "작전동", "효성동", "임학동", "용종동", "서운동"] },
    { n: "중구", k: "incheon-junggu", dongs: ["영종동", "운서동", "하늘도시", "신포동", "연안동", "신흥동", "북성동"] },
    { n: "동구", k: "incheon-donggu", dongs: ["송림동", "송현동", "화평동", "만석동", "금곡동"] },
    { n: "강화군", k: "incheon-ganghwa", dongs: ["강화읍", "선원면", "길상면"] },
    { n: "옹진군", k: "incheon-ongjin", dongs: ["백령면", "영흥면", "연평면"] }
  ],
  cheonan: [
    { n: "천안시 서북구", k: "cheonan-seobuk", dongs: ["두정동", "성정동", "불당동", "백석동", "쌍용동", "차암동", "성성동"] },
    { n: "천안시 동남구", k: "cheonan-dongnam", dongs: ["신부동", "원성동", "봉명동", "다가동", "청수동", "청당동", "구성동"] }
  ]
};

// 템플릿 생성 함수
function generateHtml(locName, locKey, dongs) {
  const dongsText = dongs ? dongs.slice(0, 6).join(', ') + ' 등 전지역' : '전지역';
  const dongKeywords = dongs ? dongs.map(d => `${locName} ${d} 출장마사지`).slice(0, 5).join(', ') : '';

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <title>${locName} 출장마사지 24시 홈타이 | 바디로그 (BodyLog)</title>
  <meta name="description" content="${locName} 전지역(${dongsText}) 24시 출장마사지, 홈타이, 방문안마 추천 제휴 업체. 자택/호텔/오피스텔 25분 내 빠른 도착!">
  <meta name="keywords" content="${locName} 출장마사지, ${locName} 홈타이, ${locName} 방문안마, ${locName} 스웨디시, ${dongKeywords}">

  <meta property="og:type" content="website">
  <meta property="og:title" content="${locName} 출장마사지 24시 홈타이 | 바디로그">
  <meta property="og:description" content="${locName} 24시 출장마사지, 홈타이, 스웨디시 25분 내 신속 방문">
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
        <span style="font-size:13px; color:#94a3b8; font-weight:700;">${locName} 24시 출장마사지 & 홈타이</span>
      </div>
    </div>
  </header>

  <section class="bl-hero">
    <div class="bl-container">
      <span class="bl-eyebrow">${locName} 전지역 24시 출장마사지</span>
      <h1>${locName} 24시 출장마사지 & 홈타이</h1>
      <p>${dongsText} 자택, 호텔, 오피스텔 어디서나 25분 내 신속 방문 테라피!</p>
    </div>
  </section>

  <section style="padding: 15px 0; text-align: center; background: #fff; border-bottom: 1px solid #e2e8f0;">
    <div class="bl-container">
      <div style="font-size: 13px; font-weight: 800; color: #475569; margin-bottom: 8px;">📍 ${locName} 실시간 25분 내 신속 방문 세부 동 안내</div>
      <div id="dong-list-container"></div>
    </div>
  </section>

  <section class="bl-shop-section">
    <div class="bl-container">
      <div style="text-align:center;">
        <span class="bl-eyebrow">VERIFIED PARTNERS</span>
        <h2 class="bl-section-title">${locName} 추천 출장마사지 제휴점</h2>
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
      <p><strong>바디로그 (${locName}점)</strong> | ${locName} 전지역 24시 출장마사지, 홈타이, 방문안마 안내 플랫폼</p>
      <p>© BodyLog. All Rights Reserved.</p>
    </div>
  </footer>
</div>

<script>
  const currentLocLabel = "${locName}";
  const currentLocKey = "${locKey}";
</script>
<script src="/common.js"></script>
</body>
</html>`;
}

// 🌟 전체 폴더 순회 및 파일 일괄 생성/업데이트
let totalCreated = 0;
for (const [regionCategory, list] of Object.entries(regionData)) {
  list.forEach(item => {
    const dirPath = path.join(__dirname, item.k);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, 'index.html');
    fs.writeFileSync(filePath, generateHtml(item.n, item.k, item.dongs), 'utf-8');
    totalCreated++;
  });
}

console.log(`🎉 성공: 총 ${totalCreated}개의 구/동 지역 페이지가 1초 만에 자동 생성 및 업데이트되었습니다!`);