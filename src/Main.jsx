import frontflex from './Assets/Images/frontflex.jpg';
import gymequipments from './Assets/Images/gymequipments.jpg';
import gymwear from './Assets/Images/gymwear.jpg';
import Card from './Components/Card/card';
import Hero from './Components/Hero/hero';
import Offer from './Components/Offer/offer';
import './Main.css';
import WorkoutPage from './Pages/WorkoutPage/workoutpage';

function Main() {

  const equipments = {
    paragraph : 'Buy and try best equipments that helps in better workout',
    btnText: 'BUY',
    bgImage: gymequipments,
    path: '/equipments',
    btnStyle: 'not-allowed'
  }

  const getTrainer = {
    paragraph : 'Get a trainner to enhance your workout under the guidance',
    btnText: 'GET TRAINNER',
    bgImage: frontflex,
    path: '/gettrainer',
    btnStyle: 'pointer',
    
  }

  const clothes = {
    paragraph : 'Buy stretchable and best wears to feel comfortable while doing workout',
    btnText: 'BUY WEARS',
    bgImage: gymwear,
    path: '/wearproduct',
    btnStyle: 'pointer'
  }


  return (
   <div className='app-container'>
    <Hero />
    <div className='cards'>
      <Card paragraph = {equipments.paragraph} btn = {equipments.btnText} bgImage= {equipments.bgImage} btnStyle={equipments.btnStyle}/>
      <Card paragraph = {getTrainer.paragraph} btn = {getTrainer.btnText} bgImage= {getTrainer.bgImage} path={getTrainer.path} btnStyle={getTrainer.btnStyle}/>
      <Card paragraph = {clothes.paragraph} btn = {clothes.btnText} bgImage= {clothes.bgImage} path={clothes.path} btnStyle={clothes.btnStyle}/>
    </div>
    <Offer />
    <WorkoutPage />
   </div>
  );
}

export default Main;
