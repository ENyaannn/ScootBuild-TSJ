const tsjLangSelect = document.getElementById("lang-switcher");
const tsjPageClass = Array.from(document.body.classList).find((name) => name.startsWith("page-"));

const tsjCountryNames = {
  en: { Japan: "Japan", Italy: "Italy", France: "France", Taiwan: "Taiwan", China: "China" },
  ru: { Japan: "Япония", Italy: "Италия", France: "Франция", Taiwan: "Тайвань", China: "Китай" },
};

const tsjCountryDescriptions = {
  en: {
    Japan: "Popular Japanese scooter names gathered in one place.",
    Italy: "Popular Italian scooter names gathered in one place.",
    France: "Popular French scooter names gathered in one place.",
    Taiwan: "Popular Taiwanese scooter names gathered in one place.",
    China: "Popular Chinese scooter names gathered in one place.",
  },
  ru: {
    Japan: "Популярные японские скутеры собраны в одном месте.",
    Italy: "Популярные итальянские скутеры собраны в одном месте.",
    France: "Популярные французские скутеры собраны в одном месте.",
    Taiwan: "Популярные тайваньские скутеры собраны в одном месте.",
    China: "Популярные китайские скутеры собраны в одном месте.",
  },
};

const tsjCountryName = (country, lang) => tsjCountryNames[lang]?.[country] || country;

const tsjSetText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element && typeof text === "string") {
    element.textContent = text;
  }
};

const tsjSetTexts = (entries) => entries.forEach(([selector, text]) => tsjSetText(selector, text));

const tsjApplyCommon = (lang) => {
  document.documentElement.lang = lang === "ru" ? "ru" : "en";

  if (tsjLangSelect) {
    tsjLangSelect.value = lang;
  }

  tsjSetTexts([
    [".site-nav a:nth-child(1)", lang === "ru" ? "Главная" : "Home"],
    [".site-nav a:nth-child(2)", lang === "ru" ? "О нас" : "About"],
    [".site-nav a:nth-child(3)", lang === "ru" ? "Проекты" : "Projects"],
    [".site-nav a:nth-child(4)", lang === "ru" ? "Конфигуратор" : "Configurator"],
    [".site-nav a:nth-child(5)", lang === "ru" ? "Цены" : "Price"],
    [".site-nav a:nth-child(6)", lang === "ru" ? "Контакты" : "Contact"],
  ]);

  const brandSmallMap = {
    "page-home": lang === "ru" ? "Культура кастомных скутеров" : "Custom scooter culture",
    "page-about": lang === "ru" ? "О команде" : "About the crew",
    "page-builds": lang === "ru" ? "Проекты и сборки" : "Projects and builds",
    "page-configurator": lang === "ru" ? "Конфигуратор" : "Configurator",
    "page-prices": lang === "ru" ? "Прайс-гид" : "Price guide",
    "page-contact": lang === "ru" ? "Контакты" : "Contact",
    "page-country": lang === "ru" ? "Архив по странам" : "Country archive",
    "page-model": lang === "ru" ? "Архив моделей" : "Model archive",
  };

  tsjSetText(".brand-copy small", brandSmallMap[tsjPageClass] || "TSJ");
};

