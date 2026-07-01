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
   documents    : 항공권/예약 스캔본 등. [{ label:"항공권", url:"..." }, ...]
                  (스캔 이미지는 구글드라이브/구글포토에 올린 뒤 공유 링크를
                   url 자리에 붙여넣으시면 됩니다)
   coverImage   : 대표 사진 URL (비워두면 색깔 아이콘이 대신 표시됩니다)
============================================================= */

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
    coverImage:"",
    itinerary:[],
    documents:[]
  },
  {
    order:2, dateLabel:"2023.09.10", title:"후쿠오카", country:"일본",
    tone:"sky", icon:"wave",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"",
    itinerary:[],
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
    documents:[]
  },
  {
    order:5, dateLabel:"2025.07.07", title:"오키나와", country:"일본",
    tone:"sky", icon:"sun",
    note:"",
    companions:"",
    photoUrl:"", detailUrl:"",
    coverImage:"",
    itinerary:[],
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
    documents:[]
  }

  // ↓ 새 여행이 생기면 여기 아래에 계속 추가하세요 ↓

];
