import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  id: {
    translation: {
      nav: {
        label: "Navigasi utama",
        about: "Tentang",
        programs: "Program",
        impact: "Dampak",
        language: "Pilih bahasa",
        cta: "Jelajahi program",
        openMenu: "Buka menu",
        closeMenu: "Tutup menu",
      },
      hero: {
        eyebrow: "Belajar untuk masa depan digital",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "Temukan pengalaman belajar digital yang membantu setiap orang mengembangkan pengetahuan, kreativitas, dan keterampilan masa depan.",
        primary: "Jelajahi kursus",
        secondary: "Cara kerja platform",
        note: "Belajar sesuai tujuan dan ritme Anda",
        artLabel: "Ilustrasi platform pembelajaran digital",
        artTagTop: "PENDIDIKAN × TEKNOLOGI",
        artTagBottom: "BELAJAR UNTUK MASA DEPAN",
        screenKicker: "JELAJAHI",
        screenTitle: "Ubah ide menjadi aksi",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "Gulir ke tentang platform",
      },
      about: {
        eyebrow: "Mengapa ini penting",
        title: "Belajar seharusnya berkembang bersama setiap orang.",
        description:
          "Teknologi membuka cara baru untuk belajar, berkarya, dan mengembangkan potensi. Kami membayangkan pengalaman digital yang relevan, inklusif, dan membantu pembelajar mengambil langkah berikutnya.",
        link: "Temukan cara belajar",
      },
      impact: {
        eyebrow: "Bukti dari penelitian",
        title: "Teknologi dapat mendukung pembelajaran.",
        description:
          "Temuan dari satu studi terkontrol tentang program belajar berbantuan teknologi di India.",
        items: [
          {
            value: "+0,37 SD",
            label: "Skor matematika",
            detail: "Kelompok yang mendapat akses",
          },
          {
            value: "+0,23 SD",
            label: "Skor Hindi",
            detail: "Kelompok yang mendapat akses",
          },
          {
            value: "4,5 bln",
            label: "Durasi studi",
            detail: "Bukan hasil platform ini",
          },
        ],
      },
      programs: {
        eyebrow: "Pengalaman belajar",
        title: "Teknologi yang membantu Anda berkembang.",
        description:
          "Jelajahi pendekatan pembelajaran digital untuk kebutuhan dan tujuan yang berbeda.",
        discover: "Pelajari lebih lanjut",
        items: [
          {
            title: "Pembelajaran personal berbasis AI",
            description:
              "Pengalaman belajar adaptif yang merespons kebutuhan dan kemajuan setiap pembelajar.",
          },
          {
            title: "Kelas virtual imersif",
            description:
              "Ruang digital interaktif untuk belajar, berdiskusi, dan berkolaborasi.",
          },
          {
            title: "Sertifikasi keterampilan",
            description:
              "Jalur terarah untuk membangun keterampilan dan menunjukkan pencapaian.",
          },
          {
            title: "Kreasi teknologi pendidikan",
            description:
              "Kembangkan gagasan digital untuk menjawab tantangan nyata dalam pendidikan.",
          },
        ],
      },
      participate: {
        eyebrow: "Mulai hari ini",
        title: "Siap mengembangkan keterampilan baru?",
        description:
          "Temukan kursus yang sesuai dan mulai belajar dengan langkah kecil yang konsisten.",
        cta: "Jelajahi kursus",
      },
      footer: {
        tagline:
          "Memberdayakan pikiran. Mendigitalisasi masa depan pendidikan.",
        copyright: "Dibuat untuk masa depan pembelajaran.",
        backToTop: "Kembali ke atas",
      },
    },
  },
  en: {
    translation: {
      nav: {
        label: "Main navigation",
        about: "About",
        programs: "Tracks",
        impact: "Our mission",
        language: "Choose language",
        cta: "Explore tracks",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        eyebrow: "Learning for a digital future",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "Discover digital learning experiences that help everyone grow their knowledge, creativity, and future-ready skills.",
        primary: "Explore courses",
        secondary: "How it works",
        note: "Learn at your own pace and toward your goals",
        artLabel: "Illustration of a digital learning platform",
        artTagTop: "EDUCATION × TECHNOLOGY",
        artTagBottom: "LEARN FOR WHAT’S NEXT",
        screenKicker: "EXPLORE",
        screenTitle: "Ideas into action",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "Scroll to learn about the platform",
      },
      about: {
        eyebrow: "Why this matters",
        title: "Learning should grow with everyone.",
        description:
          "Technology opens new ways to learn, create, and grow. We imagine digital experiences that are relevant and inclusive, helping learners take their next step.",
        link: "Discover how it works",
      },
      impact: {
        eyebrow: "Evidence from research",
        title: "Technology can support learning.",
        description:
          "Findings from one controlled study of technology-aided instruction in India.",
        items: [
          {
            value: "+0.37 SD",
            label: "Math scores",
            detail: "Students offered access",
          },
          {
            value: "+0.23 SD",
            label: "Hindi scores",
            detail: "Students offered access",
          },
          {
            value: "4.5 mo",
            label: "Study period",
            detail: "Not this platform’s result",
          },
        ],
      },
      programs: {
        eyebrow: "Learning experiences",
        title: "Technology that helps you grow.",
        description:
          "Explore digital learning approaches for different needs and goals.",
        discover: "Learn more",
        items: [
          {
            title: "AI-powered personalized learning",
            description:
              "Adaptive learning experiences that respond to each learner’s needs and progress.",
          },
          {
            title: "Immersive virtual classrooms",
            description:
              "Interactive digital spaces to learn, discuss, and collaborate.",
          },
          {
            title: "Skill certification",
            description:
              "A guided path to build skills and demonstrate what you have learned.",
          },
          {
            title: "Education technology creation",
            description:
              "Develop digital ideas that address real challenges in education.",
          },
        ],
      },
      participate: {
        eyebrow: "Start today",
        title: "Ready to grow a new skill?",
        description:
          "Find a course that fits and start learning one step at a time.",
        cta: "Explore courses",
      },
      footer: {
        tagline: "Empowering minds. Digitalizing the future of education.",
        copyright: "Made for the future of learning.",
        backToTop: "Back to top",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        label: "主导航",
        about: "关于",
        programs: "赛道",
        impact: "使命",
        language: "选择语言",
        cta: "探索赛道",
        openMenu: "打开菜单",
        closeMenu: "关闭菜单",
      },
      hero: {
        eyebrow: "面向数字未来的学习",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "探索数字学习体验，帮助每个人拓展知识、创造力与面向未来的技能。",
        primary: "探索课程",
        secondary: "了解学习方式",
        note: "按照自己的目标与节奏学习",
        artLabel: "数字学习平台插画",
        artTagTop: "教育 × 科技",
        artTagBottom: "学习，迎接未来",
        screenKicker: "探索",
        screenTitle: "让想法付诸行动",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "向下了解平台",
      },
      about: {
        eyebrow: "为何重要",
        title: "学习应与每个人共同成长。",
        description:
          "科技开启了学习、创造与成长的新方式。我们希望打造相关且包容的数字体验，帮助学习者迈出下一步。",
        link: "了解学习方式",
      },
      impact: {
        eyebrow: "研究证据",
        title: "科技可以助力学习。",
        description: "印度一项技术辅助教学对照研究的结果。",
        items: [
          {
            value: "+0.37 SD",
            label: "数学成绩",
            detail: "获得项目机会的学生",
          },
          {
            value: "+0.23 SD",
            label: "印地语成绩",
            detail: "获得项目机会的学生",
          },
          { value: "4.5个月", label: "研究周期", detail: "并非本平台的成果" },
        ],
      },
      programs: {
        eyebrow: "学习体验",
        title: "助力成长的科技。",
        description: "探索满足不同需求与目标的数字学习方式。",
        discover: "了解更多",
        items: [
          {
            title: "AI 个性化学习",
            description: "根据学习者需求与进度调整的自适应学习体验。",
          },
          {
            title: "沉浸式虚拟课堂",
            description: "用于学习、讨论与协作的互动数字空间。",
          },
          {
            title: "技能认证",
            description: "循序渐进地培养技能并展示学习成果。",
          },
          {
            title: "教育科技创作",
            description: "为教育中的真实挑战开发数字创意。",
          },
        ],
      },
      participate: {
        eyebrow: "现在开始",
        title: "准备好培养新技能了吗？",
        description: "找到适合的课程，从小而持续的学习步骤开始。",
        cta: "探索课程",
      },
      footer: {
        tagline: "启发思维，数字化教育未来。",
        copyright: "为学习的未来而设计。",
        backToTop: "返回顶部",
      },
    },
  },
  es: {
    translation: {
      nav: {
        label: "Navegación principal",
        about: "Acerca de",
        programs: "Categorías",
        impact: "Misión",
        language: "Elegir idioma",
        cta: "Explorar categorías",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        eyebrow: "Aprender para un futuro digital",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "Descubre experiencias de aprendizaje digital que ayudan a todos a desarrollar conocimientos, creatividad y habilidades para el futuro.",
        primary: "Explorar cursos",
        secondary: "Cómo funciona",
        note: "Aprende a tu ritmo y según tus objetivos",
        artLabel: "Ilustración de una plataforma de aprendizaje digital",
        artTagTop: "EDUCACIÓN × TECNOLOGÍA",
        artTagBottom: "APRENDER PARA LO QUE VIENE",
        screenKicker: "EXPLORAR",
        screenTitle: "Ideas en acción",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "Desplazarse para conocer la plataforma",
      },
      about: {
        eyebrow: "Por qué importa",
        title: "El aprendizaje debe crecer con todos.",
        description:
          "La tecnología abre nuevas formas de aprender, crear y crecer. Imaginamos experiencias digitales relevantes e inclusivas que ayuden a cada persona a dar el siguiente paso.",
        link: "Descubrir cómo funciona",
      },
      impact: {
        eyebrow: "Evidencia de investigación",
        title: "La tecnología puede apoyar el aprendizaje.",
        description:
          "Resultados de un estudio controlado sobre enseñanza con tecnología en India.",
        items: [
          {
            value: "+0,37 DE",
            label: "Resultados de matemáticas",
            detail: "Estudiantes con acceso",
          },
          {
            value: "+0,23 DE",
            label: "Resultados de hindi",
            detail: "Estudiantes con acceso",
          },
          {
            value: "4,5 meses",
            label: "Duración del estudio",
            detail: "No son resultados de esta plataforma",
          },
        ],
      },
      programs: {
        eyebrow: "Experiencias de aprendizaje",
        title: "Tecnología que impulsa tu crecimiento.",
        description:
          "Explora formas de aprendizaje digital para diferentes necesidades y objetivos.",
        discover: "Saber más",
        items: [
          {
            title: "Aprendizaje personalizado con IA",
            description:
              "Experiencias adaptativas que responden a las necesidades y avances de cada estudiante.",
          },
          {
            title: "Aulas virtuales inmersivas",
            description:
              "Espacios digitales interactivos para aprender, conversar y colaborar.",
          },
          {
            title: "Certificación de habilidades",
            description:
              "Un camino guiado para desarrollar habilidades y demostrar lo aprendido.",
          },
          {
            title: "Creación de tecnología educativa",
            description:
              "Desarrolla ideas digitales que aborden retos reales de la educación.",
          },
        ],
      },
      participate: {
        eyebrow: "Tu próximo paso",
        title: "¿Tienes una idea para el futuro del aprendizaje?",
        description:
          "Encuentra tu categoría, reúne un equipo y empieza a diseñar tu solución.",
        cta: "Ver categorías",
      },
      footer: {
        tagline: "Inspirar mentes. Digitalizar el futuro de la educación.",
        copyright: "Creado para el futuro del aprendizaje.",
        backToTop: "Volver arriba",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        label: "التنقل الرئيسي",
        about: "عن المبادرة",
        programs: "المسارات",
        impact: "رسالتنا",
        language: "اختر اللغة",
        cta: "استكشف المسارات",
        openMenu: "افتح القائمة",
        closeMenu: "أغلق القائمة",
      },
      hero: {
        eyebrow: "تعلم من أجل مستقبل رقمي",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "اكتشف تجارب تعلم رقمية تساعد الجميع على تنمية المعرفة والإبداع والمهارات المستقبلية.",
        primary: "استكشف الدورات",
        secondary: "كيف يعمل",
        note: "تعلم وفق أهدافك وبالوتيرة التي تناسبك",
        artLabel: "رسم توضيحي لمنصة تعلم رقمية",
        artTagTop: "التعليم × التقنية",
        artTagBottom: "تعلم من أجل المستقبل",
        screenKicker: "استكشف",
        screenTitle: "حوّل الأفكار إلى عمل",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "انتقل لمعرفة المزيد عن المنصة",
      },
      about: {
        eyebrow: "لماذا يهم هذا",
        title: "ينبغي أن يتطور التعلم مع الجميع.",
        description:
          "تتيح التقنية طرقًا جديدة للتعلم والإبداع والنمو. نتصور تجارب رقمية ملائمة وشاملة تساعد المتعلمين على اتخاذ خطوتهم التالية.",
        link: "اكتشف كيف يعمل",
      },
      impact: {
        eyebrow: "دليل من الأبحاث",
        title: "يمكن للتقنية دعم التعلم.",
        description:
          "نتائج دراسة مضبوطة واحدة حول التعليم المدعوم بالتقنية في الهند.",
        items: [
          {
            value: "+0.37 SD",
            label: "درجات الرياضيات",
            detail: "للطلاب الذين أتيح لهم البرنامج",
          },
          {
            value: "+0.23 SD",
            label: "درجات الهندية",
            detail: "للطلاب الذين أتيح لهم البرنامج",
          },
          {
            value: "4.5 أشهر",
            label: "مدة الدراسة",
            detail: "ليست نتيجة هذه المنصة",
          },
        ],
      },
      programs: {
        eyebrow: "تجارب التعلم",
        title: "تقنية تساعدك على النمو.",
        description: "استكشف أساليب تعلم رقمية تناسب احتياجات وأهدافًا مختلفة.",
        discover: "اعرف المزيد",
        items: [
          {
            title: "تعلم شخصي مدعوم بالذكاء الاصطناعي",
            description: "تجارب تعلم تكيفية تستجيب لاحتياجات كل متعلم وتقدمه.",
          },
          {
            title: "فصول افتراضية تفاعلية",
            description: "مساحات رقمية تفاعلية للتعلم والنقاش والتعاون.",
          },
          {
            title: "اعتماد المهارات",
            description: "مسار واضح لبناء المهارات وإظهار ما تعلمته.",
          },
          {
            title: "ابتكار تقنيات التعليم",
            description: "طور أفكارًا رقمية تعالج تحديات حقيقية في التعليم.",
          },
        ],
      },
      participate: {
        eyebrow: "ابدأ اليوم",
        title: "هل أنت مستعد لتنمية مهارة جديدة؟",
        description: "اختر دورة مناسبة وابدأ التعلم بخطوات صغيرة ومتواصلة.",
        cta: "استكشف الدورات",
      },
      footer: {
        tagline: "تمكين العقول. رقمنة مستقبل التعليم.",
        copyright: "صُنع من أجل مستقبل التعلم.",
        backToTop: "العودة إلى الأعلى",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        label: "Navigation principale",
        about: "À propos",
        programs: "Parcours",
        impact: "Notre mission",
        language: "Choisir la langue",
        cta: "Explorer les parcours",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
      },
      hero: {
        eyebrow: "Apprendre pour un avenir numérique",
        title: "Empowering Minds:",
        highlight: "Digitalizing the Future of Education",
        description:
          "Découvrez des expériences d’apprentissage numérique qui développent les connaissances, la créativité et les compétences d’avenir de chacun.",
        primary: "Explorer les cours",
        secondary: "Comment ça marche",
        note: "Apprenez à votre rythme et selon vos objectifs",
        artLabel: "Illustration d’une plateforme d’apprentissage numérique",
        artTagTop: "ÉDUCATION × TECHNOLOGIE",
        artTagBottom: "APPRENDRE POUR DEMAIN",
        screenKicker: "EXPLORER",
        screenTitle: "Des idées à l’action",
        themeLabel: "Empowering Minds: Digitalizing the Future of Education",
        scroll: "Défiler pour découvrir la plateforme",
      },
      about: {
        eyebrow: "Pourquoi est-ce important ?",
        title: "L’apprentissage doit évoluer avec chacun.",
        description:
          "La technologie ouvre de nouvelles façons d’apprendre, de créer et de progresser. Nous imaginons des expériences numériques pertinentes et inclusives pour aider chacun à avancer.",
        link: "Découvrir le fonctionnement",
      },
      impact: {
        eyebrow: "Données de recherche",
        title: "La technologie peut soutenir l’apprentissage.",
        description:
          "Résultats d’une étude contrôlée sur l’enseignement assisté par la technologie en Inde.",
        items: [
          {
            value: "+0,37 ET",
            label: "Résultats en mathématiques",
            detail: "Élèves ayant eu accès au programme",
          },
          {
            value: "+0,23 ET",
            label: "Résultats en hindi",
            detail: "Élèves ayant eu accès au programme",
          },
          {
            value: "4,5 mois",
            label: "Durée de l’étude",
            detail: "Pas un résultat de cette plateforme",
          },
        ],
      },
      programs: {
        eyebrow: "Expériences d’apprentissage",
        title: "La technologie pour progresser.",
        description:
          "Explorez des approches numériques adaptées à différents besoins et objectifs.",
        discover: "En savoir plus",
        items: [
          {
            title: "Apprentissage personnalisé par l’IA",
            description:
              "Des expériences adaptatives selon les besoins et les progrès de chaque apprenant.",
          },
          {
            title: "Classes virtuelles immersives",
            description:
              "Des espaces numériques interactifs pour apprendre, échanger et collaborer.",
          },
          {
            title: "Certification des compétences",
            description:
              "Un parcours guidé pour développer ses compétences et valoriser ses acquis.",
          },
          {
            title: "Création de technologies éducatives",
            description:
              "Développez des idées numériques pour répondre aux défis réels de l’éducation.",
          },
        ],
      },
      participate: {
        eyebrow: "La prochaine étape",
        title: "Une idée pour l’avenir de l’apprentissage ?",
        description:
          "Trouvez votre parcours, réunissez une équipe et commencez à concevoir votre solution.",
        cta: "Voir les parcours",
      },
      footer: {
        tagline: "Éveiller les esprits. Numériser l’avenir de l’éducation.",
        copyright: "Créé pour l’avenir de l’apprentissage.",
        backToTop: "Retour en haut",
      },
    },
  },
};

