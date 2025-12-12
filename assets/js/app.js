const LANG_KEY = "ex.lang";
const THEME_KEY = "ex.theme";

const I18N = {
  en:{
    "ui.language":"Language",
    "ui.theme":"Theme",
    "ui.themeLight":"Light",
    "ui.themeDark":"Dark",
    "title.overview":"Exchange Overview",
    "subtitle.overview":"Key metrics, markets and recent trades.",
    "btn.refresh":"Refresh",
    "btn.createOrder":"Create order",
    "nav.overview":"Overview",
    "nav.markets":"Markets",
    "nav.orders":"Orders",
    "nav.wallet":"Wallet",
    "nav.settings":"Settings",
    "sec.markets":"Markets",
    "tbl.pair":"Pair",
    "tbl.price":"Price",
    "tbl.change":"24h",
    "tbl.volume":"Volume"
  },
  ru:{
    "ui.language":"Язык",
    "ui.theme":"Тема",
    "ui.themeLight":"Светлая",
    "ui.themeDark":"Тёмная",
    "title.overview":"Обзор биржи",
    "subtitle.overview":"Ключевые метрики, рынки и сделки.",
    "btn.refresh":"Обновить",
    "btn.createOrder":"Создать ордер",
    "nav.overview":"Обзор",
    "nav.markets":"Рынки",
    "nav.orders":"Ордера",
    "nav.wallet":"Кошелёк",
    "nav.settings":"Настройки",
    "sec.markets":"Рынки",
    "tbl.pair":"Пара",
    "tbl.price":"Цена",
    "tbl.change":"24ч",
    "tbl.volume":"Объём"
  },
  es:{
    "ui.language":"Idioma",
    "ui.theme":"Tema",
    "ui.themeLight":"Claro",
    "ui.themeDark":"Oscuro",
    "title.overview":"Resumen del Exchange",
    "subtitle.overview":"Métricas clave y mercados.",
    "btn.refresh":"Actualizar",
    "btn.createOrder":"Crear orden",
    "nav.overview":"Resumen",
    "nav.markets":"Mercados",
    "nav.orders":"Órdenes",
    "nav.wallet":"Billetera",
    "nav.settings":"Ajustes",
    "sec.markets":"Mercados",
    "tbl.pair":"Par",
    "tbl.price":"Precio",
    "tbl.change":"24h",
    "tbl.volume":"Volumen"
  },
  fr:{
    "ui.language":"Langue",
    "ui.theme":"Thème",
    "ui.themeLight":"Clair",
    "ui.themeDark":"Sombre",
    "title.overview":"Aperçu de l’exchange",
    "subtitle.overview":"Indicateurs clés et marchés.",
    "btn.refresh":"Actualiser",
    "btn.createOrder":"Créer un ordre",
    "nav.overview":"Aperçu",
    "nav.markets":"Marchés",
    "nav.orders":"Ordres",
    "nav.wallet":"Portefeuille",
    "nav.settings":"Paramètres",
    "sec.markets":"Marchés",
    "tbl.pair":"Paire",
    "tbl.price":"Prix",
    "tbl.change":"24h",
    "tbl.volume":"Volume"
  }
};

function t(lang,key){
  return I18N[lang]?.[key] || I18N.en[key] || key;
}

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(lang, el.dataset.i18n);
  });
  localStorage.setItem(LANG_KEY, lang);
}

function applyTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

document.getElementById("langSelect").addEventListener("change",e=>{
  applyLang(e.target.value);
});

document.getElementById("themeSelect").addEventListener("change",e=>{
  applyTheme(e.target.value);
});

/* INIT */
applyLang(localStorage.getItem(LANG_KEY) || "en");
applyTheme(localStorage.getItem(THEME_KEY) || "light");
document.getElementById("langSelect").value = localStorage.getItem(LANG_KEY) || "en";
document.getElementById("themeSelect").value = localStorage.getItem(THEME_KEY) || "light";
