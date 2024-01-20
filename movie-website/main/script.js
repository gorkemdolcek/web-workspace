document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector("#search-bar");
    const searchForm = document.querySelector("form");

    searchBar.addEventListener("focus", function () {
        searchForm.style.width = "300px";
        searchBar.style.display = "block";
        setTimeout(function () {
            searchForm.style.width = "50px";
            searchBar.style.display = "none";
        }, 2000);
    });
});
