const questions = [
  {
    no: 1,
    a: "Spontan, Fleksibel, tidak diikat waktu dibanding terencana dan memiliki deadline jelas",
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
  {
    no: 4,
    a: "Objek daripada subjek",
    b: "Subyektif",
    result: { a: "T", b: "F" },
  },
  {
    no: 5,
    a: "Menemukan dan mengembangkan ide dengan mendiskusikannya dibanding dengan merenungkannya",
    b: "Menemukan dan mengembangkan ide dengan merenungkan",
    result: { a: "E", b: "I" },
  },
  {
    no: 6,
    a: "Bergerak dari gambaran umum baru ke detail dibanding dari detail ke gambaran umum sebagai kesimpulan akhir",
    b: "Bergerak dari detail ke gambaran umum sebagai kesimpulan akhir",
    result: { a: "N", b: "S" },
  },
  {
    no: 7,
    a: "Berorientasi pada dunia eksternal (kegiatan, orang) dibanding dunia internal (memori, pemikiran, ide)",
    b: "Berorientasi pada dunia internal (memori, pemikiran, ide)",
    result: { a: "E", b: "I" },
  },
  {
    no: 8,
    a: "Berbicara mengenai masalah yang dihadapi hari ini dan langkah-langkah praktis mengatasinya dibanding mengenai visi masa depan dan konsep-konsep mengenai visi tersebut",
    b: "Berbicara mengenai visi masa depan dan konsep-konsep mengenai visi tersebut",
    result: { a: "S", b: "N" },
  },
  {
    no: 9,
    a: "Diyakinkan dengan penjelasan yang menyentuh perasaan dibanding dengan penjelasan yang masuk akal",
    b: "Diyakinkan dengan penjelasan yang masuk akal",
    result: { a: "F", b: "T" },
  },
  {
    no: 10,
    a: "Fokus pada sedikit hobi namun mendalam daripada pada banyak hobi secara luas dan umum",
    b: "Fokus pada banyak hobi secara luas dan umum",
    result: { a: "I", b: "E" },
  },
  {
    no: 11,
    a: "Tertutup dan mandiri daripada sosial dan ekspresif",
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
    a: "Menggunakan pengalaman sebagai pedoman daripada imajinasi dan perenungan sebagai pedoman",
    b: "Menggunakan imajinasi dan perenungan sebagai pedoman",
    result: { a: "S", b: "N" },
  },
  {
    no: 14,
    a: "Berorientasi tugas dan job description dibanding pada manusia dan hubungan",
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
    a: "Mengambil keputusan berdasar logika dan aturan main dibanding berdasar perasaan pribadi dan kondisi orang lain",
    b: "Mengambil keputusan berdasar perasaan pribadi dan kondisi orang lain",
    result: { a: "T", b: "F" },
  },
  {
    no: 18,
    a: "Bebas dan dinamis daripada prosedural dan tradisional",
    b: "Prosedural dan tradisional",
    result: { a: "N", b: "S" },
  },
  {
    no: 19,
    a: "Berorientasi pada hasil daripada proses",
    b: "Berorientasi pada proses",
    result: { a: "J", b: "P" },
  },
  {
    no: 20,
    a: "Beraktifitas sendirian di rumah menyenangkan daripada di luar rumah",
    b: "Beraktifitas sendirian di rumah membosankan",
    result: { a: "I", b: "E" },
  },
  {
    no: 21,
    a: "Membiarkan orang lain bertindak bebas asalkan tujuan tercapai daripada mengatur orang lain dengan tata tertib agar tujuan tercapai",
    b: "Mengatur orang lain dengan tata tertib agar tujuan tercapai",
    result: { a: "P", b: "J" },
  },
  {
    no: 22,
    a: "Memilih ide inspiratif lebih penting daripada fakta dibanding memilih fakta lebih penting daripada ide inspiratif",
    b: "Memilih fakta lebih penting daripada ide inspiratif",
    result: { a: "N", b: "S" },
  },
  {
    no: 23,
    a: "Mengemukakan tujuan dan sasaran lebih dahulu dibanding mengemukakan kesepakatan terlebih dahulu",
    b: "Mengemukakan kesepakatan terlebih dahulu",
    result: { a: "T", b: "F" },
  },
  {
    no: 24,
    a: "Fokus pada target dan mengabaikan hal-hal baru daripada Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target",
    b: "Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target",
    result: { a: "J", b: "P" },
  },
  {
    no: 25,
    a: "Kontinuitas dan stabilitas lebih diutamakan dibandingkan perubahan dan variasi",
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
    a: "Bertindak step by step dengan timeframe yang jelas daripada dengan semangat tanpa menggunakan timeframe",
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
    a: "Menganalisa daripada berempati",
    b: "Berempati",
    result: { a: "T", b: "F" },
  },

  {
    no: 30,
    a: "Menghargai seseorang karena sifat dan perilakunya daripada karena skill dan faktor teknis",
    b: "Menghargai seseorang karena skill dan faktor teknis",
    result: { a: "F", b: "T" },
  },
  {
    no: 31,
    a: "Merasa nyaman bila situasi tetap terbuka terhadap pilihan-pilihan lain dibandingkan Merasa tenang bila semua sudah diputuskan",
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

// Mapping MBTI types to their respective URLs
const mbtiUrls = {
  ISTJ: "https://shopee.co.id/ISTJ-MBTI-Style-Match-i.730552667.25438866833?sp_atk=a64d7409-1ce4-4c6f-8f88-598a88387342",
  ISFJ: "https://shopee.co.id/ISFJ-MBTI-Style-Match-i.730552667.29369048652?sp_atk=c8fe4f83-a8fc-49d9-b6f1-6ee1e2afa463",
  INFJ: "https://shopee.co.id/product/730552667/27168449902/",
  INTJ: "https://shopee.co.id/INTJ-MBTI-Style-Match-i.730552667.25338644888?sp_atk=d926166b-70c9-4b95-9937-30c016701785",
  ISTP: "https://shopee.co.id/product/730552667/26819114324/",
  ISFP: "https://shopee.co.id/ISFP-MBTI-Style-Match-i.730552667.27969121251?sp_atk=f960509e-8599-4205-98ba-483d59ce18a3",
  INFP: "https://shopee.co.id/INFP-MBTI-Style-Match-i.730552667.27119046626?sp_atk=16a93e01-d541-4b16-87d6-b9c00958ab58",
  INTP: "https://shopee.co.id/product/730552667/27918459065/",
  ESTP: "https://shopee.co.id/ESTP-MBTI-Style-Match-i.730552667.22190542702?sp_atk=1d7bda99-d516-46be-be38-cd2e08a23929",
  ESFP: "https://shopee.co.id/ESFP-MBTI-Style-Match-i.730552667.24338878831?sp_atk=50c0fef1-5019-4ba9-a23e-50348fb8b824",
  ENFP: "https://shopee.co.id/ENFP-MBTI-Style-Match-i.730552667.27669044965?sp_atk=2896f3b4-52e1-4205-b781-e3176a00ee66",
  ENTP: "https://shopee.co.id/ENTP-MBTI-Style-Match-i.730552667.25688866270?sp_atk=9ea02ee6-af98-466a-8e7b-cf119c13ca58",
  ESTJ: "https://shopee.co.id/ESTJ-MBTI-Style-Match-i.730552667.25838883656?sp_atk=e8c5a0f3-8101-4535-a347-af7592ab1a22",
  ESFJ: "https://shopee.co.id/ESFJ-MBTI-Style-Match-i.730552667.28169113795?sp_atk=23e8332e-aee5-4087-92ae-0f87b83f67b6",
  ENFJ: "https://shopee.co.id/ENFJ-MBTI-Style-Match-i.730552667.28369047666?sp_atk=124aa966-6c77-4eb9-a036-6bbc8a45f4c4",
  ENTJ: "https://shopee.co.id/ENTJ-MBTI-Style-Match-i.730552667.28969042880?sp_atk=07beeed4-5078-4c91-b7f2-c97f87013b89",
};

// ISFJ= https://shopee.co.id/ISFJ-MBTI-Style-Match-i.730552667.29369048652?sp_atk=c8fe4f83-a8fc-49d9-b6f1-6ee1e2afa463
// ENTJ= https://shopee.co.id/ENTJ-MBTI-Style-Match-i.730552667.28969042880?sp_atk=07beeed4-5078-4c91-b7f2-c97f87013b89
// ENFJ= https://shopee.co.id/ENFJ-MBTI-Style-Match-i.730552667.28369047666?sp_atk=124aa966-6c77-4eb9-a036-6bbc8a45f4c4
// ESFJ= https://shopee.co.id/ESFJ-MBTI-Style-Match-i.730552667.28169113795?sp_atk=23e8332e-aee5-4087-92ae-0f87b83f67b6
// ISFP= https://shopee.co.id/ISFP-MBTI-Style-Match-i.730552667.27969121251?sp_atk=f960509e-8599-4205-98ba-483d59ce18a3
// ENFP= https://shopee.co.id/ENFP-MBTI-Style-Match-i.730552667.27669044965?sp_atk=2896f3b4-52e1-4205-b781-e3176a00ee66
// ESTP= https://shopee.co.id/ESTP-MBTI-Style-Match-i.730552667.22190542702?sp_atk=1d7bda99-d516-46be-be38-cd2e08a23929
// ISTJ=  https://shopee.co.id/ISTJ-MBTI-Style-Match-i.730552667.25438866833?sp_atk=a64d7409-1ce4-4c6f-8f88-598a88387342
// INTJ: "https://shopee.co.id/INTJ-MBTI-Style-Match-i.730552667.25338644888?sp_atk=d926166b-70c9-4b95-9937-30c016701785",
// INFP= https://shopee.co.id/INFP-MBTI-Style-Match-i.730552667.27119046626?sp_atk=16a93e01-d541-4b16-87d6-b9c00958ab58
// ENTP= https://shopee.co.id/ENTP-MBTI-Style-Match-i.730552667.25688866270?sp_atk=9ea02ee6-af98-466a-8e7b-cf119c13ca58
// ESTJ= https://shopee.co.id/ESTJ-MBTI-Style-Match-i.730552667.25838883656?sp_atk=e8c5a0f3-8101-4535-a347-af7592ab1a22
// ESFP= https://shopee.co.id/ESFP-MBTI-Style-Match-i.730552667.24338878831?sp_atk=50c0fef1-5019-4ba9-a23e-50348fb8b824

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

// Update progress bar, counter, and question background
function updateProgress() {
  const answeredInputs = document.querySelectorAll(
    'input[type="radio"]:checked'
  ).length;
  const progress = (answeredInputs / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
  answeredQuestions = answeredInputs;

  // Update counter text
  progressCounter.textContent = `${answeredQuestions}/${totalQuestions}`;

  // Add 'answered' class to answered questions
  document.querySelectorAll(".question").forEach((question) => {
    const inputs = question.querySelectorAll('input[type="radio"]');
    const isAnswered = Array.from(inputs).some((input) => input.checked);

    if (isAnswered) {
      question.classList.add("answered");
    } else {
      question.classList.remove("answered");
    }
  });

  // Enable submit button when all questions are answered
  // submitBtn.disabled = answeredQuestions < totalQuestions;
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
  // Check for unanswered questions
  const unanswered = Array.from(document.querySelectorAll(".question")).find(
    (question) => {
      const inputs = question.querySelectorAll('input[type="radio"]');
      return !Array.from(inputs).some((input) => input.checked);
    }
  );

  if (unanswered) {
    // Scroll to the first unanswered question
    unanswered.scrollIntoView({
      behavior: "smooth", // Smooth scrolling effect
      block: "center", // Center the question in the viewport
    });

    // Optional: Highlight the unanswered question
    unanswered.style.border = "2px solid red";
    setTimeout(() => {
      unanswered.style.border = ""; // Remove highlight after 2 seconds
    }, 2000);

    // alert("Please answer all questions before submitting!");
    return; // Stop further execution
  }

  // If all questions are answered, calculate the result
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

  const mbtiType = mbti.join("");

  // Get the URL corresponding to the MBTI result
  const resultUrl = mbtiUrls[mbtiType];

  // Display the MBTI result and corresponding URL
  document.getElementById(
    "result"
  ).textContent = `Your MBTI Type is: ${mbtiType}`;
  document.getElementById(
    "shopee-link"
  ).innerHTML = `<a href="${resultUrl}" target="_blank">Discover Your Style</a>`;
  document.getElementById("link-container").style.display = "block";

  // Scroll to the result section smoothly
  document.getElementById("result").scrollIntoView({
    behavior: "smooth", // Smooth scrolling effect
    block: "center", // Scroll to the center of the result section
  });
});
