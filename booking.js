function setLang(lang) {
  const zh = { title: '九蛙秘境露營區', welcome: '歡迎來到九蛙秘境露營區', intro: '體驗自然與在地風味的完美融合', bookingBtn: '立即訂位' };
  const en = { title: 'Jiuwa Secret Camp', welcome: 'Welcome to Jiuwa Secret Camp', intro: 'Experience nature and local flavors', bookingBtn: 'Book Now' };
  const t = lang === 'zh' ? zh : en;
  document.getElementById("title").textContent = t.title;
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("intro").textContent = t.intro;
  document.getElementById("bookingBtn").textContent = t.bookingBtn;
}