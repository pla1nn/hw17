const API_KEY = '47606801-75c62912983a7ab29411db2a8';
const API_URL = 'https://pixabay.com/api/';

let page = 0;

const imageContainer = document.getElementById('image_container');
const loadBtn = document.getElementById('load_more');

const loadMore = async () => {
    const response = await fetch(`${API_URL}?key=${API_KEY}&editors_choice=true&per_page=7&page=${page}`);
    const data = await response.json();
    data.hits.forEach(hit => {
        imageContainer.innerHTML += `<div class="image_box"><img src="${hit.imageURL}"></div>`
    });
}

loadBtn.addEventListener('click', loadMore);
loadMore();