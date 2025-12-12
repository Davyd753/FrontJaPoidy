const markets = [
  { pair: "BTC/USDT", price: 67120.45, change: 1.42, volume: 532_120_000 },
  { pair: "ETH/USDT", price: 3540.12,  change: -0.88, volume: 211_540_000 },
  { pair: "SOL/USDT", price: 188.67,   change: 2.31, volume: 98_120_000 },
  { pair: "XRP/USDT", price: 0.6124,   change: -1.12, volume: 64_210_000 },
  { pair: "ADA/USDT", price: 0.4851,   change: 0.37, volume: 41_900_000 },
];

const trades = [
  { time: "20:41:05", pair: "BTC/USDT", side: "buy",  price: 67090.10, qty: 0.012 },
  { time: "20:40:22", pair: "ETH/USDT", side: "sell", price: 3542.55,  qty: 0.44 },
  { time: "20:39:50", pair: "SOL/USDT", side: "buy",  price: 188.12,   qty: 12.5 },
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ---------------- THEME ---------------- */
const THEME_KEY = "ex.theme";
function setTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}
function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || "light";
  setTheme(theme);
  const sel = $("#themeSelect");
  if (sel) sel.value = theme;
}

/* ---------------- I18N ---------------- */
const LANG_KEY = "ex.lang";

