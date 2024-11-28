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

  { no: 29, a: "Menganalisa", b: "Berempati", result: { a: "T", b: "F" } },

  {
    no: 30,
    a: "Menghargai seseorang karena sifat dan perilakunya",
    b: "Menghargai seseorang karena skill dan faktor teknis",
    result: { a: "F", b: "T" },
  },
  {
    no: 31,
    a: "Merasa nyaman bila situasi tetap terbuka terhadap pilihan-pilihan lain",
    b: "Merasa tenang bila semua sudah diputuskan",
    result: { a: "P", b: "J" },
  },

  {
    no: 32,
    a: "Melibatkan perasaan itu tidak profesional",
    b: "Terlalu kaku pada peraturan dan pekerjaan itu kejam",
    result: { a: "T", b: "F" },
  },
];

const questionsDiv = document.getElementById("questions");
const progressBar = document.getElementById("progress-bar");
const progressCounter = document.getElementById("progress-counter");
const submitBtn = document.getElementById("submit-btn");

let totalQuestions = questions.length;
let answeredQuestions = 0;

// Generate questions dynamically
questions.forEach((q) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  questionDiv.innerHTML = `
    <h2>${q.no}. ${q.a}</h2>
    <div class="options">
      <label>
        <input type="radio" name="q${q.no}" value="a" required>
        Setuju
      </label>
      <label>
        <input type="radio" name="q${q.no}" value="b" required>
        Tidak Setuju
      </label>
    </div>
  `;

  questionsDiv.appendChild(questionDiv);
});

// Update progress bar and counter
function updateProgress() {
  const answeredInputs = document.querySelectorAll(
    'input[type="radio"]:checked'
  ).length;
  const progress = (answeredInputs / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
  answeredQuestions = answeredInputs;

  // Update counter text
  progressCounter.textContent = `${answeredQuestions}/${totalQuestions}`;

  // Enable submit button when all questions are answered
  submitBtn.disabled = answeredQuestions < totalQuestions;
}

// Initialize progress counter on page load
document.addEventListener("DOMContentLoaded", () => {
  progressCounter.textContent = `${answeredQuestions}/${totalQuestions}`;
  progressBar.style.width = "0%";
});

// Add event listener to all radio buttons
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", updateProgress);
});

// Submit button logic
submitBtn.addEventListener("click", () => {
  const answers = Array.from(
    new FormData(document.getElementById("quiz-form")).entries()
  );
  const results = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach(([key, value]) => {
    const questionNo = key.replace("q", ""); // Extract question number
    const question = questions.find((q) => q.no === parseInt(questionNo));
    const choice = question.result[value]; // Get result based on the selected option
    results[choice]++;
  });

  // Determine final MBTI result
  const mbti = [
    results.I > results.E ? "I" : "E",
    results.S > results.N ? "S" : "N",
    results.T > results.F ? "T" : "F",
    results.J > results.P ? "J" : "P",
  ];

  document.getElementById(
    "result"
  ).textContent = `Your MBTI Type is: ${mbti.join("")}`;
  document.getElementById("link-container").style.display = "block";
});
