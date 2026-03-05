const CART_KEY = "aurumCart";
const REVIEWS_KEY = "aurumReviews";
const ORDERS_KEY = "aurumOrders";
const THEME_KEY = "aurumTheme";
const SETTINGS_PREFS_KEY = "aurumSettings";
const DEFAULT_SIZE_ML = 50;
const SIZE_OPTIONS_ML = [30, 50, 100];
const MAX_HIGHEST_SIZE_PRICE = 109;
const RANDOM_BASE_MIN_PRICE = 34;
const RANDOM_BASE_MAX_PRICE = 62;

// Product catalogs for Men and Women pages (50 each).
const MEN_PRODUCTS = [
  { id: "m01", name: "Issey Miyake - L'Eau D'Issey Pour Homme I G O", price: 105, image: "Perfumes/m01.jpg" },
  { id: "m02", name: "Lalique - Lalique Pour Homme Athletes 2009", price: 110, image: "Perfumes/m02.jpg" },
  { id: "m03", name: "Guerlain - Habit Rouge Sport", price: 118, image: "Perfumes/m03.jpg" },
  { id: "m04", name: "Azzaro - Chrome Under The Pole 2018", price: 125, image: "Perfumes/m04.jpg" },
  { id: "m05", name: "Bulgari - Malakeos", price: 132, image: "Perfumes/m05.jpg" },
  { id: "m06", name: "Dolce & Gabbana - K By Dolce & Gabbana Eau De Toilette", price: 114, image: "Perfumes/m06.jpg" },
  { id: "m07", name: "Givenchy - Givenchy Pour Homme Blue Label", price: 121, image: "Perfumes/m07.jpg" },
  { id: "m08", name: "Calvin Klein - Ck Free For Men", price: 138, image: "Perfumes/m08.jpg" },
  { id: "m09", name: "Jimmy Choo - Jimmy Choo Man Ice", price: 109, image: "Perfumes/m09.jpg" },
  { id: "m10", name: "Giorgio Armani - Armani Eau De Nuit Oud", price: 127, image: "Perfumes/m10.jpg" },
  { id: "m11", name: "Davidoff - Cool Water", price: 119, image: "Perfumes/m11.jpg" },
  { id: "m12", name: "Calvin Klein - Eternity For Men Eau De Parfum", price: 136, image: "Perfumes/m12.jpg" },
  { id: "m13", name: "Acqua Di Parma - Acqua Di Parma Colonia Futura", price: 112, image: "Perfumes/m13.jpg" },
  { id: "m14", name: "Guerlain - Guerlain Homme L'Eau Boisée", price: 124, image: "Perfumes/m14.jpg" },
  { id: "m15", name: "Carolina Herrera - Bad Boy Cobalt", price: 141, image: "Perfumes/m15.jpg" },
  { id: "m16", name: "Azzaro - Travelling 2009", price: 116, image: "Perfumes/m16.jpg" },
  { id: "m17", name: "Creed - Erolfa", price: 129, image: "Perfumes/m17.jpg" },
  { id: "m18", name: "Giorgio Armani - Armani Mania Pour Homme", price: 134, image: "Perfumes/m18.jpg" },
  { id: "m19", name: "Davidoff - Cool Water Game", price: 123, image: "Perfumes/m19.jpg" },
  { id: "m20", name: "Creed - Sélection Verte", price: 108, image: "Perfumes/m20.jpg" },
  { id: "m21", name: "Azzaro - Twin Men", price: 126, image: "Perfumes/m21.jpg" },
  { id: "m22", name: "Dolce & Gabbana - Dolce & Gabbana Pour Homme", price: 133, image: "Perfumes/m22.jpg" },
  { id: "m23", name: "Lalique - Lalique White In Black", price: 139, image: "Perfumes/m23.jpg" },
  { id: "m24", name: "Issey Miyake - Nuit D'Issey Noir Argent 2018", price: 115, image: "Perfumes/m24.jpg" },
  { id: "m25", name: "Bulgari - Tygar", price: 128, image: "Perfumes/m25.jpg" },
  { id: "m26", name: "Azzaro - Onyx", price: 122, image: "Perfumes/m26.jpg" },
  { id: "m27", name: "Bulgari - Empyr", price: 130, image: "Perfumes/m27.jpg" },
  { id: "m28", name: "Creed - Aventus 10Th Anniversary Edition 2020", price: 111, image: "Perfumes/m28.jpg" },
  { id: "m29", name: "Valentino - Valentino Uomo Born In Roma Rockstud Noir 2023", price: 117, image: "Perfumes/m29.jpg" },
  { id: "m30", name: "Giorgio Armani - Armani Code Sport", price: 135, image: "Perfumes/m30.jpg" },
  { id: "m31", name: "Mugler - A*Men Ultimate 2020", price: 143, image: "Perfumes/m31.jpg" },
  { id: "m32", name: "Emporio Armani - Diamonds For Men", price: 120, image: "Perfumes/m32.jpg" },
  { id: "m33", name: "Creed - Acier Aluminium", price: 137, image: "Perfumes/m33.jpg" },
  { id: "m34", name: "Guerlain - L'Homme Idéal Parfum", price: 126, image: "Perfumes/m34.jpg" },
  { id: "m35", name: "Burberry - The Beat For Men", price: 113, image: "Perfumes/m35.jpg" },
  { id: "m36", name: "Dior - Fahrenheit Cologne", price: 131, image: "Perfumes/m36.jpg" },
  { id: "m37", name: "Bulgari - Yasep", price: 124, image: "Perfumes/m37.jpg" },
  { id: "m38", name: "Lalique - L'Insoumis", price: 118, image: "Perfumes/m38.jpg" },
  { id: "m39", name: "Givenchy - Gentlemen Only Casual Chic", price: 134, image: "Perfumes/m39.jpg" },
  { id: "m40", name: "Jean Paul Gaultier - Le Male Aviator 2019", price: 121, image: "Perfumes/m40.jpg" },
  { id: "m41", name: "Viktor & Rolf - Spicebomb", price: 140, image: "Perfumes/m41.jpg" },
  { id: "m42", name: "Issey Miyake - L'Eau D'Issey Pour Homme Solar Lavender", price: 127, image: "Perfumes/m42.jpg" },
  { id: "m43", name: "Giorgio Armani - Armani Code 'For Men'", price: 136, image: "Perfumes/m43.jpg" },
  { id: "m44", name: "Davidoff - Horizon", price: 116, image: "Perfumes/m44.jpg" },
  { id: "m45", name: "Jean Paul Gaultier - Le Beau Male", price: 129, image: "Perfumes/m45.jpg" },
  { id: "m46", name: "Hugo Boss - Magnetic Musk", price: 112, image: "Perfumes/m46.jpg" },
  { id: "m47", name: "Burberry - Mr. Burberry Eau De Toilette", price: 125, image: "Perfumes/m47.jpg" },
  { id: "m48", name: "Prada - L'Homme Water Splash", price: 132, image: "Perfumes/m48.jpg" },
  { id: "m49", name: "Issey Miyake - L'Eau D'Issey Pour Homme Au Fil De L'Eau 2022", price: 123, image: "Perfumes/m49.jpg" },
  { id: "m50", name: "Issey Miyake - Nuit D'Issey Bleu Astral 2017", price: 138, image: "Perfumes/m50.jpg" },
];

