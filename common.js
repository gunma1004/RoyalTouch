// 🌟 1. 전체 지역 데이터 (서울 25개 구 + 경기 + 인천 + 천안)
const regionData = {
  seoul: [
    {n:"강남구", k:"seoul-gangnam"}, {n:"강동구", k:"seoul-gangdong"}, {n:"강북구", k:"seoul-gangbuk"},
    {n:"강서구", k:"seoul-gangseo"}, {n:"관악구", k:"seoul-gwanak"}, {n:"광진구", k:"seoul-gwangjin"},
    {n:"구로구", k:"seoul-guro"}, {n:"금천구", k:"seoul-geumcheon"}, {n:"노원구", k:"seoul-nowon"},
    {n:"도봉구", k:"seoul-dobong"}, {n:"동대문구", k:"seoul-dongdaemun"}, {n:"동작구", k:"seoul-dongjak"},
    {n:"마포구", k:"seoul-mapo"}, {n:"서대문구", k:"seoul-seodaemun"}, {n:"서초구", k:"seoul-seocho"},
    {n:"성동구", k:"seoul-seongdong"}, {n:"성북구", k:"seoul-seongbuk"}, {n:"송파구", k:"seoul-songpa"},
    {n:"양천구", k:"seoul-yangcheon"}, {n:"영등포구", k:"seoul-yeongdeungpo"}, {n:"용산구", k:"seoul-yongsan"},
    {n:"은평구", k:"seoul-eunpyeong"}, {n:"종로구", k:"seoul-jongno"}, {n:"중구", k:"seoul-junggu"},
    {n:"중랑구", k:"seoul-jungnang"}
  ],
  gyeonggi: [
    {n:"안산시", k:"gyeonggi-ansan"}, {n:"부천시", k:"gyeonggi-bucheon"}, {n:"김포시", k:"gyeonggi-gimpo"},
    {n:"고양시", k:"gyeonggi-goyang"}, {n:"화성시", k:"gyeonggi-hwaseong"}, {n:"평택시", k:"gyeonggi-pyeongtaek"},
    {n:"성남시", k:"gyeonggi-seongnam"}, {n:"시흥시", k:"gyeonggi-siheung"}, {n:"수원시", k:"gyeonggi-suwon"},
    {n:"용인시", k:"gyeonggi-yongin"}
  ],
  incheon: [
    {n:"부평구", k:"incheon-bupyeong"}, {n:"동구", k:"incheon-donggu"}, {n:"계양구", k:"incheon-gyeyang"},
    {n:"중구", k:"incheon-junggu"}, {n:"미추홀구", k:"incheon-michuhol"}, {n:"남동구", k:"incheon-namdong"},
    {n:"서구", k:"incheon-seogu"}, {n:"연수구", k:"incheon-yeonsu"}
  ],
  cheonan: [
    {n:"천안시", k:"cheonan"}
  ]
};

// 🌟 2. 공통 제휴 업체 데이터 (모든 페이지 동일 적용)
<script src="/common.js"></script>
  { id: 1, name: "한국미인홈케어", phone: "0507-1280-3288", badge: "추천업체", desc: "24시 정성 가득한 타이 & 아로마 전문 케어", img: "/images/shop1.jpg", courses: [{ name: "아로디시 관리 (60분)", price: "90,000원" }, { name: "스웨디시 케어 (60분)", price: "140,000원" }] },
  { id: 2, name: "젊은애인홈타이", phone: "0507-1280-3183", badge: "인기폭발", desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링 수기 케어", img: "/images/shop2.jpg", courses: [{ name: "건식 코스 (60분)", price: "60,000원" }, { name: "스웨디시 (60분)", price: "140,000원" }] },
  { id: 3, name: "그녀의온도홈타이", phone: "0507-1280-3245", badge: "24시상시", desc: "빠른 방문과 철저한 위생 관리를 약속드립니다", img: "/images/shop3.jpg", courses: [{ name: "타이/아로마 (60분)", price: "60,000원" }, { name: "한국 스웨디시케어 (60분)", price: "140,000원" }] },
  { id: 4, name: "젊은미녀홈타이", phone: "0507-1280-3180", badge: "신규제휴", desc: "베테랑 관리사의 맞춤형 피로 회복 케어 프로그램", img: "/images/shop4.jpg", courses: [{ name: "타이코스 (60분)", price: "60,000원" }, { name: "한국스웨디시 (90분)", price: "140,000원" }] },
  { id: 5, name: "지금될까홈타이", phone: "0507-1280-3228", badge: "만족도1위", desc: "후불제 안심 이용, 해당 권역 25분 내 빠른 도착", img: "/images/shop5.jpg", courses: [{ name: "타이 코스 (60분)", price: "60,000원" }, { name: "스웨디시 코스 (60분)", price: "140,000원" }] }
];

// 🌟 3. 하단 지역 탭 전환 함수
function switchRegion(reg, el) {
  document.querySelectorAll('.hcl-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  
  const container = document.getElementById('subregion-container');
  if (container && regionData[reg]) {
    container.innerHTML = regionData[reg].map(item => 
      `<a href="/${item.k}/" class="hcl-link-item">${item.n} 홈케어 ➔</a>`
    ).join('');
  }
}

// 🌟 4. 페이지 로드 시 자동 실행 함수
<script src="/common.js"></script>
  // 업체 리스트 렌더링
  const shopContainer = document.getElementById('shop-list-container');
  if (shopContainer && typeof shopsData !== 'undefined') {
    // 각 페이지에 정의된 currentLocLabel이 없으면 기본값 사용
    const locLabel = typeof currentLocLabel !== 'undefined' ? currentLocLabel : "수도권 전지역";
    
    shopsData.forEach(shop => {
      let coursesHtml = "";
      if (shop.courses) {
        shop.courses.forEach(c => { 
          coursesHtml += `<div class="hcl-course-item"><span class="hcl-course-name">${c.name}</span><span class="hcl-course-price">${c.price}</span></div>`; 
        });
      }
      
      const smsText = encodeURIComponent(`안녕하세요. 로얄터치 보고 [${locLabel} 출장마사지] 예약 문의드립니다.`);
      shopContainer.innerHTML += `
        <div class="hcl-shop-card">
          <img src="${shop.img}" alt="${shop.name}" class="hcl-shop-img">
          <div class="hcl-shop-info">
            <div class="hcl-shop-header"><span class="hcl-shop-badge">${shop.badge}</span><span class="hcl-shop-location">📍 ${locLabel} 25분 내 신속 방문</span></div>
            <h3 class="hcl-shop-name">${shop.name}</h3>
            <p class="hcl-shop-desc">${shop.desc}</p>
            <div class="hcl-courses-box">${coursesHtml}</div>
          </div>
          <div class="hcl-shop-action">
            <span class="hcl-shop-phone-num">${shop.phone}</span>
            <a href="tel:${shop.phone}" class="hcl-btn-call">📞 전화 연결하기</a>
            <a href="sms:${shop.phone}?body=${smsText}" class="hcl-btn-sms">💬 문자 예약하기</a>
          </div>
        </div>`;
    });
  }

  // 하단 지역 탭 기본 실행 (서울 선택 상태)
  const defaultTab = document.querySelector('.hcl-tab');
  if (defaultTab) {
    switchRegion('seoul', defaultTab);
  }
};

