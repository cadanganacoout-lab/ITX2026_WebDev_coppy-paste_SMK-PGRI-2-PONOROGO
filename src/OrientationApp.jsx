import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Download,
  Focus,
  Globe2,
  Info,
  Lightbulb,
  Moon,
  Play,
  RotateCcw,
  ShieldCheck,
  Sun,
  Upload,
  X,
} from 'lucide-react'
import SelectField from './SelectField.jsx'
import './EduFuture.css'

const STORAGE_KEY = 'edufuture-orientation-v1'
const languages = [
  ['id', 'Bahasa Indonesia'],
  ['en', 'English'],
  ['zh', '中文'],
  ['es', 'Español'],
  ['ar', 'العربية'],
  ['fr', 'Français'],
]

const copy = {
  id: {
    tagline: 'ALAT BANTU ORIENTASI BELAJAR DIGITAL',
    navStart: 'Mulai', navReflection: 'Refleksi', navMap: 'Peta orientasi', navPlan: 'Rencana', navTools: 'Toolkit',
    heroEyebrow: 'Langkah kecil untuk memulai dengan yakin',
    heroTitle: 'Belajar digital dimulai dengan mengenali kebutuhanmu.',
    heroDescription: 'Refleksikan kebiasaan belajar, temukan satu langkah awal yang sesuai, lalu susun rencana yang bisa kamu jalankan. Tanpa akun.',
    start: 'Mulai refleksi', continue: 'Lanjutkan orientasi', seeHow: 'Lihat cara kerja', noAccount: 'Gratis digunakan · Progres tersimpan di perangkatmu',
    themeLight: 'Aktifkan mode terang', themeDark: 'Aktifkan mode gelap', close: 'Tutup',
    stepsLabel: 'ALUR SINGKAT', howTitle: 'Mulai dari yang paling berguna untukmu',
    how1: 'Refleksikan kebiasaan', how1d: 'Jawab beberapa pertanyaan ringan tentang cara dan situasi belajarmu.',
    how2: 'Pilih langkah awal', how2d: 'Dapatkan saran yang jelas alasannya. Semua langkah tetap bisa kamu pilih.',
    how3: 'Buat rencana', how3d: 'Susun rencana tiga minggu yang fleksibel dan dapat diubah kapan saja.',
    reflectionEyebrow: 'TITIK MULAI', reflectionTitle: 'Refleksi kesiapan belajar',
    reflectionDescription: 'Tidak ada jawaban benar atau salah. Jawabanmu hanya dipakai untuk menyarankan langkah awal, bukan untuk memberi label.',
    question: 'Pertanyaan', of: 'dari', back: 'Kembali', next: 'Lanjut', showResult: 'Lihat saran saya',
    resultTitle: 'Saran awal untukmu', resultDisclaimer: 'Ini refleksi singkat, bukan tes kemampuan atau diagnosis. Kamu boleh memilih langkah lain.',
    formatLabel: 'Format yang kamu sukai', focusLabel: 'Fokus dan distraksi', infoLabel: 'Memeriksa informasi',
    qFormatOne: 'Saat mempelajari hal baru, kamu biasanya lebih terbantu dengan…',
    qFocusOne: 'Saat mulai belajar daring, notifikasi ponselmu biasanya…',
    qInfoOne: 'Kamu menemukan unggahan edukasi tanpa sumber. Apa yang biasanya kamu lakukan?',
    qFormatTwo: 'Jika sebuah topik terasa rumit, cara mencoba yang paling nyaman bagimu adalah…',
    qFocusTwo: 'Setelah belajar beberapa saat, perhatianmu biasanya…',
    qInfoTwo: 'Sebuah klaim menarik dibagikan ke grup. Langkah awalmu adalah…',
    formatVisual: 'Melihat contoh atau diagram', formatAudio: 'Mendengar penjelasan', formatPractice: 'Langsung mencoba',
    focusOften: 'Notifikasi sering mengganggu', focusSometimes: 'Kadang terdistraksi', focusRare: 'Biasanya bisa mengatur distraksi',
    infoCompare: 'Mencari sumber pembanding', infoAccount: 'Memeriksa siapa yang membagikan', infoUnsure: 'Belum yakin cara memeriksanya',
    recommendation: 'Langkah yang disarankan', reason: 'Alasan', viewMap: 'Lihat peta orientasi', redo: 'Ulangi refleksi',
    mapEyebrow: 'PILIH LANGKAHMU', mapTitle: 'Peta orientasi belajar', mapDescription: 'Lima langkah singkat untuk menyiapkan kebiasaan belajar digital. Urutannya fleksibel—mulai dari mana pun.',
    progress: 'langkah selesai', statusNotStarted: 'Belum dimulai', statusInProgress: 'Sedang dicoba', statusDone: 'Selesai',
    markDone: 'Tandai selesai', markProgress: 'Mulai langkah', undoDone: 'Batalkan selesai',
    steps: [
      ['Kenali alat belajar digital', 'Pastikan perangkat, aplikasi, dan cara berkomunikasi daring mendukung kegiatan belajarmu.', 'Pilih satu aplikasi yang akan kamu gunakan. Coba temukan tempat menyimpan materi dan cara meminta bantuan dengan sopan.'],
      ['Siapkan ruang belajar', 'Rapikan ruang fisik dan digital agar materi mudah ditemukan dan perhatian tidak mudah terpecah.', 'Buat satu folder khusus. Beri nama file dengan topik dan tanggal, lalu tutup tab yang tidak dibutuhkan.'],
      ['Atur waktu dan fokus', 'Pilih durasi belajar yang realistis dan siapkan cara sederhana menghadapi distraksi.', 'Pilih satu tugas kecil. Jauhkan notifikasi selama satu sesi fokus singkat menggunakan timer di bawah.'],
      ['Pilah dan verifikasi informasi', 'Periksa siapa pembuat informasi, bukti yang disertakan, tanggal, dan sumber pembanding sebelum membagikannya.', 'Ambil satu klaim yang pernah kamu lihat. Cari sumber asli atau sumber tepercaya lain sebelum mempercayai atau membagikannya.'],
      ['Refleksi dan susun rencana', 'Catat apa yang berjalan baik dan pilih target kecil yang dapat disesuaikan setiap minggu.', 'Tulis satu tujuan belajar yang spesifik. Bagi menjadi tiga tahap mingguan pada perencana di bawah.'],
    ],
    plannerEyebrow: 'LANGKAH BERIKUTNYA', plannerTitle: 'Rencana belajar tiga minggu',
    plannerDescription: 'Buat rencana sederhana untuk dirimu sendiri. Ini panduan fleksibel, bukan jadwal wajib atau jaminan hasil.',
    goalLabel: 'Apa yang ingin kamu pelajari?', goalPlaceholder: 'Contoh: membuat halaman web sederhana',
    hoursLabel: 'Waktu yang tersedia per minggu', hours: 'jam', savePlan: 'Simpan rencana',
    weekNames: ['Minggu 1 · Bangun kebiasaan', 'Minggu 2 · Latihan terarah', 'Minggu 3 · Terapkan dan refleksi'],
    weekDescriptions: ['Siapkan ruang dan pilih target kecil untuk memulai.', 'Latih satu keterampilan dalam beberapa sesi singkat.', 'Gunakan yang dipelajari, lalu catat langkah berikutnya.'],
    planSaved: 'Rencana tersimpan di perangkat ini.', planNotSaved: 'Penyimpanan tidak tersedia. Rencana ini hanya bertahan selama sesi ini.',
    printPlan: 'Cetak / simpan PDF', downloadCalendar: 'Unduh .ics', completionTitle: 'Rencanamu siap untuk dilanjutkan',
    completionText: 'Kamu sudah membuat rencana. Kamu bisa mengubahnya kapan saja—tidak perlu menuntaskan semua langkah hari ini.',
    continuePlan: 'Lanjutkan rencana', editRecommendation: 'Ubah rekomendasi',
    toolkitEyebrow: 'ALAT PRAKTIS', toolkitTitle: 'Bantu dirimu tetap fokus',
    timerTitle: 'Timer fokus', timerDescription: 'Satu sesi fokus 25 menit. Waktu dihitung dari jam, jadi tetap akurat saat tab tidak aktif.',
    startTimer: 'Mulai fokus', pauseTimer: 'Jeda', resetTimer: 'Atur ulang', sessionsToday: 'Sesi fokus hari ini',
    timerDone: 'Sesi fokus selesai. Ambil jeda sejenak sebelum memulai sesi berikutnya.',
    scenarioTitle: 'Coba satu keputusan digital', scenarioDescription: 'Kamu menerima infografik tentang belajar lebih cepat, tetapi tidak ada sumber yang dicantumkan. Apa langkah awal yang paling membantu?',
    scenarioChoices: ['Langsung membagikannya ke grup', 'Cari sumber asli dan bandingkan informasinya', 'Menganggap semua informasi daring tidak bisa dipercaya'],
    scenarioFeedback: 'Mencari sumber asli dan membandingkan klaim membantu menilai konteks serta bukti. Tidak perlu langsung percaya atau menolak seluruh informasi.',
    scenarioDone: 'Tandai simulasi selesai', scenarioCompleted: 'Simulasi sudah dicoba',
    privacyEyebrow: 'PRIVASI DAN KENDALI', privacyTitle: 'Datamu tetap milikmu',
    privacyText: 'Tidak ada akun atau server. Refleksi dan rencanamu disimpan di browser pada perangkat ini. Jika penyimpanan browser dinonaktifkan, data hanya tersedia selama sesi.',
    exportData: 'Ekspor progres', importData: 'Impor progres', resetData: 'Hapus semua data',
    importSuccess: 'Progres berhasil dimuat.', importError: 'Berkas tidak valid atau formatnya tidak didukung.',
    resetConfirm: 'Hapus seluruh progres dan rencana yang tersimpan di perangkat ini?', resetDone: 'Semua data lokal sudah dihapus.',
    storageWarning: 'Penyimpanan lokal tidak tersedia atau data lama tidak dapat dibaca. Progres mungkin hanya tersedia selama halaman ini terbuka.',
    storageReady: 'Progres tersimpan di perangkat ini.', footer: 'EduFuture · Alat bantu orientasi belajar digital',
    faqTitle: 'Pertanyaan umum', faqQ1: 'Bagaimana EduFuture membantumu?', faqA1: 'EduFuture membantu kamu menyiapkan kebiasaan dan rencana sebelum belajar digital; tidak ada kelas, akun, guru, atau penilaian.',
    faqQ2: 'Siapa yang dapat melihat data saya?', faqA2: 'Data disimpan di browser perangkat ini dan tidak dikirim ke server. Berkas yang kamu ekspor dapat dibaca siapa pun yang memiliki berkas tersebut.',
    faqQ3: 'Apakah saya harus mengikuti urutan langkah?', faqA3: 'Tidak. Rekomendasi hanya titik mulai. Kamu bebas membuka dan menandai langkah lain sesuai kebutuhan.',
    faqQ4: 'Bagaimana cara menghapus atau memindahkan progres?', faqA4: 'Gunakan Ekspor progres untuk membuat salinan JSON, Impor progres untuk memuatnya di perangkat lain, atau Hapus semua data untuk menghapus penyimpanan lokal.',
    begin: 'Mulai orientasi', answerRequired: 'Pilih satu jawaban untuk melanjutkan.',
  },
  en: {
    tagline: 'DIGITAL LEARNING ORIENTATION TOOLKIT',
    navStart: 'Start', navReflection: 'Reflection', navMap: 'Orientation map', navPlan: 'Plan', navTools: 'Toolkit',
    heroEyebrow: 'Small steps to begin with confidence',
    heroTitle: 'Digital learning starts by understanding what you need.',
    heroDescription: 'Reflect on your learning habits, find a useful first step, and make a plan you can follow. No account needed.',
    start: 'Start reflection', continue: 'Continue orientation', seeHow: 'See how it works', noAccount: 'Free to use · Progress stays on your device',
    themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode', close: 'Close',
    stepsLabel: 'A SIMPLE PATH', howTitle: 'Start with what is useful to you',
    how1: 'Reflect on your habits', how1d: 'Answer a few light questions about how and where you learn.',
    how2: 'Choose a first step', how2d: 'Get a recommendation with a clear reason. Every step stays available.',
    how3: 'Make a plan', how3d: 'Create a flexible three-week plan you can change anytime.',
    reflectionEyebrow: 'YOUR STARTING POINT', reflectionTitle: 'Learning readiness reflection',
    reflectionDescription: 'There are no right or wrong answers. Your answers only suggest a starting point; they do not label you.',
    question: 'Question', of: 'of', back: 'Back', next: 'Next', showResult: 'See my suggestion',
    resultTitle: 'A starting suggestion for you', resultDisclaimer: 'This is a brief reflection, not an ability test or diagnosis. You can choose another step.',
    formatLabel: 'Format you prefer', focusLabel: 'Focus and distractions', infoLabel: 'Checking information',
    qFormatOne: 'When learning something new, what usually helps you most?',
    qFocusOne: 'When starting an online study session, phone notifications usually…',
    qInfoOne: 'You find an educational post without sources. What do you usually do?',
    qFormatTwo: 'When a topic feels difficult, which way of exploring it feels most comfortable?',
    qFocusTwo: 'After studying for a while, your attention usually…',
    qInfoTwo: 'An interesting claim is shared in a group. What do you do first?',
    formatVisual: 'Seeing examples or diagrams', formatAudio: 'Listening to an explanation', formatPractice: 'Trying it yourself',
    focusOften: 'Notifications often distract me', focusSometimes: 'I get distracted sometimes', focusRare: 'I can usually manage distractions',
    infoCompare: 'Find another source to compare', infoAccount: 'Check who shared it', infoUnsure: 'Not sure how to check it',
    recommendation: 'Suggested step', reason: 'Why', viewMap: 'View orientation map', redo: 'Repeat reflection',
    mapEyebrow: 'CHOOSE YOUR STEP', mapTitle: 'Digital learning orientation map', mapDescription: 'Five short steps to prepare for digital learning. The order is flexible—start anywhere.',
    progress: 'steps complete', statusNotStarted: 'Not started', statusInProgress: 'In progress', statusDone: 'Done',
    markDone: 'Mark complete', markProgress: 'Start this step', undoDone: 'Undo completion',
    steps: [
      ['Know your learning tools', 'Make sure your devices, apps, and online communication support your learning.', 'Choose one app to use. Find where to save materials and how to ask for help politely.'],
      ['Prepare your learning space', 'Organize your physical and digital space so materials are easy to find and distractions are reduced.', 'Create one dedicated folder. Name files with a topic and date, then close tabs you do not need.'],
      ['Plan time and focus', 'Choose a realistic study duration and a simple way to handle distractions.', 'Pick one small task. Silence notifications for one short focus session using the timer below.'],
      ['Evaluate and verify information', 'Check the author, evidence, date, and another source before sharing information.', 'Choose a claim you have seen. Find the original or another trusted source before believing or sharing it.'],
      ['Reflect and make a plan', 'Notice what works and set a small goal you can adapt each week.', 'Write one specific learning goal. Divide it into three weekly stages in the planner below.'],
    ],
    plannerEyebrow: 'YOUR NEXT STEP', plannerTitle: 'A three-week learning plan',
    plannerDescription: 'Make a simple plan for yourself. It is flexible guidance, not a required schedule or a promise of results.',
    goalLabel: 'What would you like to learn?', goalPlaceholder: 'For example: build a simple web page',
    hoursLabel: 'Time available each week', hours: 'hours', savePlan: 'Save plan',
    weekNames: ['Week 1 · Build a habit', 'Week 2 · Focused practice', 'Week 3 · Apply and reflect'],
    weekDescriptions: ['Prepare your space and choose a small first goal.', 'Practice one skill in a few short sessions.', 'Use what you learned and note what comes next.'],
    planSaved: 'Plan saved on this device.', planNotSaved: 'Storage is unavailable. This plan lasts only for this session.',
    printPlan: 'Print / save PDF', downloadCalendar: 'Download .ics', completionTitle: 'Your plan is ready to continue',
    completionText: 'You have made a plan. You can change it anytime—there is no need to finish every step today.',
    continuePlan: 'Continue plan', editRecommendation: 'Change suggestion',
    toolkitEyebrow: 'PRACTICAL TOOL', toolkitTitle: 'Help yourself stay focused',
    timerTitle: 'Focus timer', timerDescription: 'One 25-minute focus session. Time uses a clock deadline, so it stays accurate in background tabs.',
    startTimer: 'Start focus', pauseTimer: 'Pause', resetTimer: 'Reset', sessionsToday: 'Focus sessions today',
    timerDone: 'Focus session complete. Take a short break before starting another.',
    scenarioTitle: 'Try a digital decision', scenarioDescription: 'You receive an infographic about learning faster, but no sources are listed. What is the most helpful first step?',
    scenarioChoices: ['Share it with your group right away', 'Find the original source and compare the information', 'Assume all online information is untrustworthy'],
    scenarioFeedback: 'Finding an original source and comparing claims helps you assess context and evidence. You do not have to accept or reject all information outright.',
    scenarioDone: 'Mark scenario tried', scenarioCompleted: 'Scenario tried',
    privacyEyebrow: 'PRIVACY AND CONTROL', privacyTitle: 'Your data stays yours',
    privacyText: 'No accounts or servers. Your reflection and plan are stored in this browser on this device. If browser storage is disabled, data lasts only for this session.',
    exportData: 'Export progress', importData: 'Import progress', resetData: 'Delete all data',
    importSuccess: 'Progress imported.', importError: 'The file is invalid or uses an unsupported format.',
    resetConfirm: 'Delete all progress and plans stored on this device?', resetDone: 'All local data has been deleted.',
    storageWarning: 'Browser storage is unavailable or previous data could not be read. Progress may last only while this page remains open.',
    storageReady: 'Progress is saved on this device.', footer: 'EduFuture · Digital learning orientation toolkit',
    faqTitle: 'Frequently asked questions', faqQ1: 'How does EduFuture help?', faqA1: 'EduFuture helps you prepare habits and a plan before digital learning; there are no classes, accounts, teachers, or grading.',
    faqQ2: 'Who can see my data?', faqA2: 'Data stays in this device browser and is not sent to a server. Anyone with an exported file can read its contents.',
    faqQ3: 'Do I have to follow the steps in order?', faqA3: 'No. Suggestions are just a starting point. Open and mark any step that fits your needs.',
    faqQ4: 'How do I delete or move my progress?', faqA4: 'Export progress to create a JSON copy, import it on another device, or delete all data to clear local storage.',
    begin: 'Begin orientation', answerRequired: 'Choose one answer to continue.',
  },
  zh: {
    tagline: '数字学习入门工具', navStart: '开始', navReflection: '自我反思', navMap: '入门地图', navPlan: '计划', navTools: '工具',
    heroEyebrow: '从小步骤开始，更有信心', heroTitle: '数字学习，从了解自己的需要开始。',
    themeLight: '切换至浅色模式', themeDark: '切换至深色模式', close: '关闭',
    heroDescription: '回顾学习习惯，找到合适的第一步，并制定可执行的计划。无需账户。',
    start: '开始反思', continue: '继续入门', seeHow: '了解使用方法', noAccount: '免费使用 · 进度保存在本设备',
    stepsLabel: '简单流程', howTitle: '从对你有用的内容开始', how1: '回顾学习习惯', how1d: '回答几个关于学习方式和环境的简单问题。',
    how2: '选择第一步', how2d: '查看附有理由的建议。所有步骤都可以选择。', how3: '制定计划', how3d: '创建可随时调整的三周学习计划。',
    reflectionEyebrow: '你的起点', reflectionTitle: '学习准备情况反思', reflectionDescription: '答案没有对错。回答仅用于建议起点，不会给你贴标签。',
    question: '问题', of: '/', back: '上一步', next: '下一步', showResult: '查看建议', resultTitle: '给你的起步建议',
    resultDisclaimer: '这是简短反思，不是能力测试或诊断。你可以选择其他步骤。', formatLabel: '偏好的学习形式',
    qFormatOne: '学习新内容时，什么方式通常最能帮助你？',
    qFocusOne: '开始线上学习时，手机通知通常会……',
    qInfoOne: '你看到没有来源的教育内容时，通常会怎么做？',
    qFormatTwo: '遇到较难的主题时，你更愿意用哪种方式探索？',
    qFocusTwo: '学习一段时间后，你的注意力通常会……',
    qInfoTwo: '群组里分享了一个有趣的说法，你首先会怎么做？',
    focusLabel: '专注与干扰', infoLabel: '核实信息', formatVisual: '看示例或图表', formatAudio: '听讲解', formatPractice: '亲自尝试',
    focusOften: '通知常常让我分心', focusSometimes: '有时会分心', focusRare: '通常能管理干扰',
    infoCompare: '寻找其他来源进行比较', infoAccount: '查看发布者', infoUnsure: '不确定如何核实',
    recommendation: '建议步骤', reason: '原因', viewMap: '查看入门地图', redo: '重新反思',
    mapEyebrow: '选择你的步骤', mapTitle: '数字学习入门地图', mapDescription: '五个简短步骤，帮助准备数字学习。顺序灵活，可从任何步骤开始。',
    progress: '步骤已完成', statusNotStarted: '未开始', statusInProgress: '进行中', statusDone: '已完成',
    markDone: '标记完成', markProgress: '开始此步骤', undoDone: '撤销完成',
    steps: [['了解学习工具', '确认设备、应用和线上沟通方式适合学习。','选择一个要使用的应用，找到材料的保存位置，并练习礼貌地寻求帮助。'],
      ['准备学习空间','整理实体和数字空间，让材料更易查找并减少干扰。','创建专用文件夹，按主题和日期命名文件，关闭不需要的标签页。'],
      ['安排时间与专注','选择现实的学习时长，并准备简单的防干扰方法。','选一个小任务，使用下方计时器进行短暂专注。'],
      ['筛选并核实信息','分享前检查作者、证据、日期和其他来源。','选择一个见过的说法，先寻找原始或可信来源。'],
      ['反思并制定计划','留意有效的方法，设定每周可调整的小目标。','写下一个具体目标，并在下方计划中分成三个阶段。']],
    plannerEyebrow: '下一步', plannerTitle: '三周学习计划', plannerDescription: '为自己制定灵活计划，而非必须遵守的时间表或结果保证。',
    goalLabel: '你想学习什么？', goalPlaceholder: '例如：制作一个简单网页', hoursLabel: '每周可用时间', hours: '小时',
    savePlan: '保存计划', weekNames: ['第1周 · 建立习惯','第2周 · 有针对性练习','第3周 · 应用与反思'],
    weekDescriptions: ['整理空间并选择一个小目标。','通过几次短练习学习一项技能。','应用所学并记录下一步。'],
    planSaved: '计划已保存在本设备。', planNotSaved: '无法使用存储；计划仅在本次会话中保留。',
    printPlan: '打印 / 保存 PDF', downloadCalendar: '下载 .ics', completionTitle: '你的计划已准备好继续',
    completionText: '你已制定计划，可随时修改；无需今天完成所有步骤。', continuePlan: '继续计划', editRecommendation: '修改建议',
    toolkitEyebrow: '实用工具', toolkitTitle: '帮助自己保持专注', timerTitle: '专注计时器',
    timerDescription: '一次25分钟专注。根据时钟截止时间计时，切换标签页仍保持准确。', startTimer: '开始专注',
    pauseTimer: '暂停', resetTimer: '重置', sessionsToday: '今日专注次数', timerDone: '专注时间已结束。休息片刻后再开始下一次。',
    scenarioTitle: '尝试数字决策', scenarioDescription: '你收到一张声称能更快学习的信息图，但没有来源。第一步做什么？',
    scenarioChoices: ['立即分享到群组','寻找原始来源并比较信息','认为所有网络信息都不可信'],
    scenarioFeedback: '寻找原始来源并比较说法有助于评估背景和证据。无需盲信或全盘否定。', scenarioDone: '标记已尝试', scenarioCompleted: '已尝试',
    privacyEyebrow: '隐私与控制', privacyTitle: '你的数据由你掌控',
    privacyText: '无需账户或服务器。反思和计划保存在本设备浏览器中。若浏览器存储被禁用，数据仅在本次会话有效。',
    exportData: '导出进度', importData: '导入进度', resetData: '删除全部数据',
    importSuccess: '进度已导入。', importError: '文件无效或格式不受支持。',
    resetConfirm: '删除本设备上保存的所有进度和计划？', resetDone: '本地数据已全部删除。',
    storageWarning: '浏览器存储不可用或无法读取旧数据。页面关闭后进度可能丢失。', storageReady: '进度保存在本设备。',
    faqTitle: '常见问题', faqQ1: 'EduFuture 如何帮助你？', faqA1: 'EduFuture 帮助你在数字学习前准备习惯与计划，不包含班级、账户、教师或评分。',
    faqQ2: '谁能看到我的数据？', faqA2: '数据保存在本设备浏览器中，不会发送到服务器。导出的文件可被任何持有者读取。',
    faqQ3: '我必须按顺序完成吗？', faqA3: '不必。建议只是起点，你可以选择任何适合自己的步骤。',
    faqQ4: '如何删除或迁移进度？', faqA4: '导出 JSON 文件，在其他设备导入，或删除所有数据以清除本地存储。',
    begin: '开始入门', answerRequired: '请选择一个答案以继续。',
  },
  es: {
    tagline: 'HERRAMIENTA DE ORIENTACIÓN PARA EL APRENDIZAJE DIGITAL', navStart: 'Inicio', navReflection: 'Reflexión', navMap: 'Mapa', navPlan: 'Plan', navTools: 'Herramientas',
    heroEyebrow: 'Pequeños pasos para empezar con confianza', heroTitle: 'El aprendizaje digital empieza por reconocer lo que necesitas.',
    themeLight: 'Activar modo claro', themeDark: 'Activar modo oscuro', close: 'Cerrar',
    heroDescription: 'Reflexiona sobre tus hábitos, encuentra un primer paso útil y crea un plan flexible. Sin cuenta.',
    start: 'Empezar reflexión', continue: 'Continuar orientación', seeHow: 'Cómo funciona', noAccount: 'Gratis · Progreso guardado en tu dispositivo',
    stepsLabel: 'UN CAMINO SENCILLO', howTitle: 'Empieza por lo que te resulte útil', how1: 'Reflexiona sobre tus hábitos', how1d: 'Responde preguntas sencillas sobre cómo y dónde estudias.',
    how2: 'Elige un primer paso', how2d: 'Recibe una sugerencia con un motivo claro. Todos los pasos siguen disponibles.', how3: 'Crea un plan', how3d: 'Prepara un plan flexible de tres semanas.',
    reflectionEyebrow: 'PUNTO DE PARTIDA', reflectionTitle: 'Reflexión sobre tu preparación', reflectionDescription: 'No hay respuestas correctas o incorrectas. Tus respuestas solo sugieren un inicio; no te etiquetan.',
    question: 'Pregunta', of: 'de', back: 'Atrás', next: 'Siguiente', showResult: 'Ver sugerencia', resultTitle: 'Una sugerencia para empezar',
    resultDisclaimer: 'Es una reflexión breve, no una prueba de capacidad ni un diagnóstico. Puedes elegir otro paso.',
    formatLabel: 'Formato que prefieres', focusLabel: 'Atención y distracciones', infoLabel: 'Verificar información',
    qFormatOne: 'Al aprender algo nuevo, ¿qué suele ayudarte más?',
    qFocusOne: 'Al empezar una sesión de estudio en línea, las notificaciones suelen…',
    qInfoOne: 'Encuentras una publicación educativa sin fuentes. ¿Qué haces normalmente?',
    qFormatTwo: 'Si un tema parece difícil, ¿cómo te resulta más cómodo explorarlo?',
    qFocusTwo: 'Después de estudiar un rato, tu atención suele…',
    qInfoTwo: 'Comparten una afirmación interesante en un grupo. ¿Qué haces primero?',
    formatVisual: 'Ver ejemplos o diagramas', formatAudio: 'Escuchar una explicación', formatPractice: 'Probarlo directamente',
    focusOften: 'Las notificaciones me distraen mucho', focusSometimes: 'A veces me distraigo', focusRare: 'Suelo controlar las distracciones',
    infoCompare: 'Buscar otra fuente para comparar', infoAccount: 'Comprobar quién lo comparte', infoUnsure: 'No sé bien cómo comprobarlo',
    recommendation: 'Paso recomendado', reason: 'Motivo', viewMap: 'Ver mapa de orientación', redo: 'Repetir reflexión',
    mapEyebrow: 'ELIGE TU PASO', mapTitle: 'Mapa de orientación digital', mapDescription: 'Cinco pasos breves para prepararte. El orden es flexible: empieza donde quieras.',
    progress: 'pasos completados', statusNotStarted: 'Sin empezar', statusInProgress: 'En curso', statusDone: 'Completado',
    markDone: 'Marcar completado', markProgress: 'Empezar este paso', undoDone: 'Deshacer',
    steps: [['Conoce tus herramientas','Comprueba que tus dispositivos, aplicaciones y comunicación en línea te ayudan a aprender.','Elige una aplicación, localiza dónde guardar materiales y practica cómo pedir ayuda con respeto.'],
      ['Prepara tu espacio','Organiza el espacio físico y digital para encontrar materiales y reducir distracciones.','Crea una carpeta y nombra archivos con tema y fecha; cierra pestañas innecesarias.'],
      ['Organiza tiempo y atención','Elige una duración realista y una estrategia sencilla contra las distracciones.','Elige una tarea pequeña y usa el temporizador para una sesión breve.'],
      ['Evalúa y verifica información','Comprueba autoría, pruebas, fecha y otras fuentes antes de compartir.','Busca la fuente original o una fuente fiable para una afirmación que hayas visto.'],
      ['Reflexiona y planifica','Observa qué funciona y fija un objetivo pequeño que puedas adaptar cada semana.','Escribe un objetivo concreto y divídelo en tres etapas semanales.']],
    plannerEyebrow: 'SIGUIENTE PASO', plannerTitle: 'Plan de aprendizaje de tres semanas',
    plannerDescription: 'Una guía flexible, no un horario obligatorio ni una garantía de resultados.',
    goalLabel: '¿Qué quieres aprender?', goalPlaceholder: 'Por ejemplo: crear una página web sencilla', hoursLabel: 'Tiempo disponible por semana',
    hours: 'horas', savePlan: 'Guardar plan', weekNames: ['Semana 1 · Crear un hábito','Semana 2 · Practicar','Semana 3 · Aplicar y reflexionar'],
    weekDescriptions: ['Prepara tu espacio y un objetivo pequeño.','Practica una habilidad en sesiones breves.','Aplica lo aprendido y anota el siguiente paso.'],
    planSaved: 'Plan guardado en este dispositivo.', planNotSaved: 'Almacenamiento no disponible; el plan solo dura esta sesión.',
    printPlan: 'Imprimir / guardar PDF', downloadCalendar: 'Descargar .ics', completionTitle: 'Tu plan está listo para continuar',
    completionText: 'Puedes cambiar el plan cuando quieras; no es necesario completar todo hoy.', continuePlan: 'Continuar plan', editRecommendation: 'Cambiar sugerencia',
    toolkitEyebrow: 'HERRAMIENTA PRÁCTICA', toolkitTitle: 'Ayúdate a mantener la concentración', timerTitle: 'Temporizador de enfoque',
    timerDescription: 'Una sesión de 25 minutos. Usa una hora límite y sigue siendo preciso en segundo plano.',
    startTimer: 'Empezar', pauseTimer: 'Pausa', resetTimer: 'Reiniciar', sessionsToday: 'Sesiones de hoy',
    timerDone: 'Sesión completada. Descansa un momento antes de empezar otra.',
    scenarioTitle: 'Prueba una decisión digital', scenarioDescription: 'Recibes una infografía sobre aprender más rápido, pero no cita fuentes. ¿Qué haces primero?',
    scenarioChoices: ['Compartirla inmediatamente','Buscar la fuente original y comparar','Desconfiar de toda información en línea'],
    scenarioFeedback: 'Buscar la fuente original y comparar afirmaciones ayuda a valorar el contexto y las pruebas.', scenarioDone: 'Marcar como probado', scenarioCompleted: 'Probado',
    privacyEyebrow: 'PRIVACIDAD Y CONTROL', privacyTitle: 'Tus datos son tuyos',
    privacyText: 'Sin cuentas ni servidores. La reflexión y el plan se guardan en este navegador. Si el almacenamiento está desactivado, los datos solo duran esta sesión.',
    exportData: 'Exportar progreso', importData: 'Importar progreso', resetData: 'Borrar todos los datos',
    importSuccess: 'Progreso importado.', importError: 'El archivo no es válido o el formato no es compatible.',
    resetConfirm: '¿Borrar todo el progreso y los planes guardados en este dispositivo?', resetDone: 'Se borraron los datos locales.',
    storageWarning: 'El almacenamiento no está disponible o no se pudieron leer datos anteriores. El progreso quizá solo dure mientras esta página esté abierta.',
    storageReady: 'Progreso guardado en este dispositivo.', faqTitle: 'Preguntas frecuentes',
    faqQ1: '¿Cómo te ayuda EduFuture?', faqA1: 'EduFuture te ayuda a preparar hábitos y un plan antes de aprender digitalmente; no hay clases, cuentas, docentes ni calificaciones.',
    faqQ2: '¿Quién puede ver mis datos?', faqA2: 'Los datos permanecen en el navegador de este dispositivo y no se envían a un servidor. Quien tenga un archivo exportado puede leerlo.',
    faqQ3: '¿Debo seguir el orden?', faqA3: 'No. La recomendación es solo un punto de partida; puedes elegir cualquier paso.',
    faqQ4: '¿Cómo borro o traslado mi progreso?', faqA4: 'Exporta un archivo JSON, impórtalo en otro dispositivo o borra todos los datos locales.',
    begin: 'Empezar orientación', answerRequired: 'Elige una respuesta para continuar.',
  },
  ar: {
    tagline: 'أداة التهيئة للتعلم الرقمي', navStart: 'البداية', navReflection: 'التأمل', navMap: 'الخريطة', navPlan: 'الخطة', navTools: 'الأدوات',
    heroEyebrow: 'خطوات صغيرة لبداية واثقة', heroTitle: 'يبدأ التعلم الرقمي بفهم احتياجاتك.',
    themeLight: 'تفعيل الوضع الفاتح', themeDark: 'تفعيل الوضع الداكن', close: 'إغلاق',
    heroDescription: 'تأمل عاداتك، واختر خطوة أولى مناسبة، ثم أنشئ خطة مرنة. لا حاجة إلى حساب.',
    start: 'ابدأ التأمل', continue: 'تابع التهيئة', seeHow: 'كيف يعمل', noAccount: 'مجاني · التقدم محفوظ على جهازك',
    stepsLabel: 'مسار بسيط', howTitle: 'ابدأ بما يفيدك', how1: 'تأمل عاداتك', how1d: 'أجب عن أسئلة بسيطة حول طريقة تعلمك ومكانه.',
    how2: 'اختر خطوة أولى', how2d: 'احصل على اقتراح واضح السبب، مع بقاء كل الخطوات متاحة.', how3: 'أنشئ خطة', how3d: 'أنشئ خطة مرنة لثلاثة أسابيع.',
    reflectionEyebrow: 'نقطة البداية', reflectionTitle: 'تأمل الاستعداد للتعلم', reflectionDescription: 'لا توجد إجابات صحيحة أو خاطئة. تساعد إجاباتك في اقتراح بداية ولا تصنفك.',
    question: 'السؤال', of: 'من', back: 'السابق', next: 'التالي', showResult: 'اعرض اقتراحي', resultTitle: 'اقتراح بداية لك',
    resultDisclaimer: 'هذا تأمل موجز وليس اختبار قدرات أو تشخيصًا. يمكنك اختيار خطوة أخرى.',
    formatLabel: 'التنسيق المفضل', focusLabel: 'التركيز والمشتتات', infoLabel: 'التحقق من المعلومات',
    qFormatOne: 'عندما تتعلم شيئًا جديدًا، ما الذي يساعدك عادة أكثر؟',
    qFocusOne: 'عند بدء جلسة تعلم عبر الإنترنت، تكون إشعارات الهاتف عادة...',
    qInfoOne: 'وجدت منشورًا تعليميًا بلا مصادر. ماذا تفعل عادة؟',
    qFormatTwo: 'إذا بدا الموضوع صعبًا، فما الطريقة الأريح لاستكشافه؟',
    qFocusTwo: 'بعد التعلم لبعض الوقت، يكون تركيزك عادة...',
    qInfoTwo: 'تمت مشاركة ادعاء مثير في مجموعة. ما خطوتك الأولى؟',
    formatVisual: 'مشاهدة أمثلة أو مخططات', formatAudio: 'الاستماع إلى شرح', formatPractice: 'التجربة بنفسك',
    focusOften: 'الإشعارات تشتتني كثيرًا', focusSometimes: 'أتشتت أحيانًا', focusRare: 'أستطيع عادة إدارة المشتتات',
    infoCompare: 'البحث عن مصدر آخر للمقارنة', infoAccount: 'التحقق ممن نشرها', infoUnsure: 'لست متأكدًا من طريقة التحقق',
    recommendation: 'الخطوة المقترحة', reason: 'السبب', viewMap: 'عرض خريطة التهيئة', redo: 'إعادة التأمل',
    mapEyebrow: 'اختر خطوتك', mapTitle: 'خريطة التهيئة للتعلم الرقمي',
    mapDescription: 'خمس خطوات قصيرة للاستعداد للتعلم الرقمي. الترتيب مرن ويمكنك البدء من أي مكان.',
    progress: 'خطوات مكتملة', statusNotStarted: 'لم تبدأ', statusInProgress: 'قيد التنفيذ', statusDone: 'مكتملة',
    markDone: 'تحديد كمكتملة', markProgress: 'ابدأ هذه الخطوة', undoDone: 'تراجع عن الإكمال',
    steps: [['تعرف على أدوات التعلم','تأكد من أن أجهزتك وتطبيقاتك وتواصلك عبر الإنترنت تدعم التعلم.','اختر تطبيقًا وحدد مكان حفظ المواد وتدرب على طلب المساعدة بأدب.'],
      ['جهز مساحة التعلم','نظم المساحة المادية والرقمية لتسهيل العثور على المواد وتقليل المشتتات.','أنشئ مجلدًا خاصًا وسم الملفات بالموضوع والتاريخ وأغلق علامات التبويب غير اللازمة.'],
      ['نظم الوقت والتركيز','اختر مدة واقعية للتعلم وطريقة بسيطة للتعامل مع المشتتات.','اختر مهمة صغيرة واستخدم المؤقت لجلسة تركيز قصيرة.'],
      ['تحقق من المعلومات','تحقق من الكاتب والأدلة والتاريخ ومصدر آخر قبل المشاركة.','ابحث عن المصدر الأصلي أو مصدر موثوق لادعاء رأيته.'],
      ['تأمل وخطط','لاحظ ما ينجح وضع هدفًا صغيرًا يمكن تعديله أسبوعيًا.','اكتب هدفًا محددًا وقسمه إلى ثلاث مراحل أسبوعية.']],
    plannerEyebrow: 'خطوتك التالية', plannerTitle: 'خطة تعلم لثلاثة أسابيع',
    plannerDescription: 'إرشاد مرن وليس جدولًا إلزاميًا أو ضمانًا للنتائج.',
    goalLabel: 'ماذا تريد أن تتعلم؟', goalPlaceholder: 'مثال: إنشاء صفحة ويب بسيطة', hoursLabel: 'الوقت المتاح أسبوعيًا',
    hours: 'ساعات', savePlan: 'احفظ الخطة', weekNames: ['الأسبوع 1 · بناء عادة','الأسبوع 2 · تدريب مركز','الأسبوع 3 · تطبيق وتأمل'],
    weekDescriptions: ['جهز مساحتك واختر هدفًا صغيرًا.','تدرب على مهارة في جلسات قصيرة.','طبق ما تعلمته وسجل الخطوة التالية.'],
    planSaved: 'حُفظت الخطة على هذا الجهاز.', planNotSaved: 'التخزين غير متاح؛ تبقى الخطة خلال هذه الجلسة فقط.',
    printPlan: 'طباعة / حفظ PDF', downloadCalendar: 'تنزيل .ics', completionTitle: 'خطتك جاهزة للمتابعة',
    completionText: 'يمكنك تعديل الخطة في أي وقت، ولا يلزم إكمال كل الخطوات اليوم.',
    continuePlan: 'تابع الخطة', editRecommendation: 'تغيير الاقتراح',
    toolkitEyebrow: 'أداة عملية', toolkitTitle: 'ساعد نفسك على التركيز', timerTitle: 'مؤقت التركيز',
    timerDescription: 'جلسة تركيز مدتها 25 دقيقة. يعتمد الوقت على الموعد الفعلي ليظل دقيقًا في الخلفية.',
    startTimer: 'ابدأ التركيز', pauseTimer: 'إيقاف مؤقت', resetTimer: 'إعادة ضبط', sessionsToday: 'جلسات التركيز اليوم',
    timerDone: 'انتهت جلسة التركيز. خذ استراحة قصيرة قبل بدء جلسة أخرى.',
    scenarioTitle: 'جرّب قرارًا رقميًا', scenarioDescription: 'تلقيت رسمًا معلوماتيًا عن التعلم الأسرع بلا مصادر. ما الخطوة الأولى المفيدة؟',
    scenarioChoices: ['مشاركته فورًا','البحث عن المصدر الأصلي ومقارنة المعلومات','اعتبار كل المعلومات على الإنترنت غير موثوقة'],
    scenarioFeedback: 'يساعد العثور على المصدر الأصلي ومقارنة الادعاءات في تقييم السياق والأدلة.', scenarioDone: 'تحديد التجربة كمكتملة', scenarioCompleted: 'تمت التجربة',
    privacyEyebrow: 'الخصوصية والتحكم', privacyTitle: 'بياناتك ملكك',
    privacyText: 'لا حسابات أو خوادم. تُحفظ إجاباتك وخطتك في متصفح هذا الجهاز. إذا تعذر التخزين، تبقى البيانات لهذه الجلسة فقط.',
    exportData: 'تصدير التقدم', importData: 'استيراد التقدم', resetData: 'حذف كل البيانات',
    importSuccess: 'تم استيراد التقدم.', importError: 'الملف غير صالح أو تنسيقه غير مدعوم.',
    resetConfirm: 'هل تريد حذف كل التقدم والخطط المحفوظة على هذا الجهاز؟', resetDone: 'حُذفت البيانات المحلية.',
    storageWarning: 'تخزين المتصفح غير متاح أو تعذرت قراءة البيانات السابقة. قد يبقى التقدم ما دامت الصفحة مفتوحة.', storageReady: 'التقدم محفوظ على هذا الجهاز.',
    faqTitle: 'الأسئلة الشائعة', faqQ1: 'كيف يساعدك EduFuture؟', faqA1: 'يساعدك EduFuture على إعداد العادات والخطة قبل التعلم الرقمي؛ لا توجد فصول أو حسابات أو معلمون أو درجات.',
    faqQ2: 'من يمكنه رؤية بياناتي؟', faqA2: 'تبقى البيانات في متصفح هذا الجهاز ولا تُرسل إلى خادم. يمكن لأي شخص يملك الملف المُصدّر قراءته.',
    faqQ3: 'هل يجب اتباع ترتيب الخطوات؟', faqA3: 'لا. الاقتراح نقطة بداية فقط ويمكنك اختيار أي خطوة تناسبك.',
    faqQ4: 'كيف أحذف التقدم أو أنقله؟', faqA4: 'صدّر ملف JSON وانقله إلى جهاز آخر لاستيراده، أو احذف كل البيانات المحلية.',
    begin: 'ابدأ التهيئة', answerRequired: 'اختر إجابة للمتابعة.',
  },
  fr: {
    tagline: 'OUTIL D’ORIENTATION POUR L’APPRENTISSAGE NUMÉRIQUE', navStart: 'Accueil', navReflection: 'Réflexion', navMap: 'Parcours', navPlan: 'Plan', navTools: 'Outils',
    heroEyebrow: 'De petits pas pour commencer avec confiance', heroTitle: 'L’apprentissage numérique commence par comprendre vos besoins.',
    themeLight: 'Activer le thème clair', themeDark: 'Activer le thème sombre', close: 'Fermer',
    heroDescription: 'Réfléchissez à vos habitudes, choisissez une première étape utile et créez un plan flexible. Sans compte.',
    start: 'Commencer la réflexion', continue: 'Continuer', seeHow: 'Comment ça marche', noAccount: 'Gratuit · Progression enregistrée sur votre appareil',
    stepsLabel: 'UN PARCOURS SIMPLE', howTitle: 'Commencez par ce qui vous est utile',
    how1: 'Réfléchir à ses habitudes', how1d: 'Répondez à quelques questions simples sur votre façon et votre lieu d’apprentissage.',
    how2: 'Choisir une première étape', how2d: 'Recevez une suggestion expliquée. Toutes les étapes restent accessibles.',
    how3: 'Créer un plan', how3d: 'Préparez un plan flexible sur trois semaines.',
    reflectionEyebrow: 'POINT DE DÉPART', reflectionTitle: 'Réflexion sur votre préparation',
    reflectionDescription: 'Il n’y a pas de bonne ou mauvaise réponse. Vos réponses suggèrent un point de départ, sans vous étiqueter.',
    question: 'Question', of: 'sur', back: 'Retour', next: 'Suivant', showResult: 'Voir ma suggestion',
    resultTitle: 'Une suggestion pour commencer', resultDisclaimer: 'Il s’agit d’une courte réflexion, pas d’un test de capacités ni d’un diagnostic.',
    formatLabel: 'Format préféré', focusLabel: 'Concentration et distractions', infoLabel: 'Vérifier une information',
    qFormatOne: 'Quand vous découvrez un sujet, qu’est-ce qui vous aide le plus ?',
    qFocusOne: 'Au début d’une séance en ligne, les notifications du téléphone…',
    qInfoOne: 'Vous trouvez une publication éducative sans source. Que faites-vous généralement ?',
    qFormatTwo: 'Si un sujet paraît difficile, quelle façon de l’explorer vous convient le mieux ?',
    qFocusTwo: 'Après un moment d’étude, votre attention…',
    qInfoTwo: 'Une affirmation intéressante est partagée dans un groupe. Que faites-vous d’abord ?',
    formatVisual: 'Voir des exemples ou schémas', formatAudio: 'Écouter une explication', formatPractice: 'Essayer directement',
    focusOften: 'Les notifications me distraient souvent', focusSometimes: 'Je suis parfois distrait', focusRare: 'Je gère généralement les distractions',
    infoCompare: 'Chercher une autre source pour comparer', infoAccount: 'Vérifier qui l’a partagée', infoUnsure: 'Je ne sais pas encore comment vérifier',
    recommendation: 'Étape suggérée', reason: 'Pourquoi', viewMap: 'Voir le parcours', redo: 'Refaire la réflexion',
    mapEyebrow: 'CHOISISSEZ VOTRE ÉTAPE', mapTitle: 'Parcours d’orientation numérique',
    mapDescription: 'Cinq courtes étapes pour préparer votre apprentissage numérique. L’ordre est libre.',
    progress: 'étapes terminées', statusNotStarted: 'Pas commencé', statusInProgress: 'En cours', statusDone: 'Terminé',
    markDone: 'Marquer comme terminé', markProgress: 'Commencer cette étape', undoDone: 'Annuler',
    steps: [['Connaître ses outils','Vérifiez que vos appareils, applications et échanges en ligne facilitent votre apprentissage.','Choisissez une application et repérez où enregistrer vos ressources et demander de l’aide poliment.'],
      ['Préparer son espace','Organisez vos espaces physique et numérique pour trouver les ressources et limiter les distractions.','Créez un dossier dédié, nommez les fichiers avec thème et date, puis fermez les onglets inutiles.'],
      ['Gérer son temps et sa concentration','Choisissez une durée réaliste et une méthode simple pour limiter les distractions.','Choisissez une petite tâche et lancez une courte séance de concentration avec le minuteur.'],
      ['Trier et vérifier l’information','Vérifiez l’auteur, les preuves, la date et d’autres sources avant de partager.','Cherchez la source originale ou une source fiable pour une affirmation rencontrée.'],
      ['Réfléchir et planifier','Repérez ce qui fonctionne et choisissez un petit objectif adaptable chaque semaine.','Écrivez un objectif précis et divisez-le en trois étapes hebdomadaires.']],
    plannerEyebrow: 'PROCHAINE ÉTAPE', plannerTitle: 'Plan d’apprentissage sur trois semaines',
    plannerDescription: 'Un guide flexible, pas un calendrier obligatoire ni une promesse de résultat.',
    goalLabel: 'Que souhaitez-vous apprendre ?', goalPlaceholder: 'Exemple : créer une page web simple', hoursLabel: 'Temps disponible par semaine',
    hours: 'heures', savePlan: 'Enregistrer le plan', weekNames: ['Semaine 1 · Prendre une habitude','Semaine 2 · Pratiquer','Semaine 3 · Appliquer et réfléchir'],
    weekDescriptions: ['Préparez votre espace et choisissez un petit objectif.','Entraînez une compétence avec de courtes séances.','Appliquez vos acquis et notez la suite.'],
    planSaved: 'Plan enregistré sur cet appareil.', planNotSaved: 'Stockage indisponible ; le plan ne dure que pendant cette session.',
    printPlan: 'Imprimer / enregistrer en PDF', downloadCalendar: 'Télécharger .ics', completionTitle: 'Votre plan est prêt à continuer',
    completionText: 'Vous pouvez modifier ce plan à tout moment. Inutile de tout terminer aujourd’hui.',
    continuePlan: 'Continuer le plan', editRecommendation: 'Modifier la suggestion',
    toolkitEyebrow: 'OUTIL PRATIQUE', toolkitTitle: 'Aidez-vous à rester concentré', timerTitle: 'Minuteur de concentration',
    timerDescription: 'Une séance de 25 minutes. Le minuteur se base sur l’heure réelle et reste précis en arrière-plan.',
    startTimer: 'Commencer', pauseTimer: 'Pause', resetTimer: 'Réinitialiser', sessionsToday: 'Séances aujourd’hui',
    timerDone: 'Séance terminée. Faites une courte pause avant la prochaine.',
    scenarioTitle: 'Essayez une décision numérique', scenarioDescription: 'Vous recevez une infographie sur l’apprentissage rapide sans sources. Quelle est la première étape utile ?',
    scenarioChoices: ['La partager immédiatement','Trouver la source originale et comparer','Penser que toute information en ligne est fausse'],
    scenarioFeedback: 'Retrouver la source originale et comparer les affirmations aide à évaluer le contexte et les preuves.',
    scenarioDone: 'Marquer comme essayé', scenarioCompleted: 'Scénario essayé',
    privacyEyebrow: 'CONFIDENTIALITÉ ET CONTRÔLE', privacyTitle: 'Vos données restent les vôtres',
    privacyText: 'Pas de compte ni de serveur. Vos réponses et votre plan restent dans ce navigateur. Sans stockage, ils ne durent que pendant cette session.',
    exportData: 'Exporter la progression', importData: 'Importer la progression', resetData: 'Tout supprimer',
    importSuccess: 'Progression importée.', importError: 'Fichier invalide ou format non pris en charge.',
    resetConfirm: 'Supprimer toute la progression et les plans de cet appareil ?', resetDone: 'Toutes les données locales ont été supprimées.',
    storageWarning: 'Le stockage est indisponible ou les anciennes données sont illisibles. La progression peut ne durer que pendant cette session.',
    storageReady: 'Progression enregistrée sur cet appareil.', faqTitle: 'Questions fréquentes',
    faqQ1: 'Comment EduFuture vous aide-t-il ?', faqA1: 'EduFuture vous aide à préparer des habitudes et un plan avant l’apprentissage numérique ; il n’y a ni classe, ni compte, ni notes.',
    faqQ2: 'Qui peut voir mes données ?', faqA2: 'Les données restent dans ce navigateur et ne sont pas envoyées à un serveur. Toute personne ayant un fichier exporté peut le lire.',
    faqQ3: 'Dois-je suivre l’ordre ?', faqA3: 'Non. La suggestion est un point de départ ; choisissez toute étape utile.',
    faqQ4: 'Comment supprimer ou transférer ma progression ?', faqA4: 'Exportez un fichier JSON, importez-le sur un autre appareil ou supprimez toutes les données locales.',
    begin: 'Commencer l’orientation', answerRequired: 'Choisissez une réponse pour continuer.',
  },
}