const WOMEN_PRODUCTS = [
  { id: "w01", name: "Issey Miyake - L'Eau D'Issey Shade Of Sunrise 2019", price: 102, image: "Perfumes/w01.jpg" },
  { id: "w02", name: "Guerlain - Mandarine Basilic Harvest 2023", price: 109, image: "Perfumes/w02.jpg" },
  { id: "w03", name: "Valentino - Valentino Donna Noir Absolu", price: 118, image: "Perfumes/w03.jpg" },
  { id: "w04", name: "Acqua Di Parma - Acqua Nobile Magnolia", price: 124, image: "Perfumes/w04.jpg" },
  { id: "w05", name: "Lancôme - Rose Peonia", price: 116, image: "Perfumes/w05.jpg" },
  { id: "w06", name: "Dior - Hypnotic Poison Eau De Toilette", price: 127, image: "Perfumes/w06.jpg" },
  { id: "w07", name: "Marc Jacobs - Daisy Love Skies 2022", price: 131, image: "Perfumes/w07.jpg" },
  { id: "w08", name: "Hugo Boss - Boss The Scent For Her Absolute", price: 115, image: "Perfumes/w08.jpg" },
  { id: "w09", name: "Marc Jacobs - Daisy Twinkle 2018", price: 136, image: "Perfumes/w09.jpg" },
  { id: "w10", name: "Valentino - Voce Viva", price: 121, image: "Perfumes/w10.jpg" },
  { id: "w11", name: "Guerlain - Bergamote Calabria", price: 113, image: "Perfumes/w11.jpg" },
  { id: "w12", name: "Yves Saint Laurent - Opium Eau De Toilette (1977)", price: 119, image: "Perfumes/w12.jpg" },
  { id: "w13", name: "Bulgari - Baciami", price: 128, image: "Perfumes/w13.jpg" },
  { id: "w14", name: "Hugo Boss - Boss The Scent For Her Le Parfum", price: 133, image: "Perfumes/w14.jpg" },
  { id: "w15", name: "Versace - Crystal Noir Eau De Toilette", price: 108, image: "Perfumes/w15.jpg" },
  { id: "w16", name: "Guerlain - Sous Le Vent", price: 117, image: "Perfumes/w16.jpg" },
  { id: "w17", name: "Guerlain - Floral Romantique", price: 126, image: "Perfumes/w17.jpg" },
  { id: "w18", name: "Agatha Ruiz De La Prada - Wow Girl! Cosmic 2020", price: 111, image: "Perfumes/w18.jpg" },
  { id: "w19", name: "Yves Saint Laurent - Mon Paris Dress Me Wild 2020", price: 123, image: "Perfumes/w19.jpg" },
  { id: "w20", name: "Dior - Poison Girl Unexpected Roller Pearl", price: 129, image: "Perfumes/w20.jpg" },
  { id: "w21", name: "Prada - Tubereuse Nº 6", price: 114, image: "Perfumes/w21.jpg" },
  { id: "w22", name: "Giorgio Armani - Sì Passione Limited Edition 2022", price: 122, image: "Perfumes/w22.jpg" },
  { id: "w23", name: "Guerlain - Shalimar Souffle Intense", price: 135, image: "Perfumes/w23.jpg" },
  { id: "w24", name: "Lancôme - Ô De L'Orangerie", price: 120, image: "Perfumes/w24.jpg" },
  { id: "w25", name: "Guerlain - Aroma Allegoria Vitalisant", price: 132, image: "Perfumes/w25.jpg" },
  { id: "w26", name: "Guerlain - Lys Soleia", price: 137, image: "Perfumes/w26.jpg" },
  { id: "w27", name: "Chanel - Coco Noir", price: 118, image: "Perfumes/w27.jpg" },
  { id: "w28", name: "Guerlain - Shalimar Parfum Initial L'Eau", price: 124, image: "Perfumes/w28.jpg" },
  { id: "w29", name: "Calvin Klein - Beauty", price: 112, image: "Perfumes/w29.jpg" },
  { id: "w30", name: "Guerlain - Shalimar Eau De Toilette", price: 127, image: "Perfumes/w30.jpg" },
  { id: "w31", name: "Guerlain - Promenade Des Anglais", price: 130, image: "Perfumes/w31.jpg" },
  { id: "w32", name: "Guerlain - Rosa Rossa Harvest 2023", price: 116, image: "Perfumes/w32.jpg" },
  { id: "w33", name: "Dior - Diorella", price: 121, image: "Perfumes/w33.jpg" },
  { id: "w34", name: "Guerlain - Fall Flowers Porcelain Edition 2017", price: 139, image: "Perfumes/w34.jpg" },
  { id: "w35", name: "Cartier - La Panthère Noir Absolu", price: 125, image: "Perfumes/w35.jpg" },
  { id: "w36", name: "Burberry - Burberry Her Elixir De Parfum", price: 133, image: "Perfumes/w36.jpg" },
  { id: "w37", name: "Givenchy - Absolutely Irrésistible Givenchy", price: 109, image: "Perfumes/w37.jpg" },
  { id: "w38", name: "Guerlain - Cherry Blossom", price: 115, image: "Perfumes/w38.jpg" },
  { id: "w39", name: "Chanel - Nº 5 Eau De Toilete", price: 123, image: "Perfumes/w39.jpg" },
  { id: "w40", name: "Jean Paul Gaultier - Ma Dame", price: 136, image: "Perfumes/w40.jpg" },
  { id: "w41", name: "Guerlain - Flora Salvaggia", price: 118, image: "Perfumes/w41.jpg" },
  { id: "w42", name: "Lancôme - Hypnôse Eau De Toilette", price: 126, image: "Perfumes/w42.jpg" },
  { id: "w43", name: "Givenchy - Hello Kitty", price: 131, image: "Perfumes/w43.jpg" },
  { id: "w44", name: "Carolina Herrera - Lucky Charm", price: 113, image: "Perfumes/w44.jpg" },
  { id: "w45", name: "Carolina Herrera - Me First", price: 128, image: "Perfumes/w45.jpg" },
  { id: "w46", name: "Prada - Candy Gloss", price: 110, image: "Perfumes/w46.jpg" },
  { id: "w47", name: "Gucci - Gucci Rush 2", price: 134, image: "Perfumes/w47.jpg" },
  { id: "w48", name: "Prada - Paradoxe", price: 119, image: "Perfumes/w48.jpg" },
  { id: "w49", name: "Guerlain - L'Heure Bleue Eau De Toilette", price: 122, image: "Perfumes/w49.jpg" },
  { id: "w50", name: "Mugler - Angel Nova Eau De Toilette", price: 137, image: "Perfumes/w50.jpg" },
];

