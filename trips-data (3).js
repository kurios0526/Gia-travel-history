/* ============================================================
   가족여행 데이터 — 여기만 수정하시면 목록/상세 페이지에 모두 반영됩니다.

   새 여행 추가하는 법: 아래 TRIPS 배열 맨 끝에 객체 하나를 복사해서
   붙여넣고 값만 채우세요.

   order        : 여행 순서 번호 (상세페이지 주소의 ?id= 값으로도 사용됩니다)
   dateLabel    : 화면에 보일 날짜 (예: "2023.07.03")
   title        : 여행지 이름
   country      : 나라 이름
   tone         : 사진 영역 색상 - "coral"/"sage"/"butter"/"sky" 중 선택
   icon         : 사진 영역 아이콘 - "plane"/"sun"/"wave"/"mountain" 중 선택
   note         : 카드에 보일 한 줄 메모
   companions   : 함께 간 사람들 (예: "아내, 지아, 장모님")
   photoUrl     : 구글포토 앨범 링크
   detailUrl    : 전체 일정 앱(기존에 만든 상세페이지)이 있으면 그 링크
   itinerary    : 일정 목록. [{ day:"Day 1", text:"..." }, ...] 형태로 추가
   accommodations : 숙소 목록. [{ name, dates, checkIn, image, reservationNo }, ...]
                  - name: 숙소 이름 / dates: 묵은 날짜(예: "7/7") / checkIn: 체크인 시간(선택)
                  - image: 숙소 사진 URL (선택, 비워두면 색깔 아이콘 표시)
                  - reservationNo: 예약번호 (선택)
   flights      : 항공편 목록. [{ code, flightNo, route, date, time }, ...]
                  - code: 항공사 코드 (아래 AIRLINES 목록 중 하나, 예: "TW")
                  - flightNo: 편명 (예: "TW281")
                  - route: 구간 (예: "인천 → 오키나와")
                  - date, time: 날짜/시간
                  ※ 실제 항공사 로고 이미지는 저작권 때문에 넣을 수 없어서,
                    항공사 이니셜을 브랜드 색상 뱃지로 대신 표시합니다.
                    목록에 없는 항공사는 AIRLINES에 코드/이름/색상을 추가하면 됩니다.
   documents    : 항공권/예약 스캔본 등. [{ label:"항공권", url:"..." }, ...]
                  (스캔 이미지는 구글드라이브/구글포토에 올린 뒤 공유 링크를
                   url 자리에 붙여넣으시면 됩니다)
   coverImage   : 대표 사진 URL (비워두면 색깔 아이콘이 대신 표시됩니다)
============================================================= */

const AIRLINES = {
  TW: { name:"티웨이항공", color:"#F37021" },
  KE: { name:"대한항공",   color:"#0F3092" },
  OZ: { name:"아시아나항공", color:"#7B2D8E" },
  JL: { name:"일본항공",   color:"#C8102E" },
  NH: { name:"ANA",       color:"#00468C" },
  VN: { name:"베트남항공", color:"#00A651" },
  VJ: { name:"비엣젯",     color:"#E4032E" },
  LJ: { name:"진에어",     color:"#12B3AF" },
  ZE: { name:"이스타항공", color:"#EE3124" },
  BX: { name:"에어부산",   color:"#00A6E3" }
};

const TONES = {
  coral:  ["#E2795F", "#EDAA8E"],
  sage:   ["#8FA681", "#BFCFAE"],
  butter: ["#E7BE5C", "#F2D797"],
  sky:    ["#7CA6C7", "#B7D2E4"]
};

const TAPE_COLORS = { coral:"#E2795F", sage:"#8FA681", butter:"#E7BE5C", sky:"#7CA6C7" };

const ICONS = {
  plane: `<svg viewBox="0 0 24 24"><path d="M12 2 L14 9 L21 12 L14 12.5 L12 22 L10 12.5 L3 12 L10 9 Z"/></svg>`,
  sun:   `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>`,
  wave:  `<svg viewBox="0 0 24 24"><path d="M2 15c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/><path d="M2 19c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/></svg>`,
  mountain: `<svg viewBox="0 0 24 24"><path d="M3 19 L9 8 L13 14 L16 10 L21 19 Z"/></svg>`
};

const docIcon = `<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>`;

