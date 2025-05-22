document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  let title = params.get("title");
  let poster = params.get("poster");
  let release = params.get("release");
  let vote = params.get("vote");
  let overview = params.get("overview");

  // 파라미터가 없으면 → 기본 영화 정보(Snow White)
  if (!title || !poster || !release || !vote || !overview) {
    title = "Snow White";
    poster = "/oLxWocqheC8XbXbxqJ3x422j9PW.jpg";
    release = "2025-03-12";
    vote = "4.4";
    overview =
      "Following the benevolent King's disappearance, the Evil Queen dominated the once fair land with a cruel streak. Princess Snow White flees the castle when the Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young bandit named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom.";
  }

  const container = document.getElementById("movieDetail");
  container.innerHTML = ""; // 혹시 초기화 안 되어 있다면 비워줌

  // 카드 wrapper
  const card = document.createElement("div");
  card.style.display = "flex";
  card.style.alignItems = "flex-start";
  card.style.gap = "40px";
  card.style.padding = "40px";
  card.style.maxWidth = "900px";
  card.style.margin = "0 auto";

  // 이미지
  const image = document.createElement("img");
  image.src = `https://image.tmdb.org/t/p/w440_and_h660_face${poster}`;
  image.alt = title;
  image.style.width = "300px";
  image.style.borderRadius = "10px";
  image.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";

  // 텍스트 박스
  const textBox = document.createElement("div");
  textBox.innerHTML = `
    <h1 style="margin-top: 0;">${title}</h1>
    <p><strong>Release Date:</strong> ${release}</p>
    <p><strong>Rating:</strong> ${vote}</p>
    <p><strong>Overview:</strong><br>${overview}</p>
  `;

  // 조립
  card.appendChild(image);
  card.appendChild(textBox);
  container.appendChild(card);
});