const ALL_PRODUCTS = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS];
const BEST_SELLER_IDS = ["m03", "m08", "m15", "m23", "m31", "m41", "w04", "w09", "w14", "w23", "w34", "w47"];
const DEFAULT_REVIEWS = [
  { name: "فاطمة أحمد", rating: 5, text: "التغليف راقٍ والرائحة ثابتة طوال اليوم." },
  { name: "محمد علي", rating: 4, text: "الجودة ممتازة وتجربة الطلب كانت سهلة جدًا." },
  { name: "نورة حسن", rating: 5, text: "كل مرة ألبسه يجيني مدح على الرائحة." }
];
const DEFAULT_SETTINGS = {
  notifications: true,
  deliveryArea: "Manama"
};

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 2147483647;
  }
  return hash;
}

function seededRandomFromText(text) {
  const hash = hashString(text);
  return (hash % 10000) / 10000;
}

function getRandomBasePrice(product) {
  const maxBaseAllowed = MAX_HIGHEST_SIZE_PRICE / getSizeMultiplier(100);
  const upperBound = Math.min(RANDOM_BASE_MAX_PRICE, maxBaseAllowed);
  const lowerBound = Math.min(RANDOM_BASE_MIN_PRICE, upperBound);
  const ratio = seededRandomFromText(`${product.id}-${product.name}`);
  return Number((lowerBound + (upperBound - lowerBound) * ratio).toFixed(2));
}