const questions = [
  { key: 'format', promptKey: 'qFormatOne', answers: ['formatVisual', 'formatAudio', 'formatPractice'], values: ['visual', 'audio', 'practice'] },
  { key: 'focus', promptKey: 'qFocusOne', answers: ['focusOften', 'focusSometimes', 'focusRare'], values: ['often', 'sometimes', 'rare'] },
  { key: 'info', promptKey: 'qInfoOne', answers: ['infoCompare', 'infoAccount', 'infoUnsure'], values: ['compare', 'account', 'unsure'] },
  { key: 'format', promptKey: 'qFormatTwo', answers: ['formatVisual', 'formatAudio', 'formatPractice'], values: ['visual', 'audio', 'practice'] },
  { key: 'focus', promptKey: 'qFocusTwo', answers: ['focusOften', 'focusSometimes', 'focusRare'], values: ['often', 'sometimes', 'rare'] },
  { key: 'info', promptKey: 'qInfoTwo', answers: ['infoCompare', 'infoAccount', 'infoUnsure'], values: ['compare', 'account', 'unsure'] },
]

function defaultData() {
  return {
    version: 1,
    language: 'id',
    theme: 'light',
    reflection: null,
    steps: [0, 0, 0, 0, 0],
    plan: { goal: '', hours: 2, weeks: [false, false, false] },
    scenarioDone: false,
    sessions: { date: new Date().toLocaleDateString('en-CA'), count: 0 },
  }
}

