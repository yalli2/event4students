// 중고등학생 외부활동 데이터 (2026년 11월 조사 기준)
// 일정은 '예년 기준'이며 매년 바뀔 수 있으므로 반드시 공식 공고를 확인하세요.
// grades: m1~m3 = 중1~중3, h1~h3 = 고1~고3
// level: 1 입문 · 2 중급 · 3 심화 · 4 최상위
// applyMonths: 접수(신청) 시기, eventMonths: 대회·캠프 진행 시기

const EVENTS = [
// ───────────── 국내 · 수학/과학 올림피아드 ─────────────
{
  id:"kmo", name:"한국수학올림피아드 (KMO)", en:"Korean Mathematical Olympiad",
  host:"대한수학회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["수학"], grades:["m1","m2","m3","h1","h2","h3"], level:4,
  prereq:["선발시험"], applyMonths:[3,4], eventMonths:[5,11],
  cost:"응시료 있음", schedule:"예년: 3~4월 접수 → 5월 1차(중등·고등) → 11월 고등부 2차",
  desc:"국제수학올림피아드(IMO) 대표 선발로 이어지는 국내 최고 권위 수학대회. 1차는 20문항 단답형, 2차는 서술형.",
  next:"고등부 2차 상위 → 겨울학교 → IMO 국가대표",
  prep:[
    {when:"D-12개월", task:"중등·고등 심화 과정 정리, 정수·조합·기하·대수 4영역 기초 다지기"},
    {when:"D-6개월", task:"KMO 기출(최근 5년) 풀이 + 시·도 경시, AIME 기출로 실전 감각"},
    {when:"D-3개월", task:"150분 20문항 실전 모의고사 주 1회, 오답노트로 약한 영역 집중"},
    {when:"D-1개월", task:"접수 확인, 시험장·수험표 확인, 시간 배분 연습"}
  ],
  url:"https://www.kmo.or.kr"
},
{
  id:"koi", name:"한국정보올림피아드 (KOI)", en:"Korea Olympiad in Informatics",
  host:"한국비버정보교육연합 (과기정통부 지원)", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["정보·AI","수학"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["선발시험","코딩능력"], applyMonths:[4,5], eventMonths:[5,7],
  cost:"무료(예년)", schedule:"예년: 4~5월 접수 → 1차(온라인, 자택 응시) → 2차 본선",
  desc:"알고리즘 문제해결 대회. 1차는 온라인으로 응시하며 고등부 수상은 국제정보올림피아드(IOI) 계절학교로 연결.",
  next:"고등부 상위 → 계절학교 → IOI 국가대표",
  prep:[
    {when:"D-12개월", task:"C++ 또는 Python 문법 완성, 백준·코드업 기초 100문제"},
    {when:"D-6개월", task:"정렬·탐색·DP·그래프 등 핵심 알고리즘 학습, KOI 기출 풀이"},
    {when:"D-2개월", task:"시간제한 모의 대회(코드포스·AtCoder) 주 1회 참가"},
    {when:"D-2주", task:"온라인 응시환경(기기 2대, 독립 공간) 사전 점검"}
  ],
  url:"https://koi.or.kr"
},
{
  id:"kjso", name:"한국중등과학올림피아드 (KJSO)", en:"Korea Junior Science Olympiad",
  host:"과기정통부·한국과학창의재단 지원", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["과학"], grades:["m1","m2","m3"], level:3,
  prereq:["선발시험","나이제한"], applyMonths:[4,5,6], eventMonths:[7,8,9,10,11,12],
  cost:"무료(교육 과정)", schedule:"2027 과정: 2026.4.20~6.19 접수 → 단계별 교육·선발 → 2027.6 국가대표 6명 → 12월 IJSO",
  desc:"만 15세 이하 대상 물리·화학·생명과학 통합 과학 올림피아드. 온라인·주말학교 교육과 단계별 선발고사로 진행.",
  next:"국제중등과학올림피아드(IJSO) 국가대표",
  prep:[
    {when:"D-6개월", task:"중학 과학 전 범위 + 고등 통합과학 개념 선행"},
    {when:"D-3개월", task:"KJSO 기출 및 IJSO 실러버스 확인, 실험 보고서 작성 연습"},
    {when:"접수기간", task:"일반전형 온라인 지원 또는 영재교육기관 추천서(등기우편) 준비"},
    {when:"선발 후", task:"월 1회 주말학교·온라인 과제 성실 이수 (평가가 다음 단계 진급 기준)"}
  ],
  url:"https://www.kjso.or.kr"
},
{
  id:"kpho", name:"한국물리·화학·생물·지구과학·천문 올림피아드", en:"KPhO · KChO · KBO · KESO · KAO",
  host:"각 분야 학회 (과기정통부·한국과학창의재단 지원)", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["과학"], grades:["m1","m2","m3","h1","h2","h3"], level:4,
  prereq:["선발시험"], applyMonths:[3,4,5], eventMonths:[5,6,7],
  cost:"응시료 분야별 상이", schedule:"예년: 봄 접수 → 상반기 1차 → 여름·겨울학교 → 국가대표 선발",
  desc:"분야별 국제과학올림피아드(IPhO·IChO·IBO·IESO·IOAA) 대표를 뽑는 국내 대회. 중등부·고등부로 운영되는 분야가 많음.",
  next:"계절학교 → 각 국제과학올림피아드",
  prep:[
    {when:"D-12개월", task:"관심 분야 1개 선택, 고교 해당 과목Ⅰ·Ⅱ 선행"},
    {when:"D-6개월", task:"대학 일반물리·일반화학·캠벨 생명과학 등 입문 교재로 심화"},
    {when:"D-3개월", task:"분야별 기출·국제대회 이론문제 풀이, 실험 기본기 점검"},
    {when:"D-1개월", task:"각 학회 홈페이지 공고(대상 학년·범위) 재확인 후 접수"}
  ],
  url:""
},
{
  id:"koai", name:"한국인공지능올림피아드 (KOAI)", en:"Korea Olympiad in AI",
  host:"한국정보기술진흥원", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["선발시험","코딩능력","참가비"], applyMonths:[5,6,7], eventMonths:[7,8,9],
  cost:"참가비 있음", schedule:"2026 첫 개최: 서류·필기·면접 3단계, 중등부·고등부",
  desc:"머신러닝·딥러닝 역량을 평가하는 AI 올림피아드. 국제인공지능올림피아드(IOAI) 대표 파견과 연계(민간 주관).",
  next:"고등부 상위 → IOAI 국가대표",
  prep:[
    {when:"D-6개월", task:"Python·NumPy·Pandas 기초, 고1 수준 확률·통계·행렬 개념"},
    {when:"D-4개월", task:"Scikit-learn·PyTorch로 분류·회귀·이미지 모델 실습 (Kaggle 입문 대회)"},
    {when:"D-2개월", task:"IOAI 공개 문제·실러버스 확인, 서류용 프로젝트 정리"},
    {when:"D-1개월", task:"면접 대비: 내 프로젝트를 3분 안에 설명하는 연습"}
  ],
  url:"https://kitpa.org/koai/2026"
},
{
  id:"geo-olym", name:"전국 지리올림피아드", en:"Korea Geography Olympiad",
  host:"대한지리학회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["인문·사회"], grades:["h1","h2","h3"], level:3,
  prereq:["선발시험"], applyMonths:[3,4], eventMonths:[5,6],
  cost:"응시료 있음", schedule:"예년: 상반기 시험",
  desc:"자연·인문지리 지식과 지도·자료 해석 능력을 겨루는 대회. 국제지리올림피아드(iGeo) 대표 선발과 연계.",
  next:"국가대표 → iGeo",
  prep:[
    {when:"D-6개월", task:"한국지리·세계지리 교과서 정독, 지도 읽기 연습"},
    {when:"D-3개월", task:"iGeo 기출(영문) 자료 해석형 문제 풀이"},
    {when:"D-1개월", task:"기후·지형 그래프 해석, 시사 지리 이슈 정리"}
  ],
  url:""
},
{
  id:"kolo", name:"한국언어학올림피아드", en:"Korea Linguistics Olympiad",
  host:"한국언어학올림피아드 위원회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["영어·외국어","인문·사회"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["선발시험"], applyMonths:[3,4], eventMonths:[5],
  cost:"응시료 있음", schedule:"예년: 상반기 시험",
  desc:"처음 보는 언어의 규칙을 자료만으로 추론하는 퍼즐형 대회. 외국어를 몰라도 논리력으로 도전 가능. 국제언어학올림피아드(IOL) 선발.",
  next:"국가대표 → IOL",
  prep:[
    {when:"D-3개월", task:"IOL·UKLO 공개 기출로 문제 유형(형태론·숫자체계·문자) 익히기"},
    {when:"D-1개월", task:"규칙을 표로 정리하고 근거를 쓰는 서술 연습"}
  ],
  url:""
},
// ───────────── 국내 · 과학탐구 / 발명 / SW ─────────────
{
  id:"kcf", name:"한국코드페어 (SW공모전·해커톤)", en:"Korea Code Fair",
  host:"과학기술정보통신부·한국지능정보사회진흥원", scope:"domestic", mode:"온·오프라인", region:"광주·전라",
  fields:["정보·AI","발명·공학"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["팀구성","작품·연구","코딩능력"], applyMonths:[6,7], eventMonths:[8,10],
  cost:"무료", schedule:"예년: 6~7월 접수 → 8월 예선 → 10월 광주 김대중컨벤션센터 본선",
  desc:"AI·SW로 사회·생활 문제를 해결하는 국내 최대 청소년 SW 대회. SW공모전 은상 이상은 ISEF 한국 대표단 자격.",
  next:"SW공모전 은상 이상 → 미국 ISEF 출전",
  prep:[
    {when:"D-6개월", task:"주변 생활 문제 관찰 노트 작성, 문제 정의 3개 후보 선정"},
    {when:"D-4개월", task:"팀(1~3명) 구성, 앱·웹·하드웨어 프로토타입 제작"},
    {when:"D-2개월", task:"사용자 테스트 → 개선, 작품 요약서·설명서 작성"},
    {when:"본선 전", task:"부스 전시·발표 리허설, 시연 영상 백업"}
  ],
  url:"https://www.kcf.or.kr"
},
{
  id:"science-exhibit", name:"전국과학전람회", en:"National Science Exhibition",
  host:"국립중앙과학관", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["과학","발명·공학"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["작품·연구","지도교사","학교추천"], applyMonths:[3,4,5], eventMonths:[7,8,9],
  cost:"무료", schedule:"예년: 학교·시도 예선(봄~여름) → 전국 본선 심사(가을)",
  desc:"70년 넘은 대표 과학탐구 대회. 1년간 탐구한 연구를 작품으로 출품하며, 시·도 과학전람회를 거쳐 전국 대회로 진출.",
  next:"우수작 → 국제 과학대회 파견 기회",
  prep:[
    {when:"D-12개월", task:"관심 주제 탐색, 지도교사 섭외, 선행연구 조사"},
    {when:"D-9개월", task:"가설·실험 설계, 연구노트(날짜별) 기록 시작"},
    {when:"D-3개월", task:"데이터 분석·그래프, 보고서·전시 패널 작성"},
    {when:"D-1개월", task:"심사 질의응답 연습, 시도 예선 접수 일정 확인"}
  ],
  url:"https://www.science.go.kr"
},
{
  id:"invention-student", name:"대한민국 학생발명전시회", en:"Korea Student Invention Exhibition",
  host:"특허청·한국발명진흥회", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["발명·공학"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["작품·연구"], applyMonths:[4,5], eventMonths:[7,8],
  cost:"무료", schedule:"예년: 봄 접수 → 여름 심사·전시",
  desc:"학생이 직접 고안한 발명품을 출품하는 대회. 생활 속 불편 해결 아이디어로 도전 가능하며 수상작은 특허 출원 지원.",
  next:"수상 → 국제발명전 참가 기회",
  prep:[
    {when:"D-6개월", task:"'불편함 노트' 작성, 특허정보검색(KIPRIS)으로 기존 특허 확인"},
    {when:"D-3개월", task:"시제품(3D프린팅·폼보드) 제작, 발명 설명서 작성"},
    {when:"D-1개월", task:"사진·영상 자료 정리 후 온라인 접수"}
  ],
  url:"https://www.kipa.org"
},
{
  id:"invention-idea", name:"대한민국 청소년 발명아이디어 경진대회", en:"Youth Invention Idea Contest",
  host:"특허청·한국발명진흥회", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["발명·공학"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["없음"], applyMonths:[3,4,5], eventMonths:[6,7,8],
  cost:"무료", schedule:"예년: 상반기 아이디어 접수 → 심사",
  desc:"시제품 없이 아이디어(도면·설명서)만으로 참가할 수 있는 입문형 발명대회. 발명 첫 도전에 적합.",
  next:"학생발명전시회·국제발명대회로 확장",
  prep:[
    {when:"D-2개월", task:"발명기법(더하기·빼기·용도변경) 익히기, 아이디어 10개 발산"},
    {when:"D-1개월", task:"1개 선정 → 손도면·설명서 작성, 선행특허 확인"}
  ],
  url:"https://www.kipa.org"
},
{
  id:"student-invention", name:"전국학생과학발명품경진대회", en:"National Student Science Invention Contest",
  host:"국립중앙과학관", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["발명·공학","과학"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["작품·연구","학교추천"], applyMonths:[3,4], eventMonths:[5,6,7],
  cost:"무료", schedule:"예년: 시도 예선(봄) → 전국 본선(여름)",
  desc:"과학 원리를 활용한 발명품 대회. 시·도 대회를 거쳐 전국 대회로 진출.",
  next:"우수작 → 국제 발명·과학대회",
  prep:[
    {when:"D-6개월", task:"과학 원리 기반 문제 해결 아이디어 선정"},
    {when:"D-3개월", task:"작품 제작·작동 테스트, 작품 설명서 작성"},
    {when:"D-1개월", task:"학교·시도 예선 접수, 발표 연습"}
  ],
  url:"https://www.science.go.kr"
},
{
  id:"ksef", name:"대한민국과학기술경진대회 (KSEF)", en:"Korea Science & Engineering Fair",
  host:"한국과학기술지원단(KSS)", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["과학","발명·공학","정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["작품·연구","참가비"], applyMonths:[10,11], eventMonths:[12],
  cost:"참가비 있음", schedule:"예년: 가을 접수 → 12월 대회",
  desc:"12개 분야 과학·공학 연구 발표 대회. 해외 학생도 참가하는 국제 부문이 있고, ISEF 진출 통로 중 하나.",
  next:"우수작 → ISEF 등 국제대회",
  prep:[
    {when:"D-6개월", task:"연구 주제 확정 및 실험·제작"},
    {when:"D-2개월", task:"영문 초록·포스터 준비(국제 부문 대비)"},
    {when:"D-1개월", task:"심사위원 Q&A 리허설"}
  ],
  url:""
},
{
  id:"hs-ai-sw", name:"대한민국 고등학생 AI·SW 개발 공모전", en:"Korea High School AI·SW Dev Contest",
  host:"한국인공지능·소프트웨어산업협회", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["정보·AI"], grades:["h1","h2","h3"], level:2,
  prereq:["코딩능력"], applyMonths:[8,9], eventMonths:[10,11],
  cost:"무료", schedule:"2026: 8.18~9.27 예선 접수(이메일) → 10월 결과 → 11.24 본선",
  desc:"자유주제 웹·앱 솔루션을 개발하는 고교생 공모전. 개인 또는 4인 이내 팀. 대상은 과기정통부장관상.",
  next:"포트폴리오·코드페어 연계",
  prep:[
    {when:"D-4개월", task:"웹(HTML/JS) 또는 앱(Flutter 등) 기본기, 팀 역할 분담"},
    {when:"D-2개월", task:"MVP 완성, GitHub에 코드·README 정리"},
    {when:"D-2주", task:"예선 제출 서류·시연 영상 제작"}
  ],
  url:"https://www.sw.or.kr"
},
{
  id:"samsung-junior", name:"삼성 주니어 SW·AI 창작대회", en:"Samsung Junior SW·AI Contest",
  host:"삼성전자", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["팀구성"], applyMonths:[4,5,6], eventMonths:[7,8,9,10],
  cost:"무료", schedule:"예년: 상반기 아이디어 접수 → 본선 교육(디자인 씽킹 등) → 가을 시상",
  desc:"아이디어 단계부터 참가해 본선에서 교육·멘토링을 받으며 작품을 완성하는 '과정형' 대회. 입문자도 도전 가능.",
  next:"SW 포트폴리오",
  prep:[
    {when:"D-2개월", task:"엔트리·스크래치 또는 Python 기초, 문제 아이디어 정리"},
    {when:"D-1개월", task:"아이디어 기획서(문제·해결·기대효과) 작성"}
  ],
  url:""
},
{
  id:"yisf", name:"청소년 정보보호 페스티벌 (YISF)", en:"Youth Information Security Festival",
  host:"순천향대학교 정보보호학과", scope:"domestic", mode:"온·오프라인", region:"대전·충청",
  fields:["정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["코딩능력"], applyMonths:[6,7], eventMonths:[8],
  cost:"무료(예년)", schedule:"예년: 여름 온라인 예선 CTF → 본선",
  desc:"청소년 대상 해킹방어(CTF) 대회. 웹·리버싱·암호 문제를 풀며 보안 역량을 겨룸.",
  next:"보안 영재 프로그램·대학 보안 캠프",
  prep:[
    {when:"D-4개월", task:"리눅스 명령어, Python, 웹 기초(HTTP) 학습"},
    {when:"D-2개월", task:"Dreamhack 등 워게임 사이트에서 입문 문제 30개"}
  ],
  url:""
},
{
  id:"frc", name:"FIRST 로보틱스 (FLL·FTC) 코리아", en:"FIRST LEGO League / Tech Challenge Korea",
  host:"FIRST Korea", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["발명·공학","정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["팀구성","지도교사","참가비"], applyMonths:[8,9], eventMonths:[11,12,1,2],
  cost:"팀 등록비·로봇 키트 비용", schedule:"예년: 가을 시즌 과제 공개 → 겨울 국내 대회 → 우승팀 국제대회",
  desc:"팀이 1시즌 동안 로봇을 설계·제작하고 코딩해 경기하는 국제 로봇대회의 한국 대회. FLL은 중학생, FTC는 중·고교생 중심.",
  next:"국내 우승 → 미국 FIRST Championship",
  prep:[
    {when:"D-6개월", task:"팀(3~10명)·코치 구성, 레고 SPIKE 또는 REV 키트 확보"},
    {when:"D-3개월", task:"시즌 미션 분석 → 로봇 설계·자율주행 코딩"},
    {when:"D-1개월", task:"엔지니어링 노트북·프레젠테이션 정리"}
  ],
  url:""
},
{
  id:"wro", name:"WRO 세계로봇올림피아드 한국대회", en:"World Robot Olympiad Korea",
  host:"WRO 한국위원회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["발명·공학","정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["팀구성","지도교사","참가비"], applyMonths:[5,6], eventMonths:[7,8],
  cost:"참가비·키트 비용", schedule:"예년: 봄 주제 공개 → 여름 국내 선발 → 가을~겨울 세계대회",
  desc:"2~3인 팀이 로봇 미션·미래혁신 프로젝트 등 부문에 참가. 연령별(주니어·시니어) 부문이 나뉨.",
  next:"국내 상위 → WRO 세계대회",
  prep:[
    {when:"D-4개월", task:"부문 선택(RoboMission·Future Innovators 등), 팀·코치 구성"},
    {when:"D-2개월", task:"공식 경기장 매트로 반복 주행 연습"}
  ],
  url:"https://wro-association.org"
},
// ───────────── 국내 · 인문 / 글쓰기 / 언어 / 경제 ─────────────
{
  id:"daesan", name:"대산청소년문학상", en:"Daesan Youth Literary Award",
  host:"대산문화재단·교보문고", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["글쓰기·논술","예술·음악"], grades:["h1","h2","h3"], level:3,
  prereq:["작품·연구"], applyMonths:[5,6], eventMonths:[7,8],
  cost:"무료", schedule:"예년: 5~6월 원고 접수 → 여름 문학캠프(본심) → 시상",
  desc:"고등학생 대상 시·소설 부문 대표 청소년 문학상. 예심 통과자는 문학캠프에 참가해 현장 창작을 함께 함.",
  next:"문예창작 진로 포트폴리오",
  prep:[
    {when:"D-6개월", task:"역대 수상작 읽기, 매주 습작 1편"},
    {when:"D-2개월", task:"퇴고·합평(국어 선생님·독서동아리)"},
    {when:"D-2주", task:"분량·형식 규정 확인 후 접수"}
  ],
  url:"https://www.daesan.or.kr"
},
{
  id:"sf-story", name:"동아사이언스 SF스토리 공모전", en:"Dong-A Science SF Story Contest",
  host:"동아사이언스·과학동아", scope:"domestic", mode:"온라인", region:"온라인",
  fields:["글쓰기·논술","과학"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["작품·연구"], applyMonths:[9,10,11], eventMonths:[12],
  cost:"무료", schedule:"2026: 8.31~11.8 접수",
  desc:"과학적 상상력을 담은 SF 단편을 모집하는 공모전. 과학 관심과 글쓰기를 함께 보여줄 수 있음.",
  next:"과학 글쓰기 포트폴리오",
  prep:[
    {when:"D-2개월", task:"최근 과학 뉴스 1개를 출발점으로 '만약 ~라면' 설정 만들기"},
    {when:"D-1개월", task:"초고 → 과학적 사실 검증 → 퇴고"}
  ],
  url:"https://www.dongascience.com"
},
{
  id:"dele-escolares", name:"DELE para escolares (청소년 스페인어 인증시험)", en:"DELE A1/A2-B1 para escolares",
  host:"세르반테스 문화원 (Instituto Cervantes)", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["영어·외국어"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["외국어능력","참가비"], applyMonths:[3,4,9,10], eventMonths:[5,11],
  cost:"응시료 있음", schedule:"예년: 5월·11월 시험(접수는 약 2개월 전 마감)",
  desc:"만 11~17세 대상 공식 스페인어 능력 인증(A1, A2/B1). 평생 유효하며 외국어 대회·국제교류 지원 시 증빙으로 활용.",
  next:"DELE B2 → 스페인어권 교류·대회",
  prep:[
    {when:"D-6개월", task:"레벨 진단 후 목표(A2/B1) 설정, 교재 1권 완독"},
    {when:"D-3개월", task:"읽기·듣기·쓰기·말하기 4영역 기출 모의고사"},
    {when:"D-1개월", task:"말하기 시험(사진 묘사·대화) 실전 연습"}
  ],
  url:"https://seul.cervantes.es"
},
{
  id:"econ-hs", name:"전국 고교생 경제한마당", en:"National High School Economics Contest",
  host:"한국경제신문", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["경제·창업","인문·사회"], grades:["h1","h2","h3"], level:2,
  prereq:["선발시험"], applyMonths:[9,10], eventMonths:[11],
  cost:"응시료 있음(예년)", schedule:"예년: 가을 접수 → 11~12월 시험",
  desc:"경제 이해력(TESAT형)을 겨루는 고교생 대상 경제 경시. 개인·단체(학교) 부문.",
  next:"경제·경영 진로 활동",
  prep:[
    {when:"D-3개월", task:"고교 통합사회·경제 교과서 경제 단원 정리"},
    {when:"D-1개월", task:"경제 신문 주 3회 읽고 용어 정리, 기출 풀이"}
  ],
  url:""
},
{
  id:"bizcool", name:"청소년 비즈쿨 (창업 동아리·캠프)", en:"Youth Biz-Cool",
  host:"중소벤처기업부·창업진흥원", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["경제·창업"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["학교추천"], applyMonths:[2,3], eventMonths:[4,5,6,7,8,9,10,11],
  cost:"무료", schedule:"매년 비즈쿨 지정학교에서 동아리·캠프·페스티벌 운영",
  desc:"기업가정신 교육과 창업 동아리 활동. 지정 학교 학생이 주로 참여하며 일부 캠프는 공개 모집.",
  next:"청소년 창업 경진대회·국제 창업대회",
  prep:[
    {when:"학기 초", task:"우리 학교가 비즈쿨 학교인지 확인, 동아리 가입"},
    {when:"활동 중", task:"린 캔버스로 아이템 정리, 시제품·피칭 연습"}
  ],
  url:"https://www.k-startup.go.kr"
},
{
  id:"youth-startup-olym", name:"국제 유스 창업 올림피아드", en:"International Youth Startup Olympiad",
  host:"창업 관련 기관 공동 주최", scope:"domestic", mode:"온라인", region:"온라인",
  fields:["경제·창업"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["팀구성"], applyMonths:[5,6,7], eventMonths:[8,9],
  cost:"공고 확인", schedule:"2026: 5.18~7.27 모집, 중고등 부문(개인 또는 최대 3인 팀)",
  desc:"창업 관련 전 분야 자유공모로 국내외 중·고등학생이 참가하는 창업 아이디어 대회.",
  next:"Conrad Challenge·Diamond Challenge 등 국제 창업대회",
  prep:[
    {when:"D-2개월", task:"문제-고객-해결책 정의, 시장 조사"},
    {when:"D-1개월", task:"사업계획서·피칭 자료 작성"}
  ],
  url:""
},
{
  id:"wsc", name:"월드 스칼라스 컵 (World Scholar's Cup)", en:"World Scholar's Cup",
  host:"World Scholar's Cup", scope:"intl", mode:"오프라인", region:"국내→해외",
  fields:["토론·리더십","영어·외국어","인문·사회"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["팀구성","외국어능력","참가비"], applyMonths:[1,2,3], eventMonths:[3,4,5,6,7,8,11],
  cost:"등록비·여행비", schedule:"예년: 국내(서울 등) 지역 라운드 → 글로벌 라운드 → 예일대 결선(11월)",
  desc:"3인 팀이 영어로 토론·협동 에세이·퀴즈(Scholar's Bowl)에 참가. 매년 바뀌는 주제 커리큘럼을 공부. 주니어(~14세)·시니어 부문.",
  next:"글로벌 라운드 → Tournament of Champions(예일대)",
  prep:[
    {when:"D-4개월", task:"3인 팀 구성, 올해 주제·커리큘럼 자료 다운로드"},
    {when:"D-2개월", task:"과목별 분담 학습, 영어 토론 주 1회 연습"},
    {when:"D-1개월", task:"협동 에세이 시간제한 연습, 퀴즈 기출"}
  ],
  url:"https://www.scholarscup.org"
},
{
  id:"mun-kr", name:"국내 모의유엔 (MUN) 대회", en:"Model United Nations (Korea)",
  host:"대학·국제학교·청소년단체 등", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["토론·리더십","영어·외국어","인문·사회"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["외국어능력","참가비"], applyMonths:[1,2,6,7,9,10], eventMonths:[3,4,8,11,12],
  cost:"참가비 대회별", schedule:"연중 여러 대회(방학·학기 중)",
  desc:"각국 대표가 되어 국제 이슈를 영어로 토의하고 결의안을 작성. 국제학교·대학 주최 대회가 많음.",
  next:"해외 MUN (THIMUN·HMUN 등)",
  prep:[
    {when:"D-2개월", task:"위원회·배정국가 확정, 국가 입장 리서치"},
    {when:"D-1개월", task:"Position Paper 작성, 오프닝 스피치(1분) 연습"},
    {when:"D-1주", task:"절차 규칙(RoP)·결의안 형식 숙지"}
  ],
  url:""
},
{
  id:"youth-council", name:"청소년특별회의 (정책 제안)", en:"Youth Special Council",
  host:"성평등가족부(구 여성가족부)·한국청소년정책연구원 등", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["토론·리더십","인문·사회"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["선발시험"], applyMonths:[2,3], eventMonths:[4,5,6,7,8,9,10,11],
  cost:"무료", schedule:"예년: 시·도별 위원 모집(봄) → 연중 정책 의제 활동 → 본회의",
  desc:"청소년이 직접 정책 과제를 발굴·제안하는 국가 청소년 참여기구. 시·도별 위원으로 활동.",
  next:"청소년 참여위원회·청소년의회",
  prep:[
    {when:"모집 전", task:"관심 청소년 정책 이슈 1~2개 정리"},
    {when:"지원 시", task:"지원동기·정책 아이디어 작성, 면접 준비"}
  ],
  url:""
},
// ───────────── 국내 · 캠프 / 교류 / 봉사 / 체험 ─────────────
{
  id:"gifted-univ", name:"대학부설 과학영재교육원", en:"University Gifted Education Centers",
  host:"전국 대학 (과기정통부·교육청 지원)", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["과학","수학","정보·AI"], grades:["m1","m2","m3","h1"], level:3,
  prereq:["선발시험","학교추천"], applyMonths:[8,9,10,11], eventMonths:[3,4,5,6,7,8,9,10,11,12],
  cost:"대부분 무료", schedule:"예년: 가을 모집·선발 → 다음 해 3월~12월 주말·방학 수업",
  desc:"대학 교수진이 운영하는 1년 과정 영재교육. 관찰·추천과 영재성 검사·면접으로 선발. 연구·탐구 경험을 쌓기 좋음.",
  next:"사사과정 → 연구 기반 대회(과학전람회·ISEF)",
  prep:[
    {when:"모집 2개월 전", task:"거주 지역 대학 영재교육원 모집 공고·분야 확인"},
    {when:"모집 시", task:"GED(영재교육 종합 데이터베이스) 지원서 작성, 담임 추천"},
    {when:"선발 전", task:"창의적 문제해결·탐구설계 문항 연습, 면접 준비"}
  ],
  url:"https://ged.kedi.re.kr"
},
{
  id:"space-camp", name:"국립청소년우주센터 우주캠프", en:"National Youth Space Center Camp",
  host:"한국청소년활동진흥원", scope:"domestic", mode:"오프라인", region:"광주·전라",
  fields:["과학","진로·캠프"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["없음","참가비"], applyMonths:[5,6,11,12], eventMonths:[1,2,7,8],
  cost:"저렴(공공요금)", schedule:"방학 중 캠프(여름·겨울), 학기 중 학교단체",
  desc:"전남 고흥의 국립 수련시설에서 우주·항공 체험, 천체 관측, 로켓 제작 등을 하는 숙박형 캠프.",
  next:"천문올림피아드·과학탐구 동기 부여",
  prep:[
    {when:"모집 공고 시", task:"선착순 신청(빠르게 마감), 참가 동의서"},
    {when:"참가 후", task:"체험 보고서·사진 정리 → 학교 진로활동 기록 활용"}
  ],
  url:"https://www.kywa.or.kr"
},
{
  id:"kywa-exchange", name:"국가간 청소년 교류 (해외 파견)", en:"International Youth Exchange",
  host:"성평등가족부(구 여성가족부)·한국청소년활동진흥원", scope:"intl", mode:"오프라인", region:"아시아",
  fields:["봉사·국제교류","토론·리더십"], grades:["h1","h2","h3"], level:2,
  prereq:["선발시험","외국어능력","여권"], applyMonths:[4,5], eventMonths:[7,8,9,10,11],
  cost:"대부분 정부 지원", schedule:"예년: 4~5월 공개 모집 → 사전교육 → 하반기 약 10일 파견",
  desc:"정부가 선발한 청소년 대표단이 협정국에 파견되어 문화교류·정책토론을 하는 프로그램. 만 15세 이상 중심.",
  next:"국제회의·청소년 해외봉사단",
  prep:[
    {when:"D-6개월", task:"영어 회화 연습, 한국 문화 소개 공연·발표 준비"},
    {when:"모집 시", task:"자기소개서(교류 목표), 면접 준비, 여권 유효기간 확인"}
  ],
  url:"https://www.kywa.or.kr"
},
{
  id:"local-exchange", name:"지자체 청소년 국제교류단", en:"City Youth Exchange Programs",
  host:"각 시·군·구청 (자매도시 교류)", scope:"intl", mode:"오프라인", region:"국가별 상이",
  fields:["봉사·국제교류"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["거주지","여권"], applyMonths:[3,4,5], eventMonths:[7,8],
  cost:"일부 자부담", schedule:"예년: 봄 모집 → 여름방학 파견 (예: 남양주시 몽골 울란바타르 6개국 청소년 캠프)",
  desc:"거주 지자체가 자매도시로 청소년을 파견하는 교류. 경쟁이 비교적 낮고 비용 지원이 큼. 해당 지역 거주자만 가능.",
  next:"국가간 청소년 교류",
  prep:[
    {when:"매년 3월", task:"우리 시·구청 누리집에서 '청소년 국제교류' 공고 검색"},
    {when:"모집 시", task:"자기소개서, 간단한 영어 면접 준비"}
  ],
  url:""
},
{
  id:"award-korea", name:"국제청소년성취포상제", en:"Duke of Edinburgh's International Award Korea",
  host:"한국청소년활동진흥원", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["봉사·국제교류","체육","진로·캠프"], grades:["m2","m3","h1","h2","h3"], level:1,
  prereq:["나이제한"], applyMonths:[1,2,3,4,5,6,7,8,9,10,11,12], eventMonths:[1,2,3,4,5,6,7,8,9,10,11,12],
  cost:"입회비 소액",
  schedule:"연중 상시 입회 (만 14~24세)",
  desc:"봉사·자기개발·신체단련·탐험 4영역을 스스로 계획해 6개월~수년간 수행하면 동·은·금장을 받는 140여 개국 공통 포상제.",
  next:"금장 → 국제 포상식",
  prep:[
    {when:"시작 시", task:"지도자(학교·수련관) 찾기, 4영역 목표 세우기"},
    {when:"매주", task:"영역별 활동 1시간 이상 수행 → 온라인 기록"},
    {when:"탐험 전", task:"팀 계획서·안전교육, 1박 2일 탐험활동"}
  ],
  url:"https://www.kywa.or.kr"
},
{
  id:"dovol", name:"청소년 자원봉사 (두볼 DOVOL·1365)", en:"Youth Volunteering",
  host:"한국청소년활동진흥원·행정안전부", scope:"domestic", mode:"온·오프라인", region:"전국",
  fields:["봉사·국제교류"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["없음"], applyMonths:[1,2,3,4,5,6,7,8,9,10,11,12], eventMonths:[1,2,3,4,5,6,7,8,9,10,11,12],
  cost:"무료", schedule:"연중 상시",
  desc:"청소년 전용 봉사활동 검색·신청 포털. 지역 수련관·복지관의 정기 봉사부터 방학 봉사캠프까지 찾을 수 있음.",
  next:"성취포상제 봉사 영역·해외봉사",
  prep:[
    {when:"상시", task:"관심 분야(교육·환경·노인 등) 정해 1곳에서 '지속적'으로 활동"},
    {when:"활동 후", task:"봉사 소감·배운 점 기록 (단순 시간보다 동기·변화가 중요)"}
  ],
  url:"https://www.dovol.net"
},
{
  id:"youth-art", name:"대한민국청소년미술대전", en:"Korea Youth Art Competition",
  host:"한국청소년미술협회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["예술·음악"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["작품·연구","참가비"], applyMonths:[4,5,6], eventMonths:[7,8],
  cost:"출품료 있음", schedule:"예년: 상반기 작품 접수 → 심사·전시",
  desc:"회화·디자인·조소 등 청소년 미술 작품 공모. 미술 진로 학생의 수상 실적·포트폴리오.",
  next:"미대 실기 포트폴리오",
  prep:[
    {when:"D-3개월", task:"부문·규격 확인, 주제 스케치 여러 안"},
    {when:"D-1개월", task:"작품 완성, 촬영·제출 준비"}
  ],
  url:""
},
{
  id:"music-concours", name:"청소년 음악 콩쿠르 (이화경향 등)", en:"Youth Music Competitions",
  host:"언론사·대학·음악협회", scope:"domestic", mode:"오프라인", region:"서울·수도권",
  fields:["예술·음악"], grades:["m1","m2","m3","h1","h2","h3"], level:3,
  prereq:["작품·연구","참가비"], applyMonths:[3,4,8,9], eventMonths:[5,6,10,11],
  cost:"참가비 있음", schedule:"대회별 상이(예선·본선)",
  desc:"악기·성악 부문 학생 콩쿠르. 지정곡·자유곡 연주로 심사.",
  next:"국제 청소년 콩쿠르",
  prep:[
    {when:"D-6개월", task:"지정곡 확인, 레슨 선생님과 곡 선정"},
    {when:"D-1개월", task:"무대 리허설·녹음 모니터링"}
  ],
  url:""
},
{
  id:"sonyeon-sports", name:"전국소년체육대회", en:"National Junior Sports Festival",
  host:"대한체육회", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["체육"], grades:["m1","m2","m3"], level:3,
  prereq:["학교추천","선발시험"], applyMonths:[3,4], eventMonths:[5],
  cost:"무료", schedule:"예년: 5월 개최(시·도 대표 선발전 후)",
  desc:"초·중학생 종목별 국내 최대 체육대회. 시·도 대표로 선발되어야 출전. 학교 운동부·클럽 선수 대상.",
  next:"전국체전·청소년 국가대표",
  prep:[
    {when:"상시", task:"학교·지역 클럽 소속으로 종목 훈련"},
    {when:"D-2개월", task:"시·도 대표 선발전 일정 확인"}
  ],
  url:"https://www.sports.or.kr"
},
{
  id:"univ-major-camp", name:"대학 전공체험 캠프 (방학)", en:"University Major Experience Camps",
  host:"각 대학 입학처·학과", scope:"domestic", mode:"오프라인", region:"전국",
  fields:["진로·캠프"], grades:["m3","h1","h2"], level:1,
  prereq:["없음"], applyMonths:[6,7,12,1], eventMonths:[7,8,1,2],
  cost:"무료~소액", schedule:"여름·겨울방학 (모집은 방학 1~2개월 전)",
  desc:"대학이 고교생에게 전공 수업·실험·멘토링을 체험시키는 캠프. 진로 탐색과 세특 연계 탐구 주제 발굴에 유용.",
  next:"관련 탐구대회·전공 독서",
  prep:[
    {when:"방학 2개월 전", task:"관심 전공 3개 정하고 대학 입학처 공지 확인"},
    {when:"참가 후", task:"배운 내용으로 후속 탐구 질문 1개 만들기"}
  ],
  url:""
},
// ───────────── 국외 · 과학 / 수학 / 정보 ─────────────
{
  id:"isef", name:"국제과학기술경진대회 (Regeneron ISEF)", en:"Regeneron International Science & Engineering Fair",
  host:"Society for Science (미국)", scope:"intl", mode:"오프라인", region:"미국",
  fields:["과학","발명·공학","정보·AI"], grades:["m3","h1","h2","h3"], level:4,
  prereq:["작품·연구","학교추천","선발시험","외국어능력","여권"], applyMonths:[10,11,12], eventMonths:[5],
  cost:"국가 대표 선발 시 지원", schedule:"ISEF 2027: 2027.5.8~14 미국 LA. 한국 대표는 코드페어·KSEF 등 국내 대회로 선발",
  desc:"60여 개국 약 1,800명이 참가하는 세계 최대 고교생 과학연구 대회. 직접 참가 신청은 불가하고 국내 제휴 대회 수상으로 대표가 됨.",
  next:"세계 최고 수준 연구 실적",
  prep:[
    {when:"D-18개월", task:"1년 이상 지속할 연구 주제 확정, 지도교사·멘토 확보"},
    {when:"D-12개월", task:"한국코드페어·KSEF 등 제휴 국내대회 출품"},
    {when:"D-4개월", task:"ISEF 규정 서류(Forms), 영문 논문·포스터 작성"},
    {when:"D-1개월", task:"영어 심사 인터뷰 집중 연습"}
  ],
  url:"https://www.societyforscience.org/isef/"
},
{
  id:"amc", name:"AMC 8 / AMC 10·12 (미국수학경시)", en:"American Mathematics Competitions",
  host:"MAA (미국수학협회)", scope:"intl", mode:"오프라인", region:"국내→해외",
  fields:["수학"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["외국어능력","참가비"], applyMonths:[8,9,10], eventMonths:[11,1],
  cost:"응시료(국내 시험센터·국제학교)", schedule:"예년: AMC 10·12는 11월, AMC 8은 1월 (국내 공식 시험장 응시)",
  desc:"영어로 된 객관식 수학경시. AMC 8은 중2 이하, AMC 10은 고1 이하, AMC 12는 고3 이하. 상위권은 AIME 진출.",
  next:"AIME → USAMO(미국 학생)",
  prep:[
    {when:"D-6개월", task:"AoPS 교재·Alcumus로 영어 수학 용어 익히기"},
    {when:"D-3개월", task:"최근 10년 기출 시간제한(AMC 10: 75분 25문항) 풀이"},
    {when:"D-2개월", task:"국내 시험센터·국제학교 응시 등록"}
  ],
  url:"https://maa.org/student-programs/amc/"
},
{
  id:"cemc", name:"워털루대 수학경시 (Pascal·Cayley·Fermat·Euclid)", en:"CEMC Math Contests (Univ. of Waterloo)",
  host:"캐나다 워털루대 CEMC", scope:"intl", mode:"오프라인", region:"국내→해외",
  fields:["수학"], grades:["m3","h1","h2","h3"], level:2,
  prereq:["외국어능력","참가비"], applyMonths:[11,12,1], eventMonths:[2,4],
  cost:"응시료(공인 센터)", schedule:"예년: Pascal(9학년)·Cayley(10)·Fermat(11)는 2월, Euclid(12)는 4월",
  desc:"학년별로 나뉜 국제 수학경시. 공인 시험센터·국제학교에서 응시. Euclid는 워털루대 입학 참고 자료.",
  next:"Euclid → 캐나다 대학 진학 참고",
  prep:[
    {when:"D-3개월", task:"CEMC 사이트의 무료 기출·해설로 학습"},
    {when:"D-2개월", task:"국내 응시 가능 센터 확인 후 등록"}
  ],
  url:"https://cemc.uwaterloo.ca/contests"
},
{
  id:"usaco", name:"USACO (미국 정보올림피아드 온라인)", en:"USA Computing Olympiad",
  host:"USACO", scope:"intl", mode:"온라인", region:"온라인",
  fields:["정보·AI"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["코딩능력","외국어능력"], applyMonths:[12,1,2,3], eventMonths:[12,1,2,3],
  cost:"무료", schedule:"예년: 12월~3월 매월 1회 온라인 대회(주말 중 원하는 시간 4~5시간)",
  desc:"누구나 무료로 참가하는 온라인 알고리즘 대회. Bronze→Silver→Gold→Platinum 승급제로 실력 측정에 좋음.",
  next:"KOI·코드포스 레이팅",
  prep:[
    {when:"D-3개월", task:"USACO Guide(무료)의 Bronze 과정 완주"},
    {when:"D-1개월", task:"Bronze 기출 10회 풀이, 영어 문제 독해 연습"}
  ],
  url:"https://usaco.org"
},
{
  id:"breakthrough", name:"Breakthrough Junior Challenge", en:"Breakthrough Junior Challenge",
  host:"Breakthrough Prize Foundation", scope:"intl", mode:"온라인", region:"온라인",
  fields:["과학","수학","영어·외국어"], grades:["m2","m3","h1","h2","h3"], level:3,
  prereq:["외국어능력","작품·연구","나이제한"], applyMonths:[4,5,6], eventMonths:[9,10,11,12],
  cost:"무료", schedule:"예년: 4~6월 접수 → 하반기 심사·발표",
  desc:"만 13~18세가 물리·생명과학·수학의 개념이나 이론을 3분 이내 영어 영상으로 설명하는 대회. 우승 시 대규모 장학금.",
  next:"과학 커뮤니케이션 포트폴리오",
  prep:[
    {when:"D-3개월", task:"설명할 핵심 개념 1개 선정, 역대 수상 영상 분석"},
    {when:"D-2개월", task:"대본(영어) 작성 → 원어민·선생님 검토"},
    {when:"D-1개월", task:"촬영·편집(자막, 시각자료), 3분 이내로 압축"}
  ],
  url:"https://breakthroughjuniorchallenge.org"
},
{
  id:"spaceapps", name:"NASA Space Apps Challenge", en:"NASA International Space Apps Challenge",
  host:"NASA", scope:"intl", mode:"온·오프라인", region:"온라인",
  fields:["정보·AI","과학"], grades:["m1","m2","m3","h1","h2","h3"], level:2,
  prereq:["팀구성","외국어능력"], applyMonths:[8,9], eventMonths:[10],
  cost:"무료", schedule:"예년: 10월 초 48시간 해커톤(국내 지역 행사 또는 온라인)",
  desc:"NASA 공개 데이터로 과제를 해결하는 세계 최대 해커톤. 미성년자는 보호자 동의 필요.",
  next:"글로벌 수상 → NASA 방문 기회",
  prep:[
    {when:"D-1개월", task:"팀(최대 6명) 구성, 지난 과제 목록 살펴보기"},
    {when:"D-1주", task:"NASA 오픈데이터 다루는 법(Python) 연습"}
  ],
  url:"https://www.spaceappschallenge.org"
},
// ───────────── 국외 · 에세이 / 인문 / 토론 ─────────────
{
  id:"john-locke", name:"John Locke Institute 글로벌 에세이 대회", en:"John Locke Global Essay Prize",
  host:"John Locke Institute (영국 옥스퍼드)", scope:"intl", mode:"온라인", region:"영국·유럽",
  fields:["글쓰기·논술","인문·사회","경제·창업"], grades:["m2","m3","h1","h2","h3"], level:4,
  prereq:["외국어능력","나이제한"], applyMonths:[2,3], eventMonths:[4,5,10],
  cost:"무료(기한 후 늦은 접수만 유료)", schedule:"2026 기준: 2월 주제 공개·등록(~3.31) → 4~5월 제출(~5.31) → 10월 런던 시상",
  desc:"철학·정치·경제·역사·법 등 분야의 영어 논증 에세이(최대 2,000단어). 만 19세 미만, 만 15세 미만은 주니어 부문.",
  next:"옥스브리지·미국 명문대 지원 시 학술 역량 증빙",
  prep:[
    {when:"D-4개월", task:"영어 논증 에세이 구조(주장-반론-재반론) 학습"},
    {when:"2월", task:"주제 공개 즉시 1개 선택, 3월 말까지 반드시 등록"},
    {when:"D-2개월", task:"학술 자료 조사 후 초고 → 지도교사 피드백 2회"},
    {when:"D-2주", task:"인용 형식·AI 사용 규정 확인, PDF 제출"}
  ],
  url:"https://www.johnlockeinstitute.com/essay-competition"
},
{
  id:"immerse-essay", name:"Immerse Education 에세이 대회", en:"Immerse Education Essay Competition",
  host:"Immerse Education (영국)", scope:"intl", mode:"온라인", region:"영국·유럽",
  fields:["글쓰기·논술","인문·사회","과학"], grades:["m2","m3","h1","h2","h3"], level:2,
  prereq:["외국어능력","나이제한"], applyMonths:[3,4,5,6], eventMonths:[7],
  cost:"무료", schedule:"예년: 상반기 접수",
  desc:"만 13~18세 대상, 원하는 전공 분야 질문에 영어 에세이로 답하는 대회. 수상 시 옥스퍼드·케임브리지 여름 프로그램 장학금.",
  next:"영국 대학 여름학교",
  prep:[
    {when:"D-2개월", task:"관심 전공 질문 선택, 참고문헌 3~5개 읽기"},
    {when:"D-1개월", task:"초고 → 퇴고, 글자 수 규정 확인"}
  ],
  url:"https://www.immerse.education"
},
{
  id:"concord", name:"The Concord Review (역사 논문 게재)", en:"The Concord Review",
  host:"The Concord Review (미국)", scope:"intl", mode:"온라인", region:"미국",
  fields:["글쓰기·논술","인문·사회"], grades:["h1","h2","h3"], level:4,
  prereq:["외국어능력","작품·연구","참가비"], applyMonths:[1,2,3,4,5,6,7,8,9,10,11,12], eventMonths:[1,2,3,4,5,6,7,8,9,10,11,12],
  cost:"제출비 있음", schedule:"연중 상시 투고",
  desc:"고등학생이 쓴 영어 역사 연구 논문을 심사해 게재하는 학술지. 장기 연구 프로젝트로 도전.",
  next:"역사·인문 연구 실적",
  prep:[
    {when:"D-6개월", task:"역사 주제 선정, 1차 사료·학술서 조사"},
    {when:"D-2개월", task:"5,000단어 이상 논문 작성, 각주 형식(Chicago) 정리"}
  ],
  url:"https://www.tcr.org"
},
{
  id:"mun-intl", name:"해외 모의유엔 (THIMUN·HMUN 등)", en:"International MUN Conferences",
  host:"THIMUN 재단·하버드 국제관계협회 등", scope:"intl", mode:"오프라인", region:"국가별 상이",
  fields:["토론·리더십","영어·외국어"], grades:["h1","h2","h3"], level:3,
  prereq:["외국어능력","팀구성","참가비","여권","지도교사"], applyMonths:[6,7,8,9], eventMonths:[1,2,3,11],
  cost:"등록비·항공·숙박 (고비용)", schedule:"대회별 상이 (주로 학교 대표단 단위 등록)",
  desc:"전 세계 학생이 모이는 국제 모의유엔. 대부분 학교·단체 대표단으로 등록하므로 학교 MUN 동아리 경험이 필요.",
  next:"국제관계·정치 진로",
  prep:[
    {when:"D-12개월", task:"국내 MUN 2회 이상 참가 경험 쌓기"},
    {when:"D-6개월", task:"학교·단체 대표단 구성, 지도교사 확보"},
    {when:"D-2개월", task:"Position Paper·결의안 초안 준비"}
  ],
  url:""
},
// ───────────── 국외 · 창업 / 경제 ─────────────
{
  id:"conrad", name:"Conrad Challenge (STEM 혁신·창업)", en:"Conrad Challenge",
  host:"Space Center Houston (미국)", scope:"intl", mode:"온·오프라인", region:"미국",
  fields:["경제·창업","발명·공학","과학"], grades:["m3","h1","h2","h3"], level:3,
  prereq:["팀구성","지도교사","외국어능력","나이제한"], applyMonths:[9,10], eventMonths:[1,4],
  cost:"초기 단계 무료, 결선 단계부터 비용 발생", schedule:"2026-27: 1단계 Activation 10.30 → 2단계 Innovation 2027.1.8 → 결선 2027.4.21~24 휴스턴",
  desc:"만 13~18세 2~5인 팀이 우주·에너지·건강 등 분야의 혁신 제품을 기획하고 사업화하는 대회. 성인 코치 필요.",
  next:"Pete Conrad Scholar·창업 실적",
  prep:[
    {when:"D-2개월", task:"팀·코치 구성, 카테고리 선택, Lean Canvas 작성"},
    {when:"D-1개월", task:"Activation 단계 제출(10월 말)"},
    {when:"11~12월", task:"프로토타입·3~5분 영상·웹사이트 제작 (1월 초 마감)"}
  ],
  url:"https://www.conradchallenge.org"
},
{
  id:"diamond", name:"Diamond Challenge (청소년 창업대회)", en:"Diamond Challenge",
  host:"미국 델라웨어대 Horn Entrepreneurship", scope:"intl", mode:"온·오프라인", region:"미국",
  fields:["경제·창업"], grades:["h1","h2","h3"], level:2,
  prereq:["팀구성","외국어능력","나이제한"], applyMonths:[10,11,12], eventMonths:[2,3,4],
  cost:"무료", schedule:"예년: 가을~12월 온라인 제출 → 봄 지역 피치 → 4월 결선",
  desc:"만 14~18세 2~4인 팀이 비즈니스·사회혁신 아이디어를 영어로 제안하는 국제 창업대회.",
  next:"창업 실적·장학금",
  prep:[
    {when:"D-3개월", task:"공식 무료 커리큘럼으로 기업가정신 학습"},
    {when:"D-1개월", task:"콘셉트 설명서·피치 영상 제작"}
  ],
  url:"https://diamondchallenge.org"
},
{
  id:"wharton-invest", name:"Wharton 글로벌 고교 투자대회", en:"Wharton Global High School Investment Competition",
  host:"미국 펜실베이니아대 와튼스쿨", scope:"intl", mode:"온라인", region:"온라인",
  fields:["경제·창업"], grades:["h1","h2","h3"], level:2,
  prereq:["팀구성","지도교사","외국어능력"], applyMonths:[8,9], eventMonths:[9,10,11,12],
  cost:"무료", schedule:"예년: 9월 등록 → 10주 가상 포트폴리오 운용 → 보고서 → 결선",
  desc:"4~7인 팀이 가상 자금 10만 달러로 고객 맞춤 투자 전략을 세우는 시뮬레이션 대회. 지도교사 필요.",
  next:"경제·금융 진로",
  prep:[
    {when:"D-2개월", task:"Wharton Global Youth 무료 금융 학습 자료 읽기"},
    {when:"D-1개월", task:"팀·교사 등록, 주식·ETF·분산투자 기본 개념 정리"}
  ],
  url:"https://globalyouth.wharton.upenn.edu"
},
// ───────────── 국외 · 여름 프로그램 / 연구 / 리더십 ─────────────
{
  id:"yygs", name:"Yale Young Global Scholars (YYGS)", en:"Yale Young Global Scholars",
  host:"미국 예일대", scope:"intl", mode:"온·오프라인", region:"미국",
  fields:["토론·리더십","인문·사회","과학","진로·캠프"], grades:["h1","h2"], level:3,
  prereq:["외국어능력","선발시험","참가비","여권"], applyMonths:[11,12,1], eventMonths:[6,7,8],
  cost:"수강료 있음(장학금·재정지원 제도)", schedule:"예년: 가을~1월 지원 → 3월 발표 → 여름 2주 세션",
  desc:"고1~고2(현지 10~11학년)를 위한 예일대 2주 학술·리더십 프로그램. 정치·과학·사회문제 등 트랙별 강의와 캡스톤.",
  next:"미국 대학 지원 시 학술 경험",
  prep:[
    {when:"D-3개월", task:"트랙 선택, 영어 에세이(관심사·공동체) 초안"},
    {when:"D-1개월", task:"추천서(교사) 요청, 성적표 영문본 준비"},
    {when:"마감 전", task:"재정지원 신청 여부 결정"}
  ],
  url:"https://globalscholars.yale.edu"
},
{
  id:"rsi", name:"Research Science Institute (RSI)", en:"Research Science Institute (MIT)",
  host:"Center for Excellence in Education · MIT", scope:"intl", mode:"오프라인", region:"미국",
  fields:["과학","수학","정보·AI"], grades:["h2"], level:4,
  prereq:["외국어능력","선발시험","작품·연구","여권"], applyMonths:[11,12,1], eventMonths:[6,7,8],
  cost:"무료(선발 시)", schedule:"예년: 겨울 지원 → 6~8월 MIT 6주 연구",
  desc:"세계 최고 난도의 고교생 연구 프로그램. 고2(현지 11학년) 대상, 국제 학생은 국가별 소수 선발. 올림피아드·연구 실적 필수 수준.",
  next:"세계적 연구 경력",
  prep:[
    {when:"고1 내내", task:"국가 올림피아드·과학연구 실적 쌓기"},
    {when:"D-3개월", task:"국제 학생 지원 경로 확인, 연구계획 에세이 작성"}
  ],
  url:"https://www.cee.org/programs/research-science-institute"
},
{
  id:"ssp", name:"Summer Science Program (SSP)", en:"Summer Science Program",
  host:"SSP (미국 대학 캠퍼스)", scope:"intl", mode:"오프라인", region:"미국",
  fields:["과학","수학"], grades:["h1","h2"], level:4,
  prereq:["외국어능력","선발시험","참가비","여권"], applyMonths:[12,1,2], eventMonths:[6,7],
  cost:"비용 있음(재정지원 제도)", schedule:"예년: 1~2월 지원 마감 → 여름 5~6주",
  desc:"천체물리(소행성 궤도 계산)·생화학 등 실제 연구 프로젝트를 수행하는 기숙 프로그램. 국제 학생 지원 가능.",
  next:"연구 실적",
  prep:[
    {when:"D-6개월", task:"미적분·물리 기초, Python 학습"},
    {when:"D-2개월", task:"지원 에세이·추천서 준비"}
  ],
  url:"https://summerscience.org"
},
{
  id:"ross", name:"Ross Mathematics Program", en:"Ross Mathematics Program",
  host:"Ross Program (미국)", scope:"intl", mode:"오프라인", region:"미국",
  fields:["수학"], grades:["m3","h1","h2"], level:4,
  prereq:["외국어능력","선발시험","참가비","여권"], applyMonths:[1,2,3], eventMonths:[6,7,8],
  cost:"비용 있음(장학금)", schedule:"예년: 봄 지원(입학 문제 풀이 제출) → 여름 6주",
  desc:"정수론을 증명 중심으로 깊게 탐구하는 여름 수학 캠프. 지원 시 제출하는 '입학 문제' 풀이가 핵심.",
  next:"수학 연구·올림피아드",
  prep:[
    {when:"D-3개월", task:"증명 쓰기 연습(How to Prove It 등)"},
    {when:"D-1개월", task:"공개된 지원 문제 풀이를 영어로 작성"}
  ],
  url:"https://rossprogram.org"
},
{
  id:"rise", name:"Rise (글로벌 인재 장학 프로그램)", en:"Rise for the World",
  host:"Schmidt Futures · Rhodes Trust", scope:"intl", mode:"온·오프라인", region:"국가별 상이",
  fields:["토론·리더십","봉사·국제교류","진로·캠프"], grades:["m3","h1","h2"], level:4,
  prereq:["외국어능력","작품·연구","나이제한"], applyMonths:[9,10,11,12,1], eventMonths:[3,4,5,7,8],
  cost:"무료 (선발 시 장학 지원)", schedule:"예년: 가을~1월 온라인 지원 → 봄 프로젝트·면접 → 여름 글로벌 서밋",
  desc:"만 15~17세 대상, 사회에 도움이 되는 프로젝트를 만들어 지원하는 글로벌 인재 프로그램. 선발 시 장기 장학·멘토링.",
  next:"평생 지원 네트워크",
  prep:[
    {when:"D-4개월", task:"지역 문제를 해결하는 작은 프로젝트(앱·캠페인·연구) 시작"},
    {when:"D-1개월", task:"영어 지원 에세이·영상 준비"}
  ],
  url:"https://www.risefortheworld.org"
},
{
  id:"bowseat", name:"Ocean Awareness Contest (바다 주제 예술·글)", en:"Bow Seat Ocean Awareness Contest",
  host:"Bow Seat Ocean Awareness Programs (미국)", scope:"intl", mode:"온라인", region:"온라인",
  fields:["예술·음악","글쓰기·논술","과학"], grades:["m1","m2","m3","h1","h2","h3"], level:1,
  prereq:["외국어능력","작품·연구"], applyMonths:[3,4,5,6], eventMonths:[6,7,8,9],
  cost:"무료", schedule:"예년: 연간 주제 공개 → 6월 마감",
  desc:"만 11~18세가 해양·기후 주제로 미술·글·영상·음악 작품을 제출하는 국제 공모. 영어 설명문 필요, 상금 있음.",
  next:"환경·예술 포트폴리오",
  prep:[
    {when:"D-3개월", task:"올해 주제 확인, 관련 과학 자료 조사"},
    {when:"D-1개월", task:"작품 완성 + 영어 작가노트 작성"}
  ],
  url:"https://bowseat.org"
}
];

// 분야별 공통 준비활동 로드맵
const ROADMAPS = {
  "수학":["교과 심화 → 경시 입문(시·도 경시, AMC 8/10)","KMO·AMC 기출 시간제한 풀이","증명 서술 연습(AoPS, 영어 증명)","오답노트·영역별 약점 관리","대회 후 풀이 정리 → 탐구 보고서로 확장"],
  "과학":["관심 분야 1개 정해 교과 심화·대학 입문서","연구노트 습관(날짜·가설·결과)","학교 동아리·영재교육원에서 탐구 경험","시·도 과학전람회 → 국제대회로 단계 상승","영문 초록·포스터 작성 연습"],
  "정보·AI":["Python 또는 C++ 문법 완성","백준·USACO Guide로 알고리즘","GitHub에 프로젝트·README 정리","해커톤 1회 이상 참가 경험","AI: Kaggle 입문 대회로 데이터 다루기"],
  "발명·공학":["'불편함 노트'로 아이디어 수집","KIPRIS로 기존 특허 조사","3D프린팅·아두이노로 시제품","발명 설명서·도면 작성법","팀 로봇대회로 협업 경험"],
  "인문·사회":["주제별 독서(고전+시사) 월 2권","신문 칼럼 요약·반론 쓰기","지역 문제 조사 → 정책 제안서","모의유엔·토론 동아리 활동","영문 학술 에세이 1편 완성"],
  "글쓰기·논술":["매주 습작 1편, 장르 정하기","역대 수상작 분석","영어 논증 에세이 구조(주장-반론-재반론)","합평·첨삭 받기(교사·동아리)","마감 2주 전 완성 → 퇴고"],
  "영어·외국어":["공인 인증(DELE·TOEFL Junior 등)으로 수준 증빙","말하기: 주 1회 1분 스피치 녹음","영어 토론·MUN으로 실전 경험","제2외국어 원서·뉴스 읽기","국제교류 지원 대비 자기소개 영어 버전"],
  "토론·리더십":["학생회·동아리 임원 경험","입론-반론 구조 토론 연습","국내 MUN·WSC 참가","정책 제안·캠페인 직접 기획","리더십 경험을 STAR 형식으로 기록"],
  "경제·창업":["경제 신문 주 3회, 용어 정리","린 캔버스로 아이디어 구조화","비즈쿨·창업 동아리 참여","피칭(3분) 영상 만들기","국내 대회 → Conrad·Diamond 도전"],
  "예술·음악":["포트폴리오 주제·스타일 정하기","공모전 규격·출품료 미리 확인","작품 촬영·기록(고해상도)","작가노트(한·영) 작성","전시·연주회 경험 쌓기"],
  "봉사·국제교류":["지속적 봉사처 1곳(장기 활동)","봉사 소감·변화 기록","성취포상제로 체계화","지자체 교류 → 국가 교류로 확장","여권 미리 발급, 영어 자기소개 준비"],
  "체육":["학교·클럽 소속 정기 훈련","시·도 선발전 일정 파악","부상 관리·체력 기록","성취포상제 신체단련 영역 연계"],
  "진로·캠프":["관심 전공 3개 정하기","방학 2개월 전 캠프 공고 확인","참가 후 후속 탐구 질문 만들기","체험 보고서로 학교 기록 연계"]
};
