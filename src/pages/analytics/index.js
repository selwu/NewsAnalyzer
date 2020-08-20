import './analytics.css';
import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';
import AnalyticsCalculate from '../../js/utils/AnalyticsCalculate';
import DateFormatter from '../../js/utils/DateFormatter';


const startRenderHandler = () => {
  if ('newsData' in localStorage) {
    const containerDays = document.querySelector('.table__days');
    const containerNumbers = document.querySelector('.table__container');
    const containerMain = document.querySelector('.main-container');

    const dataStorage = new DataStorage();
    const dataLocal = {
      keyWord: dataStorage.getData('keyWord'),
      newsData: dataStorage.getData('newsData'),
    };
    const statistics = new Statistics(
      dataLocal,
      containerDays,
      containerNumbers,
      containerMain
    );
    const allMember = AnalyticsCalculate.calculateAllMember(
      dataLocal.newsData,
      dataLocal.keyWord
    );
    const totalTitleCount = AnalyticsCalculate.calculateTitle;
    const totalSortArr = AnalyticsCalculate.calculateDaysWeek(
      DateFormatter.formatterDateAnalytics,
      allMember
    );

    statistics.render(totalTitleCount, totalSortArr);
  }
};

document.addEventListener('DOMContentLoaded', startRenderHandler);