function applyRandomizedBasePrices() {
  ALL_PRODUCTS.forEach((product) => {
    product.price = getRandomBasePrice(product);
  });
}

applyRandomizedBasePrices();

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  setYear();
  highlightActiveNav();
  updateCartBadge();
  initSearch();
  initPage();

  document.body.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-to-cart");
    if (addButton) {
      const product = findProductById(addButton.dataset.productId);
      const selectedSize = getSelectedSizeFromButton(addButton);
      if (product) addToCart(product, selectedSize);
    }

    const qtyButton = event.target.closest(".qty-btn");
    if (qtyButton) {
      const itemId = qtyButton.dataset.qtyId;
      const change = Number(qtyButton.dataset.change);
      if (itemId && Number.isFinite(change)) {
        updateCartItemQuantity(itemId, change);
        renderCart();
      }
    }

    const removeButton = event.target.closest(".remove-btn");
    if (removeButton) {
      removeCartItem(removeButton.dataset.removeId);
      renderCart();
    }
  });
});

function initPage() {
  const page = document.body.dataset.page;

  if (page === "home") {
    const featured = BEST_SELLER_IDS.map((id) => findProductById(id)).filter(Boolean);
    renderProducts("home-featured", featured);
    initHomeFeaturedSlider();
  }
  if (page === "men") renderProducts("men-products", MEN_PRODUCTS);
  if (page === "women") renderProducts("women-products", WOMEN_PRODUCTS);

  if (page === "best-sellers") {
    const bestSellers = BEST_SELLER_IDS.map((id) => findProductById(id)).filter(Boolean);
    renderProducts("best-seller-products", bestSellers);
  }

  if (page === "reviews") initReviews();
  if (page === "contact") initContactForm();
  if (page === "cart") {
    renderCart();
    initCheckout();
  }
  if (page === "orders") initOrders();
  if (page === "settings") initSettings();
  if (page === "perfume-detail") initPerfumeDetail();

  applySearchFromURL();
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function highlightActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.classList.add("active");
  });
}

