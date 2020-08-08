import './index.css';
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import NewsApi from "./js/modules/NewsApi";

const form = document.querySelector('.search');
const buttonSearch = document.querySelector('.button_styles_search');
const inputSearch = document.querySelector('.search__input');
const newsBlock = document.querySelector('.news');
const preloader = document.querySelector('.preloader');
const reply = document.querySelector('.reply');

const configNewsApi = {
  baseUrl: 'https://newsapi.org',
  key: 'b9e026f62a0d460d9e07404a0e48c4a7'
}
const container = document.querySelector('.news__list');
const newsCard = (...arg) =>new NewsCard(...arg).create();
const newCardList = new NewsCardList(container, newsCard);
const newsApi = new NewsApi(configNewsApi);


form.addEventListener('submit', evt => {
  evt.preventDefault();
  reply.classList.remove('visible');
  preloader.classList.add('visible');
  newsApi.getNews(inputSearch.value)
    .then(data => {
      if (data.articles.length === 0) {
        preloader.classList.remove('visible');
        reply.classList.add('visible');
      } else {
        newsBlock.classList.add('visible');
        newCardList.toRender(data.articles);
        preloader.classList.remove('visible');
      }
  })
    .catch(onerror => {
      preloader.classList.remove('visible');
      console.error(onerror);
    })
})
