// ==========================================================================
// 🌟 1. 전체 지역 데이터 (서울 25구 / 경기 31시군 / 인천 8구군 / 천안 + 세부 동)
// ==========================================================================
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
    { n: "용인시", k: "gyeonggi-yongin", dongs: ["풍덕천동", "죽전동", "보정동", "상현동", "기흥동", "신갈동", "구갈동", "김량장동", "역북동"] },
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

// ==========================================================================
// 🌟 2. 변경된 5개 제휴 업체 데이터
// ==========================================================================
const shopsData = [
  {
    id: 1,
    name: "한국골든테라피",
    phone: "0507-1280-3361",
    badge: "추천업체",
    desc: "24시 정성 가득한 타이 & 아로마 전문 바디케어",
    img: "/images/shop1.jpg",
    courses: [
      { name: "아로마 힐링 케어 (60분)", price: "90,000원" },
      { name: "스웨디시 테라피 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 2,
    name: "한국미인테라피",
    phone: "0507-1280-3303",
    badge: "인기폭발",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 수기 힐링 케어",
    img: "/images/shop2.jpg",
    courses: [
      { name: "전신 건식 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 딥티슈 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 3,
    name: "오늘밤테라피",
    phone: "0507-1280-3223",
    badge: "24시상시",
    desc: "철저한 위생 관리와 25분 내 빠른 방문 힐링 서비스",
    img: "/images/shop3.jpg",
    courses: [
      { name: "타이 & 아로마 (60분)", price: "60,000원" },
      { name: "한국인 전문 스웨디시 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 4,
    name: "주주테라피",
    phone: "0507-1280-3193",
    badge: "신규제휴",
    desc: "베테랑 전문 테라피스트의 1:1 맞춤형 피로 회복 프로그램",
    img: "/images/shop4.jpg",
    courses: [
      { name: "클래식 타이 (60분)", price: "60,000원" },
      { name: "스페셜 힐링케어 (90분)", price: "140,000원" }
    ]
  },
  {
    id: 5,
    name: "퀸즈홈테라피",
    phone: "0507-1280-3334",
    badge: "만족도1위",
    desc: "후불제 안심 이용 시스템, 해당 권역 25분 내 신속 방문 도착",
    img: "/images/shop5.jpg",
    courses: [
      { name: "스탠다드 타이 (60분)", price: "60,000원" },
      { name: "퀸즈 프리미엄 코스 (60분)", price: "140,000원" }
    ]
  }
];

// ==========================================================================
// 🌟 3. 동(Dong) 버튼 클릭 시 실시간 타깃 변경 함수
// ==========================================================================
function setDongKeyword(dongName, btnEl) {
  const baseGu = (typeof currentLocLabel !== 'undefined' && currentLocLabel) ? currentLocLabel : "";
  const fullLoc = baseGu ? `${baseGu} ${dongName}` : dongName;

  // 1) 버튼 active 스타일 토글
  document.querySelectorAll('.bl-dong-btn').forEach(btn => {
    btn.style.background = '#f1f5f9';
    btn.style.color = '#334155';
    btn.style.borderColor = '#cbd5e1';
  });
  if (btnEl) {
    btnEl.style.background = '#0f172a';
    btnEl.style.color = '#fff';
    btnEl.style.borderColor = '#0f172a';
  }

  // 2) 업체 카드의 위치 배지 텍스트 실시간 변경
  document.querySelectorAll('.bl-shop-location, .hcl-shop-location').forEach(el => {
    el.innerText = `📍 ${fullLoc} 25분 내 신속 방문`;
  });

  // 3) 문자 예약 링크 템플릿 실시간 갱신
  const smsText = encodeURIComponent(`안녕하세요. 바디로그 보고 [${fullLoc} 출장마사지] 예약 문의드립니다.`);
  document.querySelectorAll('.bl-shop-card, .hcl-shop-card').forEach(card => {
    const phoneEl = card.querySelector('.bl-shop-phone-num, .hcl-shop-phone-num');
    const smsBtn = card.querySelector('.bl-btn-sms, .hcl-btn-sms');
    if (phoneEl && smsBtn) {
      const phone = phoneEl.innerText.trim();
      smsBtn.href = `sms:${phone}?body=${smsText}`;
    }
  });

  // 4) 제휴 업체 목록 영역으로 부드럽게 스크롤
  const shopSec = document.querySelector('.bl-shop-section, .hcl-shop-section');
  if (shopSec) {
    shopSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// 🌟 4. 하단 지역 탭 전환 함수
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
// 🌟 5. 페이지 로드 시 자동 렌더링
// ==========================================================================
window.onload = function() {
  const isSub = (typeof currentLocLabel !== 'undefined' && currentLocLabel);
  const locLabel = isSub ? currentLocLabel : "수도권 전지역";
  const serviceKeyword = isSub ? "출장마사지 / 홈타이" : "방문 힐링케어";

  // 1) 업체 카드 목록 렌더링
  const shopContainer = document.getElementById('shop-list-container');
  if (shopContainer && typeof shopsData !== 'undefined') {
    shopContainer.innerHTML = "";
    shopsData.forEach(shop => {
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

  // 2) 클릭 가능한 동(Dong) 버튼 렌더링
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
        `<button type="button" class="bl-dong-btn" onclick="setDongKeyword('${dong}', this)" style="display:inline-block; padding:6px 12px; margin:4px 3px; background:#f1f5f9; border-radius:8px; font-size:13px; color:#334155; font-weight:700; border:1px solid #cbd5e1; cursor:pointer; transition:all 0.15s ease;">📍 ${dong} 출장마사지</button>`
      ).join('');
    }
  }

  // 3) 기본 서울 탭 활성화
  const defaultTab = document.querySelector('.bl-tab, .hcl-tab');
  if (defaultTab) {
    switchRegion('seoul', defaultTab);
  }
};