const I18N = {
  uk: {
    "ui.language": "Мова",
    "ui.theme": "Тема",
    "ui.themeLight": "Світла",
    "ui.themeDark": "Темна",

    "title.overview": "Огляд біржі",
    "subtitle.overview": "Ключові метрики, ринки та останні угоди.",

    "btn.refresh": "Оновити",
    "btn.createOrder": "Створити ордер",
    "btn.addTrade": "Додати демо-угоду",
    "btn.buy": "Купити",
    "btn.sell": "Продати",

    "ph.search": "Пошук: BTC, ETH…",

    "nav.overview": "Огляд",
    "nav.markets": "Ринки",
    "nav.orders": "Ордери",
    "nav.wallet": "Гаманець",
    "nav.settings": "Налаштування",

    "status.title": "Статус",
    "status.online": "Online",
    "status.api": "API: Connected",

    "kpi.balance": "Баланс",
    "kpi.pnl": "PnL",
    "kpi.volume": "Обсяг",
    "kpi.openOrders": "Відкриті ордери",

    "sec.markets": "Ринки",
    "sec.quickOrder": "Швидкий ордер",
    "sec.recentTrades": "Останні угоди",

    "seg.all": "Усі",
    "seg.gainers": "Зростають",
    "seg.losers": "Падають",

    "tbl.time": "Час",
    "tbl.pair": "Пара",
    "tbl.side": "Сторона",
    "tbl.price": "Ціна",
    "tbl.change": "24h",
    "tbl.volume": "Обсяг",
    "tbl.qty": "К-сть",

    "spot": "Spot",

    "meta.24h": "за 24 год",
    "meta.week": "за тиждень",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Останнє оновлення:",

    "note.tip": "Порада: натисни Оновити, щоб побачити “рух” цін у таблиці.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },

  ru: {
    "ui.language": "Язык",
    "ui.theme": "Тема",
    "ui.themeLight": "Светлая",
    "ui.themeDark": "Тёмная",

    "title.overview": "Обзор биржи",
    "subtitle.overview": "Ключевые метрики, рынки и последние сделки.",

    "btn.refresh": "Обновить",
    "btn.createOrder": "Создать ордер",
    "btn.addTrade": "Добавить демо-сделку",
    "btn.buy": "Купить",
    "btn.sell": "Продать",

    "ph.search": "Поиск: BTC, ETH…",

    "nav.overview": "Обзор",
    "nav.markets": "Рынки",
    "nav.orders": "Ордера",
    "nav.wallet": "Кошелёк",
    "nav.settings": "Настройки",

    "status.title": "Статус",
    "status.online": "Online",
    "status.api": "API: Connected",

    "kpi.balance": "Баланс",
    "kpi.pnl": "PnL",
    "kpi.volume": "Объём",
    "kpi.openOrders": "Открытые ордера",

    "sec.markets": "Рынки",
    "sec.quickOrder": "Быстрый ордер",
    "sec.recentTrades": "Последние сделки",

    "seg.all": "Все",
    "seg.gainers": "Растут",
    "seg.losers": "Падают",

    "tbl.time": "Время",
    "tbl.pair": "Пара",
    "tbl.side": "Сторона",
    "tbl.price": "Цена",
    "tbl.change": "24ч",
    "tbl.volume": "Объём",
    "tbl.qty": "Кол-во",

    "spot": "Spot",

    "meta.24h": "за 24 ч",
    "meta.week": "за неделю",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Последнее обновление:",

    "note.tip": "Совет: нажми Обновить, чтобы увидеть “движение” цен в таблице.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },

  en: {
    "ui.language": "Language",
    "ui.theme": "Theme",
    "ui.themeLight": "Light",
    "ui.themeDark": "Dark",

    "title.overview": "Exchange Overview",
    "subtitle.overview": "Key metrics, markets, and recent trades.",

    "btn.refresh": "Refresh",
    "btn.createOrder": "Create order",
    "btn.addTrade": "Add demo trade",
    "btn.buy": "Buy",
    "btn.sell": "Sell",

    "ph.search": "Search: BTC, ETH…",

    "nav.overview": "Overview",
    "nav.markets": "Markets",
    "nav.orders": "Orders",
    "nav.wallet": "Wallet",
    "nav.settings": "Settings",

    "status.title": "Status",
    "status.online": "Online",
    "status.api": "API: Connected",

    "kpi.balance": "Balance",
    "kpi.pnl": "PnL",
    "kpi.volume": "Volume",
    "kpi.openOrders": "Open orders",

    "sec.markets": "Markets",
    "sec.quickOrder": "Quick order",
    "sec.recentTrades": "Recent trades",

    "seg.all": "All",
    "seg.gainers": "Gainers",
    "seg.losers": "Losers",

    "tbl.time": "Time",
    "tbl.pair": "Pair",
    "tbl.side": "Side",
    "tbl.price": "Price",
    "tbl.change": "24h",
    "tbl.volume": "Volume",
    "tbl.qty": "Qty",

    "spot": "Spot",

    "meta.24h": "last 24h",
    "meta.week": "this week",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Last update:",

    "note.tip": "Tip: click Refresh to see prices move in the table.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },

  es: {
    "ui.language": "Idioma",
    "ui.theme": "Tema",
    "ui.themeLight": "Claro",
    "ui.themeDark": "Oscuro",

    "title.overview": "Resumen del Exchange",
    "subtitle.overview": "Métricas clave, mercados y operaciones recientes.",

    "btn.refresh": "Actualizar",
    "btn.createOrder": "Crear orden",
    "btn.addTrade": "Añadir operación demo",
    "btn.buy": "Comprar",
    "btn.sell": "Vender",

    "ph.search": "Buscar: BTC, ETH…",

    "nav.overview": "Resumen",
    "nav.markets": "Mercados",
    "nav.orders": "Órdenes",
    "nav.wallet": "Billetera",
    "nav.settings": "Ajustes",

    "status.title": "Estado",
    "status.online": "Online",
    "status.api": "API: Connected",

    "kpi.balance": "Balance",
    "kpi.pnl": "PnL",
    "kpi.volume": "Volumen",
    "kpi.openOrders": "Órdenes abiertas",

    "sec.markets": "Mercados",
    "sec.quickOrder": "Orden rápida",
    "sec.recentTrades": "Operaciones recientes",

    "seg.all": "Todos",
    "seg.gainers": "Suben",
    "seg.losers": "Bajan",

    "tbl.time": "Hora",
    "tbl.pair": "Par",
    "tbl.side": "Lado",
    "tbl.price": "Precio",
    "tbl.change": "24h",
    "tbl.volume": "Volumen",
    "tbl.qty": "Cant.",

    "spot": "Spot",

    "meta.24h": "últimas 24h",
    "meta.week": "esta semana",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Última actualización:",

    "note.tip": "Consejo: pulsa Actualizar para ver cómo se mueven los precios.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },

  fr: {
    "ui.language": "Langue",
    "ui.theme": "Thème",
    "ui.themeLight": "Clair",
    "ui.themeDark": "Sombre",

    "title.overview": "Aperçu de l’exchange",
    "subtitle.overview": "Indicateurs clés, marchés et transactions récentes.",

    "btn.refresh": "Actualiser",
    "btn.createOrder": "Créer un ordre",
    "btn.addTrade": "Ajouter une transaction démo",
    "btn.buy": "Acheter",
    "btn.sell": "Vendre",

    "ph.search": "Recherche : BTC, ETH…",

    "nav.overview": "Aperçu",
    "nav.markets": "Marchés",
    "nav.orders": "Ordres",
    "nav.wallet": "Portefeuille",
    "nav.settings": "Paramètres",

    "status.title": "Statut",
    "status.online": "Online",
    "status.api": "API: Connected",

    "kpi.balance": "Solde",
    "kpi.pnl": "PnL",
    "kpi.volume": "Volume",
    "kpi.openOrders": "Ordres ouverts",

    "sec.markets": "Marchés",
    "sec.quickOrder": "Ordre rapide",
    "sec.recentTrades": "Transactions récentes",

    "seg.all": "Tous",
    "seg.gainers": "En hausse",
    "seg.losers": "En baisse",

    "tbl.time": "Heure",
    "tbl.pair": "Paire",
    "tbl.side": "Sens",
    "tbl.price": "Prix",
    "tbl.change": "24h",
    "tbl.volume": "Volume",
    "tbl.qty": "Qté",

    "spot": "Spot",

    "meta.24h": "dernières 24h",
    "meta.week": "cette semaine",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Dernière mise à jour :",

    "note.tip": "Astuce : clique sur Actualiser pour voir les prix bouger.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },
};

function t(lang, key){
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.uk[key] || key);
}

function applyI18n(lang){
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(lang, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(lang, key));
  });
}

function setLang(lang){
  localStorage.setItem(LANG_KEY, lang);
  applyI18n(lang);
  renderMarkets(applyFilter(getActiveFilter()), lang);
  renderTrades(lang);
  setLastUpdate(lang);
}

function initLang(){
  const saved = localStorage.getItem(LANG_KEY);
  const lang = saved || "uk";
  const sel = $("#langSelect");
  if (sel) sel.value = lang;
  applyI18n(lang);
}

function getLang(){
  return localStorage.getItem(LANG_KEY) || "uk";
}

/* ---------------- FORMATTERS ---------------- */
function fmtMoney(n){
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);
}
function fmtVol(n){
  if (n >= 1_000_000_000) return (n/1_000_000_000).toFixed(2) + "B";
  if (n >= 1_000_000) return (n/1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return (n/1_000).toFixed(2) + "K";
  return String(n);
}

/* ---------------- RENDER ---------------- */
function renderMarkets(list, lang = getLang()){
  const el = $("#marketsTable");
  el.innerHTML = "";

  for (const m of list){
    const row = document.createElement("div");
    row.className = "table__row";

    const changeClass = m.change >= 0 ? "trend--up" : "trend--down";
    const changeSymbol = m.change >= 0 ? "▲" : "▼";

    row.innerHTML = `
      <div class="pair">
        <div class="pair__icon"></div>
        <div>
          <div><b>${m.pair}</b></div>
          <div class="muted" style="font-size:12px;">${t(lang, "spot")}</div>
        </div>
      </div>
      <div>$${fmtMoney(m.price)}</div>
      <div class="trend ${changeClass}">${changeSymbol} ${Math.abs(m.change).toFixed(2)}%</div>
      <div class="ta-r">$${fmtVol(m.volume)}</div>
    `;
    el.appendChild(row);
  }
}

function renderTrades(lang = getLang()){
  const el = $("#tradesTable");
  el.innerHTML = "";
  for (const tr of trades){
    const row = document.createElement("div");
    row.className = "table__row";

    const sideClass = tr.side === "buy" ? "trend--up" : "trend--down";
    row.innerHTML = `
      <div>${tr.time}</div>
      <div><b>${tr.pair}</b></div>
      <div class="trend ${sideClass}">${t(lang, tr.side === "buy" ? "side.buy" : "side.sell")}</div>
      <div class="ta-r">$${fmtMoney(tr.price)}</div>
      <div class="ta-r">${tr.qty}</div>
    `;
    el.appendChild(row);
  }
}

function setLastUpdate(lang = getLang()){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const el = $("#lastUpdate");
  if (el) el.textContent = `${hh}:${mm}:${ss}`;
}

/* ---------------- DATA UPDATES ---------------- */
function nudgePrices(){
  for (const m of markets){
    const drift = (Math.random() - 0.5) * 0.6; // +/-0.30%
    m.change = Math.max(-9.99, Math.min(9.99, m.change + drift));

    const priceDrift = 1 + (drift / 100);
    m.price = m.price * priceDrift;

    m.volume = Math.max(0, Math.floor(m.volume * (1 + (Math.random() - 0.5) * 0.02)));
  }
}

function applyFilter(mode){
  if (mode === "gainers") return markets.filter(m => m.change >= 0);
  if (mode === "losers") return markets.filter(m => m.change < 0);
  return markets;
}

function getActiveFilter(){
  return document.querySelector(".segmented__btn.is-active")?.dataset.filter || "all";
}

/* ---------------- UI EVENTS ---------------- */
function bindEvents(){
  const btnRefresh = $("#btnRefresh");
  if (btnRefresh){
    btnRefresh.addEventListener("click", () => {
      nudgePrices();
      renderMarkets(applyFilter(getActiveFilter()), getLang());
      setLastUpdate(getLang());
    });
  }

  const btnAddTrade = $("#btnAddTrade");
  if (btnAddTrade){
    btnAddTrade.addEventListener("click", () => {
      const pairs = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "XRP/USDT"];
      const side = Math.random() > 0.5 ? "buy" : "sell";
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const price = 10 + Math.random() * 70000;
      const qty = +(Math.random() * 2).toFixed(3);

      const now = new Date();
      const time = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`;

      trades.unshift({ time, pair, side, price, qty });
      trades.splice(10);
      renderTrades(getLang());
      setLastUpdate(getLang());
    });
  }

  $$(".segmented__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".segmented__btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderMarkets(applyFilter(btn.dataset.filter), getLang());
    });
  });

  $$(".nav__item").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".nav__item").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  const langSelect = $("#langSelect");
  if (langSelect){
    langSelect.addEventListener("change", () => setLang(langSelect.value));
  }

  const themeSelect = $("#themeSelect");
  if (themeSelect){
    themeSelect.addEventListener("change", () => setTheme(themeSelect.value));
  }
}

/* ---------------- INIT ---------------- */
function init(){
  initTheme();
  initLang();
  bindEvents();

  renderMarkets(markets, getLang());
  renderTrades(getLang());
  setLastUpdate(getLang());
}

init();
