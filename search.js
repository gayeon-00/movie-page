document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("movieInput");
  const button = document.getElementById("searchBtn");
  const movieListContainer = document.getElementById("movieList");

  button.addEventListener("click", function () {
    const keyword = input.value.trim().toLowerCase();
    movieListContainer.innerHTML = "";
// 입력 안했을 때 알림
    if (!keyword) {
      alert("영화 제목을 입력해주세요.");
      return;
    }
//
    const searchedMovies = movieList.results.filter(movie =>
      movie.original_title.toLowerCase().includes(keyword)
    );

    if (searchedMovies.length === 0) {
      movieListContainer.innerHTML = `<p class="text-center">검색 결과가 없습니다.</p>`;
      return;
    }

    searchedMovies.forEach(movie => {
      const posterUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;
      const year = movie.release_date.split("-")[0];

      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      // 카드 생성
      const card = document.createElement("div");
      card.className = "d-flex flex-column align-items-center border rounded p-2 bg-white text-dark";
      card.style.width = "200px";
      card.style.cursor = "pointer";  // 마우스 커서 포인터로 변경

      // 클릭 시 detail.html로 이동 (JS 방식)
      card.addEventListener("click", () => {
        const url = `detail.html?title=${encodeURIComponent(movie.original_title)}&poster=${movie.poster_path}&release=${movie.release_date}&vote=${movie.vote_average}&overview=${encodeURIComponent(movie.overview)}`;
        location.href = url;
      });

      // 카드 내부 요소 구성
      const img = document.createElement("img");
      img.src = posterUrl;
      img.alt = movie.original_title;
      img.style.width = "100%";
      img.style.borderRadius = "4px";

      const title = document.createElement("h6");
      title.className = "mt-2 text-center";
      title.textContent = movie.original_title;

      const date = document.createElement("p");
      date.className = "text-muted mb-0";
      date.textContent = `movie - ${year}`;

      // 카드 조립
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(date);

      movieListContainer.appendChild(card);
    });
  });
});