const tsjApplyHome = (lang) => {
  document.title = lang === "ru" ? "TSJscootbuild.com | Главная" : "TSJscootbuild.com";
  tsjSetTexts([
    [".hero .eyebrow", lang === "ru" ? "Видение TSJ" : "TSJ vision"],
    [".hero h1", lang === "ru" ? "Архив скутеров, идеи сборок и более чистое кастомное направление в одном месте." : "Scooter archives, build ideas, and cleaner custom direction in one place."],
    [".hero-text", lang === "ru" ? "Используй сайт, чтобы смотреть модели скутеров, идеи конфигураций, ценовые направления и визуальную сторону сборок с более сильным взглядом TSJ." : "Use the site to explore scooter models, configuration ideas, pricing directions, and the visual side of builds with a stronger TSJ point of view."],
    [".hero-actions a:nth-child(1)", lang === "ru" ? "Кто мы" : "Who We Are"],
    [".hero-actions a:nth-child(2)", lang === "ru" ? "Связаться с TSJ" : "Contact TSJ"],
    [".hero-stats article:nth-child(1) strong", lang === "ru" ? "Архив" : "Archive"],
    [".hero-stats article:nth-child(1) span", lang === "ru" ? "Библиотека моделей" : "Scooter model library"],
    [".hero-stats article:nth-child(2) strong", lang === "ru" ? "Сборки" : "Builds"],
    [".hero-stats article:nth-child(2) span", lang === "ru" ? "Кастомное направление" : "Custom direction"],
    [".hero-stats article:nth-child(3) strong", "TSJ"],
    [".hero-stats article:nth-child(3) span", lang === "ru" ? "Визуальная идентичность" : "Visual identity"],
    [".hero-panel-glass-top strong", lang === "ru" ? "Кастомная культура скутеров с более сильным вкусом." : "Custom scooter culture with sharper taste."],
    [".hero-panel-glass-side span", lang === "ru" ? "Направление" : "Direction"],
    [".hero-panel-glass-side strong:nth-child(2)", lang === "ru" ? "Сборки" : "Builds"],
    [".hero-panel-glass-side strong:nth-child(3)", lang === "ru" ? "Идентичность" : "Identity"],
    [".hero-panel-glass-side strong:nth-child(4)", lang === "ru" ? "Планы" : "Future plans"],
    [".hero-badge-bottom", lang === "ru" ? "АРХИВ / СБОРКИ / ИДЕНТИЧНОСТЬ" : "ARCHIVE / BUILDS / IDENTITY"],
    [".section:nth-of-type(1) .eyebrow", lang === "ru" ? "О нас" : "About us"],
    [".section:nth-of-type(1) h2", lang === "ru" ? "Мы команда скутеров, построенная на дружбе, вкусе и амбициях." : "We are a scooter crew built on friendship, taste, and ambition."],
    [".about-grid article:nth-child(1) h3", lang === "ru" ? "Кто мы" : "Who we are"],
    [".about-grid article:nth-child(1) p", lang === "ru" ? "TSJ — это три друга с общим интересом к скутерам, визуальной идентичности и превращению идей во что-то реальное." : "TSJ is three friends who share the same interest in scooters, visual identity, and turning ideas into something real."],
    [".about-grid article:nth-child(2) h3", lang === "ru" ? "Во что мы верим" : "What we believe"],
    [".about-grid article:nth-child(2) p", lang === "ru" ? "Мы верим, что даже простой скутер может стать запоминающимся, если направление, детали и стиль выбраны правильно." : "We believe even a simple scooter can become something memorable when the direction, details, and style are right."],
    [".about-grid article:nth-child(3) h3", lang === "ru" ? "Что нас двигает" : "What drives us"],
    [".about-grid article:nth-child(3) p", lang === "ru" ? "Наша цель — продолжать строить, улучшать и собирать более сильную идентичность вокруг того, что мы создаем вместе." : "Our goal is to keep building, improving, and shaping a stronger identity around the things we create together."],
    [".manifesto-copy .eyebrow", lang === "ru" ? "Что мы делаем" : "What we do"],
    [".manifesto-copy h2", lang === "ru" ? "Мы покупаем старые скутеры, перестраиваем их и даем им более чистое будущее." : "We buy old scooters, rebuild them, and give them a cleaner future."],
    [".manifesto-copy p", lang === "ru" ? "Мы берем скутеры, которые потеряли вид или ценность, восстанавливаем их, меняем форму и делаем кастомные сборки с большим характером и более сильным визуальным направлением." : "We take scooters that have lost their value or their look, restore them, reshape them, and create custom builds with more presence, more character, and a stronger visual direction."],
    [".manifesto-points article:nth-child(1) h3", lang === "ru" ? "Реставрация" : "Restoration"],
    [".manifesto-points article:nth-child(1) p", lang === "ru" ? "Возвращаем старые скутеры с лучшим видом и более сильной идентичностью." : "We bring old scooters back with a better look and stronger identity."],
    [".manifesto-points article:nth-child(2) h3", lang === "ru" ? "Кастомные сборки" : "Custom builds"],
    [".manifesto-points article:nth-child(2) p", lang === "ru" ? "Собираем проекты со стилем, настроением и более чистыми решениями." : "We shape projects with more style, better mood, and cleaner decisions."],
    [".manifesto-points article:nth-child(3) h3", lang === "ru" ? "Конфигурации" : "Configurations"],
    [".manifesto-points article:nth-child(3) p", lang === "ru" ? "Изучаем идеи сетапов и направления сборок, которые могут вдохновлять будущие проекты." : "We explore setup ideas and build directions that can inspire future scooters."],
    [".future-section .eyebrow", lang === "ru" ? "Планы" : "Future plans"],
    [".future-section h2", lang === "ru" ? "Мы хотим, чтобы TSJ вырос в нечто большее, чем просто страница команды." : "We want TSJ to grow into something bigger than a simple crew page."],
    [".future-section .section-note", lang === "ru" ? "План — продолжать строить проекты, развивать сайт, расширять конфигуратор и делать более сильный бренд вокруг нашего мира скутеров." : "The plan is to keep building projects, grow the site, expand the configurator, and create a stronger brand around our scooter world."],
    [".site-footer .eyebrow", lang === "ru" ? "Контакты / соцсети" : "Contact / social"],
    [".site-footer h2", lang === "ru" ? "Давай соберем следующее направление сборки." : "Let's shape the next build direction."],
    [".footer-link:nth-child(1) strong", lang === "ru" ? "Почта" : "Email"],
    [".footer-link:nth-child(2) strong", lang === "ru" ? "Телеграм-бот" : "Telegram Bot"],
  ]);
};

