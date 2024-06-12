import { createContext } from 'react';
import subscriptions from '../Assets/Subscriptions/subscriptions';
import trainers from '../Assets/Trainers/trainers-data';
import workoutbasedworkout from '../Assets/TypesOfWorkout/BasedOnCategory/data';
import personbasedworkout from '../Assets/TypesOfWorkout/BasedOnPerson/data';
import workouts from '../Assets/WorkoutList/workout-list';
import gymwears from '../Assets/gymwear_products/gymwears';

export const productContext = createContext(null);

const ProductContextProvider = (props) => {
    const contextValue = {gymwears, trainers, subscriptions, personbasedworkout, workoutbasedworkout, workouts};
    return(
        <productContext.Provider value={contextValue}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductContextProvider