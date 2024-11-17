const questions = [
  {
    no: 1,
    a: "Spontan, Fleksibel, tidak diikat waktu",
    b: "Terencana dan memiliki deadline jelas",
    group: 1,
  },
  {
    no: 2,
    a: "Lebih memilih berkomunikasi dengan menulis",
    b: "Lebih memilih berkomunikasi dengan bicara",
    group: 1,
  },
  {
    no: 3,
    a: "Tidak menyukai hal-hal yang bersifat mendadak dan di luar perencanaan",
    b: "Perubahan mendadak tidak jadi masalah",
    group: 1,
  },
  { no: 4, a: "Obyektif", b: "Subyektif", group: 1 },
  {
    no: 5,
    a: "Menemukan dan mengembangkan ide dengan mendiskusikannya",
    b: "Menemukan dan mengembangkan ide dengan merenungkan",
    group: 1,
  },
  {
    no: 6,
    a: "Bergerak dari gambaran umum baru ke detail",
    b: "Bergerak dari detail ke gambaran umum sebagai kesimpulan akhir",
    group: 1,
  },
  {
    no: 7,
    a: "Berorientasi pada dunia eksternal (kegiatan, orang)",
    b: "Berorientasi pada dunia internal (memori, pemikiran, ide)",
    group: 1,
  },
  {
    no: 8,
    a: "Berbicara mengenai masalah yang dihadapi hari ini dan langkah-langkah praktis mengatasinya",
    b: "Berbicara mengenai visi masa depan dan konsep-konsep mengenai visi tersebut",
    group: 1,
  },
  {
    no: 9,
    a: "Diyakinkan dengan penjelasan yang menyentuh perasaan",
    b: "Diyakinkan dengan penjelasan yang masuk akal",
    group: 1,
  },
  {
    no: 10,
    a: "Fokus pada sedikit hobi namun mendalam",
    b: "Fokus pada banyak hobi secara luas dan umum",
    group: 1,
  },
  { no: 11, a: "Tertutup dan mandiri", b: "Sosial dan ekspresif", group: 1 },
  {
    no: 12,
    a: "Aturan, jadwal dan target sangat mengikat dan membebani",
    b: "Aturan, jadwal dan target akan sangat membantu dan memperjelas tindakan",
    group: 1,
  },
  {
    no: 13,
    a: "Menggunakan pengalaman sebagai pedoman",
    b: "Menggunakan imajinasi dan perenungan sebagai pedoman",
    group: 1,
  },
  {
    no: 14,
    a: "Berorientasi tugas dan job description",
    b: "Berorientasi pada manusia dan hubungan",
    group: 1,
  },
  {
    no: 15,
    a: "Pertemuan dengan orang lain dan aktivitas sosial melelahkan",
    b: "Bertemu orang dan aktivitas sosial membuat bersemangat",
    group: 1,
  },
  { no: 16, a: "SOP sangat membantu", b: "SOP sangat membosankan", group: 2 },
  {
    no: 17,
    a: "Mengambil keputusan berdasar logika dan aturan main",
    b: "Mengambil keputusan berdasar perasaan pribadi dan kondisi orang lain",
    group: 2,
  },
  { no: 18, a: "Bebas dan dinamis", b: "Prosedural dan tradisional", group: 2 },
  {
    no: 19,
    a: "Berorientasi pada hasil",
    b: "Berorientasi pada proses",
    group: 2,
  },
  {
    no: 20,
    a: "Beraktifitas sendirian di rumah menyenangkan",
    b: "Beraktifitas sendirian di rumah membosankan",
    group: 2,
  },
  {
    no: 21,
    a: "Membiarkan orang lain bertindak bebas asalkan tujuan tercapai",
    b: "Mengatur orang lain dengan tata tertib agar tujuan tercapai",
    group: 2,
  },
  {
    no: 22,
    a: "Memilih ide inspiratif lebih penting daripada fakta",
    b: "Memilih fakta lebih penting daripada ide inspiratif",
    group: 2,
  },
  {
    no: 23,
    a: "Mengemukakan tujuan dan sasaran lebih dahulu",
    b: "Mengemukakan kesepakatan terlebih dahulu",
    group: 2,
  },
  {
    no: 24,
    a: "Fokus pada target dan mengabaikan hal-hal baru",
    b: "Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target",
    group: 2,
  },
  {
    no: 25,
    a: "Kontinuitas dan stabilitas lebih diutamakan",
    b: "Perubahan dan variasi lebih diutamakan",
    group: 2,
  },
  {
    no: 26,
    a: "Pendirian masih bisa berubah tergantung situasi nantinya",
    b: "Berpegang teguh pada pendirian",
    group: 2,
  },
  {
    no: 27,
    a: "Bertindak step by step dengan timeframe yang jelas",
    b: "Bertindak dengan semangat tanpa menggunakan timeframe",
    group: 2,
  },
  {
    no: 28,
    a: "Berinisiatif tinggi hampir dalam berbagai hal meskipun tidak berhubungan dengan dirinya",
    b: "Berinisiatif bila situasi memaksa atau berhubungan dengan kepentingan sendiri",
    group: 2,
  },
  {
    no: 29,
    a: "Lebih memilih tempat yang tenang dan pribadi untuk berkonsentrasi",
    b: "Lebih memilih tempat yang ramai dan banyak interaksi / aktifitas",
    group: 2,
  },
  { no: 30, a: "Menganalisa", b: "Berempati", group: 2 },
  {
    no: 31,
    a: "Berpikir secara matang sebelum bertindak",
    b: "Berani bertindak tanpa terlalu lama berfikir",
    group: 3,
  },
  {
    no: 32,
    a: "Menghargai seseorang karena sifat dan perilakunya",
    b: "Menghargai seseorang karena skill dan faktor teknis",
    group: 3,
  },
  {
    no: 33,
    a: "Merasa nyaman bila situasi tetap terbuka terhadap pilihan-pilihan lain",
    b: "Merasa tenang bila semua sudah diputuskan",
    group: 3,
  },
  {
    no: 34,
    a: "Menarik kesimpulan dengan lama dan hati-hati",
    b: "menarik kesimpulan dengan cepat sesuai naluri",
    group: 3,
  },
  {
    no: 35,
    a: "Mengekspresikan semangat",
    b: "Menyimpan semangat dalam hati",
    group: 3,
  },
  {
    no: 36,
    a: "Mengklarifikasi ide dan teori sebelum dipraktekkan",
    b: "Memahami ide dan teori saat mempraktekkannya langsung",
    group: 3,
  },
  {
    no: 37,
    a: "Melibatkan perasaan itu tidak profesional",
    b: "Terlalu kaku pada peraturan dan pekerjaan itu kejam",
    group: 3,
  },
  {
    no: 38,
    a: "Mencari kesempatan untuk berkomunikasi secara perorangan",
    b: "Memilih berkomunikasi pada sekelompok orang",
    group: 3,
  },
  {
    no: 39,
    a: "Yang penting situasi harmonis terjaga",
    b: "Yang penting tujuan tercapai",
    group: 3,
  },
  {
    no: 40,
    a: "Ketidakpastian itu seru, menegangkan dan membuat hati lebih senang",
    b: "Ketidakpastian membuat bingung dan meresahkan",
    group: 3,
  },
  {
    no: 41,
    a: "Berfokus pada masa kini (apa yang bisa diperbaiki sekarang)",
    b: "Berfokus pada masa depan (apa yang mungkin dicapai di masa depan)",
    group: 3,
  },
  { no: 42, a: "Mempertanyakan", b: "Mengakomodasi", group: 3 },
  {
    no: 43,
    a: "Secara konsisten mengamati dan mengingat detail",
    b: "Mengamati dan mengingat detail hanya bila berhubungan dengan pola",
    group: 3,
  },
  {
    no: 44,
    a: "Situasi last minute membuat bersemangat dan memunculkan potensi",
    b: "Situasi last minute sangat menyiksa, membuat stress dan merupakan kesalahan",
    group: 3,
  },
  {
    no: 45,
    a: "Lebih suka komunikasi tidak langsung (telp, surat, e-mail)",
    b: "Lebih suka komunikasi langsung (tatap muka)",
    group: 3,
  },
  { no: 46, a: "Praktis", b: "Konseptual", group: 4 },
  {
    no: 47,
    a: "Perubahan adalah musuh",
    b: "Perubahan adalah semangat hidup",
    group: 4,
  },
  {
    no: 48,
    a: "Sering dianggap keras kepala",
    b: "Sering dianggap terlalu memihak",
    group: 4,
  },
  {
    no: 49,
    a: "Bersemangat saat menolong orang keluar dari kesalahan dan meluruskan",
    b: "Bersemangat saat mengkritik dan menemukan kesalahan",
    group: 4,
  },
  {
    no: 50,
    a: "Bertindak sesuai situasi dan kondisi yang terjadi saat itu",
    b: "Bertindak sesuai apa yang sudah direncanakan",
    group: 4,
  },
  {
    no: 51,
    a: "Menggunakan keterampilan yang sudah dikuasai",
    b: "Menyukai tantangan untuk menguasai keterampilan baru",
    group: 4,
  },
  {
    no: 52,
    a: "Membangun ide pada saat berbicara",
    b: "Membangun ide dengan matang baru membicarakannya",
    group: 4,
  },
  {
    no: 53,
    a: "Memilih cara yang sudah ada dan sudah terbukti",
    b: "Memilih cara yang unik dan belum dipraktekkan orang lain",
    group: 4,
  },
  {
    no: 54,
    a: "Hidup harus sudah diatur dari awal",
    b: "Hidup seharusnya mengalir sesuai kondisi",
    group: 4,
  },
  {
    no: 55,
    a: "Standar harus ditegakkan di atas segalanya (itu menunjukkan kehormatan dan harga diri)",
    b: "Perasaan manusia lebih penting dari sekadar standar (yang adalah benda mati)",
    group: 4,
  },
  {
    no: 56,
    a: "Daftar dan checklist adalah panduan penting",
    b: "Daftar dan checklist adalah tugas dan beban",
    group: 4,
  },
  {
    no: 57,
    a: "Menuntut perlakuan yang adil dan sama pada semua orang",
    b: "Menuntut perlakuan khusus sesuai karakteristik masing-masing orang",
    group: 4,
  },
  {
    no: 58,
    a: "Mementingkan sebab-akibat",
    b: "Mementingkan nilai-nilai personal",
    group: 4,
  },
  {
    no: 59,
    a: "Puas ketika mampu beradaptasi dengan momentum yang terjadi",
    b: "Puas ketika mampu menjalankan semuanya sesuai rencana",
    group: 4,
  },
  {
    no: 60,
    a: "Spontan, Easy Going, fleksibel",
    b: "Berhati-hati, penuh pertimbangan, kaku",
    group: 4,
  },
];

