import './analytics.css';
import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';
import AnalyticsCalculate from '../../js/utils/AnalyticsCalculate';

const containerAnalytics = document.querySelector('.main-container');
const dataStorage = new DataStorage();
const dataLocal = {
  keyWord: dataStorage.getData('keyWord'),
  newsData: dataStorage.getData('newsData'),
};
const statistics = new Statistics(dataLocal, containerAnalytics);
const analyticsCalculate = new AnalyticsCalculate(dataLocal);

console.log(dataLocal.newsData);
console.log(analyticsCalculate.calcDaysWeek());
console.log(analyticsCalculate.calcTitle());


statistics.render();