const tsjApplyAbout = (lang) => {
  document.title = lang === "ru" ? "О TSJ | TSJscootbuild.com" : "About TSJ | TSJscootbuild.com";
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "О TSJ" : "About TSJ"],
    [".projects-hero h1", lang === "ru" ? "Одно направление и одна развивающаяся скутерная идентичность." : "One direction, one evolving scooter identity."],
    [".projects-hero p:last-child", lang === "ru" ? "TSJscootbuild — это команда, построенная вокруг дружбы, культуры скутеров, реставрации и желания делать старые машины более острыми, чистыми и запоминающимися." : "TSJscootbuild is a crew built around friendship, scooter culture, restoration, and the desire to make old machines look sharper, cleaner, and more memorable."],
    [".manifesto-copy .eyebrow", lang === "ru" ? "Кто мы" : "Who we are"],
    [".manifesto-copy h2", lang === "ru" ? "Нам важны не только детали. Нам важно направление." : "We care about more than parts. We care about direction."],
    [".manifesto-copy p", lang === "ru" ? "Мы покупаем старые скутеры, восстанавливаем их, собираем кастомные сетапы и строим стиль, который ощущается осознанным. У каждого проекта должна быть причина." : "We buy old scooters, restore them, build custom setups, and shape a style that feels deliberate. Every project should look like it has a reason behind it."],
    [".process-section .eyebrow", lang === "ru" ? "Ценности команды" : "Crew values"],
    [".process-section h2", lang === "ru" ? "Что делает проекты цельными." : "What keeps the projects consistent."],
    [".site-footer .eyebrow", lang === "ru" ? "Продолжай смотреть" : "Keep exploring"],
    [".site-footer h2", lang === "ru" ? "Двигайся дальше по миру TSJ." : "Move through the TSJ world."],
    [".footer-link:nth-child(1) strong", lang === "ru" ? "Проекты" : "Projects"],
    [".footer-link:nth-child(1) span", lang === "ru" ? "Посмотри текущие сборки." : "See the current builds."],
    [".footer-link:nth-child(2) strong", lang === "ru" ? "Конфигуратор" : "Configurator"],
    [".footer-link:nth-child(2) span", lang === "ru" ? "Изучи направления сетапов." : "Explore setup directions."],
    [".footer-link:nth-child(3) strong", lang === "ru" ? "Контакты" : "Contact"],
    [".footer-link:nth-child(3) span", lang === "ru" ? "Открой страницу контактов." : "Open the contact page."],
  ]);
};