function formatCurrency(amount) {
  return `BHD ${Number(amount).toFixed(2)}`;
}

function getSizeMultiplier(sizeMl) {
  if (sizeMl === 30) return 0.72;
  if (sizeMl === 100) return 1.75;
  return 1;
}

function getPriceForSize(basePrice, sizeMl) {
  const normalizedBase = Number(basePrice);
  const multiplier = getSizeMultiplier(Number(sizeMl));
  const highestMultiplier = getSizeMultiplier(100);
  const maxBaseAllowed = MAX_HIGHEST_SIZE_PRICE / highestMultiplier;
  const adjustedBase = Math.min(normalizedBase, maxBaseAllowed);

  return adjustedBase * multiplier;
}

function buildSizeOptions(selectedSize = DEFAULT_SIZE_ML) {
  return SIZE_OPTIONS_ML.map((size) => `<option value="${size}" ${size === selectedSize ? "selected" : ""}>${size} ml</option>`).join("");
}

function formatOrderDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "Unknown date";
  return date.toLocaleString();
}

// Shared product renderer used by home, category, and best-seller pages.
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products
    .map(
      (product) => `
        <article class="product-card" data-name="${escapeHTML(product.name.toLowerCase())}">
          <a class="product-link" href="perfume.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${escapeHTML(product.name)}">
            <img src="${product.image}" alt="${escapeHTML(product.name)}" />
          </a>
          <div class="product-body">
            <h3 class="product-title">
              <a class="product-title-link" href="perfume.html?id=${encodeURIComponent(product.id)}">${escapeHTML(product.name)}</a>
            </h3>
            <label class="size-label" for="size-${product.id}">Size</label>
            <select id="size-${product.id}" class="size-select" aria-label="Select size for ${escapeHTML(product.name)}">
              ${buildSizeOptions()}
            </select>
            <div class="price" data-base-price="${product.price}">${formatCurrency(getPriceForSize(product.price, DEFAULT_SIZE_ML))}</div>
            <div class="product-actions">
              <a class="btn ghost" href="perfume.html?id=${encodeURIComponent(product.id)}">Details</a>
              <button class="btn primary add-to-cart" data-product-id="${product.id}" aria-label="Add to cart">
                <i class="bi bi-cart-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function initHomeFeaturedSlider() {
  const track = document.getElementById("home-featured");
  const prevButton = document.getElementById("home-featured-prev");
  const nextButton = document.getElementById("home-featured-next");
  if (!track || !prevButton || !nextButton) return;

  const getStep = () => {
    const firstCard = track.querySelector(".product-card");
    if (!firstCard) return 260;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    prevButton.disabled = track.scrollLeft <= 1;
    nextButton.disabled = track.scrollLeft >= maxScroll - 1;
  };

  prevButton.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  window.requestAnimationFrame(updateButtons);
}

function initSearch() {
  const form = document.getElementById("search-form");
  const input = document.getElementById("site-search");
  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    const hasGrid = !!document.querySelector("[data-product-grid]");
    const page = document.body.dataset.page;
    const searchablePages = ["men", "women", "best-sellers"];

    if (hasGrid && searchablePages.includes(page)) {
      applyProductFilter(query);
      return;
    }

    window.location.href = `best-sellers.html?search=${encodeURIComponent(query)}`;
  });
}

function applySearchFromURL() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search");
  if (!query) return;

  const input = document.getElementById("site-search");
  if (input) input.value = query;
  applyProductFilter(query);
}

function applyProductFilter(query) {
  const normalized = query.toLowerCase();
  const cards = document.querySelectorAll(".product-card");
  let matches = 0;

  cards.forEach((card) => {
    const name = card.dataset.name || "";
    const show = name.includes(normalized);
    card.classList.toggle("hidden", !show);
    if (show) matches += 1;
  });

  const resultText = document.getElementById("search-result-text");
  if (resultText) {
    resultText.textContent = matches > 0 ? `${matches} perfume(s) found for "${query}".` : `No perfumes found for "${query}".`;
  }
}

function findProductById(id) {
  return ALL_PRODUCTS.find((product) => product.id === id);
}

function getSelectedSizeFromButton(addButton) {
  const scope = addButton.closest(".product-card, .perfume-detail");
  if (!scope) return DEFAULT_SIZE_ML;

  const select = scope.querySelector(".size-select");
  const size = select ? Number(select.value) : DEFAULT_SIZE_ML;
  return Number.isFinite(size) ? size : DEFAULT_SIZE_ML;
}

function refreshPriceFromSizeSelect(selectEl) {
  const scope = selectEl.closest(".product-card, .perfume-detail");
  if (!scope) return;

  const priceEl = scope.querySelector(".price[data-base-price]");
  if (!priceEl) return;

  const basePrice = Number(priceEl.dataset.basePrice);
  if (!Number.isFinite(basePrice)) return;

  priceEl.textContent = formatCurrency(getPriceForSize(basePrice, Number(selectEl.value)));
}

function getPerfumeNotesById(id) {
  const product = findProductById(id);
  const meta = getPerfumeMetaById(id);
  const notes = window.PERFUME_NOTES_DATA?.notesById?.[id] || [];

  if (meta?.source === "Parfumo" && notes.length >= 3) return notes;
  return buildFallbackNotes(product);
}

function getPerfumeMetaById(id) {
  if (!window.PERFUME_NOTES_DATA || !window.PERFUME_NOTES_DATA.metaById) return null;
  return window.PERFUME_NOTES_DATA.metaById[id] || null;
}

function buildFallbackNotes(product) {
  if (!product) return [];

  const name = product.name.toLowerCase();
  const base = product.id.startsWith("m")
    ? ["Bergamot", "Lavender", "Cardamom", "Cedarwood", "Amber", "Musk"]
    : ["Bergamot", "Rose", "Jasmine", "Vanilla", "Sandalwood", "Musk"];
  const extra = [];

  if (/(oud|noir|nuit|black|poison)/.test(name)) extra.push("Patchouli", "Incense", "Saffron");
  if (/(sport|blue|ice|water|acqua|l'eau|fresh|cologne)/.test(name)) extra.push("Grapefruit", "Marine Notes", "Vetiver");
  if (/(rose|floral|blossom|jasmine|magnolia|donna)/.test(name)) extra.push("Orange Blossom", "Peony");
  if (/(vanilla|candy|angel|sweet|paradoxe)/.test(name)) extra.push("Tonka Bean", "Praline");
  if (/(spice|spicebomb|opium|rush)/.test(name)) extra.push("Pink Pepper", "Cinnamon");
  if (/(cherry|berry|peach|pear|apple|fig)/.test(name)) extra.push("Black Currant", "Fruity Notes");

  const merged = [...base, ...extra];
  return [...new Set(merged)].slice(0, 9);
}

// LocalStorage-backed cart.
function getCart() {
  return safeReadJSON(CART_KEY, []);
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getOrders() {
  return safeReadJSON(ORDERS_KEY, []);
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function addToCart(product, sizeMl = DEFAULT_SIZE_ML) {
  const cart = getCart();
  const normalizedSize = Number.isFinite(Number(sizeMl)) ? Number(sizeMl) : DEFAULT_SIZE_ML;
  const itemPrice = getPriceForSize(product.price, normalizedSize);
  const existing = cart.find((item) => item.id === product.id && Number(item.sizeMl || DEFAULT_SIZE_ML) === normalizedSize);

  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: itemPrice, image: product.image, sizeMl: normalizedSize, qty: 1 });

  saveCart(cart);
  updateCartBadge();
  showMessage(`${product.name} (${normalizedSize} ml) added to cart.`);
}

function removeCartItem(id) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  updateCartBadge();
}

function updateCartItemQuantity(id, change) {
  const cart = getCart();
  const item = cart.find((cartItem) => cartItem.id === id);
  if (!item) return;

  item.qty = Math.max(1, item.qty + change);
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const totalItems = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-count").forEach((badge) => {
    badge.textContent = totalItems;
  });
}

function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const emptyState = document.getElementById("cart-empty");
  const totalEl = document.getElementById("cart-total");
  if (!itemsContainer || !emptyState || !totalEl) return;

  const cart = getCart();
  if (!cart.length) {
    itemsContainer.innerHTML = "";
    emptyState.style.display = "block";
    totalEl.textContent = `Total: ${formatCurrency(0)}`;
    return;
  }

  emptyState.style.display = "none";
  itemsContainer.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-row">
          <img src="${item.image}" alt="${escapeHTML(item.name)}" />
          <div>
            <h3 class="product-title">${escapeHTML(item.name)} (${Number(item.sizeMl || DEFAULT_SIZE_ML)} ml)</h3>
            <small>Unit Price: ${formatCurrency(item.price)}</small>
          </div>
          <div class="qty-controls" aria-label="Quantity controls for ${escapeHTML(item.name)}">
            <button class="qty-btn" data-qty-id="${item.id}" data-change="-1" ${item.qty <= 1 ? "disabled" : ""} aria-label="Decrease quantity">-</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-qty-id="${item.id}" data-change="1" aria-label="Increase quantity">+</button>
          </div>
          <div class="price">${formatCurrency(item.price * item.qty)}</div>
          <button class="remove-btn" data-remove-id="${item.id}">Remove</button>
        </article>
      `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalEl.textContent = `Total: ${formatCurrency(total)}`;
}

