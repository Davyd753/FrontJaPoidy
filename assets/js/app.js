const markets = [
  { pair: "BTC/USDT", price: 67120.45, change: 1.42, volume: 532_120_000 },
  { pair: "ETH/USDT", price: 3540.12,  change: -0.88, volume: 211_540_000 },
  { pair: "SOL/USDT", price: 188.67,   change: 2.31, volume: 98_120_000 },
  { pair: "XRP/USDT", price: 0.6124,   change: -1.12, volume: 64_210_000 },
  { pair: "ADA/USDT", price: 0.4851,   change: 0.37, volume: 41_900_000 },
];

const trades = [
  { time: "20:41:05", pair: "BTC/USDT", side: "Buy",  price: 67090.10, qty: 0.012 },
  { time: "20:40:22", pair: "ETH/USDT", side: "Sell", price: 3542.55,  qty: 0.44 },
  { time: "20:39:50", pair: "SOL/USDT", side: "Buy",  price: 188.12,   qty: 12.5 },
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function fmtMoney(n){
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);
}
function fmtVol(n){
  if (n >= 1_000_000_000) return (n/1_000_000_000).toFixed(2) + "B";
  if (n >= 1_000_000) return (n/1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return (n/1_000).toFixed(2) + "K";
  return String(n);
}

function renderMarkets(list){
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
          <div class="muted" style="font-size:12px;">Spot</div>
        </div>
      </div>
      <div>$${fmtMoney(m.price)}</div>
      <div class="trend ${changeClass}">${changeSymbol} ${Math.abs(m.change).toFixed(2)}%</div>
      <div class="ta-r">$${fmtVol(m.volume)}</div>
    `;
    el.appendChild(row);
  }
}

function renderTrades(){
  const el = $("#tradesTable");
  el.innerHTML = "";
  for (const t of trades){
    const row = document.createElement("div");
    row.className = "table__row";

    const sideClass = t.side === "Buy" ? "trend--up" : "trend--down";
    row.innerHTML = `
      <div>${t.time}</div>
      <div><b>${t.pair}</b></div>
      <div class="trend ${sideClass}">${t.side}</div>
      <div class="ta-r">$${fmtMoney(t.price)}</div>
      <div class="ta-r">${t.qty}</div>
    `;
    el.appendChild(row);
  }
}

function setLastUpdate(){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  $("#lastUpdate").textContent = `${hh}:${mm}:${ss}`;
}

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

/* UI events */
$("#btnRefresh").addEventListener("click", () => {
  nudgePrices();
  const active = document.querySelector(".segmented__btn.is-active")?.dataset.filter || "all";
  renderMarkets(applyFilter(active));
  setLastUpdate();
});

$("#btnAddTrade").addEventListener("click", () => {
  const pairs = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "XRP/USDT"];
  const side = Math.random() > 0.5 ? "Buy" : "Sell";
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const price = 10 + Math.random() * 70000;
  const qty = +(Math.random() * 2).toFixed(3);

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`;

  trades.unshift({ time, pair, side, price, qty });
  trades.splice(10);
  renderTrades();
  setLastUpdate();
});

$$(".segmented__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".segmented__btn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderMarkets(applyFilter(btn.dataset.filter));
  });
});

$$(".nav__item").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".nav__item").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    // Тут можна додати показ/приховування різних “views” (overview/markets/...)
  });
});

/* Init */
renderMarkets(markets);
renderTrades();
setLastUpdate();