const tsjApplyBuilds = (lang) => {
  document.title = lang === "ru" ? "Проекты | TSJscootbuild.com" : "TSJ Projects | TSJscootbuild.com";
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "Архив проектов" : "Projects archive"],
    [".projects-hero h1", lang === "ru" ? "Настоящие скутеры, более чистая подача и более сильная энергия бренда." : "Real scooters, sharper presentation, stronger brand energy."],
    [".projects-hero p:last-child", lang === "ru" ? "Эта страница двигает TSJ ближе к сайту настоящего бренда: более ясные разделы, лучшая визуальная иерархия и отдельное место для архива моделей." : "This page pushes TSJ closer to a performance-brand website: clearer sections, more visual hierarchy, and a dedicated space for featured machines."],
    [".project-showcase .eyebrow", lang === "ru" ? "Происхождение скутеров" : "Scooter origins"],
    [".project-showcase h2", lang === "ru" ? "Выбери страну и открой архив моделей скутеров." : "Choose a country and open its scooter model archive."],
    [".project-showcase .section-note", lang === "ru" ? "Каталог теперь разбит по странам. Открой Японию, Италию, Францию, Тайвань или Китай и посмотри названия скутеров по происхождению." : "The catalog is now split by country. Open Japan, Italy, Taiwan, or China and see the scooter names connected to that origin."],
    [".model-wall-link:nth-child(1)", tsjCountryName("Japan", lang)],
    [".model-wall-link:nth-child(2)", tsjCountryName("Italy", lang)],
    [".model-wall-link:nth-child(3)", tsjCountryName("France", lang)],
    [".model-wall-link:nth-child(4)", tsjCountryName("Taiwan", lang)],
    [".model-wall-link:nth-child(5)", tsjCountryName("China", lang)],
    [".products-section .eyebrow", lang === "ru" ? "Развитие каталога" : "Catalog direction"],
    [".products-section h2", lang === "ru" ? "Как этот архив можно развить дальше." : "How this client result section can grow next."],
    [".social-section .eyebrow", lang === "ru" ? "Оставайся на связи" : "Stay connected"],
    [".social-section h2", lang === "ru" ? "Следи за следующими сборками по мере их появления." : "Follow the next builds as they happen."],
    [".site-footer .eyebrow", lang === "ru" ? "Назад на главную" : "Back to home"],
    [".site-footer h2", lang === "ru" ? "Продолжай строить бренд." : "Keep building the brand."],
    [".footer-link:nth-child(1) strong", lang === "ru" ? "Главная" : "Main page"],
    [".footer-link:nth-child(1) span", lang === "ru" ? "Вернуться на главную." : "Return to the homepage experience."],
    [".footer-link:nth-child(2) strong", lang === "ru" ? "Конфигуратор" : "Configurator"],
    [".footer-link:nth-child(2) span", lang === "ru" ? "Открыть страницу направлений сетапов." : "Open the dedicated setup direction page."],
    [".footer-link:nth-child(3) strong", lang === "ru" ? "Контакты" : "Contact"],
    [".footer-link:nth-child(3) span", lang === "ru" ? "Открыть страницу контактов." : "Open the contact page."],
  ]);
};

const tsjApplyConfigurator = (lang) => {
  document.title = lang === "ru" ? "Конфигуратор | TSJscootbuild.com" : "Configurator | TSJscootbuild.com";
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "Конфигуратор TSJ" : "TSJ configurator"],
    [".projects-hero h1", lang === "ru" ? "Выбери направление скутера с более чистым взглядом." : "Choose a scooter direction with a cleaner point of view."],
    [".projects-hero p:last-child", lang === "ru" ? "Эта страница посвящена вдохновению для сетапов. Здесь можно смотреть стили сборок, настроение райдера и будущие фирменные направления TSJ." : "This page is dedicated to setup inspiration. It is the place for exploring build styles, rider moods, and future TSJ signature directions."],
    [".configurator-section .eyebrow", lang === "ru" ? "Идеи сетапов" : "Setup ideas"],
    [".configurator-section h2", lang === "ru" ? "Найди конфигурацию, которая подходит твоему скутеру." : "Find the configuration mood that fits your scooter."],
    [".configurator-section .section-note", lang === "ru" ? "Это ранняя premium-версия конфигуратора. Позже он может вырасти в более продвинутый выбор." : "This is the early premium version of the configurator. Later it can expand into a more advanced selection experience."],
    [".pill:nth-child(1)", lang === "ru" ? "Все сборки" : "All Builds"],
    [".pill:nth-child(2)", lang === "ru" ? "Улица" : "Street"],
    [".pill:nth-child(3)", lang === "ru" ? "Шоу" : "Show"],
    [".pill:nth-child(4)", lang === "ru" ? "Перформанс" : "Performance"],
    [".pill:nth-child(5)", lang === "ru" ? "Реставрация" : "Restoration"],
    [".products-section .eyebrow", lang === "ru" ? "Будущие слои" : "Future layers"],
    [".products-section h2", lang === "ru" ? "Куда конфигуратор может вырасти дальше." : "Where the configurator can go next."],
    [".site-footer .eyebrow", lang === "ru" ? "Следующий шаг" : "Next step"],
    [".site-footer h2", lang === "ru" ? "Продолжай двигаться по миру сетапов." : "Keep moving through the setup world."],
  ]);
};

