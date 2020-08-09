import './about.css';
import CommitCard from "../../js/components/CommitCard";
import CommitCardList from "../../js/components/CommitCardList";
import GithubApi from "../../js/modules/GithubApi";
import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  }
});

const container = document.querySelector('.swiper-wrapper');

const configGithub = 'https://api.github.com/repos/selwu/NewsAnalyzer/commits';
const createCard = (...arg) => new CommitCard(...arg).create();
const commitCardList = new CommitCardList(container, createCard);
const githubApi = new GithubApi(configGithub);

githubApi.getCommits()
  .then(data => {
    commitCardList.render(data);
  })
  .catch(error => {
    console.error(error);
  })