const TRIPS = [
  {
    order:1, dateLabel:"2023.07.03", title:"다낭", country:"베트남",
    tone:"coral", icon:"sun",
    note:"우리 가족 첫 해외여행",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"images/danang-01.jpg",
    itinerary:[],
    accommodations:[],
    flights:[],
    documents:[]
  },
  {
    order:2, dateLabel:"2023.09.10", title:"후쿠오카", country:"일본",
    tone:"sky", icon:"wave",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"images/fukuoka-2023-02.jpg",
    itinerary:[],
    accommodations:[],
    flights:[],
    documents:[]
  },
  {
    order:3, dateLabel:"2024.05.12", title:"나트랑", country:"베트남",
    tone:"coral", icon:"wave",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"",
    itinerary:[],
    accommodations:[],
    flights:[],
    documents:[]
  },
  {
    order:4, dateLabel:"2024.11.20", title:"미국", country:"미국",
    tone:"butter", icon:"mountain",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"",
    itinerary:[],
    accommodations:[],
    flights:[],
    documents:[]
  },
  {
    order:5, dateLabel:"2025.07.07", title:"오키나와", country:"일본",
    tone:"sky", icon:"sun",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"",
    itinerary:[
      { day:"Day 1", text:"인천→오키나와 이동, 나하공항 도착, 렌트카 픽업, 오키나와 소바 점심, 아시비나 아울렛 쇼핑, 부치 쿠모치점 저녁, 국제거리 돈키호테" },
      { day:"Day 2", text:"추라우미 수족관, 비세마을 후쿠기 가로수길, Ajiro 초밥 점심, 고우리섬 하트록, 힐튼 세소코 리조트 체크인, 세소코 해변 수영, 백년고가 우후야 저녁" },
      { day:"Day 3", text:"부세나 해중공원 글라스보트, 만좌모 관광, 하마노야 점심, 잔파미사키 등대, 베셀호텔 캠파나 체크인, 아메리칸 빌리지·돈키호테 쇼핑, 스테이크하우스88 저녁" },
      { day:"Day 4", text:"우미카지테라스 관광 및 쇼핑, 렌트카 반납, 나하공항 출발, 인천 도착" }
    ],
    accommodations:[
      { name:"JR큐슈 호텔 블로썸 나하", dates:"7/7 ~ 7/8", checkIn:"19:45", image:"", reservationNo:"250610090093FFES1 / 25061009009CA3ES1" },
      { name:"힐튼 오키나와 세소코 리조트", dates:"7/8 ~ 7/9", checkIn:"15:00", image:"", reservationNo:"" },
      { name:"베셀 호텔 캠파나 오키나와", dates:"7/9 ~ 7/10", checkIn:"14:00", image:"", reservationNo:"250610090093FFES1 / 25061009009CA3ES1" }
    ],
    flights:[
      { code:"TW", flightNo:"TW281", route:"인천 → 오키나와(나하)", date:"7/7", time:"11:00–13:35" },
      { code:"TW", flightNo:"TW282", route:"오키나와(나하) → 인천", date:"7/10", time:"14:35–16:55" }
    ],
    documents:[]
  },
  {
    order:6, dateLabel:"2026.06.22", title:"후쿠오카 · 나가사키 · 기타큐슈", country:"일본",
    tone:"sage", icon:"mountain",
    note:"지아, 장모님과 함께한 큐슈 가족여행",
    companions:"아내, 지아, 장모님",
    photoUrl:"",
    detailUrl:"https://kurios0526.github.io/kyushu-trip/후쿠오카_가족여행.html",
    coverImage:"",
    itinerary:[
      { day:"Day 1", text:"후쿠오카 도착, 렌터카 픽업, 우레시노 온천 숙소 이동" },
      { day:"Day 2", text:"우레시노 → 나가사키, 오우라 성당 · 글로버 가든 관광" },
      { day:"Day 3", text:"나가사키 시내, 26 순교자 기념관" },
      { day:"Day 4", text:"고쿠라성, 모지코 레트로 지구" },
      { day:"Day 5", text:"후쿠오카 시내, 공항 이동 후 귀국" }
    ],
    accommodations:[],
    flights:[],
    documents:[]
  }

  // ↓ 새 여행이 생기면 여기 아래에 계속 추가하세요 ↓

];