const additionalTranslations = {
  id: {
    theme: {
      dark: "Gelap",
      light: "Terang",
      switchToDark: "Aktifkan mode gelap",
      switchToLight: "Aktifkan mode terang",
    },
    how: {
      eyebrow: "Cara kerja",
      title: "Mulai belajar dalam empat langkah.",
      description:
        "Perjalanan belajar yang jelas, interaktif, dan berorientasi pada kemajuan.",
      steps: [
        {
          title: "Pilih tujuan",
          description:
            "Tentukan keterampilan atau topik yang ingin Anda kembangkan.",
        },
        {
          title: "Ikuti kursus",
          description:
            "Belajar melalui materi terstruktur, contoh, dan aktivitas interaktif.",
        },
        {
          title: "Praktikkan kemampuan",
          description: "Uji pemahaman lewat latihan dan proyek yang relevan.",
        },
        {
          title: "Raih sertifikat",
          description:
            "Selesaikan jalur belajar dan tunjukkan pencapaian Anda.",
        },
      ],
    },
    evidence: {
      label: "Temuan penelitian eksternal",
      summary:
        "Dalam uji acak program belajar berbantuan teknologi di India, peserta yang mendapat akses memperoleh skor 0,37 standar deviasi lebih tinggi di matematika dan 0,23 di Hindi setelah 4,5 bulan.",
      caveat:
        "Temuan ini bukan hasil EduFuture dan tidak menjamin dampak yang sama pada program lain.",
      source: "Lihat studi",
    },
    courses: {
      eyebrow: "Katalog pembelajaran",
      title: "Keterampilan untuk masa depan.",
      description:
        "Jelajahi contoh jalur belajar. Tingkat dan durasi adalah perkiraan untuk demo dan dapat disesuaikan.",
      filterLabel: "Filter kursus",
      searchLabel: "Cari kursus atau keterampilan",
      searchPlaceholder: "Cari kursus atau skill...",
      filters: [
        { id: "all", label: "Semua" },
        { id: "ai", label: "AI & Data" },
        { id: "design", label: "Desain belajar" },
        { id: "development", label: "Pengembangan" },
        { id: "inclusion", label: "Inklusi" },
      ],
      viewCourse: "Lihat jalur belajar",
      empty: "Tidak ada kursus yang cocok dengan pencarian.",
      items: [
      {
          category: "ai",
          label: "AI & DATA",
          level: "Menengah",
          duration: "6 minggu",
          title: "AI untuk Pembelajaran Personal",
          description:
            "Rancang pengalaman adaptif dan pahami batas penggunaan AI dalam belajar.",
          skills: ["AI literacy", "Prompt design", "Etika data"],
          url: "https://www.coursera.org/" // <-- Tambahkan link untuk kursus 1
        },
        {
          category: "design",
          label: "DESAIN BELAJAR",
          level: "Pemula",
          duration: "4 minggu",
          title: "Desain Pengalaman Belajar Digital",
          description:
            "Bangun materi digital yang jelas, menarik, dan berpusat pada pembelajar.",
          skills: ["Learning design", "UX", "Storytelling"],
        },
        {
          category: "development",
          label: "PENGEMBANGAN",
          level: "Menengah",
          duration: "8 minggu",
          title: "Web Interaktif untuk Pendidikan",
          description:
            "Buat prototipe web responsif untuk mendukung kegiatan belajar.",
          skills: ["React", "Aksesibilitas", "Prototyping"],
        },
        {
          category: "inclusion",
          label: "INKLUSI DIGITAL",
          level: "Pemula",
          duration: "3 minggu",
          title: "Aksesibilitas & Inklusi Digital",
          description:
            "Pelajari praktik untuk membuat pengalaman belajar digital lebih inklusif.",
          skills: ["WCAG", "Inclusive design", "Usability"],
        },
      ],
    },
    insights: {
      eyebrow: "Berita & wawasan",
      title: "Perspektif dari dunia pendidikan.",
      description:
        "Pilihan sumber tepercaya tentang pembelajaran digital, teknologi, dan bukti pendidikan.",
      readMore: "Baca sumber",
      items: [
        {
          category: "Penelitian · India",
          title: "Pengajaran berbantuan teknologi dan hasil belajar",
          description:
            "Uji acak terkontrol mengukur hasil program pembelajaran personal berbantuan teknologi.",
          source: "American Economic Association · 2019",
          url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112",
        },
        {
          category: "Strategi global",
          title: "Strategi Pendidikan Digital UNICEF",
          description:
            "Pendekatan untuk pemanfaatan teknologi yang inklusif, berkelanjutan, dan berpusat pada pembelajar.",
          source: "UNICEF Digital Education",
          url: "https://www.unicef.org/digitaleducation/",
        },
        {
          category: "Teknologi pendidikan",
          title: "Teknologi digital dalam pendidikan",
          description:
            "Peluang dan risiko teknologi, AI, konektivitas, serta peran penting guru.",
          source: "World Bank",
          url: "https://www.worldbank.org/en/topic/edutech",
        },
      ],
    },
    community: {
      eyebrow: "Ekosistem pembelajaran",
      title: "Dirancang dengan banyak perspektif.",
      description:
        "Peran yang penting untuk membangun pengalaman belajar digital yang bermanfaat—bukan profil individu atau mitra resmi.",
      roles: [
        {
          title: "Pembelajar",
          description:
            "Tujuan, pengalaman, dan umpan balik mereka membantu membentuk pengalaman yang relevan.",
        },
        {
          title: "Pendidik",
          description:
            "Keahlian pedagogis menjaga teknologi tetap mendukung proses belajar.",
        },
        {
          title: "Kreator teknologi",
          description:
            "Desainer dan pengembang mengubah kebutuhan belajar menjadi alat yang mudah digunakan.",
        },
        {
          title: "Komunitas",
          description:
            "Keluarga dan institusi membantu memastikan akses serta dampak yang berkelanjutan.",
        },
      ],
    },
    faq: {
      eyebrow: "Pertanyaan umum",
      title: "Hal yang ingin Anda ketahui.",
      description:
        "Informasi ringkas tentang konsep platform pembelajaran ini.",
      items: [
        {
          question: "Apa itu EduFuture?",
          answer:
            "EduFuture adalah konsep platform pembelajaran digital dalam proyek ini. Program dan layanan nyata belum diluncurkan.",
        },
        {
          question: "Apakah kursus dan durasi sudah tersedia secara resmi?",
          answer:
            "Belum. Kartu kursus adalah contoh konsep; tingkat, durasi, kurikulum, dan sertifikat perlu ditetapkan sebelum layanan diluncurkan.",
        },
        {
          question: "Apakah sertifikat dapat diperoleh setelah belajar?",
          answer:
            "Alur sertifikat ditampilkan sebagai rancangan pengalaman belajar. Sertifikat resmi hanya dapat dijanjikan setelah penyelenggara dan ketentuannya ditetapkan.",
        },
        {
          question: "Bagaimana teknologi dan AI digunakan?",
          answer:
            "AI dapat membantu personalisasi, tetapi perlu pengawasan manusia, perlindungan data, aksesibilitas, dan evaluasi hasil belajar.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontak & kolaborasi",
      title: "Mari membangun pengalaman belajar yang lebih baik.",
      description:
        "Untuk pertanyaan, masukan, atau peluang kolaborasi, gunakan kontak resmi platform.",
      pending: "Kontak resmi belum tersedia",
      note: "Alamat kontak dapat diatur melalui VITE_CONTACT_EMAIL.",
    },
  },
  en: {
    theme: {
      dark: "Dark",
      light: "Light",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
    },
    how: {
      eyebrow: "How it works",
      title: "Start learning in four steps.",
      description:
        "A clear, interactive learning journey focused on meaningful progress.",
      steps: [
        {
          title: "Choose a goal",
          description: "Decide which skill or topic you want to develop.",
        },
        {
          title: "Take a course",
          description:
            "Learn with structured material, examples, and interactive activities.",
        },
        {
          title: "Practice your skills",
          description:
            "Check your understanding through exercises and relevant projects.",
        },
        {
          title: "Earn a certificate",
          description:
            "Complete a learning path and showcase your achievement.",
        },
      ],
    },
    evidence: {
      label: "External research finding",
      summary:
        "In a randomized study of technology-aided instruction in India, students offered access scored 0.37 standard deviations higher in math and 0.23 in Hindi after 4.5 months.",
      caveat:
        "This is not an EduFuture result and does not guarantee similar effects in other programs.",
      source: "Read the study",
    },
    courses: {
      eyebrow: "Learning catalog",
      title: "Skills for what comes next.",
      description:
        "Explore example learning paths. Levels and durations are demo estimates and may be adjusted.",
      filterLabel: "Filter courses",
      searchLabel: "Search courses or skills",
      searchPlaceholder: "Search courses or skills...",
      filters: [
        { id: "all", label: "All" },
        { id: "ai", label: "AI & Data" },
        { id: "design", label: "Learning design" },
        { id: "development", label: "Development" },
        { id: "inclusion", label: "Inclusion" },
      ],
      viewCourse: "View learning path",
      empty: "No courses match your search.",
      items: [
        {
          category: "ai",
          label: "AI & DATA",
          level: "Intermediate",
          duration: "6 weeks",
          title: "AI for Personalized Learning",
          description:
            "Design adaptive experiences and understand AI’s limits in learning.",
          skills: ["AI literacy", "Prompt design", "Data ethics"],
        },
        {
          category: "design",
          label: "LEARNING DESIGN",
          level: "Beginner",
          duration: "4 weeks",
          title: "Digital Learning Experience Design",
          description:
            "Build digital learning materials that are clear, engaging, and learner-centered.",
          skills: ["Learning design", "UX", "Storytelling"],
        },
        {
          category: "development",
          label: "DEVELOPMENT",
          level: "Intermediate",
          duration: "8 weeks",
          title: "Interactive Web for Education",
          description:
            "Create responsive web prototypes that support learning activities.",
          skills: ["React", "Accessibility", "Prototyping"],
        },
        {
          category: "inclusion",
          label: "DIGITAL INCLUSION",
          level: "Beginner",
          duration: "3 weeks",
          title: "Accessibility & Digital Inclusion",
          description:
            "Learn practices for making digital learning more inclusive.",
          skills: ["WCAG", "Inclusive design", "Usability"],
        },
      ],
    },
   insights: { 
  eyebrow: 'News & insights · example', 
  title: 'Digital education highlights.', 
  description: 'The following cards and content are dummy data. Replace titles, dates, summaries, sources, and links before publication.', 
  readMore: 'Example link', 
  items: [
    { 
      category: '[Category]', 
      title: 'Information Technology Transforms the Face of Education: Preparing the Golden Generation Through Digitalization', 
      description: 'JAKARTA – The world of education is now entering a new chapter full of innovation. Carrying the grand theme "LEARNING FOR THE FUTURE: Empowering Minds: Digitalizing the Future of Education", various educational institutions, experts, and policymakers are beginning to accelerate the transition toward a digital-based learning ecosystem to produce a generation ready for the workforce of the future. This shift is no longer just a technological trend, but an absolute necessity. The utilization of technologies such as Artificial Intelligence (AI), cloud-based learning platforms, and interactive methods not only transforms teaching methods, but also empowers students\' minds to think critically, creatively, and adaptively in facing global challenges.', 
      source: '[Refo Indonesia] · [August 10]', 
      url: 'https://www.refoindonesia.com/pentingnya-digitalisasi-pendidikan-menuju-generasi-indonesia-emas-2045/' 
    }, 
    { 
      category: '[Research]', 
      title: 'Impact and Limitations of Modern Learning Technology: Research Summary', 
      description: `• Main Findings: The integration of learning technologies—such as Learning Management Systems (LMS), artificial intelligence (AI), and interactive media—has been proven to significantly enhance student engagement, motivation, and academic results through personalized learning. However, research also highlights negative impacts such as the risk of device dependency, the prevalence of shortcuts in completing assignments via AI (cognitive outsourcing), and a shortened attention span due to digital distraction exposure.
• Research Context: The study was conducted during the post-pandemic acceleration of digital transformation. The primary focus was evaluating the transition from conventional learning methods toward blended learning to prepare students' digital competencies for the modern era.
• Research Limitations: The effectiveness of these positive findings heavily depends on stable internet infrastructure and device availability. Consequently, these research results cannot yet be generalized to remote areas or schools with limited digital facilities and low teacher digital literacy. Furthermore, most research remains short-term, posing limitations in measuring long-term psychological impacts on children.`, 
      source: '[Kompas.com] · [15 October 2025]', 
      url: 'https://www.kompas.com/skola/read/2024/08/06/210000769/bagaimana-teknologi-pembelajaran-memengaruhi-proses-pembelajaran-' 
    }, 
    { 
      category: '[Innovation]', 
      title: 'Modern Education Innovation Map: Benefits and Global Recognition of School Applications', 
      description: `• Innovation Summary: The development of the Rumah Pendidikan Superapp providing interactive learning modules and dynamic virtual classrooms, supported by the procurement of Digital Interactive Whiteboards in classrooms [Ministry of Primary and Secondary Education].
• Stakeholders Involved: Driven by the Ministry of Primary and Secondary Education (Kemendikdasmen) of the Republic of Indonesia [Ministry of Primary and Secondary Education] and internationally recognized by the United Nations through the International Telecommunication Union (ITU).
• Verified Benefits: Realizing equitable access to quality materials in remote regions, digitalizing school governance, and winning first place (Winner) in the e-Government category at the global WSIS Prizes 2026 event in Geneva [Ministry of Primary and Secondary Education].`, 
      source: 'e-ujian.id · 2026', 
      url: 'https://e-ujian.id/peta-pendidikan-modern-indonesia/' 
    }
  ]
    },
    community: {
      eyebrow: "Learning ecosystem",
      title: "Designed with many perspectives.",
      description:
        "Roles that matter in building useful digital learning experiences—not profiles of named individuals or official partners.",
      roles: [
        {
          title: "Learners",
          description:
            "Their goals, experiences, and feedback help shape relevant learning.",
        },
        {
          title: "Educators",
          description:
            "Pedagogical expertise keeps technology in service of learning.",
        },
        {
          title: "Technology creators",
          description:
            "Designers and developers turn learning needs into usable tools.",
        },
        {
          title: "Communities",
          description:
            "Families and institutions help support access and lasting impact.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions you may have.",
      description: "A few notes about this learning platform concept.",
      items: [
        {
          question: "What is EduFuture?",
          answer:
            "EduFuture is a digital learning platform concept in this project. Real programs and services have not launched.",
        },
        {
          question: "Are the courses and durations officially available?",
          answer:
            "Not yet. Course cards are examples; levels, durations, curriculum, and certificates must be established before launch.",
        },
        {
          question: "Can learners earn a certificate?",
          answer:
            "Certification is shown as a proposed learning experience. An official certificate should only be promised once its issuer and requirements are established.",
        },
        {
          question: "How are technology and AI used?",
          answer:
            "AI can support personalization, with human oversight, privacy protections, accessibility, and learning-outcome evaluation.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact & collaboration",
      title: "Let’s build better learning experiences.",
      description:
        "For questions, feedback, or collaboration opportunities, use the platform’s official contact.",
      pending: "Official contact not available yet",
      note: "Set a contact address with VITE_CONTACT_EMAIL.",
    },
  },
  zh: {
    theme: {
      dark: "深色",
      light: "浅色",
      switchToDark: "切换深色模式",
      switchToLight: "切换浅色模式",
    },
    how: {
      eyebrow: "使用方式",
      title: "四步开启学习。",
      description: "清晰、互动并关注实际进步的学习旅程。",
      steps: [
        { title: "选择目标", description: "确定想要发展的技能或主题。" },
        {
          title: "学习课程",
          description: "通过结构化内容、示例和互动活动进行学习。",
        },
        { title: "练习技能", description: "通过练习和相关项目检验理解。" },
        { title: "获得证书", description: "完成学习路径并展示学习成果。" },
      ],
    },
    evidence: {
      label: "外部研究结果",
      summary:
        "印度一项技术辅助教学随机研究显示，获得项目机会的学生在4.5个月后数学成绩高0.37个标准差，印地语成绩高0.23个标准差。",
      caveat: "这不是 EduFuture 的成果，也不代表其他项目必然取得相同效果。",
      source: "阅读研究",
    },
    courses: {
      eyebrow: "学习目录",
      title: "面向未来的技能。",
      description: "以下为学习路径示例；难度和时长为演示估算，可调整。",
      filterLabel: "筛选课程",
      searchLabel: "搜索课程或技能",
      searchPlaceholder: "搜索课程或技能…",
      filters: [
        { id: "all", label: "全部" },
        { id: "ai", label: "人工智能与数据" },
        { id: "design", label: "学习设计" },
        { id: "development", label: "开发" },
        { id: "inclusion", label: "包容性" },
      ],
      viewCourse: "查看学习路径",
      empty: "没有符合条件的课程。",
      items: [
        {
          category: "ai",
          label: "人工智能与数据",
          level: "中级",
          duration: "6周",
          title: "人工智能与个性化学习",
          description: "设计自适应体验，并理解人工智能在学习中的局限。",
          skills: ["人工智能素养", "提示设计", "数据伦理"],
        },
        {
          category: "design",
          label: "学习设计",
          level: "初级",
          duration: "4周",
          title: "数字学习体验设计",
          description: "创建清晰、有吸引力并以学习者为中心的数字内容。",
          skills: ["学习设计", "用户体验", "叙事"],
        },
        {
          category: "development",
          label: "开发",
          level: "中级",
          duration: "8周",
          title: "教育互动网页开发",
          description: "创建支持学习活动的响应式网页原型。",
          skills: ["React", "无障碍", "原型设计"],
        },
        {
          category: "inclusion",
          label: "数字包容",
          level: "初级",
          duration: "3周",
          title: "无障碍与数字包容",
          description: "学习让数字学习更具包容性的实践方法。",
          skills: ["WCAG", "包容性设计", "易用性"],
        },
      ],
    },
    insights: {
      eyebrow: "新闻与洞察",
      title: "教育领域的观点。",
      description: "精选关于数字学习、技术与教育证据的可信来源。",
      readMore: "阅读来源",
      items: [
        {
          category: "研究 · 印度",
          title: "技术辅助教学与学习成果",
          description: "随机对照研究评估了个性化技术辅助学习项目。",
          source: "美国经济学会 · 2019",
          url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112",
        },
        {
          category: "全球战略",
          title: "联合国儿童基金会数字教育战略",
          description: "倡导包容、可持续并以学习者为中心的技术应用。",
          source: "UNICEF Digital Education",
          url: "https://www.unicef.org/digitaleducation/",
        },
        {
          category: "教育技术",
          title: "教育中的数字技术",
          description:
            "探讨技术、人工智能、网络连接的机遇与风险，以及教师的重要作用。",
          source: "世界银行",
          url: "https://www.worldbank.org/en/topic/edutech",
        },
      ],
    },
    community: {
      eyebrow: "学习生态",
      title: "汇聚多元视角。",
      description:
        "构建实用数字学习体验的重要角色，并非真实个人或官方合作伙伴简介。",
      roles: [
        {
          title: "学习者",
          description: "他们的目标、体验和反馈有助于塑造相关学习内容。",
        },
        { title: "教育者", description: "教育专业知识确保技术服务于学习。" },
        {
          title: "技术创作者",
          description: "设计师和开发者将学习需求转化为易用工具。",
        },
        {
          title: "社区",
          description: "家庭与机构共同支持教育可及性与长期影响。",
        },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "你可能想了解的内容。",
      description: "关于此学习平台概念的说明。",
      items: [
        {
          question: "EduFuture 是什么？",
          answer:
            "EduFuture 是本项目中的数字学习平台概念，真实课程和服务尚未上线。",
        },
        {
          question: "课程和时长是否已正式推出？",
          answer:
            "尚未推出。课程卡片仅为示例；正式上线前需确定难度、时长、课程内容和证书安排。",
        },
        {
          question: "学习者可以获得证书吗？",
          answer:
            "证书目前只是设想的学习体验。只有在颁发机构和要求明确后，才能承诺官方证书。",
        },
        {
          question: "如何使用技术和人工智能？",
          answer:
            "人工智能可辅助个性化学习，同时需要人工监督、隐私保护、无障碍支持和学习成果评估。",
        },
      ],
    },
    contact: {
      eyebrow: "联系与合作",
      title: "一起打造更好的学习体验。",
      description: "如有问题、反馈或合作意向，请使用平台的官方联系方式。",
      pending: "官方联系方式尚未提供",
      note: "通过 VITE_CONTACT_EMAIL 设置联系邮箱。",
    },
  },
  es: {
    theme: {
      dark: "Oscuro",
      light: "Claro",
      switchToDark: "Activar modo oscuro",
      switchToLight: "Activar modo claro",
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Empieza a aprender en cuatro pasos.",
      description:
        "Un recorrido de aprendizaje claro, interactivo y centrado en el progreso.",
      steps: [
        {
          title: "Elige un objetivo",
          description: "Decide qué habilidad o tema quieres desarrollar.",
        },
        {
          title: "Sigue un curso",
          description:
            "Aprende con materiales estructurados, ejemplos y actividades interactivas.",
        },
        {
          title: "Practica tus habilidades",
          description:
            "Comprueba lo aprendido con ejercicios y proyectos relevantes.",
        },
        {
          title: "Obtén un certificado",
          description: "Completa una ruta de aprendizaje y muestra tus logros.",
        },
      ],
    },
    evidence: {
      label: "Hallazgo de investigación externa",
      summary:
        "En un estudio aleatorizado sobre enseñanza con tecnología en India, quienes tuvieron acceso obtuvieron puntuaciones 0,37 desviaciones estándar mayores en matemáticas y 0,23 en hindi tras 4,5 meses.",
      caveat:
        "No es un resultado de EduFuture ni garantiza efectos similares en otros programas.",
      source: "Leer el estudio",
    },
    courses: {
      eyebrow: "Catálogo de aprendizaje",
      title: "Habilidades para el futuro.",
      description:
        "Explora ejemplos de rutas. Los niveles y la duración son estimaciones de demostración.",
      filterLabel: "Filtrar cursos",
      searchLabel: "Buscar cursos o habilidades",
      searchPlaceholder: "Buscar cursos o habilidades...",
      filters: [
        { id: "all", label: "Todos" },
        { id: "ai", label: "IA y datos" },
        { id: "design", label: "Diseño del aprendizaje" },
        { id: "development", label: "Desarrollo" },
        { id: "inclusion", label: "Inclusión" },
      ],
      viewCourse: "Ver ruta de aprendizaje",
      empty: "No hay cursos que coincidan.",
      items: [
        {
          category: "ai",
          label: "IA Y DATOS",
          level: "Intermedio",
          duration: "6 semanas",
          title: "IA para el aprendizaje personalizado",
          description:
            "Diseña experiencias adaptativas y comprende los límites de la IA en el aprendizaje.",
          skills: [
            "Alfabetización en IA",
            "Diseño de prompts",
            "Ética de datos",
          ],
        },
        {
          category: "design",
          label: "DISEÑO DEL APRENDIZAJE",
          level: "Principiante",
          duration: "4 semanas",
          title: "Diseño de experiencias de aprendizaje digital",
          description:
            "Crea materiales digitales claros, atractivos y centrados en el estudiante.",
          skills: ["Diseño educativo", "UX", "Narrativa"],
        },
        {
          category: "development",
          label: "DESARROLLO",
          level: "Intermedio",
          duration: "8 semanas",
          title: "Web interactiva para la educación",
          description:
            "Crea prototipos web adaptables para apoyar actividades de aprendizaje.",
          skills: ["React", "Accesibilidad", "Prototipado"],
        },
        {
          category: "inclusion",
          label: "INCLUSIÓN DIGITAL",
          level: "Principiante",
          duration: "3 semanas",
          title: "Accesibilidad e inclusión digital",
          description:
            "Aprende prácticas para que el aprendizaje digital sea más inclusivo.",
          skills: ["WCAG", "Diseño inclusivo", "Usabilidad"],
        },
      ],
    },
    insights: {
      eyebrow: "Noticias e ideas",
      title: "Perspectivas sobre educación.",
      description:
        "Fuentes seleccionadas y fiables sobre aprendizaje digital, tecnología y evidencia educativa.",
      readMore: "Leer fuente",
      items: [
        {
          category: "Investigación · India",
          title: "Enseñanza con tecnología y resultados de aprendizaje",
          description:
            "Un ensayo controlado aleatorizado evaluó un programa personalizado con tecnología.",
          source: "American Economic Association · 2019",
          url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112",
        },
        {
          category: "Estrategia global",
          title: "Estrategia de Educación Digital de UNICEF",
          description:
            "Un enfoque inclusivo, sostenible y centrado en el estudiante para usar tecnología.",
          source: "UNICEF Digital Education",
          url: "https://www.unicef.org/digitaleducation/",
        },
        {
          category: "Tecnología educativa",
          title: "Tecnologías digitales en la educación",
          description:
            "Oportunidades y riesgos de la tecnología, la IA, la conectividad y el papel docente.",
          source: "Banco Mundial",
          url: "https://www.worldbank.org/en/topic/edutech",
        },
      ],
    },
    community: {
      eyebrow: "Ecosistema de aprendizaje",
      title: "Diseñado con muchas perspectivas.",
      description:
        "Roles importantes para crear experiencias digitales útiles; no son perfiles de personas ni socios oficiales.",
      roles: [
        {
          title: "Estudiantes",
          description:
            "Sus objetivos, experiencias y comentarios ayudan a crear aprendizaje relevante.",
        },
        {
          title: "Educadores",
          description:
            "La experiencia pedagógica mantiene la tecnología al servicio del aprendizaje.",
        },
        {
          title: "Creadores tecnológicos",
          description:
            "Diseñadores y desarrolladores convierten necesidades educativas en herramientas útiles.",
        },
        {
          title: "Comunidades",
          description:
            "Familias e instituciones contribuyen al acceso y al impacto sostenible.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que quizá quieras saber.",
      description:
        "Algunas notas sobre este concepto de plataforma de aprendizaje.",
      items: [
        {
          question: "¿Qué es EduFuture?",
          answer:
            "EduFuture es un concepto de plataforma de aprendizaje digital de este proyecto. Aún no se han lanzado programas ni servicios reales.",
        },
        {
          question: "¿Los cursos y su duración están disponibles oficialmente?",
          answer:
            "Todavía no. Las tarjetas son ejemplos; antes del lanzamiento deben definirse niveles, duración, currículo y certificados.",
        },
        {
          question: "¿Se puede obtener un certificado?",
          answer:
            "La certificación se muestra como una experiencia propuesta. Solo debe prometerse un certificado oficial cuando se definan su emisor y requisitos.",
        },
        {
          question: "¿Cómo se utilizan la tecnología y la IA?",
          answer:
            "La IA puede apoyar la personalización con supervisión humana, protección de datos, accesibilidad y evaluación del aprendizaje.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto y colaboración",
      title: "Construyamos mejores experiencias de aprendizaje.",
      description:
        "Para consultas, comentarios o colaboraciones, utiliza el contacto oficial de la plataforma.",
      pending: "El contacto oficial aún no está disponible",
      note: "Configura el correo con VITE_CONTACT_EMAIL.",
    },
  },
  ar: {
    theme: {
      dark: "داكن",
      light: "فاتح",
      switchToDark: "تفعيل الوضع الداكن",
      switchToLight: "تفعيل الوضع الفاتح",
    },
    how: {
      eyebrow: "كيف يعمل",
      title: "ابدأ التعلم في أربع خطوات.",
      description: "رحلة تعلم واضحة وتفاعلية تركز على التقدم المفيد.",
      steps: [
        {
          title: "اختر هدفًا",
          description: "حدد المهارة أو الموضوع الذي تريد تطويره.",
        },
        {
          title: "ابدأ دورة",
          description: "تعلم من خلال محتوى منظم وأمثلة وأنشطة تفاعلية.",
        },
        {
          title: "مارس مهاراتك",
          description: "تحقق من فهمك عبر تمارين ومشروعات ذات صلة.",
        },
        {
          title: "احصل على شهادة",
          description: "أكمل مسار التعلم واعرض إنجازك.",
        },
      ],
    },
    evidence: {
      label: "نتيجة بحث خارجي",
      summary:
        "في دراسة عشوائية للتعليم المدعوم بالتقنية في الهند، حقق الطلاب الذين أتيح لهم البرنامج درجات أعلى بمقدار 0.37 انحراف معياري في الرياضيات و0.23 في الهندية بعد 4.5 أشهر.",
      caveat: "هذه ليست نتيجة EduFuture ولا تضمن أثرًا مماثلًا في برامج أخرى.",
      source: "اقرأ الدراسة",
    },
    courses: {
      eyebrow: "كتالوج التعلم",
      title: "مهارات للمستقبل.",
      description:
        "استكشف أمثلة لمسارات تعلم. المستويات والمدد تقديرات تجريبية قابلة للتعديل.",
      filterLabel: "تصفية الدورات",
      searchLabel: "ابحث عن دورة أو مهارة",
      searchPlaceholder: "ابحث عن دورة أو مهارة…",
      filters: [
        { id: "all", label: "الكل" },
        { id: "ai", label: "الذكاء الاصطناعي والبيانات" },
        { id: "design", label: "تصميم التعلم" },
        { id: "development", label: "التطوير" },
        { id: "inclusion", label: "الشمول" },
      ],
      viewCourse: "عرض مسار التعلم",
      empty: "لا توجد دورات مطابقة للبحث.",
      items: [
        {
          category: "ai",
          label: "الذكاء الاصطناعي والبيانات",
          level: "متوسط",
          duration: "6 أسابيع",
          title: "الذكاء الاصطناعي للتعلم الشخصي",
          description:
            "صمم تجارب تكيفية وافهم حدود الذكاء الاصطناعي في التعلم.",
          skills: [
            "معرفة الذكاء الاصطناعي",
            "تصميم المطالبات",
            "أخلاقيات البيانات",
          ],
        },
        {
          category: "design",
          label: "تصميم التعلم",
          level: "مبتدئ",
          duration: "4 أسابيع",
          title: "تصميم تجربة التعلم الرقمي",
          description: "أنشئ محتوى رقميًا واضحًا وجذابًا يركز على المتعلم.",
          skills: ["تصميم التعلم", "تجربة المستخدم", "السرد"],
        },
        {
          category: "development",
          label: "التطوير",
          level: "متوسط",
          duration: "8 أسابيع",
          title: "ويب تفاعلي للتعليم",
          description: "أنشئ نماذج ويب متجاوبة لدعم أنشطة التعلم.",
          skills: ["React", "إمكانية الوصول", "النمذجة"],
        },
        {
          category: "inclusion",
          label: "الشمول الرقمي",
          level: "مبتدئ",
          duration: "3 أسابيع",
          title: "إمكانية الوصول والشمول الرقمي",
          description: "تعلم ممارسات تجعل التعلم الرقمي أكثر شمولًا.",
          skills: ["WCAG", "التصميم الشامل", "سهولة الاستخدام"],
        },
      ],
    },
    insights: {
      eyebrow: "أخبار ورؤى",
      title: "وجهات نظر من التعليم.",
      description:
        "مصادر موثوقة مختارة حول التعلم الرقمي والتقنية وأدلة التعليم.",
      readMore: "اقرأ المصدر",
      items: [
        {
          category: "بحث · الهند",
          title: "التعليم المدعوم بالتقنية ونتائج التعلم",
          description:
            "قيمت تجربة عشوائية مضبوطة برنامج تعلم شخصي مدعوم بالتقنية.",
          source: "الجمعية الاقتصادية الأمريكية · 2019",
          url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112",
        },
        {
          category: "استراتيجية عالمية",
          title: "استراتيجية اليونيسف للتعليم الرقمي",
          description:
            "نهج لاستخدام التقنية بطريقة شاملة ومستدامة ومتمحورة حول المتعلم.",
          source: "UNICEF Digital Education",
          url: "https://www.unicef.org/digitaleducation/",
        },
        {
          category: "تقنية التعليم",
          title: "التقنيات الرقمية في التعليم",
          description:
            "فرص ومخاطر التقنية والذكاء الاصطناعي والاتصال، والدور الأساسي للمعلمين.",
          source: "البنك الدولي",
          url: "https://www.worldbank.org/en/topic/edutech",
        },
      ],
    },
    community: {
      eyebrow: "منظومة التعلم",
      title: "تصميم يجمع وجهات نظر متعددة.",
      description:
        "أدوار مهمة لبناء تجارب تعلم رقمية مفيدة، وليست ملفات لأشخاص أو شركاء رسميين.",
      roles: [
        {
          title: "المتعلمون",
          description: "تساعد أهدافهم وتجاربهم وملاحظاتهم في تشكيل تعلم ملائم.",
        },
        {
          title: "المعلمون",
          description: "تضمن الخبرة التربوية أن تخدم التقنية عملية التعلم.",
        },
        {
          title: "مبتكرو التقنية",
          description:
            "يحول المصممون والمطورون احتياجات التعلم إلى أدوات سهلة الاستخدام.",
        },
        {
          title: "المجتمعات",
          description: "تدعم الأسر والمؤسسات إتاحة التعلم وأثره المستدام.",
        },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "ما الذي قد ترغب في معرفته؟",
      description: "معلومات موجزة عن مفهوم منصة التعلم هذه.",
      items: [
        {
          question: "ما هي EduFuture؟",
          answer:
            "EduFuture مفهوم لمنصة تعلم رقمية ضمن هذا المشروع. لم تُطلق برامج أو خدمات فعلية بعد.",
        },
        {
          question: "هل الدورات ومددها متاحة رسميًا؟",
          answer:
            "ليس بعد. بطاقات الدورات أمثلة؛ يجب تحديد المستويات والمدد والمنهج والشهادات قبل الإطلاق.",
        },
        {
          question: "هل يمكن للمتعلمين الحصول على شهادة؟",
          answer:
            "تظهر الشهادة كتجربة تعلم مقترحة. لا ينبغي الوعد بشهادة رسمية قبل تحديد الجهة المصدرة والمتطلبات.",
        },
        {
          question: "كيف تُستخدم التقنية والذكاء الاصطناعي؟",
          answer:
            "يمكن للذكاء الاصطناعي دعم التخصيص مع إشراف بشري وحماية الخصوصية وإمكانية الوصول وتقييم نتائج التعلم.",
        },
      ],
    },
    contact: {
      eyebrow: "التواصل والتعاون",
      title: "لنبنِ تجارب تعلم أفضل.",
      description:
        "للاستفسارات أو الملاحظات أو فرص التعاون، استخدم وسيلة التواصل الرسمية للمنصة.",
      pending: "لم تُحدد وسيلة تواصل رسمية بعد",
      note: "يمكن ضبط البريد عبر VITE_CONTACT_EMAIL.",
    },
  },
  fr: {
    theme: {
      dark: "Sombre",
      light: "Clair",
      switchToDark: "Activer le mode sombre",
      switchToLight: "Activer le mode clair",
    },
    how: {
      eyebrow: "Comment ça marche",
      title: "Apprendre en quatre étapes.",
      description: "Un parcours clair, interactif et axé sur les progrès.",
      steps: [
        {
          title: "Choisir un objectif",
          description:
            "Déterminez la compétence ou le sujet que vous souhaitez développer.",
        },
        {
          title: "Suivre un cours",
          description:
            "Apprenez grâce à des contenus structurés, des exemples et des activités interactives.",
        },
        {
          title: "Pratiquer",
          description:
            "Vérifiez vos acquis avec des exercices et des projets pertinents.",
        },
        {
          title: "Obtenir un certificat",
          description: "Terminez un parcours et valorisez vos acquis.",
        },
      ],
    },
    evidence: {
      label: "Résultat de recherche externe",
      summary:
        "Dans une étude randomisée sur l’enseignement assisté par la technologie en Inde, les élèves ayant eu accès au programme ont obtenu des scores supérieurs de 0,37 écart-type en mathématiques et de 0,23 en hindi après 4,5 mois.",
      caveat:
        "Ce résultat ne concerne pas EduFuture et ne garantit pas un effet similaire ailleurs.",
      source: "Lire l’étude",
    },
    courses: {
      eyebrow: "Catalogue de formation",
      title: "Des compétences pour demain.",
      description:
        "Découvrez des exemples de parcours. Niveaux et durées sont des estimations de démonstration.",
      filterLabel: "Filtrer les cours",
      searchLabel: "Rechercher des cours ou compétences",
      searchPlaceholder: "Rechercher des cours ou compétences…",
      filters: [
        { id: "all", label: "Tout" },
        { id: "ai", label: "IA et données" },
        { id: "design", label: "Conception pédagogique" },
        { id: "development", label: "Développement" },
        { id: "inclusion", label: "Inclusion" },
      ],
      viewCourse: "Voir le parcours",
      empty: "Aucun cours ne correspond à la recherche.",
      items: [
        {
          category: "ai",
          label: "IA ET DONNÉES",
          level: "Intermédiaire",
          duration: "6 semaines",
          title: "IA et apprentissage personnalisé",
          description:
            "Concevez des expériences adaptatives et comprenez les limites de l’IA dans l’apprentissage.",
          skills: [
            "Culture IA",
            "Conception de prompts",
            "Éthique des données",
          ],
        },
        {
          category: "design",
          label: "CONCEPTION PÉDAGOGIQUE",
          level: "Débutant",
          duration: "4 semaines",
          title: "Conception d’expériences d’apprentissage numérique",
          description:
            "Créez des contenus clairs, engageants et centrés sur les apprenants.",
          skills: ["Conception pédagogique", "UX", "Narration"],
        },
        {
          category: "development",
          label: "DÉVELOPPEMENT",
          level: "Intermédiaire",
          duration: "8 semaines",
          title: "Web interactif pour l’éducation",
          description:
            "Créez des prototypes web adaptatifs pour soutenir les activités d’apprentissage.",
          skills: ["React", "Accessibilité", "Prototypage"],
        },
        {
          category: "inclusion",
          label: "INCLUSION NUMÉRIQUE",
          level: "Débutant",
          duration: "3 semaines",
          title: "Accessibilité et inclusion numérique",
          description:
            "Découvrez des pratiques pour rendre l’apprentissage numérique plus inclusif.",
          skills: ["WCAG", "Design inclusif", "Utilisabilité"],
        },
      ],
    },
    insights: {
      eyebrow: "Actualités et analyses",
      title: "Regards sur l’éducation.",
      description:
        "Une sélection de sources fiables sur l’apprentissage numérique, la technologie et les données éducatives.",
      readMore: "Lire la source",
      items: [
        {
          category: "Recherche · Inde",
          title: "Enseignement assisté par la technologie et résultats",
          description:
            "Un essai contrôlé randomisé a évalué un programme personnalisé assisté par la technologie.",
          source: "American Economic Association · 2019",
          url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112",
        },
        {
          category: "Stratégie mondiale",
          title: "Stratégie d’éducation numérique de l’UNICEF",
          description:
            "Une approche inclusive, durable et centrée sur les apprenants.",
          source: "UNICEF Digital Education",
          url: "https://www.unicef.org/digitaleducation/",
        },
        {
          category: "Technologie éducative",
          title: "Technologies numériques dans l’éducation",
          description:
            "Les opportunités et risques de la technologie, de l’IA, de la connectivité et le rôle essentiel des enseignants.",
          source: "Banque mondiale",
          url: "https://www.worldbank.org/en/topic/edutech",
        },
      ],
    },
    community: {
      eyebrow: "Écosystème d’apprentissage",
      title: "Conçu avec des perspectives variées.",
      description:
        "Des rôles essentiels pour créer des expériences utiles, et non des profils de personnes ou de partenaires officiels.",
      roles: [
        {
          title: "Apprenants",
          description:
            "Leurs objectifs, expériences et retours contribuent à un apprentissage pertinent.",
        },
        {
          title: "Éducateurs",
          description:
            "L’expertise pédagogique veille à ce que la technologie soutienne l’apprentissage.",
        },
        {
          title: "Créateurs technologiques",
          description:
            "Les concepteurs et développeurs transforment les besoins en outils accessibles.",
        },
        {
          title: "Communautés",
          description:
            "Les familles et institutions contribuent à l’accès et à un impact durable.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ce que vous souhaitez savoir.",
      description:
        "Quelques précisions sur ce concept de plateforme d’apprentissage.",
      items: [
        {
          question: "Qu’est-ce qu’EduFuture ?",
          answer:
            "EduFuture est un concept de plateforme d’apprentissage numérique créé dans ce projet. Aucun programme ni service réel n’a encore été lancé.",
        },
        {
          question:
            "Les cours et leur durée sont-ils officiellement disponibles ?",
          answer:
            "Pas encore. Les cartes sont des exemples ; niveaux, durées, programmes et certificats restent à définir avant le lancement.",
        },
        {
          question: "Peut-on obtenir un certificat ?",
          answer:
            "La certification est présentée comme une expérience proposée. Un certificat officiel ne doit être promis qu’après définition de son émetteur et de ses conditions.",
        },
        {
          question: "Comment utiliser la technologie et l’IA ?",
          answer:
            "L’IA peut aider à personnaliser l’apprentissage avec une supervision humaine, la protection des données, l’accessibilité et l’évaluation des résultats.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact et collaboration",
      title: "Construisons de meilleures expériences d’apprentissage.",
      description:
        "Pour toute question, remarque ou collaboration, utilisez le contact officiel de la plateforme.",
      pending: "Le contact officiel n’est pas encore disponible",
      note: "Configurez l’adresse avec VITE_CONTACT_EMAIL.",
    },
  },
};

const roadmapTranslations = {
  id: {
    navLabel: "Peta situs",
    roadmap: {
      eyebrow: "Peta navigasi 3D",
      title: "Kenali alur EduFuture.",
      description:
        "Pilih titik untuk melihat isi setiap bagian, lalu buka bagian yang ingin dijelajahi.",
      stepLabel: "Bagian",
      action: "Buka bagian ini",
      previous: "Bagian sebelumnya",
      next: "Bagian berikutnya",
      restart: "Mulai dari awal",
      progressLabel: "Progres navigasi",
      nodes: [
        {
          title: "Beranda",
          description:
            "Mulai dengan ringkasan EduFuture dan ajakan utama untuk menjelajahi platform.",
        },
        {
          title: "Tentang",
          description:
            "Kenali tujuan, pendekatan, dan alasan di balik konsep EduFuture.",
        },
        {
          title: "Cara kerja",
          description:
            "Ikuti alur demo: pilih jalur contoh, atur waktu, lalu catat latihan.",
        },
        {
          title: "Kursus",
          description:
            "Jelajahi contoh jalur belajar, topik, dan keterampilan yang tersedia.",
        },
        {
          title: "Program",
          description:
            "Temukan pendekatan dan pengalaman belajar digital yang diperkenalkan.",
        },
        {
          title: "Dampak",
          description:
            "Tinjau bagian dampak dan konteks bukti yang ditampilkan di website.",
        },
        {
          title: "Wawasan",
          description:
            "Baca sorotan dan sumber pilihan tentang pendidikan digital.",
        },
        {
          title: "Komunitas",
          description:
            "Kenali perspektif pembelajar, pendidik, kreator, dan komunitas.",
        },
        {
          title: "FAQ",
          description:
            "Temukan jawaban tentang konsep, contoh kursus, dan rencana layanan.",
        },
        {
          title: "Kontak",
          description:
            "Lihat informasi kontak dan peluang kolaborasi yang tersedia.",
        },
      ],
    },
  },
  en: {
    navLabel: "Site map",
    roadmap: {
      eyebrow: "3D navigation map",
      title: "Explore the EduFuture flow.",
      description:
        "Select a point to preview each section, then open the part of the site you want to explore.",
      stepLabel: "Section",
      action: "Open this section",
      previous: "Previous section",
      next: "Next section",
      restart: "Start over",
      progressLabel: "Navigation progress",
      nodes: [
        {
          title: "Home",
          description:
            "Start with an overview of EduFuture and the main ways to explore the platform.",
        },
        {
          title: "About",
          description:
            "Learn about the purpose, approach, and thinking behind the EduFuture concept.",
        },
        {
          title: "How it works",
          description:
            "Try the demo flow: choose a sample path, set study time, and track practice.",
        },
        {
          title: "Courses",
          description: "Browse example learning paths, topics, and skills.",
        },
        {
          title: "Programs",
          description:
            "Discover the digital learning approaches and experiences introduced here.",
        },
        {
          title: "Impact",
          description:
            "Review the impact section and the context for the evidence shown on the site.",
        },
        {
          title: "Insights",
          description:
            "Read selected highlights and sources about digital education.",
        },
        {
          title: "Community",
          description:
            "Explore the perspectives of learners, educators, creators, and communities.",
        },
        {
          title: "FAQ",
          description:
            "Find answers about the concept, sample courses, and planned services.",
        },
        {
          title: "Contact",
          description:
            "See the available contact information and collaboration options.",
        },
      ],
    },
  },
  zh: {
    navLabel: "网站导览",
    roadmap: {
      eyebrow: "3D 网站导航图",
      title: "探索 EduFuture 网站流程。",
      description: "选择一个节点预览对应板块，然后打开想要浏览的内容。",
      stepLabel: "板块",
      action: "打开此板块",
      previous: "上一板块",
      next: "下一板块",
      restart: "重新开始",
      progressLabel: "导航进度",
      nodes: [
        {
          title: "首页",
          description: "从 EduFuture 概览和探索平台的主要入口开始。",
        },
        {
          title: "关于",
          description: "了解 EduFuture 概念的目标、方法与缘由。",
        },
        {
          title: "学习方式",
          description: "查看从选择目标到展示成果的学习流程。",
        },
        { title: "课程", description: "浏览示例学习路径、主题与技能。" },
        { title: "项目", description: "了解网站介绍的数字学习方法与体验。" },
        {
          title: "学习影响",
          description: "查看影响板块及网站所展示证据的背景。",
        },
        { title: "资讯", description: "阅读数字教育精选内容与参考来源。" },
        {
          title: "社区",
          description: "了解学习者、教育者、创作者与社区的不同视角。",
        },
        {
          title: "常见问题",
          description: "查找关于概念、示例课程和计划服务的解答。",
        },
        { title: "联系", description: "查看现有联系方式与合作机会。" },
      ],
    },
  },
  es: {
    navLabel: "Mapa del sitio",
    roadmap: {
      eyebrow: "Mapa de navegación 3D",
      title: "Explora el recorrido de EduFuture.",
      description:
        "Selecciona un punto para ver cada sección y abre la parte del sitio que quieras explorar.",
      stepLabel: "Sección",
      action: "Abrir esta sección",
      previous: "Sección anterior",
      next: "Sección siguiente",
      restart: "Empezar de nuevo",
      progressLabel: "Progreso de navegación",
      nodes: [
        {
          title: "Inicio",
          description:
            "Empieza con una presentación de EduFuture y sus principales opciones.",
        },
        {
          title: "Acerca de",
          description:
            "Conoce el propósito, el enfoque y las ideas del concepto EduFuture.",
        },
        {
          title: "Cómo funciona",
          description:
            "Descubre el recorrido de aprendizaje desde elegir un objetivo hasta mostrar logros.",
        },
        {
          title: "Cursos",
          description: "Explora ejemplos de rutas, temas y habilidades.",
        },
        {
          title: "Programas",
          description:
            "Conoce los enfoques y experiencias de aprendizaje digital que se presentan.",
        },
        {
          title: "Impacto",
          description:
            "Consulta la sección de impacto y el contexto de la evidencia mostrada.",
        },
        {
          title: "Ideas",
          description:
            "Lee una selección de noticias y fuentes sobre educación digital.",
        },
        {
          title: "Comunidad",
          description:
            "Conoce las perspectivas de estudiantes, educadores, creadores y comunidades.",
        },
        {
          title: "FAQ",
          description:
            "Encuentra respuestas sobre el concepto, los cursos de ejemplo y los servicios previstos.",
        },
        {
          title: "Contacto",
          description:
            "Consulta la información de contacto y las opciones de colaboración disponibles.",
        },
      ],
    },
  },
  ar: {
    navLabel: "خريطة الموقع",
    roadmap: {
      eyebrow: "خريطة تنقل ثلاثية الأبعاد",
      title: "استكشف مسار EduFuture.",
      description:
        "اختر نقطة لمعاينة كل قسم، ثم افتح الجزء الذي تريد استكشافه.",
      stepLabel: "القسم",
      action: "افتح هذا القسم",
      previous: "القسم السابق",
      next: "القسم التالي",
      restart: "ابدأ من جديد",
      progressLabel: "تقدم التنقل",
      nodes: [
        {
          title: "الرئيسية",
          description:
            "ابدأ بنبذة عن EduFuture والطرق الرئيسية لاستكشاف المنصة.",
        },
        {
          title: "عن المبادرة",
          description: "تعرّف على الهدف والمنهج والفكرة وراء مفهوم EduFuture.",
        },
        {
          title: "كيف يعمل",
          description: "اطّلع على مسار التعلم من اختيار الهدف إلى عرض الإنجاز.",
        },
        {
          title: "الدورات",
          description: "تصفح أمثلة لمسارات التعلم والموضوعات والمهارات.",
        },
        {
          title: "البرامج",
          description: "اكتشف أساليب وتجارب التعلم الرقمي المقدمة هنا.",
        },
        {
          title: "الأثر",
          description: "راجع قسم الأثر وسياق الأدلة المعروضة في الموقع.",
        },
        {
          title: "رؤى",
          description: "اقرأ مختارات ومصادر حول التعليم الرقمي.",
        },
        {
          title: "المجتمع",
          description:
            "تعرّف على وجهات نظر المتعلمين والمعلمين والمبدعين والمجتمعات.",
        },
        {
          title: "الأسئلة الشائعة",
          description:
            "اعثر على إجابات حول المفهوم والدورات التجريبية والخدمات المخطط لها.",
        },
        {
          title: "التواصل",
          description: "اطّلع على معلومات التواصل وفرص التعاون المتاحة.",
        },
      ],
    },
  },
  fr: {
    navLabel: "Plan du site",
    roadmap: {
      eyebrow: "Plan de navigation 3D",
      title: "Explorez le parcours EduFuture.",
      description:
        "Sélectionnez un point pour prévisualiser une rubrique, puis ouvrez la partie du site souhaitée.",
      stepLabel: "Rubrique",
      action: "Ouvrir cette rubrique",
      previous: "Rubrique précédente",
      next: "Rubrique suivante",
      restart: "Recommencer",
      progressLabel: "Progression de navigation",
      nodes: [
        {
          title: "Accueil",
          description:
            "Commencez par une présentation d’EduFuture et les principales entrées du site.",
        },
        {
          title: "À propos",
          description:
            "Découvrez l’objectif, l’approche et les idées du concept EduFuture.",
        },
        {
          title: "Fonctionnement",
          description:
            "Essayez le parcours démo : choisissez un exemple, définissez un temps et suivez vos exercices.",
        },
        {
          title: "Cours",
          description:
            "Parcourez des exemples de parcours, de thèmes et de compétences.",
        },
        {
          title: "Programmes",
          description:
            "Découvrez les approches et expériences numériques présentées.",
        },
        {
          title: "Impact",
          description:
            "Consultez la rubrique impact et le contexte des données présentées.",
        },
        {
          title: "Analyses",
          description:
            "Lisez une sélection d’actualités et de sources sur l’éducation numérique.",
        },
        {
          title: "Communauté",
          description:
            "Découvrez les points de vue des apprenants, éducateurs, créateurs et communautés.",
        },
        {
          title: "FAQ",
          description:
            "Trouvez des réponses sur le concept, les exemples de cours et les services envisagés.",
        },
        {
          title: "Contact",
          description:
            "Consultez les coordonnées et les possibilités de collaboration disponibles.",
        },
      ],
    },
  },
};

const localizedHeroWords = {
  id: ["Belajar bersama", "Tumbuh setiap hari", "Ciptakan masa depan", "Akses untuk semua"],
  en: ["Learn together", "Grow every day", "Shape the future", "Learning for everyone"],
  zh: ["一起学习", "每天成长", "共创未来", "让学习触手可及"],
  es: ["Aprender juntos", "Crecer cada día", "Crear el futuro", "Aprendizaje para todos"],
  ar: ["نتعلم معًا", "ننمو كل يوم", "نصنع المستقبل", "التعلم متاح للجميع"],
  fr: ["Apprendre ensemble", "Grandir chaque jour", "Créer l’avenir", "Apprendre pour tous"],
};

const productTranslations = {
  id: {
    how: {
      eyebrow: "Alur demo",
      title: "Coba langkah belajar yang sederhana.",
      description: "Alur prototipe menunjukkan cara memilih jalur contoh dan mencatat latihan.",
      steps: [
        { title: "Pilih topik", description: "Pilih salah satu jalur keterampilan digital di katalog demo." },
        { title: "Atur waktu", description: "Tentukan waktu belajar mingguan yang realistis untuk Anda." },
        { title: "Coba latihan", description: "Gunakan tiga prompt latihan umum sebagai titik awal belajar mandiri." },
        { title: "Catat progres", description: "Tandai aktivitas yang dicoba; progres disimpan di browser ini." },
      ],
    },
    programs: {
      eyebrow: "Arah pengembangan",
      title: "Prinsip untuk pengalaman belajar digital.",
      description: "Ini adalah arah konsep, bukan fitur layanan yang sudah aktif.",
      discover: "Lihat katalog demo",
      items: [
        { title: "Belajar sesuai tujuan", description: "Rencana ke depan: susun materi berdasarkan tujuan dan kebutuhan pembelajar; personalisasi otomatis belum tersedia." },
        { title: "Akses yang inklusif", description: "Rancang pengalaman yang mudah digunakan lintas bahasa, perangkat, dan kebutuhan aksesibilitas." },
        { title: "Latihan dan penerapan", description: "Dukung pemahaman dengan latihan serta proyek yang ditinjau pendidik; demo saat ini hanya memberi prompt umum." },
        { title: "Teknologi yang bertanggung jawab", description: "Gunakan teknologi secara transparan dengan perhatian pada privasi, akses, dan pengawasan manusia." },
      ],
    },
    participate: {
      eyebrow: "Coba prototipe",
      title: "Mulai susun langkah belajar.",
      description: "Pilih topik contoh dan buat rencana latihan simulasi; belum ada materi kursus atau pendaftaran.",
      cta: "Buka katalog demo",
    },
    prototypeScope: {
      eyebrow: "Ruang lingkup prototipe",
      title: "Yang bisa dicoba sekarang.",
      description: "EduFuture adalah konsep yang didemokan lewat antarmuka dan alat perencana belajar sederhana.",
      items: [
        { value: "01", label: "Pilih jalur", detail: "Jelajahi empat contoh topik keterampilan digital." },
        { value: "02", label: "Susun rencana", detail: "Buat urutan aktivitas tiga minggu dari keterampilan pilihan." },
        { value: "03", label: "Lacak progres", detail: "Tandai aktivitas dan simpan progres di browser ini." },
      ],
      note: "Konten jalur, materi, durasi, dan progres adalah simulasi lokal; belum ada kursus, akun, backend, atau sertifikat resmi.",
    },
    planner: {
      eyebrow: "Alat demo",
      title: "Rencanakan langkah belajar pertama",
      description: "Pilih topik dan waktu belajar mingguan untuk membuat rencana latihan tiga minggu.",
      trackLabel: "Topik belajar",
      timeLabel: "Waktu per minggu",
      hoursOption: "{{hours}} jam per minggu",
      progress: "{{completed}} dari {{total}} aktivitas selesai",
      progressLabel: "Progres aktivitas belajar",
      reset: "Atur ulang progres",
      note: "Rencana dibuat dari keterampilan contoh pada kartu kursus. Ini bukan materi ajar atau kurikulum resmi; progres tersimpan hanya di browser ini.",
      steps: [
        { week: "Minggu 1" },
        { week: "Minggu 2" },
        { week: "Minggu 3" },
      ],
    },
    plannerStepTitles: [
      "Pahami {{skill}}",
      "Latih {{skill}}",
      "Buat proyek mini dengan {{skill}}",
    ],
    plannerStepDescriptions: [
      "Tinjau konsep dasar {{skill}} dan catat satu pertanyaan. Alokasikan {{hours}} jam minggu ini.",
      "Coba {{skill}} lewat latihan kecil, lalu catat hal yang masih perlu dipelajari. Alokasikan {{hours}} jam minggu ini.",
      "Gunakan {{skill}} untuk membuat hasil sederhana dan refleksikan prosesnya. Alokasikan {{hours}} jam minggu ini.",
    ],
    references: {
      eyebrow: "Referensi eksternal",
      title: "Sumber untuk menjelajahi pendidikan digital.",
      description: "Bacaan pilihan sebagai konteks tema; sumber ini bukan hasil atau dukungan terhadap EduFuture.",
      readMore: "Buka sumber",
      items: [
        { category: "Penelitian · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "Penelitian tentang pengajaran berbantuan teknologi di India; hasilnya tidak mengukur EduFuture.", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "Sumber kebijakan", title: "Digital Education", description: "Sumber UNICEF tentang pendekatan dan inisiatif pendidikan digital.", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "Gambaran topik", title: "Education and Technology", description: "Sumber World Bank untuk konteks teknologi pendidikan dan penerapannya.", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
  en: {
    how: {
      eyebrow: "Demo flow",
      title: "Try a simple learning flow.",
      description: "The prototype shows how to choose a sample path and track practice.",
      steps: [
        { title: "Choose a topic", description: "Select a digital-skills path from the demo catalog." },
        { title: "Set your time", description: "Choose a realistic weekly study-time goal." },
        { title: "Try the prompts", description: "Use three generic practice prompts as a starting point for self-study." },
        { title: "Track progress", description: "Check off activities you try; progress stays in this browser." },
      ],
    },
    programs: {
      eyebrow: "Product direction",
      title: "Principles for digital learning experiences.",
      description: "These are concept directions, not live service features.",
      discover: "View demo catalog",
      items: [
        { title: "Learning with purpose", description: "Future direction: shape materials around learner goals and needs; automated personalization is not available." },
        { title: "Inclusive access", description: "Design experiences that work across languages, devices, and accessibility needs." },
        { title: "Practice and application", description: "Support understanding with educator-reviewed practice and projects; this demo offers generic prompts only." },
        { title: "Responsible technology", description: "Use technology transparently, with attention to privacy, access, and human oversight." },
      ],
    },
    participate: {
      eyebrow: "Try the prototype",
      title: "Start planning your learning steps.",
      description: "Choose a sample topic and make a simulated practice plan; course materials and enrollment are not available.",
      cta: "Open demo catalog",
    },
    prototypeScope: {
      eyebrow: "Prototype scope",
      title: "What you can try today.",
      description: "EduFuture is a concept demonstrated through an interactive interface and a simple learning planner.",
      items: [
        { value: "01", label: "Choose a path", detail: "Explore four sample digital-skills topics." },
        { value: "02", label: "Make a plan", detail: "Build a three-week activity sequence from a chosen skill path." },
        { value: "03", label: "Track progress", detail: "Check off activities and save progress in this browser." },
      ],
      note: "Tracks, materials, durations, and progress are local simulations; courses, accounts, a backend, and official certificates are not provided.",
    },
    planner: {
      eyebrow: "Interactive demo",
      title: "Plan your first learning steps",
      description: "Choose a topic and weekly study time to create a three-week practice plan.",
      trackLabel: "Learning topic",
      timeLabel: "Time per week",
      hoursOption: "{{hours}} hours per week",
      progress: "{{completed}} of {{total}} activities complete",
      progressLabel: "Learning activity progress",
      reset: "Reset progress",
      note: "The plan uses sample skills from the course cards. It is not course material or an official curriculum; progress is stored only in this browser.",
      steps: [
        { week: "Week 1" },
        { week: "Week 2" },
        { week: "Week 3" },
      ],
    },
    plannerStepTitles: [
      "Understand {{skill}}",
      "Practice {{skill}}",
      "Create a mini project with {{skill}}",
    ],
    plannerStepDescriptions: [
      "Review the basics of {{skill}} and write down one question. Set aside {{hours}} hours this week.",
      "Try {{skill}} in a small exercise and note what you still need to learn. Set aside {{hours}} hours this week.",
      "Use {{skill}} to make a small artifact and reflect on the process. Set aside {{hours}} hours this week.",
    ],
    references: {
      eyebrow: "External references",
      title: "Sources for exploring digital education.",
      description: "Selected background reading; these sources are not EduFuture results or endorsements.",
      readMore: "Open source",
      items: [
        { category: "Research · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "Research on technology-aided instruction in India; it does not evaluate EduFuture.", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "Policy resource", title: "Digital Education", description: "UNICEF resource on digital education approaches and initiatives.", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "Topic overview", title: "Education and Technology", description: "World Bank resource for context on education technology and its use.", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
  zh: {
    how: {
      eyebrow: "演示流程",
      title: "体验简单的学习流程。",
      description: "原型演示如何选择示例路径并记录练习进度。",
      steps: [
        { title: "选择主题", description: "从演示目录中选择一个数字技能路径。" },
        { title: "安排时间", description: "设定切合实际的每周学习时间。" },
        { title: "尝试练习", description: "使用三个通用练习提示作为自主学习的起点。" },
        { title: "跟踪进度", description: "勾选尝试过的活动；进度保存在当前浏览器。" },
      ],
    },
    programs: {
      eyebrow: "产品方向",
      title: "数字学习体验的设计原则。",
      description: "以下是概念方向，并非已上线的服务功能。",
      discover: "查看演示目录",
      items: [
        { title: "目标导向学习", description: "未来方向：根据学习者目标和需求设计材料；目前没有自动个性化功能。" },
        { title: "包容性访问", description: "设计适用于不同语言、设备和无障碍需求的体验。" },
        { title: "练习与应用", description: "通过教育者审阅的练习和项目支持理解；当前演示仅提供通用提示。" },
        { title: "负责任地使用技术", description: "透明地使用技术，并关注隐私、可访问性和人工监督。" },
      ],
    },
    participate: {
      eyebrow: "体验原型",
      title: "开始规划学习步骤。",
      description: "选择一个示例主题并创建模拟练习计划；目前没有课程材料或报名功能。",
      cta: "打开演示目录",
    },
    prototypeScope: {
      eyebrow: "原型范围",
      title: "当前可体验的功能。",
      description: "EduFuture 是一个通过交互界面和简易学习规划器展示的概念原型。",
      items: [
        { value: "01", label: "选择路径", detail: "浏览四个数字技能示例主题。" },
        { value: "02", label: "制定计划", detail: "根据所选技能路径生成三周活动安排。" },
        { value: "03", label: "跟踪进度", detail: "勾选活动并将进度保存在当前浏览器。" },
      ],
      note: "学习路径、材料、时长和进度均为本地模拟；目前不提供正式课程、账户、后端或证书。",
    },
    planner: {
      eyebrow: "互动演示",
      title: "规划你的第一步学习",
      description: "选择主题和每周学习时间，生成三周练习计划。",
      trackLabel: "学习主题",
      timeLabel: "每周时间",
      hoursOption: "每周 {{hours}} 小时",
      progress: "已完成 {{completed}} / {{total}} 项活动",
      progressLabel: "学习活动进度",
      reset: "重置进度",
      note: "计划使用课程卡片中的示例技能生成，并非课程材料或正式课程大纲；进度仅保存在当前浏览器。",
      steps: [{ week: "第 1 周" }, { week: "第 2 周" }, { week: "第 3 周" }],
    },
    plannerStepTitles: ["了解 {{skill}}", "练习 {{skill}}", "使用 {{skill}} 制作小项目"],
    plannerStepDescriptions: [
      "回顾 {{skill}} 的基础并记录一个问题。本周安排 {{hours}} 小时。",
      "通过小练习尝试 {{skill}}，并记录待学习内容。本周安排 {{hours}} 小时。",
      "使用 {{skill}} 制作一个简单成果并回顾过程。本周安排 {{hours}} 小时。",
    ],
    references: {
      eyebrow: "外部参考资料",
      title: "了解数字教育的资料。",
      description: "以下资料用于主题背景参考，不代表 EduFuture 的成果或背书。",
      readMore: "打开来源",
      items: [
        { category: "研究 · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "关于印度技术辅助教学的研究；并未评估 EduFuture。", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "政策资源", title: "Digital Education", description: "联合国儿童基金会关于数字教育方法与倡议的资源。", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "主题概览", title: "Education and Technology", description: "世界银行关于教育技术及其应用背景的资料。", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
  es: {
    how: {
      eyebrow: "Flujo de demostración",
      title: "Prueba un recorrido de aprendizaje sencillo.",
      description: "El prototipo muestra cómo elegir una ruta de ejemplo y registrar la práctica.",
      steps: [
        { title: "Elige un tema", description: "Selecciona una ruta de habilidades digitales del catálogo demo." },
        { title: "Define tu tiempo", description: "Elige un objetivo semanal de estudio realista." },
        { title: "Prueba las actividades", description: "Usa tres propuestas genéricas como punto de partida para estudiar por tu cuenta." },
        { title: "Registra el progreso", description: "Marca las actividades que pruebes; el progreso queda en este navegador." },
      ],
    },
    programs: {
      eyebrow: "Dirección del producto",
      title: "Principios para experiencias de aprendizaje digital.",
      description: "Son líneas conceptuales, no funciones de un servicio activo.",
      discover: "Ver catálogo demo",
      items: [
        { title: "Aprender con propósito", description: "Dirección futura: adaptar materiales a los objetivos y necesidades; aún no hay personalización automática." },
        { title: "Acceso inclusivo", description: "Diseñar experiencias para distintos idiomas, dispositivos y necesidades de accesibilidad." },
        { title: "Práctica y aplicación", description: "Apoyar el aprendizaje con prácticas y proyectos revisados por educadores; la demo solo ofrece propuestas genéricas." },
        { title: "Tecnología responsable", description: "Usar la tecnología con transparencia y atención a la privacidad, el acceso y la supervisión humana." },
      ],
    },
    participate: {
      eyebrow: "Prueba el prototipo",
      title: "Empieza a planificar tus pasos de aprendizaje.",
      description: "Elige un tema de ejemplo y crea un plan simulado; no hay materiales de cursos ni inscripción.",
      cta: "Abrir catálogo demo",
    },
    prototypeScope: {
      eyebrow: "Alcance del prototipo",
      title: "Lo que puedes probar ahora.",
      description: "EduFuture es un concepto demostrado mediante una interfaz interactiva y un planificador sencillo.",
      items: [
        { value: "01", label: "Elegir una ruta", detail: "Explora cuatro temas de ejemplo sobre habilidades digitales." },
        { value: "02", label: "Crear un plan", detail: "Genera una secuencia de actividades de tres semanas." },
        { value: "03", label: "Seguir el progreso", detail: "Marca actividades y guarda el progreso en este navegador." },
      ],
      note: "Las rutas, los materiales, la duración y el progreso son simulaciones locales; no hay cursos, cuentas, backend ni certificados oficiales.",
    },
    planner: {
      eyebrow: "Demostración interactiva",
      title: "Planifica tus primeros pasos de aprendizaje",
      description: "Elige un tema y el tiempo semanal para crear un plan de práctica de tres semanas.",
      trackLabel: "Tema de aprendizaje",
      timeLabel: "Tiempo por semana",
      hoursOption: "{{hours}} horas por semana",
      progress: "{{completed}} de {{total}} actividades completadas",
      progressLabel: "Progreso de actividades",
      reset: "Restablecer progreso",
      note: "El plan usa habilidades de ejemplo de las tarjetas de cursos; no es material didáctico ni un plan oficial. El progreso solo se guarda en este navegador.",
      steps: [{ week: "Semana 1" }, { week: "Semana 2" }, { week: "Semana 3" }],
    },
    plannerStepTitles: ["Comprende {{skill}}", "Practica {{skill}}", "Crea un proyecto pequeño con {{skill}}"],
    plannerStepDescriptions: [
      "Repasa los conceptos básicos de {{skill}} y anota una pregunta. Dedica {{hours}} horas esta semana.",
      "Prueba {{skill}} con un ejercicio breve y anota qué necesitas aprender. Dedica {{hours}} horas esta semana.",
      "Usa {{skill}} para crear algo sencillo y reflexiona sobre el proceso. Dedica {{hours}} horas esta semana.",
    ],
    references: {
      eyebrow: "Referencias externas",
      title: "Fuentes para explorar la educación digital.",
      description: "Lecturas de contexto; no son resultados ni respaldos de EduFuture.",
      readMore: "Abrir fuente",
      items: [
        { category: "Investigación · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "Investigación sobre enseñanza asistida por tecnología en India; no evalúa EduFuture.", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "Recurso de políticas", title: "Digital Education", description: "Recurso de UNICEF sobre enfoques e iniciativas de educación digital.", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "Resumen temático", title: "Education and Technology", description: "Recurso del Banco Mundial sobre tecnología educativa y su aplicación.", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
  ar: {
    how: {
      eyebrow: "مسار العرض التجريبي",
      title: "جرّب خطوات تعلم بسيطة.",
      description: "يوضح النموذج كيفية اختيار مسار تجريبي وتسجيل التدريب.",
      steps: [
        { title: "اختر موضوعًا", description: "اختر مسارًا للمهارات الرقمية من الكتالوج التجريبي." },
        { title: "حدد وقتك", description: "اختر هدفًا أسبوعيًا واقعيًا لوقت الدراسة." },
        { title: "جرّب الأنشطة", description: "استخدم ثلاثة اقتراحات تدريب عامة كنقطة بداية للتعلم الذاتي." },
        { title: "تابع التقدم", description: "حدّد الأنشطة التي جربتها؛ يُحفظ التقدم في هذا المتصفح." },
      ],
    },
    programs: {
      eyebrow: "اتجاه المنتج",
      title: "مبادئ لتجارب التعلم الرقمي.",
      description: "هذه توجهات مفاهيمية وليست ميزات خدمة متاحة.",
      discover: "عرض الكتالوج التجريبي",
      items: [
        { title: "تعلم هادف", description: "اتجاه مستقبلي: تصميم المواد وفق أهداف المتعلم واحتياجاته؛ لا يتوفر تخصيص تلقائي الآن." },
        { title: "وصول شامل", description: "تصميم تجارب تناسب اللغات والأجهزة واحتياجات إمكانية الوصول المختلفة." },
        { title: "التدريب والتطبيق", description: "دعم الفهم عبر تدريبات ومشروعات يراجعها المعلمون؛ يقدم العرض الحالي اقتراحات عامة فقط." },
        { title: "تقنية مسؤولة", description: "استخدام التقنية بشفافية مع مراعاة الخصوصية والوصول والإشراف البشري." },
      ],
    },
    participate: {
      eyebrow: "جرّب النموذج الأولي",
      title: "ابدأ بتخطيط خطوات التعلم.",
      description: "اختر موضوعًا تجريبيًا وأنشئ خطة تدريب محاكاة؛ لا تتوفر مواد دورات أو تسجيل.",
      cta: "افتح الكتالوج التجريبي",
    },
    prototypeScope: {
      eyebrow: "نطاق النموذج الأولي",
      title: "ما يمكنك تجربته الآن.",
      description: "EduFuture مفهوم تجريبي يعرضه واجه تفاعلية ومخطط تعلم بسيط.",
      items: [
        { value: "01", label: "اختر مسارًا", detail: "استكشف أربعة موضوعات تجريبية للمهارات الرقمية." },
        { value: "02", label: "أنشئ خطة", detail: "أنشئ تسلسل أنشطة لمدة ثلاثة أسابيع حسب المهارة." },
        { value: "03", label: "تابع التقدم", detail: "حدّد الأنشطة المكتملة واحفظ التقدم في هذا المتصفح." },
      ],
      note: "المسارات والمواد والمدة والتقدم محاكاة محلية؛ لا توجد دورات أو حسابات أو واجهة خلفية أو شهادات رسمية.",
    },
    planner: {
      eyebrow: "عرض تفاعلي",
      title: "خطط لخطواتك الأولى في التعلم",
      description: "اختر موضوعًا ووقتًا أسبوعيًا للدراسة لإنشاء خطة تدريب لثلاثة أسابيع.",
      trackLabel: "موضوع التعلم",
      timeLabel: "الوقت في الأسبوع",
      hoursOption: "{{hours}} ساعات أسبوعيًا",
      progress: "اكتمل {{completed}} من {{total}} أنشطة",
      progressLabel: "تقدم أنشطة التعلم",
      reset: "إعادة ضبط التقدم",
      note: "تعتمد الخطة على مهارات نموذجية في بطاقات الدورات، وليست مواد تعليمية أو منهجًا رسميًا؛ يُحفظ التقدم في هذا المتصفح فقط.",
      steps: [{ week: "الأسبوع 1" }, { week: "الأسبوع 2" }, { week: "الأسبوع 3" }],
    },
    plannerStepTitles: ["تعرّف على {{skill}}", "تدرّب على {{skill}}", "أنشئ مشروعًا صغيرًا باستخدام {{skill}}"],
    plannerStepDescriptions: [
      "راجع أساسيات {{skill}} وسجّل سؤالًا واحدًا. خصص {{hours}} ساعة هذا الأسبوع.",
      "جرّب {{skill}} بتمرين قصير وسجّل ما تحتاج إلى تعلمه. خصص {{hours}} ساعة هذا الأسبوع.",
      "استخدم {{skill}} لإنشاء نتيجة بسيطة وتأمل في العملية. خصص {{hours}} ساعة هذا الأسبوع.",
    ],
    references: {
      eyebrow: "مراجع خارجية",
      title: "مصادر لاستكشاف التعليم الرقمي.",
      description: "مواد مختارة للسياق، وليست نتائج أو تأييدًا لـ EduFuture.",
      readMore: "افتح المصدر",
      items: [
        { category: "بحث · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "بحث حول التعليم المدعوم بالتكنولوجيا في الهند؛ لا يقيّم EduFuture.", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "مصدر سياسات", title: "Digital Education", description: "مورد من UNICEF حول مناهج ومبادرات التعليم الرقمي.", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "نظرة عامة", title: "Education and Technology", description: "مورد من البنك الدولي عن تكنولوجيا التعليم وسياق استخدامها.", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
  fr: {
    how: {
      eyebrow: "Parcours de démonstration",
      title: "Essayez un parcours d’apprentissage simple.",
      description: "Le prototype montre comment choisir un parcours d’exemple et suivre ses exercices.",
      steps: [
        { title: "Choisir un sujet", description: "Sélectionnez un parcours de compétences numériques dans le catalogue démo." },
        { title: "Définir son temps", description: "Choisissez un objectif hebdomadaire réaliste." },
        { title: "Essayer les activités", description: "Utilisez trois suggestions génériques comme point de départ pour l’autoformation." },
        { title: "Suivre sa progression", description: "Cochez les activités essayées ; la progression reste dans ce navigateur." },
      ],
    },
    programs: {
      eyebrow: "Orientation du produit",
      title: "Principes pour des expériences d’apprentissage numérique.",
      description: "Il s’agit de pistes conceptuelles, pas de fonctionnalités disponibles.",
      discover: "Voir le catalogue démo",
      items: [
        { title: "Apprendre avec un objectif", description: "Piste future : adapter les contenus aux objectifs et besoins ; aucune personnalisation automatisée n’est disponible." },
        { title: "Accès inclusif", description: "Concevoir des expériences adaptées aux langues, appareils et besoins d’accessibilité." },
        { title: "Pratique et application", description: "Soutenir la compréhension avec des exercices et projets validés par des éducateurs ; la démo propose seulement des suggestions génériques." },
        { title: "Technologie responsable", description: "Utiliser la technologie avec transparence et attention à la confidentialité, à l’accès et au contrôle humain." },
      ],
    },
    participate: {
      eyebrow: "Essayer le prototype",
      title: "Commencez à planifier vos étapes d’apprentissage.",
      description: "Choisissez un sujet d’exemple et créez un plan d’exercice simulé ; aucun cours ni inscription n’est disponible.",
      cta: "Ouvrir le catalogue démo",
    },
    prototypeScope: {
      eyebrow: "Périmètre du prototype",
      title: "Ce que vous pouvez essayer.",
      description: "EduFuture est un concept présenté par une interface interactive et un planificateur d’apprentissage simple.",
      items: [
        { value: "01", label: "Choisir un parcours", detail: "Découvrez quatre exemples de compétences numériques." },
        { value: "02", label: "Créer un plan", detail: "Générez une séquence d’activités sur trois semaines." },
        { value: "03", label: "Suivre la progression", detail: "Cochez les activités et enregistrez la progression dans ce navigateur." },
      ],
      note: "Les parcours, contenus, durées et progressions sont simulés localement ; aucun cours, compte, backend ou certificat officiel n’est proposé.",
    },
    planner: {
      eyebrow: "Démo interactive",
      title: "Planifiez vos premières étapes d’apprentissage",
      description: "Choisissez un sujet et un temps d’étude hebdomadaire pour créer un plan d’entraînement de trois semaines.",
      trackLabel: "Sujet d’apprentissage",
      timeLabel: "Temps par semaine",
      hoursOption: "{{hours}} heures par semaine",
      progress: "{{completed}} activité(s) sur {{total}} terminée(s)",
      progressLabel: "Progression des activités",
      reset: "Réinitialiser la progression",
      note: "Le plan utilise des compétences d’exemple des cartes de cours ; ce n’est ni un cours ni un programme officiel. La progression reste dans ce navigateur.",
      steps: [{ week: "Semaine 1" }, { week: "Semaine 2" }, { week: "Semaine 3" }],
    },
    plannerStepTitles: ["Comprendre {{skill}}", "Pratiquer {{skill}}", "Créer un mini-projet avec {{skill}}"],
    plannerStepDescriptions: [
      "Revoyez les bases de {{skill}} et notez une question. Prévoyez {{hours}} heures cette semaine.",
      "Essayez {{skill}} dans un exercice court et notez ce qu’il reste à apprendre. Prévoyez {{hours}} heures cette semaine.",
      "Utilisez {{skill}} pour créer un résultat simple et réfléchissez au processus. Prévoyez {{hours}} heures cette semaine.",
    ],
    references: {
      eyebrow: "Références externes",
      title: "Sources pour explorer l’éducation numérique.",
      description: "Lectures de contexte ; elles ne constituent ni des résultats ni une approbation d’EduFuture.",
      readMore: "Ouvrir la source",
      items: [
        { category: "Recherche · 2019", title: "Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India", description: "Recherche sur l’enseignement assisté par la technologie en Inde ; elle n’évalue pas EduFuture.", source: "American Economic Review", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171112" },
        { category: "Ressource politique", title: "Digital Education", description: "Ressource de l’UNICEF sur les approches et initiatives d’éducation numérique.", source: "UNICEF", url: "https://www.unicef.org/digitaleducation/" },
        { category: "Aperçu thématique", title: "Education and Technology", description: "Ressource de la Banque mondiale sur les technologies éducatives et leur usage.", source: "World Bank", url: "https://www.worldbank.org/en/topic/edutech" },
      ],
    },
  },
};

const localizedDisplayContent = {
  id: {
    heroMetrics: [
      { value: "4", label: "Jalur belajar contoh" },
      { value: "6", label: "Bahasa antarmuka" },
      { value: "Lokal", label: "Progres tersimpan di browser" },
    ],
    aboutHighlights: [
      {
        title: "Contoh jalur belajar",
        detail: "Empat topik keterampilan digital untuk dijelajahi dalam katalog demo.",
      },
      {
        title: "Perencana belajar",
        detail: "Susun latihan tiga minggu berdasarkan keterampilan yang dipilih.",
      },
      {
        title: "Antarmuka inklusif",
        detail: "Enam bahasa, dukungan tata letak RTL, dan progres lokal.",
      },
    ],
    ui: {
      homeLabel: "Beranda EduFuture",
      heroMetricsLabel: "Fitur prototipe",
      highlightsLabel: "Ruang lingkup prototipe",
      roadmapMapLabel: "Gunakan tombol navigasi atau tombol panah. Klik area kosong peta atau tekan Enter untuk lanjut.",
    },
  },
  en: {
    heroMetrics: [
      { value: "4", label: "Sample learning paths" },
      { value: "6", label: "Interface languages" },
      { value: "Local", label: "Progress saved in browser" },
    ],
    aboutHighlights: [
      {
        title: "Sample learning paths",
        detail: "Explore four digital-skills topics in the demo catalog.",
      },
      {
        title: "Learning planner",
        detail: "Arrange three weeks of practice around a selected skill path.",
      },
      {
        title: "Inclusive interface",
        detail: "Six languages, RTL layout support, and locally saved progress.",
      },
    ],
    ui: {
      homeLabel: "EduFuture home",
      heroMetricsLabel: "Prototype features",
      highlightsLabel: "Prototype scope",
      roadmapMapLabel: "Use the navigation buttons or arrow keys. Click an empty area or press Enter to continue.",
    },
  },
  zh: {
    heroMetrics: [
      { value: "4", label: "示例学习路径" },
      { value: "6", label: "界面语言" },
      { value: "本地", label: "进度保存在浏览器" },
    ],
    aboutHighlights: [
      {
        title: "示例学习路径",
        detail: "在演示目录中探索四个数字技能主题。",
      },
      {
        title: "学习规划器",
        detail: "围绕所选技能路径安排三周练习。",
      },
      {
        title: "包容性界面",
        detail: "支持六种语言、RTL 布局和本地进度保存。",
      },
    ],
    ui: {
      homeLabel: "EduFuture 首页",
      heroMetricsLabel: "原型功能",
      highlightsLabel: "原型范围",
      roadmapMapLabel: "使用导航按钮或方向键。点击地图空白处或按 Enter 继续。",
    },
  },
  es: {
    heroMetrics: [
      { value: "4", label: "Rutas de ejemplo" },
      { value: "6", label: "Idiomas de interfaz" },
      { value: "Local", label: "Progreso guardado en el navegador" },
    ],
    aboutHighlights: [
      {
        title: "Rutas de aprendizaje de ejemplo",
        detail: "Explora cuatro temas de habilidades digitales en el catálogo demo.",
      },
      {
        title: "Planificador de aprendizaje",
        detail: "Organiza tres semanas de práctica según la habilidad elegida.",
      },
      {
        title: "Interfaz inclusiva",
        detail: "Seis idiomas, diseño RTL y progreso guardado localmente.",
      },
    ],
    ui: {
      homeLabel: "Inicio de EduFuture",
      heroMetricsLabel: "Funciones del prototipo",
      highlightsLabel: "Alcance del prototipo",
      roadmapMapLabel: "Usa los botones de navegación o las flechas. Haz clic en un espacio vacío o pulsa Enter para continuar.",
    },
  },
  ar: {
    heroMetrics: [
      { value: "4", label: "مسارات تجريبية" },
      { value: "6", label: "لغات الواجهة" },
      { value: "محلي", label: "حفظ التقدم في المتصفح" },
    ],
    aboutHighlights: [
      {
        title: "مسارات تعلم تجريبية",
        detail: "استكشف أربعة موضوعات للمهارات الرقمية في الكتالوج التجريبي.",
      },
      {
        title: "مخطط التعلم",
        detail: "نظّم ثلاثة أسابيع من التدريب وفق المسار المختار.",
      },
      {
        title: "واجهة شاملة",
        detail: "ست لغات، ودعم RTL، وحفظ التقدم محليًا.",
      },
    ],
    ui: {
      homeLabel: "الصفحة الرئيسية لـ EduFuture",
      heroMetricsLabel: "ميزات النموذج الأولي",
      highlightsLabel: "نطاق النموذج الأولي",
      roadmapMapLabel: "استخدم أزرار التنقل أو مفاتيح الأسهم. انقر على مساحة فارغة أو اضغط Enter للمتابعة.",
    },
  },
  fr: {
    heroMetrics: [
      { value: "4", label: "Parcours d’exemple" },
      { value: "6", label: "Langues de l’interface" },
      { value: "Local", label: "Progression enregistrée dans le navigateur" },
    ],
    aboutHighlights: [
      {
        title: "Parcours d’apprentissage d’exemple",
        detail: "Explorez quatre thèmes de compétences numériques dans le catalogue démo.",
      },
      {
        title: "Planificateur d’apprentissage",
        detail: "Organisez trois semaines de pratique selon le parcours choisi.",
      },
      {
        title: "Interface inclusive",
        detail: "Six langues, prise en charge RTL et progression enregistrée localement.",
      },
    ],
    ui: {
      homeLabel: "Accueil EduFuture",
      heroMetricsLabel: "Fonctionnalités du prototype",
      highlightsLabel: "Périmètre du prototype",
      roadmapMapLabel: "Utilisez les boutons de navigation ou les flèches. Cliquez sur une zone vide ou appuyez sur Entrée pour continuer.",
    },
  },
};

for (const [language, translation] of Object.entries(localizedDisplayContent)) {
  Object.assign(resources[language].translation, translation);
}

for (const [language, translation] of Object.entries(productTranslations)) {
  const { plannerStepTitles, plannerStepDescriptions, ...localizedContent } = translation;
  localizedContent.planner.steps = localizedContent.planner.steps.map((step, index) => ({
    ...step,
    title: plannerStepTitles[index],
    description: plannerStepDescriptions[index],
  }));
  Object.assign(resources[language].translation, localizedContent);
}

for (const [language, translation] of Object.entries(additionalTranslations)) {
  Object.assign(resources[language].translation, translation);
}

for (const [language, translation] of Object.entries(roadmapTranslations)) {
  resources[language].translation.nav.roadmap = translation.navLabel;
  resources[language].translation.roadmap = translation.roadmap;
}

for (const [language, words] of Object.entries(localizedHeroWords)) {
  resources[language].translation.hero.movingWords = words;
}

const demoContent = {
  id: {
    impact: {
      eyebrow: "Data contoh",
      title: "Dampak pembelajaran.",
      description:
        "",
      items: [
        {
          value: "85%%",
          label: "Penyelesaian kursus",
          detail: "Berdasarkan data riset efektivitas e-learning dan platform pendidikan digital",
        },
        {
          value: "81,1%",
          label: "Kemajuan belajar",
          detail: "Data peningkatan hasil belajar pasca-penggunaan platform edukasi digital interaktif dari pengujian kelas eksperimen pendidikan.",
        },
        {
          value: "97,6%",
          label: "Pembelajar aktif",
          detail: "Estimasi persentase penerapan pembelajaran jarak jauh dan pemanfaatan platform digital bagi dunia pendidikan di Indonesia oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
        },
      ],
    },
    evidence: {
      label: "Placeholder bukti kuantitatif",
      summary:
        "Integrasi platform pembelajaran digital dan Learning Management System (LMS) terbukti mampu meningkatkan efektivitas pembelajaran, motivasi, serta keterlibatan aktif siswa melalui penyajian materi yang lebih fleksibel dan berpusat pada peserta didik.",
      caveat: "Data ini dummy, bukan temuan nyata atau hasil EduFuture.",
      source: "UNICEF Indonesia",
      url: "https://www.unicef.org/indonesia/media/13421/file/AnalisisSituasiuntukLanskapPembelajaranDigitaldiIndonesia.pdf",
    },
   insights: { 
  eyebrow: 'Berita & wawasan · contoh', 
  title: 'Sorotan pendidikan digital.', 
  description: 'Kartu dan isi berikut adalah data dummy. Ganti judul, tanggal, ringkasan, sumber, dan tautan sebelum publikasi.', 
  readMore: 'Tautan contoh', 
  items: [
    { 
      category: '[Kategori]', 
      title: 'Teknologi Informasi Ubah Wajah Pendidikan: Menyiapkan Generasi Emas Lewat Digitalisasi', 
      description: 'JAKARTA – Dunia pendidikan kini memasuki babak baru yang penuh dengan inovasi. Dengan mengusung tema besar "BELAJAR UNTUK MASA DEPAN: Empowering Minds: Digitalizing the Future of Education", berbagai institusi pendidikan, pakar, dan pemangku kebijakan mulai mempercepat transisi menuju ekosistem belajar berbasis digital demi melahirkan generasi siap kerja di masa depan. Pergeseran ini bukan lagi sekadar tren teknologi, melainkan sebuah kebutuhan mutlak. Pemanfaatan teknologi seperti kecerdasan buatan (Artificial Intelligence), platform belajar berbasis awan (cloud), dan metode interaktif tidak hanya mengubah cara mengajar, tetapi juga memberdayakan pikiran (empowering minds) siswa agar mampu berpikir kritis, kreatif, dan adaptif menghadapi tantangan global.', 
      source: '[Refo Indonesia] · [10 Agustus]', 
      url: 'https://www.refoindonesia.com/pentingnya-digitalisasi-pendidikan-menuju-generasi-indonesia-emas-2045/' 
    }, 
    { 
      category: '[Riset]', 
      title: 'Dampak dan Batasan Teknologi Pembelajaran Modern: Ringkasan Riset', 
      description: `• Temuan Utama: Integrasi teknologi pembelajaran—seperti Learning Management Systems (LMS), kecerdasan buatan (AI), dan media interaktif—terbukti secara signifikan meningkatkan keterlibatan, motivasi, dan hasil akademik siswa melalui pembelajaran yang mandiri (personalized learning). Namun, riset juga menemukan dampak negatif berupa risiko ketergantungan gawai, maraknya jalan pintas pengerjaan tugas lewat AI (cognitive outsourcing), serta penurunan rentang konsentrasi (shorter attention span) akibat paparan distraksi digital.
• Konteks Penelitian: Studi dilakukan dalam masa akselerasi transformasi digital pasca-pandemi. Fokus utamanya adalah mengevaluasi transisi metode belajar konvensional ke arah blended learning (pembelajaran campuran) demi mempersiapkan kompetensi digital siswa untuk bersaing di era modern.
• Batasan Penelitian: Efektivitas temuan positif tersebut sangat bergantung pada kestabilan infrastruktur internet dan kelengkapan gawai. Akibatnya, hasil penelitian ini belum bisa digeneralisasi untuk wilayah pelosok atau sekolah dengan keterbatasan fasilitas digital dan rendahnya literasi digital guru. Selain itu, sebagian besar riset masih bersifat jangka pendek sehingga memiliki keterbatasan dalam mengukur dampak psikologis jangka panjang pada anak.`, 
      source: '[Kompas.com] · [15 Oktober 2025]', 
      url: 'https://www.kompas.com/skola/read/2024/08/06/210000769/bagaimana-teknologi-pembelajaran-memengaruhi-proses-pembelajaran-' 
    }, 
    { 
      category: '[Inovasi]', 
      title: 'Peta Inovasi Pendidikan Modern: Manfaat dan Pengakuan Global Aplikasi Sekolah', 
      description: `• Ringkasan Inovasi: Pengembangan Superaplikasi Rumah Pendidikan yang menyediakan modul belajar interaktif dan ruang kelas dinamis, didukung oleh pengadaan Papan Interaktif Digital di ruang kelas [Kementerian Pendidikan Dasar dan Menengah].
• Pihak Terkait: Digerakkan oleh Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) RI [Kementerian Pendidikan Dasar dan Menengah] dan diakui secara internasional oleh PBB melalui badan International Telecommunication Union (ITU).
• Manfaat Terverifikasi: Mewujudkan pemerataan akses materi berkualitas di daerah pelosok, mendigitalisasi tata kelola sekolah, serta meraih predikat juara pertama (Winner) kategori e-Government di ajang dunia WSIS Prizes 2026 di Jenewa [Kementerian Pendidikan Dasar dan Menengah].`, 
      source: 'e-ujian.id · 2026', 
      url: 'https://e-ujian.id/peta-pendidikan-modern-indonesia/' 
    }
  ] 
    },
  },
  en: {
    impact: {
      eyebrow: "Example data",
      title: "Learning impact.",
      description: "",
      items: [
        {
          value: "85%",
          label: "Course completion",
          detail: "Based on research into the effectiveness of e-learning and digital education platforms",
        },
        {
          value: "81.1%",
          label: "Learning progress",
          detail: "Data on learning gains after using an interactive digital education platform in an experimental classroom study.",
        },
        {
          value: "97.6%",
          label: "Active learners",
          detail: "Estimated adoption of distance learning and digital platforms in Indonesian education, according to the Ministry of Education, Culture, Research, and Technology",
        },
      ],
    },
    evidence: {
      label: "Quantitative evidence placeholder",
      summary:
        "Integrating digital learning platforms and learning management systems (LMS) can improve learning effectiveness, motivation, and student engagement through flexible, learner-centered materials.",
      caveat: "These are demo data, not verified findings or EduFuture results.",
      source: "UNICEF Indonesia",
      url: "https://www.unicef.org/indonesia/media/13421/file/AnalisisSituasiuntukLanskapPembelajaranDigitaldiIndonesia.pdf",
    },
    insights: {
      eyebrow: "News & insights · examples",
      title: "Digital education highlights.",
      description:
        "These cards contain demo content. Replace titles, dates, summaries, sources, and links before publishing.",
      readMore: "Example link",
      items: [
        {
          category: "[News]",
          title: "How technology is changing education and preparing the next generation",
          description:
            "Education is entering a new era of innovation. Schools, experts, and policymakers are accelerating the shift to digital learning to prepare learners for the future. Artificial intelligence, cloud-based platforms, and interactive methods can support critical thinking, creativity, and adaptability.",
          source: "Refo Indonesia · August 10",
          url: "https://www.refoindonesia.com/pentingnya-digitalisasi-pendidikan-menuju-generasi-indonesia-emas-2045/",
        },
        {
          category: "[Research]",
          title: "Benefits and limitations of modern learning technology",
          description:
            "Learning platforms, AI, and interactive media may improve engagement, motivation, and academic outcomes through personalized learning. Risks include device dependence, AI-assisted shortcuts, and shorter attention spans. Results also depend on internet access, devices, and teacher digital literacy; many studies are short-term.",
          source: "Kompas.com · October 15, 2025",
          url: "https://www.kompas.com/skola/read/2024/08/06/210000769/bagaimana-teknologi-pembelajaran-memengaruhi-proses-pembelajaran-",
        },
        {
          category: "[Innovation]",
          title: "Modern education innovation: digital tools for schools",
          description:
            "Indonesia's Rumah Pendidikan initiative brings together interactive learning modules and digital classrooms. The program aims to expand access to quality learning materials, modernize school administration, and has received international recognition at the 2026 WSIS Prizes.",
          source: "e-ujian.id · 2026",
          url: "https://e-ujian.id/peta-pendidikan-modern-indonesia/",
        },
      ],
    },
  },
  zh: {
    impact: {
      eyebrow: "示例数据",
      title: "学习成效。",
      description: "以下数字仅为占位内容。发布前请替换为平台实际测量数据。",
      items: [
        { value: "XX%", label: "课程完成率", detail: "示例指标 · 请替换" },
        { value: "XX%", label: "学习进步", detail: "示例指标 · 请替换" },
        { value: "XX", label: "活跃学习者", detail: "示例指标 · 请替换" },
      ],
    },
    evidence: {
      label: "量化证据占位内容",
      summary: "[请替换为经过核实的研究摘要或平台评估结果，并说明测量影响。]",
      caveat: "此处为虚构示例，并非真实研究结果或 EduFuture 成果。",
      source: "[来源名称]",
      url: "",
    },
    insights: {
      eyebrow: "新闻与洞察 · 示例",
      title: "数字教育精选。",
      description:
        "以下卡片为虚构示例。发布前请替换标题、日期、摘要、来源和链接。",
      readMore: "示例链接",
      items: [
        {
          category: "[类别]",
          title: "[数字教育最新新闻标题]",
          description: "[新闻简要摘要。请替换为已核实的信息。]",
          source: "[来源] · [日期]",
          url: "",
        },
        {
          category: "[研究]",
          title: "[学习技术相关研究发现]",
          description: "[概述主要发现、研究背景与局限。]",
          source: "[机构] · [日期]",
          url: "",
        },
        {
          category: "[创新]",
          title: "[数字学习创新案例]",
          description: "[概述创新内容、相关方及已核实的益处。]",
          source: "[来源] · [日期]",
          url: "",
        },
      ],
    },
  },
  es: {
    impact: {
      eyebrow: "Datos de ejemplo",
      title: "Impacto del aprendizaje.",
      description:
        "Estas cifras son marcadores de posición. Sustitúyelas por datos medidos antes de publicar.",
      items: [
        {
          value: "XX%",
          label: "Cursos completados",
          detail: "Métrica de ejemplo · sustituir",
        },
        {
          value: "XX%",
          label: "Progreso de aprendizaje",
          detail: "Métrica de ejemplo · sustituir",
        },
        {
          value: "XX",
          label: "Estudiantes activos",
          detail: "Métrica de ejemplo · sustituir",
        },
      ],
    },
    evidence: {
      label: "Marcador de evidencia cuantitativa",
      summary:
        "[Sustituir por un resumen de investigación verificado o una evaluación de la plataforma, con el efecto medido.]",
      caveat:
        "Este contenido es ficticio; no es un hallazgo real ni un resultado de EduFuture.",
      source: "[Nombre de la fuente]",
      url: "",
    },
    insights: {
      eyebrow: "Noticias e ideas · ejemplos",
      title: "Novedades de educación digital.",
      description:
        "Estas tarjetas contienen datos ficticios. Sustituye títulos, fechas, resúmenes, fuentes y enlaces antes de publicar.",
      readMore: "Enlace de ejemplo",
      items: [
        {
          category: "[Categoría]",
          title: "[Titular reciente sobre educación digital]",
          description:
            "[Resumen breve del artículo. Sustituir por información verificada.]",
          source: "[Fuente] · [Fecha]",
          url: "",
        },
        {
          category: "[Investigación]",
          title: "[Hallazgo sobre tecnología para el aprendizaje]",
          description:
            "[Resume el hallazgo, su contexto y las limitaciones del estudio.]",
          source: "[Organización] · [Fecha]",
          url: "",
        },
        {
          category: "[Innovación]",
          title: "[Innovación destacada de aprendizaje digital]",
          description:
            "[Resume la innovación, participantes y beneficios verificados.]",
          source: "[Fuente] · [Fecha]",
          url: "",
        },
      ],
    },
  },
  ar: {
    impact: {
      eyebrow: "بيانات تجريبية",
      title: "أثر التعلم.",
      description:
        "الأرقام التالية عناصر نائبة. استبدلها ببيانات المنصة المقاسة قبل النشر.",
      items: [
        {
          value: "XX%",
          label: "إكمال الدورات",
          detail: "مؤشر تجريبي · يُستبدل",
        },
        {
          value: "XX%",
          label: "التقدم في التعلم",
          detail: "مؤشر تجريبي · يُستبدل",
        },
        {
          value: "XX",
          label: "المتعلمون النشطون",
          detail: "مؤشر تجريبي · يُستبدل",
        },
      ],
    },
    evidence: {
      label: "عنصر نائب للأدلة الكمية",
      summary:
        "[استبدل هذا بملخص بحث موثق أو تقييم للمنصة، مع توضيح الأثر المقاس.]",
      caveat: "هذا محتوى تجريبي وليس نتيجة حقيقية أو نتيجة لمنصة EduFuture.",
      source: "[اسم المصدر]",
      url: "",
    },
    insights: {
      eyebrow: "أخبار ورؤى · أمثلة",
      title: "مستجدات التعليم الرقمي.",
      description:
        "تحتوي البطاقات على بيانات تجريبية. استبدل العناوين والتواريخ والملخصات والمصادر والروابط قبل النشر.",
      readMore: "رابط تجريبي",
      items: [
        {
          category: "[الفئة]",
          title: "[عنوان خبر حديث عن التعليم الرقمي]",
          description: "[ملخص قصير للمقال. استبدله بمعلومات موثقة.]",
          source: "[المصدر] · [التاريخ]",
          url: "",
        },
        {
          category: "[بحث]",
          title: "[نتيجة بحث حول تقنيات التعلم]",
          description: "[لخص النتيجة والسياق والقيود.]",
          source: "[المؤسسة] · [التاريخ]",
          url: "",
        },
        {
          category: "[ابتكار]",
          title: "[ابتكار مميز في التعلم الرقمي]",
          description: "[لخص الابتكار والأطراف المعنية والفوائد الموثقة.]",
          source: "[المصدر] · [التاريخ]",
          url: "",
        },
      ],
    },
  },
  fr: {
    impact: {
      eyebrow: "Données fictives",
      title: "Impact de l’apprentissage.",
      description:
        "Ces chiffres sont des espaces réservés. Remplacez-les par des données mesurées avant publication.",
      items: [
        {
          value: "XX%",
          label: "Cours terminés",
          detail: "Indicateur fictif · à remplacer",
        },
        {
          value: "XX%",
          label: "Progrès d’apprentissage",
          detail: "Indicateur fictif · à remplacer",
        },
        {
          value: "XX",
          label: "Apprenants actifs",
          detail: "Indicateur fictif · à remplacer",
        },
      ],
    },
    evidence: {
      label: "Espace réservé aux preuves quantitatives",
      summary:
        "[Remplacez par un résumé de recherche vérifié ou une évaluation de la plateforme, avec l’effet mesuré.]",
      caveat:
        "Ce contenu est fictif ; il ne s’agit ni d’un résultat réel ni d’un résultat d’EduFuture.",
      source: "[Nom de la source]",
      url: "",
    },
    insights: {
      eyebrow: "Actualités et analyses · exemples",
      title: "À la une de l’éducation numérique.",
      description:
        "Ces cartes contiennent des données fictives. Remplacez titres, dates, résumés, sources et liens avant publication.",
      readMore: "Lien exemple",
      items: [
        {
          category: "[Catégorie]",
          title: "[Titre récent sur l’éducation numérique]",
          description:
            "[Bref résumé de l’article. À remplacer par des informations vérifiées.]",
          source: "[Source] · [Date]",
          url: "",
        },
        {
          category: "[Recherche]",
          title: "[Résultat de recherche sur les technologies éducatives]",
          description:
            "[Présentez le résultat principal, son contexte et les limites de l’étude.]",
          source: "[Organisation] · [Date]",
          url: "",
        },
        {
          category: "[Innovation]",
          title: "[Innovation numérique pour l’apprentissage]",
          description:
            "[Résumez l’innovation, les parties prenantes et les bénéfices vérifiés.]",
          source: "[Source] · [Date]",
          url: "",
        },
      ],
    },
  },
};

for (const [language, translation] of Object.entries(demoContent)) {
  Object.assign(resources[language].translation, translation);
}

const navigationLabels = {
  id: {
    how: "Cara kerja",
    courses: "Kursus",
    insights: "Wawasan",
    faq: "FAQ",
    cta: "Jelajahi kursus",
  },
  en: {
    how: "How it works",
    courses: "Courses",
    insights: "Insights",
    faq: "FAQ",
    cta: "Explore courses",
  },
  zh: {
    how: "学习方式",
    courses: "课程",
    insights: "资讯",
    faq: "常见问题",
    cta: "探索课程",
  },
  es: {
    how: "Cómo funciona",
    courses: "Cursos",
    insights: "Ideas",
    faq: "FAQ",
    cta: "Explorar cursos",
  },
  ar: {
    how: "كيف يعمل",
    courses: "الدورات",
    insights: "رؤى",
    faq: "الأسئلة الشائعة",
    cta: "استكشف الدورات",
  },
  fr: {
    how: "Fonctionnement",
    courses: "Cours",
    insights: "Actualités",
    faq: "FAQ",
    cta: "Explorer les cours",
  },
};

for (const [language, labels] of Object.entries(navigationLabels)) {
  resources[language].translation.nav = {
    ...resources[language].translation.nav,
    ...labels,
  };
}

const storedLanguage = window.localStorage.getItem("edtech-language");
const supportedLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  lng: supportedLanguages.includes(storedLanguage) ? storedLanguage : "id",
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
});

export default i18n;