const questionsDiv = document.getElementById("questions");
const resultDiv = document.getElementById("result");

// Dynamically generate questions
questions.forEach((q) => {
  const row = document.createElement("tr");

  const noCell = document.createElement("td");
  noCell.textContent = q.no;
  row.appendChild(noCell);

  const aCell = document.createElement("td");
  aCell.textContent = q.a;
  row.appendChild(aCell);

  const aRadioCell = document.createElement("td");
  aRadioCell.innerHTML = `<input type="radio" name="q${q.no}" value="a" required>`;
  row.appendChild(aRadioCell);

  const bRadioCell = document.createElement("td");
  bRadioCell.innerHTML = `<input type="radio" name="q${q.no}" value="b" required>`;
  row.appendChild(bRadioCell);

  const bCell = document.createElement("td");
  bCell.textContent = q.b;
  row.appendChild(bCell);

  questionsDiv.appendChild(row);
});

// Calculate results
document.getElementById("submit-btn").addEventListener("click", () => {
  const answers = Array.from(
    new FormData(document.getElementById("quiz-form")).entries()
  );
  const groups = {
    1: { a: 0, b: 0 },
    2: { a: 0, b: 0 },
    3: { a: 0, b: 0 },
    4: { a: 0, b: 0 },
  };

  answers.forEach(([key, value], index) => {
    const group = questions[index].group;
    groups[group][value]++;
  });

  const results = [
    groups[1].a > groups[1].b ? "I" : "E",
    groups[2].a > groups[2].b ? "S" : "N",
    groups[3].a > groups[3].b ? "T" : "F",
    groups[4].a > groups[4].b ? "J" : "P",
  ];

  resultDiv.textContent = `Your MBTI Type is: ${results.join("")}`;
});