function initCheckout() {
  const button = document.getElementById("place-order-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    const cart = getCart();
    if (!cart.length) {
      showMessage("Add products to cart before checkout.");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to place this order?");
    if (!confirmed) {
      showMessage("Order cancelled.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const orders = getOrders();
    orders.unshift({
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      total,
      items: cart.map((item) => ({ ...item }))
    });
    saveOrders(orders);

    saveCart([]);
    renderCart();
    updateCartBadge();
    showMessage("Your order has been placed successfully.", true);
  });
}

function initOrders() {
  const list = document.getElementById("orders-list");
  const emptyState = document.getElementById("orders-empty");
  if (!list || !emptyState) return;

  const orders = getOrders();
  if (!orders.length) {
    list.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  list.innerHTML = orders
    .map(
      (order) => `
        <article class="order-card">
          <div class="order-head">
            <h3 class="product-title">Order ${escapeHTML(order.id || "N/A")}</h3>
            <small>${escapeHTML(formatOrderDate(order.date))}</small>
          </div>
          <div class="order-total">Total: ${formatCurrency(order.total || 0)}</div>
          <ul class="order-items">
            ${(order.items || [])
              .map(
                (item) => `<li>${escapeHTML(item.name)} (${Number(item.sizeMl || DEFAULT_SIZE_ML)} ml) x ${item.qty} <strong>${formatCurrency((item.price || 0) * (item.qty || 0))}</strong></li>`
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function initSettings() {
  const themeToggle = document.getElementById("theme-toggle");
  const notificationsToggle = document.getElementById("notifications-toggle");
  const deliveryArea = document.getElementById("delivery-area");
  const clearDataButton = document.getElementById("clear-data-btn");
  if (!themeToggle) return;

  const settings = getSettings();
  themeToggle.checked = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.addEventListener("change", () => {
    setTheme(themeToggle.checked ? "dark" : "light");
    showMessage(themeToggle.checked ? "Night mode enabled." : "Light mode enabled.", true);
  });

  if (notificationsToggle) {
    notificationsToggle.checked = settings.notifications;
    notificationsToggle.addEventListener("change", () => {
      const next = { ...getSettings(), notifications: notificationsToggle.checked };
      saveSettings(next);
      showMessage(next.notifications ? "Notifications enabled." : "Notifications disabled.", true);
    });
  }

  if (deliveryArea) {
    deliveryArea.value = settings.deliveryArea;
    deliveryArea.addEventListener("change", () => {
      const next = { ...getSettings(), deliveryArea: deliveryArea.value };
      saveSettings(next);
      showMessage(`Default delivery area set to ${deliveryArea.value}.`, true);
    });
  }

  if (clearDataButton) {
    clearDataButton.addEventListener("click", () => {
      const confirmed = window.confirm("This will clear cart, orders, and saved reviews. Continue?");
      if (!confirmed) return;

      localStorage.removeItem(CART_KEY);
      localStorage.removeItem(ORDERS_KEY);
      localStorage.removeItem(REVIEWS_KEY);
      localStorage.removeItem(THEME_KEY);
      localStorage.removeItem(SETTINGS_PREFS_KEY);
      setTheme("light");
      updateCartBadge();
      showMessage("Saved data has been cleared.", true);
      window.setTimeout(() => window.location.reload(), 350);
    });
  }
}

function getSettings() {
  const stored = safeReadJSON(SETTINGS_PREFS_KEY, DEFAULT_SETTINGS);
  return {
    notifications: stored.notifications !== false,
    deliveryArea: stored.deliveryArea || DEFAULT_SETTINGS.deliveryArea
  };
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_PREFS_KEY, JSON.stringify(settings));
}

function initPerfumeDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const container = document.getElementById("perfume-detail-content");
  if (!container) return;

  if (!id) {
    container.innerHTML = `<div class="card">Perfume not found.</div>`;
    return;
  }

  const product = findProductById(id);
  if (!product) {
    container.innerHTML = `<div class="card">Perfume not found.</div>`;
    return;
  }

  const notes = getPerfumeNotesById(product.id);
  const meta = getPerfumeMetaById(product.id);
  const sourceText = meta?.source === "Parfumo" ? "Source: Parfumo notes database." : "Source: Curated fallback note profile.";
  const sourceLink = meta?.source === "Parfumo" && meta?.url
    ? `<a class="text-link" href="${escapeHTML(meta.url)}" target="_blank" rel="noopener noreferrer">View source page</a>`
    : "";

  container.innerHTML = `
    <section class="perfume-detail card">
      <div class="perfume-detail-media">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" />
      </div>
      <div class="perfume-detail-body">
        <h1>${escapeHTML(product.name)}</h1>
        <label class="size-label" for="detail-size">Size</label>
        <select id="detail-size" class="size-select" aria-label="Select size for ${escapeHTML(product.name)}">
          ${buildSizeOptions()}
        </select>
        <p class="price" data-base-price="${product.price}">${formatCurrency(getPriceForSize(product.price, DEFAULT_SIZE_ML))}</p>
        <p class="section-sub">Fragrance ingredients and notes.</p>
        <h2>Ingredients / Notes</h2>
        <div class="notes-chips">
          ${notes.length ? notes.map((note) => `<span class="note-chip">${escapeHTML(note)}</span>`).join("") : "<span class=\"note-chip\">Notes unavailable</span>"}
        </div>
        <p class="section-sub">${escapeHTML(sourceText)}</p>
        ${sourceLink}
        <div class="perfume-detail-actions">
          <button class="btn primary add-to-cart" data-product-id="${product.id}">Add to Cart</button>
          <a class="btn ghost" href="cart.html">Open Cart</a>
        </div>
      </div>
    </section>
  `;

  const title = document.title.split("|")[0].trim();
  document.title = `${title} | ${product.name}`;
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  setTheme(savedTheme, false);
}

function setTheme(theme, persist = true) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");

  if (persist) localStorage.setItem(THEME_KEY, theme);
}

function initReviews() {
  const list = document.getElementById("reviews-list");
  const form = document.getElementById("review-form");
  if (!list || !form) return;

  const savedReviews = safeReadJSON(REVIEWS_KEY, []);
  const reviews = [...DEFAULT_REVIEWS, ...savedReviews];

  list.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <h3 class="product-title">${escapeHTML(review.name)}</h3>
          <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
          <p>${escapeHTML(review.text)}</p>
        </article>
      `
    )
    .join("");

  form.onsubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById("review-name").value.trim();
    const rating = Number(document.getElementById("review-rating").value);
    const text = document.getElementById("review-text").value.trim();
    if (!name || !rating || !text) return;

    savedReviews.push({ name, rating, text });
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(savedReviews));
    form.reset();
    showMessage("Review submitted successfully.");
    initReviews();
  };
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showMessage("Thank you. We will contact you soon.");
  });
}

function showMessage(message, force = false) {
  if (!force) {
    const settings = getSettings();
    if (!settings.notifications) return;
  }

  const box = document.getElementById("global-message");
  if (!box) return;

  box.textContent = message;
  box.classList.add("show");
  window.clearTimeout(showMessage.timeout);
  showMessage.timeout = window.setTimeout(() => {
    box.classList.remove("show");
  }, 2200);
}

document.body.addEventListener("change", (event) => {
  const sizeSelect = event.target.closest(".size-select");
  if (sizeSelect) refreshPriceFromSizeSelect(sizeSelect);
});

function safeReadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
