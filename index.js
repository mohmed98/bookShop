// global
const API_KEY = "AIzaSyBlKbMgMw_ZPE9_IbExmUmHQ6EeE7gSmn8";
// fetch function
const fetchData = async (q) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${q}+subject&key=AIzaSyBlKbMgMw_ZPE9_IbExmUmHQ6EeE7gSmn8`
  );
  console.log("f function");
  return res.json();
};
// handelSubmit
const handlSubmit = (q = "comedy") => {
  const displayArea = document.getElementById("bookList");
  fetchData(q).then((res) => {
    console.log(res);
    res.items.forEach((book) => {
      const titleElemnt = document.createElement("h2");
      titleElemnt.textContent = book.volumeInfo.title;
      displayArea.appendChild(titleElemnt);
      console.log("h function");
    });
  });
};
window.addEventListener("load", handlSubmit);
