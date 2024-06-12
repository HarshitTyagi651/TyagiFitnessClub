import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/footer';
import ScrollToTop from './Components/ScrollToTop';
import Main from "./Main";
import DietList from './Pages/DietPlanPage/DietList';
import DietPlan from './Pages/DietPurposePage/DietPurpose';
import FitnessEvalPage from './Pages/FitnessEvalPage/fitnessevalpage';
import Subscriptions from './Pages/Subscriptions/subscriptions';
import Trainers from './Pages/TrainersList/trainerslist';
import Product from './Pages/WearProduct/product';
import WorkoutList from './Pages/WorkoutListPage/WorkoutList';
import WorkoutTutorial from './Pages/WorkoutTutorialPage/WorkoutTutorial';


function App() {

  return (
   <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/wearproduct' element={<Product />} />
        <Route path='/gettrainer' element={<Trainers />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/fitnessevalpage' element={<FitnessEvalPage />} />
        <Route path='/workoutlist' element={<WorkoutList />} />
        <Route path='/dietplan' element={<DietList />} />
        <Route path='/vegdiet' element={<DietPlan category="veg"/>} />
        <Route path='/nonvegdiet' element={<DietPlan category="non-veg"/>} />
        <Route path='/gymtutorial' element={<WorkoutTutorial category="gym"/>} />
        <Route path='/homeworkouttutorial' element={<WorkoutTutorial category="homeworkout"/>} />
        <Route path='/calisthenicstutorial' element={<WorkoutTutorial category="calisthenics"/>} />
        <Route path='/yogatutorial' element={<WorkoutTutorial category="yoga"/>} />
        <Route path='/gymnastictutorial' element={<WorkoutTutorial category="gymnastic"/>} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;
