import './about.css';
import CommitCard from "../../js/components/CommitCard";
import CommitCardList from "../../js/components/CommitCardList";
import GithubApi from "../../js/modules/GithubApi";
import swiper from "../../js/utils/swiper";

const container = document.querySelector('.swiper-wrapper');

const configGithub = 'https://api.github.com/repos/selwu/NewsAnalyzer/commits';
const createCard = (...arg) => new CommitCard(...arg).create();
const commitCardList = new CommitCardList(container, createCard);
const githubApi = new GithubApi(configGithub);

githubApi.getCommits()
  .then(data => {
    commitCardList.render(data);
    swiper.init();
  })
  .catch(error => {
    console.error(error);
  })


