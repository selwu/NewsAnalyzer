import './about.css';
import CommitCard from '../../js/components/CommitCard';
import CommitCardList from '../../js/components/CommitCardList';
import GithubApi from '../../js/modules/GithubApi';
import { Swiper, Navigation, Pagination } from 'swiper';
import DateFormatter from '../../js/utils/DateFormatter';

Swiper.use([Navigation, Pagination]);
import SwiperConfig from '../../js/utils/SwiperConfig';

const CardContainer = document.querySelector('.swiper-wrapper');
const swiper = new Swiper(
  SwiperConfig.getSwiperContainer(),
  SwiperConfig.getSwiperParams()
);
const configGithub = 'https://api.github.com/repos/selwu/NewsAnalyzer/commits';
const createCard = (...arg) => new CommitCard(...arg).create();
const commitCardList = new CommitCardList(
  CardContainer,
  createCard,
  DateFormatter.formatterDateLocal
);
const githubApi = new GithubApi(configGithub);

githubApi
  .getCommits()
  .then((data) => {
    commitCardList.render(data);
    swiper.init();
  })
  .catch((error) => {
    console.error(error);
  });
