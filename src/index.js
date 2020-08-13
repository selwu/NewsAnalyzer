import './index.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import ValidateForm from './js/utils/ValidateForm';
import SearchInput from './js/components/SearchInput';
import { ERROR_MESSAGE } from './js/constants/constants';

const form = document.querySelector('.search');
const buttonSearch = document.querySelector('.button_styles_search');
const inputSearch = document.querySelector('.search__input');
const newsBlock = document.querySelector('.news');
const preloader = document.querySelector('.preloader');
const reply = document.querySelector('.reply');
const errorSearch = document.querySelector('.error-search');
const errorText = document.querySelector('.search__error');

const configNewsApi = {
  // https://praktikum.tk/news  https://newsapi.org
  baseUrl: 'https://newsapi.org',
  key: 'b9e026f62a0d460d9e07404a0e48c4a7',
};
const container = document.querySelector('.news__list');
const newsCard = (...arg) => new NewsCard(...arg).create();
const newCardList = new NewsCardList(container, newsCard);
const newsApi = new NewsApi(configNewsApi);
const dataStorage = new DataStorage();
const validateForm = new ValidateForm(errorText, ERROR_MESSAGE);
const submitHandler = (evt) => {
  evt.preventDefault();
  errorSearch.classList.remove('visible');
  reply.classList.remove('visible');
  preloader.classList.add('visible');
  newsApi
    .getNews(inputSearch.value)
    .then((data) => {
      dataStorage.setData('news', data);
      dataStorage.setData('search-input', inputSearch.value);
      if (data.articles.length === 0) {
        preloader.classList.remove('visible');
        reply.classList.add('visible');
      } else {
        const dataNews = dataStorage.getData('news');
        newsBlock.classList.add('visible');
        newCardList.toRender(dataNews.articles);
        preloader.classList.remove('visible');
      }
    })
    .catch((onerror) => {
      preloader.classList.remove('visible');
      errorSearch.classList.add('visible');
      console.error(onerror);
    });
}

const inputHandler = (event) => {
  validateForm.isValidate(event.target);

}

const searchInput = new SearchInput([
  {
    event: 'submit',
    callback: submitHandler,
    element: form
  },
  {
    event: 'input',
    callback: inputHandler,
    element: inputSearch
  }
])


searchInput.setHandlers();