function validData(value) {
  return value?.version === 1
    && Array.isArray(value.steps) && value.steps.length === 5 && value.steps.every((item) => [0, 1, 2].includes(item))
    && value.plan && typeof value.plan.goal === 'string' && value.plan.goal.length <= 120
    && [1, 2, 3, 4, 5, 6].includes(Number(value.plan.hours))
    && Array.isArray(value.plan.weeks) && value.plan.weeks.length === 3 && value.plan.weeks.every((week) => typeof week === 'boolean')
    && (value.reflection === null || (
      value.reflection && ['visual', 'audio', 'practice'].includes(value.reflection.format)
      && ['often', 'sometimes', 'rare'].includes(value.reflection.focus)
      && ['compare', 'account', 'unsure', 'checked'].includes(value.reflection.info)
    ))
    && typeof value.language === 'string' && typeof value.theme === 'string'
    && typeof value.scenarioDone === 'boolean'
    && value.sessions && typeof value.sessions.date === 'string'
    && Number.isInteger(value.sessions.count) && value.sessions.count >= 0
}

function loadData() {
  const base = defaultData()
  try {
    const probeKey = `${STORAGE_KEY}-probe`
    window.localStorage.setItem(probeKey, '1')
    window.localStorage.removeItem(probeKey)
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      const legacyLanguage = window.localStorage.getItem('edtech-language')
      const legacyTheme = window.localStorage.getItem('edtech-theme')
      const legacyPlans = window.localStorage.getItem('edufuture-planner-progress')
      if (copy[legacyLanguage]) base.language = legacyLanguage
      if (legacyTheme === 'dark') base.theme = 'dark'
      if (legacyPlans) {
        try {
          const parsedPlans = JSON.parse(legacyPlans)
          const previousWeeks = parsedPlans?.ai
          if (Array.isArray(previousWeeks) && previousWeeks.length === 3 && previousWeeks.every((week) => typeof week === 'boolean')) {
            base.plan.weeks = previousWeeks
          }
        } catch (error) {
          console.error('Unable to migrate previous EduFuture planner data.', error)
        }
      }
      return { data: base, storage: true }
    }
    const saved = JSON.parse(raw)
    if (!validData(saved)) throw new TypeError('Saved EduFuture data has an unsupported format.')
    return {
      data: {
        ...base,
        ...saved,
        language: copy[saved.language] ? saved.language : 'id',
        theme: saved.theme === 'dark' ? 'dark' : 'light',
        plan: { ...base.plan, ...saved.plan, hours: [1, 2, 3, 4, 5, 6].includes(Number(saved.plan.hours)) ? Number(saved.plan.hours) : 2 },
      },
      storage: true,
    }
  } catch (error) {
    console.error('Unable to read EduFuture local data.', error)
    return { data: base, storage: false }
  }
}