const tsjApplyPrices = (lang) => {
  document.title = lang === "ru" ? "Цены | TSJscootbuild.com" : "Price | TSJscootbuild.com";
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "Цены TSJ" : "TSJ price"],
    [".projects-hero h1", lang === "ru" ? "Направления сборок с более понятными бюджетными уровнями." : "Build directions with clearer budget levels."],
    [".projects-hero p:last-child", lang === "ru" ? "Эта страница дает простой обзор цен для разных направлений скутеров. Позже она может вырасти в более подробный гид с деталями, работой и кастомными опциями." : "This page gives a simple price overview for different scooter directions. It can later grow into a more detailed guide with parts, labor, and custom options."],
    [".section .eyebrow", lang === "ru" ? "Категории цен" : "Price categories"],
    [".section h2", lang === "ru" ? "От чистой базы до полного racing-сетапа." : "From clean basics to full racing setups."],
    [".section .section-note", lang === "ru" ? "Это стартовые цифры для сайта, и позже их можно заменить на твои реальные цены." : "These are starting points for the site and can be changed later to your real prices."],
    [".price-card:nth-child(1) .price-value", "€300 - €700"],
    [".price-card:nth-child(2) .price-value", "€700 - €1,500"],
    [".price-card:nth-child(3) .price-value", "€1,500 - €3,000"],
    [".price-card:nth-child(4) .price-value", "€3,000+"],
    [".products-section .eyebrow", lang === "ru" ? "Что влияет на цену" : "What can affect price"],
    [".products-section h2", lang === "ru" ? "Каждая сборка может меняться в зависимости от деталей и цели." : "Every build can move depending on the parts and the goal."],
    [".site-footer .eyebrow", lang === "ru" ? "Следующее действие" : "Next move"],
    [".site-footer h2", lang === "ru" ? "Сравни цену, а потом выбери направление." : "Compare price, then choose the direction."],
  ]);
};

const tsjApplyContact = (lang) => {
  document.title = lang === "ru" ? "Контакты | TSJscootbuild.com" : "Contact | TSJscootbuild.com";
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "Контакты TSJ" : "Contact TSJ"],
    [".projects-hero h1", lang === "ru" ? "Оставайся ближе к команде и следующим проектам." : "Stay close to the crew and the next projects."],
    [".projects-hero p:last-child", lang === "ru" ? "Следи за брендом, смотри сборки и оставайся на связи с командой через каналы ниже." : "Follow the brand, track the builds, and keep up with the crew through the channels below."],
    [".social-section .eyebrow", lang === "ru" ? "Каналы связи" : "Contact channels"],
    [".social-section h2", lang === "ru" ? "Выбери то место, которое подходит тебе лучше всего." : "Choose the place that fits best."],
    [".social-card:nth-child(3) .eyebrow", lang === "ru" ? "Телеграм-бот" : "Telegram bot"],
    [".final-cta-card .eyebrow", lang === "ru" ? "Мир TSJ" : "TSJ world"],
    [".final-cta-card h2", lang === "ru" ? "Смотри проекты, узнавай команду и оставайся на связи." : "See the projects, know the crew, and stay connected."],
    [".final-cta-card p", lang === "ru" ? "Сайт — это только начало. Бренд растет через сборки, визуал и комьюнити вокруг него." : "The site is only the start. The brand grows through the builds, the visuals, and the community around it."],
    [".final-cta-card .hero-actions a:nth-child(1)", lang === "ru" ? "Смотреть проекты" : "View Projects"],
    [".final-cta-card .hero-actions a:nth-child(2)", lang === "ru" ? "О команде" : "About the Crew"],
    [".site-footer .eyebrow", lang === "ru" ? "Продолжай" : "Continue"],
    [".site-footer h2", lang === "ru" ? "Изучи остальной мир TSJ." : "Explore the rest of TSJ."],
  ]);
};

