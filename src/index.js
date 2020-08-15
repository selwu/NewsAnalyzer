import './index.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import ValidateForm from './js/utils/ValidateForm';
import SearchInput from './js/components/SearchInput';
import { ERROR_MESSAGE_INPUT, BASE_URL_NEWS_API, KEY_NEWS_API } from './js/constants/constants';
import DateFormatter from './js/utils/DateFormatter';

const form = document.querySelector('.search');
const buttonSearch = document.querySelector('.button_styles_search');
const buttonMoreNews = document.querySelector('.button_styles_news');
const inputSearch = document.querySelector('.search__input');
const newsBlock = document.querySelector('.news');
const preloader = document.querySelector('.preloader');
const reply = document.querySelector('.reply');
const errorSearch = document.querySelector('.error-search');
const errorText = document.querySelector('.search__error');

const configNewsApi = {
  baseUrl: BASE_URL_NEWS_API,
  key: KEY_NEWS_API
};
const container = document.querySelector('.news__list');
const newsCard = (...arg) => new NewsCard(...arg).create();
const newCardList = new NewsCardList(container, newsCard, DateFormatter.formatterDateSearch);
const newsApi = new NewsApi(configNewsApi);
const dataStorage = new DataStorage();
const validateForm = new ValidateForm(errorText, ERROR_MESSAGE_INPUT, buttonSearch, inputSearch);

const submitHandler = (evt) => {
  evt.preventDefault();
  dataStorage.removeData('news');
  dataStorage.removeData('search-input');
  newsBlock.classList.remove('visible');
  container.textContent = '';
  errorSearch.classList.remove('visible');
  reply.classList.remove('visible');
  preloader.classList.add('visible');
  validateForm.setButtonDeactive();
  validateForm.setInputDeactive();
  newsApi.getNews(inputSearch.value)
    .then((data) => {
      if (data.articles.length === 0) {
        preloader.classList.remove('visible');
        reply.classList.add('visible');
      } else {
        dataStorage.setData('news', data);
        dataStorage.setData('search-input', inputSearch.value);
        const dataNews = dataStorage.getData('news');
        newCardList.toRender(dataNews.articles);
        preloader.classList.remove('visible');
        newsBlock.classList.add('visible');
      }
    })
    .catch((onerror) => {
      preloader.classList.remove('visible');
      errorSearch.classList.add('visible');
      console.error(onerror);
    })
    .finally(() => {
      validateForm.setButtonActive();
      validateForm.setInputActive();
  })
}

const inputHandler = (event) => {
  validateForm.isValidate(event.target);
}

const moreNewsHandler = (event) => {

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
  },
  {
    event: 'click',
    callback: moreNewsHandler,
    element: buttonMoreNews
  }
])

const startRenderHandler = () => {
  if ('news' in localStorage) {
    const dataInput = dataStorage.getData('search-input');
    const dataNews = dataStorage.getData('news');
    inputSearch.value = dataInput;
    validateForm.isValidate(inputSearch);
    newsBlock.classList.add('visible');
    newCardList.toRender(dataNews.articles);
  }
}

document.addEventListener('DOMContentLoaded', startRenderHandler);

searchInput.setHandlers();