function downloadFile(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function escapeCalendarText(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

function formatTime(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000))
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
}

export default function OrientationApp({ embedded = false, appLanguage, appTheme } = {}) {
  const [initial] = useState(loadData)
  const [data, setData] = useState(initial.data)
  const [storageAvailable, setStorageAvailable] = useState(initial.storage)
  const firstPersist = useRef(true)
  const [storageMessage, setStorageMessage] = useState('')
  const [actionMessage, setActionMessage] = useState('')
  const [resetDialogOpen, setResetDialogOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizError, setQuizError] = useState('')
  const [planMessage, setPlanMessage] = useState('')
  const [scenarioChoice, setScenarioChoice] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [timerEnd, setTimerEnd] = useState(null)
  const [timerRemaining, setTimerRemaining] = useState(25 * 60 * 1000)
  const fileInput = useRef(null)
  const resetButton = useRef(null)
  const resetCancelButton = useRef(null)
  const resetConfirmButton = useRef(null)
  const lang = copy[appLanguage] ? appLanguage : copy[data.language] ? data.language : 'id'
  const text = copy[lang]
  const theme = appTheme === 'dark' ? 'dark' : appTheme === 'light' ? 'light' : data.theme
  const completeSteps = data.steps.filter((step) => step === 2).length
  const planComplete = Boolean(data.plan.goal.trim())
  const orientationComplete = Boolean(data.reflection) && completeSteps > 0 && planComplete
  const currentQuestion = questions[questionIndex]
  const selectedAnswer = answers[questionIndex]
  const suggestedStep = useMemo(() => {
    if (!data.reflection) return 0
    if (data.reflection.focus === 'often') return 2
    if (data.reflection.info === 'unsure') return 3
    return 0
  }, [data.reflection])
  const sessionDate = new Date().toLocaleDateString('en-CA')
  const sessionsToday = data.sessions?.date === sessionDate ? data.sessions.count : 0
  const [timerNow, setTimerNow] = useState(Date.now())
  const [timerNotice, setTimerNotice] = useState('')
  const running = timerEnd !== null
  const timerValue = running ? Math.max(0, timerEnd - timerNow) : timerRemaining

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  useEffect(() => {
    if (embedded) return
    const baseTitle = lang === 'id'
      ? 'EduFuture – Alat Bantu Orientasi Belajar Digital'
      : 'EduFuture – Digital Learning Orientation Toolkit'
    document.title = running ? `⏱ ${formatTime(timerValue)} – EduFuture` : baseTitle
  }, [embedded, lang, running, timerValue])

  useEffect(() => {
    if (!embedded) document.documentElement.dataset.theme = data.theme
    if (firstPersist.current) {
      firstPersist.current = false
      return
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      setStorageAvailable(true)
      setStorageMessage('')
    } catch (error) {
      console.error('Unable to save EduFuture local data.', error)
      setStorageAvailable(false)
      setStorageMessage(text.storageWarning)
    }
  }, [data, embedded, text.storageWarning])

  useEffect(() => {
    if (!appLanguage && !appTheme) return
    setData((previous) => ({
      ...previous,
      language: copy[appLanguage] ? appLanguage : previous.language,
      theme: appTheme === 'dark' || appTheme === 'light' ? appTheme : previous.theme,
    }))
  }, [appLanguage, appTheme])

  useEffect(() => {
    if (!running) return undefined
    const interval = window.setInterval(() => {
      const now = Date.now()
      setTimerNow(now)
      if (timerEnd <= now) {
        setTimerRemaining(0)
        setTimerEnd(null)
        setTimerNotice(text.timerDone)
        setData((previous) => ({
          ...previous,
          sessions: {
            date: new Date().toLocaleDateString('en-CA'),
            count: previous.sessions?.date === new Date().toLocaleDateString('en-CA')
              ? previous.sessions.count + 1
              : 1,
          },
        }))
      }
    }, 250)
    return () => window.clearInterval(interval)
  }, [running, timerEnd, text.timerDone])

  useEffect(() => {
    if (!storageAvailable) setStorageMessage(text.storageWarning)
    else setStorageMessage('')
  }, [lang, storageAvailable, text.storageWarning])

  const updateData = (patch) => setData((previous) => ({ ...previous, ...patch }))
  const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const startReflection = () => {
    setQuizOpen(true)
    setQuestionIndex(0)
    setAnswers([])
    setQuizError('')
    window.setTimeout(() => jumpTo('reflection'), 0)
  }

  const submitReflection = () => {
    if (answers.length !== questions.length || questions.some((_, index) => !answers[index])) {
      setQuizError(text.answerRequired)
      return
    }
    const preferenceCounts = { visual: 0, audio: 0, practice: 0 }
    answers.forEach((answer, index) => {
      if (questions[index].key === 'format') preferenceCounts[answer] += 1
    })
    const format = Object.keys(preferenceCounts).reduce((best, item) => (
      preferenceCounts[item] > preferenceCounts[best] ? item : best
    ), 'visual')
    updateData({
      reflection: {
        format,
        focus: answers.find((_, index) => questions[index].key === 'focus' && answers[index] === 'often') ? 'often'
          : answers.some((_, index) => questions[index].key === 'focus' && answers[index] === 'sometimes') ? 'sometimes'
            : 'rare',
        info: answers.find((_, index) => questions[index].key === 'info' && answers[index] === 'unsure')
          ? 'unsure'
          : answers.find((_, index) => questions[index].key === 'info' && answers[index] === 'account')
            ? 'account'
            : 'compare',
        completedAt: new Date().toISOString().slice(0, 10),
      },
    })
    setQuizOpen(false)
    setQuizError('')
  }

  const toggleStep = (index) => {
    const next = [...data.steps]
    next[index] = next[index] === 0 ? 1 : next[index] === 1 ? 2 : 0
    updateData({ steps: next })
  }

  const updatePlan = (patch) => updateData({ plan: { ...data.plan, ...patch } })
  const toggleWeek = (index) => {
    const weeks = [...data.plan.weeks]
    weeks[index] = !weeks[index]
    updatePlan({ weeks })
  }

  const toggleTheme = () => updateData({ theme: theme === 'dark' ? 'light' : 'dark' })

  const exportProgress = () => downloadFile(
    'edufuture-progress.json',
    JSON.stringify(data, null, 2),
    'application/json',
  )

  const importProgress = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    try {
      const imported = JSON.parse(await file.text())
      if (!validData(imported)) throw new TypeError('Unsupported progress file.')
      updateData({
        ...defaultData(),
        ...imported,
        language: copy[imported.language] ? imported.language : lang,
        theme: imported.theme === 'dark' ? 'dark' : 'light',
        plan: {
          ...defaultData().plan,
          ...imported.plan,
          hours: [1, 2, 3, 4, 5, 6].includes(Number(imported.plan.hours)) ? Number(imported.plan.hours) : 2,
        },
      })
      setActionMessage(text.importSuccess)
    } catch (error) {
      console.error('Unable to import EduFuture progress.', error)
      setActionMessage(text.importError)
    }
  }

  const openResetDialog = () => {
    setResetDialogOpen(true)
  }

  const cancelResetDialog = () => {
    setResetDialogOpen(false)
    window.requestAnimationFrame(() => resetButton.current?.focus())
  }

  const resetProgress = () => {
    setResetDialogOpen(false)
    const clean = defaultData()
    clean.language = lang
    clean.theme = theme
    setData(clean)
    setAnswers([])
    setQuizOpen(false)
    setScenarioChoice(null)
    setTimerEnd(null)
    setTimerRemaining(25 * 60 * 1000)
    setTimerNotice('')
    setActionMessage(text.resetDone)
    window.requestAnimationFrame(() => resetButton.current?.focus())
  }

  useEffect(() => {
    if (!resetDialogOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    resetCancelButton.current?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setResetDialogOpen(false)
        window.requestAnimationFrame(() => resetButton.current?.focus())
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [resetDialogOpen])

  const savePlan = (event) => {
    event.preventDefault()
    if (!data.plan.goal.trim()) {
      setPlanMessage(text.goalLabel)
      return
    }
    setPlanMessage(storageAvailable ? text.planSaved : text.planNotSaved)
    if (!data.steps.includes(2)) {
      const steps = [...data.steps]
      steps[4] = 2
      updateData({ steps })
    }
  }

  const downloadCalendar = () => {
    const safeGoal = escapeCalendarText(data.plan.goal)
    const today = new Date()
    const events = text.weekNames.map((name, index) => {
      const start = new Date(today)
      start.setDate(today.getDate() + index * 7)
      const end = new Date(start)
      end.setDate(start.getDate() + 1)
      const toDate = (date) => [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0'),
      ].join('')
      return [
      'BEGIN:VEVENT',
      `UID:edufuture-week-${index + 1}@local`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
      `DTSTART;VALUE=DATE:${toDate(start)}`,
      `DTEND;VALUE=DATE:${toDate(end)}`,
      `SUMMARY:${escapeCalendarText(`${name} - ${safeGoal}`)}`,
      `DESCRIPTION:${escapeCalendarText(text.weekDescriptions[index])}`,
      'END:VEVENT',
      ].join('\r\n')
    }).join('\r\n')
    downloadFile(
      'edufuture-learning-plan.ics',
      `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//EduFuture//Learning Plan//EN\r\nCALSCALE:GREGORIAN\r\n${events}\r\nEND:VCALENDAR`,
      'text/calendar;charset=utf-8',
    )
  }

  const startTimer = () => {
    setTimerNotice('')
    setTimerNow(Date.now())
    setTimerEnd(Date.now() + timerRemaining)
  }
  const pauseTimer = () => {
    setTimerRemaining(Math.max(0, timerEnd - Date.now()))
    setTimerEnd(null)
  }
  const resetTimer = () => {
    setTimerEnd(null)
    setTimerRemaining(25 * 60 * 1000)
    setTimerNotice('')
  }

  const formatName = (value) => ({
    visual: text.formatVisual,
    audio: text.formatAudio,
    practice: text.formatPractice,
  }[value] || text.formatVisual)
  const recommendationReason = suggestedStep === 2
    ? text.focusOften
    : suggestedStep === 3
      ? text.infoUnsure
      : formatName(data.reflection?.format)
  const faqItems = [[text.faqQ1, text.faqA1], [text.faqQ2, text.faqA2], [text.faqQ3, text.faqA3], [text.faqQ4, text.faqA4]]
  const ContentContainer = embedded ? 'div' : 'main'

  return (
    <div className={`ef-app${embedded ? ' ef-embedded' : ''}`} data-theme={theme}>
      {!embedded && <a className="ef-skip-link" href="#main">{lang === 'id' ? 'Lewati ke konten' : 'Skip to content'}</a>}
      {!embedded && <header className="ef-header">
        <a className="ef-brand" href="#top" aria-label="EduFuture">
          <span className="ef-brand-mark"><Globe2 size={19} /></span>
          <span>Edu<span>Future</span></span>
        </a>
        <nav className="ef-nav" aria-label={lang === 'id' ? 'Navigasi utama' : 'Main navigation'}>
          <a href="#top">{text.navStart}</a>
          <a href="#reflection">{text.navReflection}</a>
          <a href="#orientation-map">{text.navMap}</a>
          <a href="#plan">{text.navPlan}</a>
          <a href="#toolkit">{text.navTools}</a>
          <a href="#faq">{text.faqTitle}</a>
        </nav>
        <div className="ef-header-actions">
          <label className="ef-language">
            <Globe2 size={16} aria-hidden="true" />
            <span className="ef-sr-only">{lang === 'id' ? 'Pilih bahasa' : 'Choose language'}</span>
            <select value={lang} onChange={(event) => updateData({ language: event.target.value })}>
              {languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
            </select>
          </label>
          <button className="ef-icon-button" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? text.themeLight : text.themeDark}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>}

      <ContentContainer className={embedded ? 'ef-content' : undefined} id={embedded ? undefined : 'main'}>
        {!embedded && <section className="ef-hero" id="top">
          <div className="ef-hero-copy">
            <p className="ef-eyebrow"><span className="ef-dot" />{text.heroEyebrow}</p>
            <h1>{text.heroTitle}</h1>
            <p className="ef-lead">{text.heroDescription}</p>
            <div className="ef-actions">
              <button className="ef-button ef-button-primary" type="button" onClick={() => data.reflection ? jumpTo('orientation-map') : startReflection()}>
                {data.reflection ? text.continue : text.start}<ArrowRight size={17} />
              </button>
              <a className="ef-button ef-button-quiet" href="#how-it-works">{text.seeHow}<ArrowDown size={16} /></a>
            </div>
            <p className="ef-trust"><ShieldCheck size={16} />{text.noAccount}</p>
          </div>
          <div className="ef-hero-card" aria-label={text.stepsLabel}>
            <div className="ef-orbit ef-orbit-one" />
            <div className="ef-orbit ef-orbit-two" />
            <span className="ef-hero-symbol"><BookOpen size={31} /></span>
            <span className="ef-card-label">{text.stepsLabel}</span>
            <div className="ef-mini-path">
              <span className={data.reflection ? 'is-reached' : ''}>01</span>
              <i />
              <span className={completeSteps > 0 ? 'is-reached' : ''}>02</span>
              <i />
              <span className={planComplete ? 'is-reached' : ''}>03</span>
            </div>
            <p>{text.how1} <span>→</span> {text.how2} <span>→</span> {text.how3}</p>
          </div>
        </section>}

        {!embedded && <section className="ef-how ef-section" id="how-it-works">
          <div className="ef-section-heading">
            <p className="ef-eyebrow">{text.stepsLabel}</p>
            <h2>{text.howTitle}</h2>
          </div>
          <div className="ef-how-grid">
            {[
              [text.how1, text.how1d, <Lightbulb size={20} />],
              [text.how2, text.how2d, <Focus size={20} />],
              [text.how3, text.how3d, <CheckCircle2 size={20} />],
            ].map(([title, description, icon], index) => (
              <article className="ef-how-card" key={title}>
                <span className="ef-how-number">0{index + 1}</span>
                <span className="ef-how-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>}

        <section className="ef-reflection ef-section" id="reflection">
          <div className="ef-section-heading">
            <p className="ef-eyebrow">{text.reflectionEyebrow}</p>
            <h2>{text.reflectionTitle}</h2>
            <p>{text.reflectionDescription}</p>
          </div>
          {!data.reflection && !quizOpen && (
            <button className="ef-button ef-button-primary" type="button" onClick={startReflection}>
              {text.begin}<ArrowRight size={17} />
            </button>
          )}
          {quizOpen && (
            <div className="ef-quiz-card">
              <div className="ef-quiz-top">
                <span>{text.question} {questionIndex + 1} {text.of} {questions.length}</span>
                <button className="ef-icon-button" type="button" onClick={() => setQuizOpen(false)} aria-label={text.close}><X size={17} /></button>
              </div>
              <progress aria-label={`${text.question} ${questionIndex + 1} ${text.of} ${questions.length}`} max={questions.length} value={questionIndex + 1} />
              <fieldset className="ef-question">
                <legend>{text[currentQuestion.promptKey]}</legend>
                <div className="ef-answer-list">
                  {currentQuestion.answers.map((answerKey, index) => (
                    <label className={`ef-answer${selectedAnswer === currentQuestion.values[index] ? ' is-selected' : ''}`} key={answerKey}>
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={currentQuestion.values[index]}
                        checked={selectedAnswer === currentQuestion.values[index]}
                        onChange={() => {
                          const next = [...answers]
                          next[questionIndex] = currentQuestion.values[index]
                          setAnswers(next)
                          setQuizError('')
                        }}
                      />
                      <span className="ef-radio-mark" />
                      <span>{text[answerKey]}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <p className="ef-error" aria-live="polite">{quizError}</p>
              <div className="ef-quiz-actions">
                <button className="ef-button ef-button-quiet" type="button" disabled={questionIndex === 0} onClick={() => setQuestionIndex((index) => Math.max(0, index - 1))}>{text.back}</button>
                {questionIndex < questions.length - 1
                  ? <button className="ef-button ef-button-primary" type="button" onClick={() => selectedAnswer ? setQuestionIndex((index) => index + 1) : setQuizError(text.answerRequired)}>{text.next}<ArrowRight size={16} /></button>
                  : <button className="ef-button ef-button-primary" type="button" onClick={submitReflection}>{text.showResult}<ArrowRight size={16} /></button>}
              </div>
            </div>
          )}
          {data.reflection && !quizOpen && (
            <article className="ef-result-card" aria-live="polite">
              <div className="ef-result-icon"><Lightbulb size={21} /></div>
              <div className="ef-result-content">
                <h3>{text.resultTitle}</h3>
                <p>{text.resultDisclaimer}</p>
                <div className="ef-result-pills">
                  <span><strong>{text.formatLabel}</strong>{formatName(data.reflection.format)}</span>
                  <span><strong>{text.focusLabel}</strong>{text[data.reflection.focus === 'often' ? 'focusOften' : data.reflection.focus === 'sometimes' ? 'focusSometimes' : 'focusRare']}</span>
                  <span><strong>{text.infoLabel}</strong>{text[data.reflection.info === 'unsure' ? 'infoUnsure' : data.reflection.info === 'account' ? 'infoAccount' : 'infoCompare']}</span>
                </div>
                <div className="ef-recommendation">
                  <strong>{text.recommendation}: {text.steps[suggestedStep][0]}</strong>
                  <span>{text.reason}: {recommendationReason}</span>
                </div>
                <div className="ef-result-actions">
                  <button className="ef-button ef-button-primary" type="button" onClick={() => jumpTo('orientation-map')}>{text.viewMap}<ArrowRight size={16} /></button>
                  <button className="ef-button ef-button-quiet" type="button" onClick={startReflection}>{text.redo}</button>
                </div>
              </div>
            </article>
          )}
        </section>

        <section className="ef-map ef-section" id="orientation-map">
          <div className="ef-section-heading ef-heading-row">
            <div>
              <p className="ef-eyebrow">{text.mapEyebrow}</p>
              <h2>{text.mapTitle}</h2>
            </div>
            <p>{text.mapDescription}</p>
          </div>
          <div className="ef-progress-summary">
            <div>
              <strong>{completeSteps} / 5</strong>
              <span>{text.progress}</span>
            </div>
            <progress aria-label={`${completeSteps} ${text.progress}`} max="5" value={completeSteps} />
          </div>
          <div className="ef-step-list">
            {text.steps.map(([title, description, activity], index) => {
              const status = data.steps[index]
              const isRecommended = data.reflection && suggestedStep === index
              return (
                <details className={`ef-step-card${isRecommended ? ' is-recommended' : ''}${status === 2 ? ' is-complete' : ''}`} key={title}>
                  <summary>
                    <span className="ef-step-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="ef-step-heading">
                      <strong>{title}</strong>
                      <small>{status === 2 ? text.statusDone : status === 1 ? text.statusInProgress : text.statusNotStarted}{isRecommended ? ` · ${text.recommendation}` : ''}</small>
                    </span>
                    {status === 2 ? <CheckCircle2 className="ef-step-check" size={21} /> : <ChevronDown className="ef-step-chevron" size={19} />}
                  </summary>
                  <div className="ef-step-body">
                    <p>{description}</p>
                    <div className="ef-activity"><Lightbulb size={17} /><span>{activity}</span></div>
                    <button className={status === 2 ? 'ef-button ef-button-quiet' : 'ef-button ef-button-primary'} type="button" onClick={() => toggleStep(index)}>
                      {status === 2
                        ? <><RotateCcw size={15} />{text.undoDone}</>
                        : status === 1
                          ? <><Check size={16} />{text.markDone}</>
                          : <><Play size={15} />{text.markProgress}</>}
                    </button>
                  </div>
                </details>
              )
            })}
          </div>
        </section>

        <section className="ef-plan ef-section" id="plan">
          <div className="ef-section-heading">
            <p className="ef-eyebrow">{text.plannerEyebrow}</p>
            <h2>{text.plannerTitle}</h2>
            <p>{text.plannerDescription}</p>
          </div>
          <form className="ef-plan-card" onSubmit={savePlan}>
            <div className="ef-plan-inputs">
              <label className="ef-field">
                <span>{text.goalLabel}</span>
                <input value={data.plan.goal} onChange={(event) => updatePlan({ goal: event.target.value })} placeholder={text.goalPlaceholder} maxLength={120} />
              </label>
              <div className="ef-field ef-hours-field">
                <span>{text.hoursLabel}</span>
                <SelectField
                  ariaLabel={text.hoursLabel}
                  value={String(data.plan.hours)}
                  onChange={(hours) => updatePlan({ hours: Number(hours) })}
                  options={[1, 2, 3, 4, 5, 6].map((hours) => ({
                    value: String(hours),
                    label: `${hours} ${text.hours}`,
                  }))}
                />
              </div>
            </div>
            <div className="ef-weeks">
              {text.weekNames.map((name, index) => (
                <label className={`ef-week${data.plan.weeks[index] ? ' is-checked' : ''}`} key={name}>
                  <input type="checkbox" checked={Boolean(data.plan.weeks[index])} onChange={() => toggleWeek(index)} />
                  <span className="ef-week-check"><Check size={15} /></span>
                  <span className="ef-week-copy"><strong>{name}</strong><small>{text.weekDescriptions[index]}</small></span>
                </label>
              ))}
            </div>
            <div className="ef-plan-footer">
              <p role="status" aria-live="polite">{planMessage || (planComplete ? (storageAvailable ? text.planSaved : text.planNotSaved) : '')}</p>
              <button className="ef-button ef-button-primary" type="submit">{text.savePlan}<Check size={16} /></button>
            </div>
            {planComplete && (
              <div className="ef-plan-export">
                <button className="ef-button ef-button-quiet" type="button" onClick={() => window.print()}>{text.printPlan}</button>
                <button className="ef-button ef-button-quiet" type="button" onClick={downloadCalendar}>{text.downloadCalendar}<Download size={15} /></button>
              </div>
            )}
          </form>
          {orientationComplete && (
            <aside className="ef-completion" aria-live="polite">
              <span className="ef-completion-mark"><CheckCircle2 size={22} /></span>
              <div><h3>{text.completionTitle}</h3><p>{text.completionText}</p></div>
              <button className="ef-button ef-button-quiet" type="button" onClick={() => jumpTo('plan')}>{text.continuePlan}<ArrowRight size={15} /></button>
            </aside>
          )}
        </section>

        <section className="ef-toolkit ef-section" id="toolkit">
          <div className="ef-section-heading">
            <p className="ef-eyebrow">{text.toolkitEyebrow}</p>
            <h2>{text.toolkitTitle}</h2>
          </div>
          <div className="ef-tools-grid">
            <article className="ef-tool-card">
              <div className="ef-tool-title"><span><Clock3 size={20} /></span><div><h3>{text.timerTitle}</h3><p>{text.timerDescription}</p></div></div>
              <div className="ef-timer-display" aria-live="off">{formatTime(timerValue)}</div>
              <p className="ef-timer-notice" role="status" aria-live="polite">{timerNotice}</p>
              <div className="ef-timer-actions">
                {!running
                  ? <button className="ef-button ef-button-primary" type="button" onClick={startTimer} disabled={timerValue === 0}><Play size={15} />{text.startTimer}</button>
                  : <button className="ef-button ef-button-primary" type="button" onClick={pauseTimer}>{text.pauseTimer}</button>}
                <button className="ef-button ef-button-quiet" type="button" onClick={resetTimer}>{text.resetTimer}</button>
              </div>
              <p className="ef-session-count">{text.sessionsToday}: <strong>{sessionsToday}</strong></p>
            </article>
            <article className="ef-tool-card ef-scenario">
              <div className="ef-tool-title"><span><CircleHelp size={20} /></span><div><h3>{text.scenarioTitle}</h3><p>{text.scenarioDescription}</p></div></div>
              <fieldset className="ef-scenario-options">
                <legend className="ef-sr-only">{text.scenarioTitle}</legend>
                {text.scenarioChoices.map((choice, index) => (
                  <label className={`ef-scenario-choice${scenarioChoice === index ? ' is-selected' : ''}`} key={choice}>
                    <input type="radio" name="scenario" checked={scenarioChoice === index} onChange={() => setScenarioChoice(index)} />
                    <span>{choice}</span>
                  </label>
                ))}
              </fieldset>
              {scenarioChoice !== null && <p className="ef-feedback" aria-live="polite"><Info size={17} />{text.scenarioFeedback}</p>}
              <button className="ef-button ef-button-quiet" type="button" onClick={() => updateData({ scenarioDone: true })} disabled={data.scenarioDone || scenarioChoice === null}>
                {data.scenarioDone ? <><CheckCircle2 size={16} />{text.scenarioCompleted}</> : text.scenarioDone}
              </button>
            </article>
          </div>
        </section>

        <section className="ef-privacy ef-section" id="privacy">
          <div className="ef-privacy-copy">
            <p className="ef-eyebrow">{text.privacyEyebrow}</p>
            <h2>{text.privacyTitle}</h2>
            <p>{text.privacyText}</p>
            <p className={`ef-storage-status${storageAvailable ? '' : ' is-warning'}`} role="status" aria-live="polite">
              {storageAvailable ? <ShieldCheck size={17} /> : <Info size={17} />}
              {storageMessage || actionMessage || (storageAvailable ? text.storageReady : text.storageWarning)}
            </p>
          </div>
          <div className="ef-privacy-actions">
            <button className="ef-button ef-button-secondary" type="button" onClick={exportProgress}><Download size={16} />{text.exportData}</button>
            <button className="ef-button ef-button-secondary" type="button" onClick={() => fileInput.current?.click()}><Upload size={16} />{text.importData}</button>
            <input ref={fileInput} className="ef-sr-only" type="file" accept="application/json,.json" onChange={importProgress} />
            <button className="ef-button ef-button-danger" ref={resetButton} type="button" onClick={openResetDialog}><RotateCcw size={16} />{text.resetData}</button>
          </div>
        </section>

        {resetDialogOpen && (
          <div
            className="ef-confirm-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) cancelResetDialog()
            }}
          >
            <section
              aria-describedby="ef-reset-description"
              aria-labelledby="ef-reset-title"
              aria-modal="true"
              className="ef-confirm-dialog"
              role="alertdialog"
              onKeyDown={(event) => {
                if (event.key !== 'Tab') return
                if (event.shiftKey && document.activeElement === resetCancelButton.current) {
                  event.preventDefault()
                  resetConfirmButton.current?.focus()
                } else if (!event.shiftKey && document.activeElement === resetConfirmButton.current) {
                  event.preventDefault()
                  resetCancelButton.current?.focus()
                }
              }}
            >
              <span className="ef-confirm-icon"><RotateCcw aria-hidden="true" size={21} /></span>
              <h2 id="ef-reset-title">{text.resetData}</h2>
              <p id="ef-reset-description">{text.resetConfirm}</p>
              <div className="ef-confirm-actions">
                <button className="ef-button ef-button-quiet" ref={resetCancelButton} type="button" onClick={cancelResetDialog}>
                  {text.close}
                </button>
                <button className="ef-button ef-button-danger" ref={resetConfirmButton} type="button" onClick={resetProgress}>
                  {text.resetData}
                </button>
              </div>
            </section>
          </div>
        )}

        {!embedded && <section className="ef-faq ef-section" id="faq">
          <div className="ef-section-heading"><p className="ef-eyebrow">{text.privacyEyebrow}</p><h2>{text.faqTitle}</h2></div>
          <div className="ef-faq-list">
            {faqItems.map(([question, answer], index) => (
              <details className="ef-faq-item" key={question} open={openFaq === index} onToggle={(event) => { if (event.currentTarget.open) setOpenFaq(index); else if (openFaq === index) setOpenFaq(null) }}>
                <summary>{question}<ChevronDown size={18} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>}
      </ContentContainer>

      {!embedded && <footer className="ef-footer">
        <a className="ef-brand" href="#top"><span className="ef-brand-mark"><Globe2 size={18} /></span><span>Edu<span>Future</span></span></a>
        <p>{text.footer}</p>
        <span>{text.tagline}</span>
      </footer>}
    </div>
  )
}