const tsjApplyCountry = (lang) => {
  const path = window.location.pathname.split("/").pop();
  const map = {
    "country-japan.html": "Japan",
    "country-italy.html": "Italy",
    "country-france.html": "France",
    "country-taiwan.html": "Taiwan",
    "country-china.html": "China",
  };
  const country = map[path] || "Japan";
  const localized = tsjCountryName(country, lang);
  document.title = `${localized} | TSJscootbuild.com`;
  tsjSetTexts([
    [".projects-hero .eyebrow", lang === "ru" ? "Архив по стране" : "Country archive"],
    [".projects-hero h1", localized],
    [".projects-hero p:last-child", tsjCountryDescriptions[lang][country]],
    [".site-footer .eyebrow", lang === "ru" ? "Назад к странам" : "Back to countries"],
    [".site-footer h2", lang === "ru" ? "Открой другое происхождение скутеров." : "Open another scooter origin."],
    [".footer-link:nth-child(1) strong", lang === "ru" ? "Страны" : "Countries"],
    [".footer-link:nth-child(1) span", lang === "ru" ? "Вернуться к архиву стран." : "Return to the country archive."],
    [".footer-link:nth-child(2) strong", lang === "ru" ? "Конфигуратор" : "Configurator"],
    [".footer-link:nth-child(2) span", lang === "ru" ? "Открыть направления сетапов." : "Open setup directions."],
    [".footer-link:nth-child(3) strong", lang === "ru" ? "Контакты" : "Contact"],
    [".footer-link:nth-child(3) span", lang === "ru" ? "Оставайся на связи с TSJ." : "Stay connected with TSJ."],
  ]);
};

const tsjApplyModel = (lang) => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") || "Scooter Model";
  const country = params.get("country") || "Japan";
  const localized = tsjCountryName(country, lang);
  document.title = `${name} | TSJscootbuild.com`;
  tsjSetTexts([
    ["#model-country", localized],
    ["#model-copy", lang === "ru" ? `${name} входит в архив ${localized}. Позже сюда можно добавить реальное фото скутера, клиентские результаты и финальные детали.` : `${name} is part of the ${country} archive. Add your final scooter photo, client results, and details here later.`],
    [".single-model-photo-placeholder span", lang === "ru" ? "Место под фото" : "Photo placeholder"],
    [".single-model-photo-placeholder strong", lang === "ru" ? "Позже добавь сюда фото скутера" : "Add scooter image here later"],
    [".site-footer .eyebrow", lang === "ru" ? "Назад к архиву" : "Back to archive"],
    [".site-footer h2", lang === "ru" ? "Открой больше названий скутеров." : "Open more scooter names."],
    [".footer-link:nth-child(1) strong", lang === "ru" ? "Страны" : "Countries"],
    [".footer-link:nth-child(1) span", lang === "ru" ? "Вернуться к архиву стран." : "Return to the country archive."],
  ]);
};

const tsjApplyLanguage = (lang) => {
  tsjApplyCommon(lang);
  if (tsjPageClass === "page-home") tsjApplyHome(lang);
  if (tsjPageClass === "page-about") tsjApplyAbout(lang);
  if (tsjPageClass === "page-builds") tsjApplyBuilds(lang);
  if (tsjPageClass === "page-configurator") tsjApplyConfigurator(lang);
  if (tsjPageClass === "page-prices") tsjApplyPrices(lang);
  if (tsjPageClass === "page-contact") tsjApplyContact(lang);
  if (tsjPageClass === "page-country") tsjApplyCountry(lang);
  if (tsjPageClass === "page-model") tsjApplyModel(lang);
};

window.applySiteLanguage = tsjApplyLanguage;

const tsjSavedLanguage = localStorage.getItem("tsj-lang") || "en";
tsjApplyLanguage(tsjSavedLanguage);

if (tsjLangSelect) {
  tsjLangSelect.addEventListener("change", (event) => {
    const nextLanguage = event.target.value === "ru" ? "ru" : "en";
    localStorage.setItem("tsj-lang", nextLanguage);
    tsjApplyLanguage(nextLanguage);
  });
}
