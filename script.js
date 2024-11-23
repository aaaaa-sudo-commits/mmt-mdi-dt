const questions = [
  {
    no: 1,
    a: "Spontan, Fleksibel, tidak diikat waktu",
    b: "Terencana dan memiliki deadline jelas",
    result: { a: "P", b: "J" },
  },
  {
    no: 2,
    a: "Lebih memilih berkomunikasi dengan menulis",
    b: "Lebih memilih berkomunikasi dengan bicara",
    result: { a: "I", b: "E" },
  },
  {
    no: 3,
    a: "Tidak menyukai hal-hal yang bersifat mendadak dan di luar perencanaan",
    b: "Perubahan mendadak tidak jadi masalah",
    result: { a: "J", b: "P" },
  },
  { no: 4, a: "Objektif", b: "Subyektif", result: { a: "T", b: "F" } },
  {
    no: 5,
    a: "Menemukan dan mengembangkan ide dengan mendiskusikannya",
    b: "Menemukan dan mengembangkan ide dengan merenungkan",
    result: { a: "E", b: "I" },
  },
  {
    no: 6,
    a: "Bergerak dari gambaran umum baru ke detail",
    b: "Bergerak dari detail ke gambaran umum sebagai kesimpulan akhir",
    result: { a: "N", b: "S" },
  },
  {
    no: 7,
    a: "Berorientasi pada dunia eksternal (kegiatan, orang)",
    b: "Berorientasi pada dunia internal (memori, pemikiran, ide)",
    result: { a: "E", b: "I" },
  },
  {
    no: 8,
    a: "Berbicara mengenai masalah yang dihadapi hari ini dan langkah-langkah praktis mengatasinya",
    b: "Berbicara mengenai visi masa depan dan konsep-konsep mengenai visi tersebut",
    result: { a: "S", b: "N" },
  },
  {
    no: 9,
    a: "Diyakinkan dengan penjelasan yang menyentuh perasaan",
    b: "Diyakinkan dengan penjelasan yang masuk akal",
    result: { a: "F", b: "T" },
  },
  {
    no: 10,
    a: "Fokus pada sedikit hobi namun mendalam",
    b: "Fokus pada banyak hobi secara luas dan umum",
    result: { a: "I", b: "E" },
  },
  {
    no: 11,
    a: "Tertutup dan mandiri",
    b: "Sosial dan ekspresif",
    result: { a: "I", b: "E" },
  },
  {
    no: 12,
    a: "Aturan, jadwal dan target sangat mengikat dan membebani",
    b: "Aturan, jadwal dan target akan sangat membantu dan memperjelas tindakan",
    result: { a: "P", b: "J" },
  },
  {
    no: 13,
    a: "Menggunakan pengalaman sebagai pedoman",
    b: "Menggunakan imajinasi dan perenungan sebagai pedoman",
    result: { a: "S", b: "N" },
  },
  {
    no: 14,
    a: "Berorientasi tugas dan job description",
    b: "Berorientasi pada manusia dan hubungan",
    result: { a: "T", b: "F" },
  },
  {
    no: 15,
    a: "Pertemuan dengan orang lain dan aktivitas sosial melelahkan",
    b: "Bertemu orang dan aktivitas sosial membuat bersemangat",
    result: { a: "I", b: "E" },
  },
  {
    no: 16,
    a: "SOP sangat membantu",
    b: "SOP sangat membosankan",
    result: { a: "S", b: "N" },
  },
  {
    no: 17,
    a: "Mengambil keputusan berdasar logika dan aturan main",
    b: "Mengambil keputusan berdasar perasaan pribadi dan kondisi orang lain",
    result: { a: "T", b: "F" },
  },
  {
    no: 18,
    a: "Bebas dan dinamis",
    b: "Prosedural dan tradisional",
    result: { a: "N", b: "S" },
  },
  {
    no: 19,
    a: "Berorientasi pada hasil",
    b: "Berorientasi pada proses",
    result: { a: "J", b: "P" },
  },
  {
    no: 20,
    a: "Beraktifitas sendirian di rumah menyenangkan",
    b: "Beraktifitas sendirian di rumah membosankan",
    result: { a: "I", b: "E" },
  },
  {
    no: 21,
    a: "Membiarkan orang lain bertindak bebas asalkan tujuan tercapai",
    b: "Mengatur orang lain dengan tata tertib agar tujuan tercapai",
    result: { a: "P", b: "J" },
  },
  {
    no: 22,
    a: "Memilih ide inspiratif lebih penting daripada fakta",
    b: "Memilih fakta lebih penting daripada ide inspiratif",
    result: { a: "N", b: "S" },
  },
  {
    no: 23,
    a: "Mengemukakan tujuan dan sasaran lebih dahulu",
    b: "Mengemukakan kesepakatan terlebih dahulu",
    result: { a: "T", b: "F" },
  },
  {
    no: 24,
    a: "Fokus pada target dan mengabaikan hal-hal baru",
    b: "Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target",
    result: { a: "J", b: "P" },
  },
  {
    no: 25,
    a: "Kontinuitas dan stabilitas lebih diutamakan",
    b: "Perubahan dan variasi lebih diutamakan",
    result: { a: "S", b: "N" },
  },
  {
    no: 26,
    a: "Pendirian masih bisa berubah tergantung situasi nantinya",
    b: "Berpegang teguh pada pendirian",
    result: { a: "P", b: "J" },
  },
  {
    no: 27,
    a: "Bertindak step by step dengan timeframe yang jelas",
    b: "Bertindak dengan semangat tanpa menggunakan timeframe",
    result: { a: "S", b: "N" },
  },
  {
    no: 28,
    a: "Berinisiatif tinggi hampir dalam berbagai hal meskipun tidak berhubungan dengan dirinya",
    b: "Berinisiatif bila situasi memaksa atau berhubungan dengan kepentingan sendiri",
    result: { a: "E", b: "I" },
  },
  {
    no: 29,
    a: "Lebih memilih tempat yang tenang dan pribadi untuk berkonsentrasi",
    b: "Lebih memilih tempat yang ramai dan banyak interaksi / aktivitas",
    result: { a: "I", b: "E" },
  },
  { no: 30, a: "Menganalisa", b: "Berempati", result: { a: "T", b: "F" } },
  {
    no: 31,
    a: "Berpikir secara matang sebelum bertindak",
    b: "Berani bertindak tanpa terlalu lama berfikir",
    result: { a: "I", b: "E" },
  },
  {
    no: 32,
    a: "Menghargai seseorang karena sifat dan perilakunya",
    b: "Menghargai seseorang karena skill dan faktor teknis",
    result: { a: "F", b: "T" },
  },
  {
    no: 33,
    a: "Merasa nyaman bila situasi tetap terbuka terhadap pilihan-pilihan lain",
    b: "Merasa tenang bila semua sudah diputuskan",
    result: { a: "P", b: "J" },
  },
  {
    no: 34,
    a: "Menarik kesimpulan dengan lama dan hati-hati",
    b: "Menarik kesimpulan dengan cepat sesuai naluri",
    result: { a: "S", b: "N" },
  },
  {
    no: 35,
    a: "Mengekspresikan semangat",
    b: "Menyimpan semangat dalam hati",
    result: { a: "E", b: "I" },
  },
  {
    no: 36,
    a: "Mengklarifikasi ide dan teori sebelum dipraktekkan",
    b: "Memahami ide dan teori saat mempraktekkannya langsung",
    result: { a: "S", b: "N" },
  },
  {
    no: 37,
    a: "Melibatkan perasaan itu tidak profesional",
    b: "Terlalu kaku pada peraturan dan pekerjaan itu kejam",
    result: { a: "T", b: "F" },
  },
  {
    no: 38,
    a: "Mencari kesempatan untuk berkomunikasi secara perorangan",
    b: "Memilih berkomunikasi pada sekelompok orang",
    result: { a: "I", b: "E" },
  },
  {
    no: 39,
    a: "Yang penting situasi harmonis terjaga",
    b: "Yang penting tujuan tercapai",
    result: { a: "F", b: "T" },
  },
  {
    no: 40,
    a: "Ketidakpastian itu seru, menegangkan dan membuat hati lebih senang",
    b: "Ketidakpastian membuat bingung dan meresahkan",
    result: { a: "P", b: "J" },
  },
  {
    no: 41,
    a: "Berfokus pada masa kini (apa yang bisa diperbaiki sekarang)",
    b: "Berfokus pada masa depan (apa yang mungkin dicapai di masa depan)",
    result: { a: "S", b: "N" },
  },
  {
    no: 42,
    a: "Mempertanyakan",
    b: "Mengakomodasi",
    result: { a: "T", b: "F" },
  },
  {
    no: 43,
    a: "Secara konsisten mengamati dan mengingat detail",
    b: "Mengamati dan mengingat detail hanya bila berhubungan dengan pola",
    result: { a: "S", b: "N" },
  },
  {
    no: 44,
    a: "Situasi last minute membuat bersemangat dan memunculkan potensi",
    b: "Situasi last minute sangat menyiksa, membuat stress dan merupakan kesalahan",
    result: { a: "P", b: "J" },
  },
  {
    no: 45,
    a: "Lebih suka komunikasi tidak langsung (telp, surat, e-mail)",
    b: "Lebih suka komunikasi langsung (tatap muka)",
    result: { a: "I", b: "E" },
  },
  {
    no: 46,
    a: "Praktis",
    b: "Konseptual",
    result: { a: "N", b: "N" },
  },
  {
    no: 47,
    a: "Perubahan adalah musuh",
    b: "Perubahan adalah semangat hidup",
    result: { a: "J", b: "P" },
  },
  {
    no: 48,
    a: "Sering dianggap keras kepala",
    b: "Sering dianggap terlalu memihak",
    result: { a: "T", b: "F" },
  },
  {
    no: 49,
    a: "Bersemangat saat menolong orang keluar dari kesalahan dan meluruskan",
    b: "Bersemangat saat mengkritik dan menemukan kesalahan",
    result: { a: "F", b: "T" },
  },
  {
    no: 50,
    a: "Bertindak sesuai situasi dan kondisi yang terjadi saat itu",
    b: "Bertindak sesuai apa yang sudah direncanakan",
    result: { a: "P", b: "J" },
  },
  {
    no: 51,
    a: "Menggunakan keterampilan yang sudah dikuasai",
    b: "Menyukai tantangan untuk menguasai keterampilan baru",
    result: { a: "F", b: "N" },
  },
  {
    no: 52,
    a: "Membangun ide pada saat berbicara",
    b: "Membangun ide dengan matang baru membicarakannya",
    result: { a: "E", b: "I" },
  },
  {
    no: 53,
    a: "Memilih cara yang sudah ada dan sudah terbukti",
    b: "Memilih cara yang unik dan belum dipraktekkan orang lain",
    result: { a: "S", b: "N" },
  },
  {
    no: 54,
    a: "Hidup harus sudah diatur dari awal",
    b: "Hidup seharusnya mengalir sesuai kondisi",
    result: { a: "J", b: "p" },
  },
  {
    no: 55,
    a: "Standar harus ditegakkan di atas segalanya (itu menunjukkan kehormatan dan harga diri)",
    b: "Perasaan manusia lebih penting dari sekadar standar (yang adalah benda mati)",
    result: { a: "T", b: "F" },
  },
  {
    no: 56,
    a: "Daftar dan checklist adalah panduan penting",
    b: "Daftar dan checklist adalah tugas dan beban",
    result: { a: "J", b: "P" },
  },
  {
    no: 57,
    a: "Menuntut perlakuan yang adil dan sama pada semua orang",
    b: "Menuntut perlakuan khusus sesuai karakteristik masing-masing orang",
    result: { a: "T", b: "F" },
  },
  {
    no: 58,
    a: "Mementingkan sebab-akibat",
    b: "Mementingkan nilai-nilai personal",
    result: { a: "T", b: "F" },
  },
  {
    no: 59,
    a: "Puas ketika mampu beradaptasi dengan momentum yang terjadi",
    b: "Puas ketika mampu menjalankan semuanya sesuai rencana",
    result: { a: "P", b: "J" },
  },
  {
    no: 60,
    a: "Spontan, Easy Going, fleksibel",
    b: "Berhati-hati, penuh pertimbangan, kaku",
    result: { a: "E", b: "I" },
  },
];
const questionsDiv = document.getElementById("questions");
const resultDiv = document.getElementById("result");
const linkContainer = document.getElementById("link-container");

// Generate questions dynamically
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

// Calculate results and display URL
document.getElementById("submit-btn").addEventListener("click", () => {
  const answers = Array.from(
    new FormData(document.getElementById("quiz-form")).entries()
  );
  const results = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // Iterasi melalui jawaban
  answers.forEach(([key, value], index) => {
    const question = questions[index];
    const choice = question.result[value]; // Ambil hasil berdasarkan pilihan (a atau b)
    results[choice]++;
  });

  // Tentukan hasil akhir
  const mbti = [
    results.I > results.E ? "I" : "E",
    results.S > results.N ? "S" : "N",
    results.T > results.F ? "T" : "F",
    results.J > results.P ? "J" : "P",
  ];
  console.log("loging test", results.P, results.J);
  resultDiv.textContent = `Your MBTI Type is: ${mbti.join("")}`;
  linkContainer.style.display = "block"; // Tampilkan link Shopee
});
