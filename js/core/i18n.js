export const translations = {
  en: {
    "Dashboard": "Dashboard",
    "Sales": "Sales",
    "Sell": "Sell",
    "Products": "Products",
    "Stock": "Stock",
    "Accounts": "Accounts",
    "Settings": "Settings",
    "Search": "Search...",
    "Total": "Total",
    "Cash": "Cash",
    "Card": "Card"
  },
  ur: {
    "Dashboard": "ڈیش بورڈ",
    "Sales": "فروخت",
    "Sell": "بیچیں",
    "Products": "مصنوعات / کپڑا",
    "Stock": "اسٹاک",
    "Accounts": "کھاتے",
    "Settings": "ترتیبات",
    "Search": "تلاش کریں...",
    "Total": "کل",
    "Cash": "نقد",
    "Card": "کارڈ"
  }
};

export function getLang() {
  return localStorage.getItem('clothapp.lang') || 'en';
}

export function setLang(lang) {
  localStorage.setItem('clothapp.lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
  window.location.reload();
}

export function t(key) {
  const lang = getLang();
  return translations[lang][key] || key;
}
