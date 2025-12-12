const THEME_KEY = "ex.theme";
const LANG_KEY = "ex.lang";

const I18N = {
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

    "meta.24h": "last 24h",
    "meta.week": "this week",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Last update:",

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

    "note.tip": "Tip: click Refresh to see prices move in the table.",

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

    "meta.24h": "за 24 ч",
    "meta.week": "за неделю",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Последнее обновление:",

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

    "note.tip": "Совет: нажми Обновить, чтобы увидеть “движение” цен в таблице.",

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

    "meta.24h": "últimas 24h",
    "meta.week": "esta semana",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Última actualización:",

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

    "meta.24h": "dernières 24h",
    "meta.week": "cette semaine",
    "meta.profit": "Profit",
    "meta.active": "Active",
    "meta.updated": "Dernière mise à jour :",

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

    "note.tip": "Astuce : clique sur Actualiser pour voir les prix bouger.",

    "side.buy": "Buy",
    "side.sell": "Sell",
  },
};

const LANG_NAME = { en: "English", ru: "Русский", es: "Español", fr: "Français" };

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

function t(lang, key) {
  return I18N[lang]?.[key] ?? I18N.en[key] ?? key;
}

function getLang() { return localStorage.getItem(LANG_KEY) || "en"; }
function getTheme() { return localStorage.getItem(THEME_KEY) || "light"; }

function setLastUpdate() {
  const d = new Date();
  $("#lastUpdate").textContent =
    `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
}

function fmtMoney(n) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);
}

function fmtVol(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2) + "B";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(2) + "K";
  return String(n);
}

function renderMarkets(list) {
  const el = $("#marketsTable");
  el.innerHTML = "";
  for (const m of list) {
    const row = document.createElement("div");
    row.className = "table__row";

    const up = m.change >= 0;
    row.innerHTML = `
      <div class="pair">
        <div class="pair__icon"></div>
        <div style="min-width:0">
          <div style="font-weight:900; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.pair}</div>
          <div class="muted" style="font-size:12px;">Spot</div>
        </div>
      </div>
      <div>$${fmtMoney(m.price)}</div>
      <div class="trend ${up ? "trend--up" : "trend--down"}">${up ? "▲" : "▼"} ${Math.abs(m.change).toFixed(2)}%</div>
      <div class="ta-r">$${fmtVol(m.volume)}</div>
    `;
    el.appendChild(row);
  }
}

function renderTrades(lang = getLang()) {
  const el = $("#tradesTable");
  el.innerHTML = "";
  for (const tr of trades) {
    const row = document.createElement("div");
    row.className = "table__row";
    const buy = tr.side === "buy";
    row.innerHTML = `
      <div>${tr.time}</div>
      <div style="font-weight:900">${tr.pair}</div>
      <div class="trend ${buy ? "trend--up" : "trend--down"}">${t(lang, buy ? "side.buy" : "side.sell")}</div>
      <div class="ta-r">$${fmtMoney(tr.price)}</div>
      <div class="ta-r">${tr.qty}</div>
    `;
    el.appendChild(row);
  }
}

function nudgePrices() {
  for (const m of markets) {
    const drift = (Math.random() - 0.5) * 0.6;
    m.change = Math.max(-9.99, Math.min(9.99, m.change + drift));
    m.price = m.price * (1 + drift / 100);
    m.volume = Math.max(0, Math.floor(m.volume * (1 + (Math.random() - 0.5) * 0.02)));
  }
}

function applyFilter(mode) {
  if (mode === "gainers") return markets.filter(m => m.change >= 0);
  if (mode === "losers") return markets.filter(m => m.change < 0);
  return markets;
}

function getActiveFilter() {
  return document.querySelector(".segmented__btn.is-active")?.dataset.filter || "all";
}

/* Dropdowns */
function closeDropdowns() {
  $$(".dropdown.is-open").forEach(d => {
    d.classList.remove("is-open");
    const btn = d.querySelector(".dropdown__btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
}

function toggleDropdown(dropEl) {
  const isOpen = dropEl.classList.contains("is-open");
  closeDropdowns();
  if (!isOpen) {
    dropEl.classList.add("is-open");
    const btn = dropEl.querySelector(".dropdown__btn");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }
}

function markActive(menuEl, value) {
  menuEl.querySelectorAll(".dropdown__item").forEach(item => {
    item.classList.toggle("is-active", item.dataset.value === value);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  $("#themeValue").textContent = t(getLang(), theme === "dark" ? "ui.themeDark" : "ui.themeLight");
  markActive($("#themeMenu"), theme);
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(lang, el.dataset.i18n);
  });

  $("#langValue").textContent = LANG_NAME[lang] || "English";
  $("#themeValue").textContent = t(lang, getTheme() === "dark" ? "ui.themeDark" : "ui.themeLight");
  markActive($("#langMenu"), lang);

  renderMarkets(applyFilter(getActiveFilter()));
  renderTrades(lang);
}

function bindEvents() {
  // nav active
  $$(".nav__item").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".nav__item").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  // segmented
  $$(".segmented__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".segmented__btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderMarkets(applyFilter(btn.dataset.filter));
    });
  });

  // refresh
  $("#btnRefresh").addEventListener("click", () => {
    nudgePrices();
    renderMarkets(applyFilter(getActiveFilter()));
    setLastUpdate();
  });

  // add trade
  $("#btnAddTrade").addEventListener("click", () => {
    const pairs = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "XRP/USDT"];
    const side = Math.random() > 0.5 ? "buy" : "sell";
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    const price = 10 + Math.random() * 70000;
    const qty = +(Math.random() * 2).toFixed(3);

    const d = new Date();
    const time = `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;

    trades.unshift({ time, pair, side, price, qty });
    trades.splice(10);
    renderTrades(getLang());
    setLastUpdate();
  });

  // dropdown buttons
  $("#langBtn").addEventListener("click", (e) => { e.stopPropagation(); toggleDropdown($("#langDrop")); });
  $("#themeBtn").addEventListener("click", (e) => { e.stopPropagation(); toggleDropdown($("#themeDrop")); });

  // dropdown selections
  $("#langMenu").addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown__item");
    if (!item) return;
    applyLang(item.dataset.value);
    closeDropdowns();
  });

  $("#themeMenu").addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown__item");
    if (!item) return;
    applyTheme(item.dataset.value);
    closeDropdowns();
  });

  document.addEventListener("click", closeDropdowns);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDropdowns(); });
}

function init() {
  bindEvents();

  applyTheme(getTheme());
  applyLang(getLang());

  renderMarkets(markets);
  renderTrades(getLang());
  setLastUpdate();
}

init();
