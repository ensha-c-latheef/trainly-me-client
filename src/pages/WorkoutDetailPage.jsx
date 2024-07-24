import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import workoutsService from "../services/workout.service";

function WorkoutDetailPage() {
    const [workout, setWorkout] = useState([]);
    const [loading, setLoading] = useState(true);
    const {workoutId} = useParams();

    const getWorkout = () => {
        setLoading(true);
        workoutsService
          .getWorkoutDetails(workoutId)
          .then((response) => {
            const oneWorkout = response.data;
            setWorkout(oneWorkout);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        getWorkout();
      }, []);

       return(
        <div>
            <h1>{workout.title}</h1>
            <p>{workout.reps}</p>
            <p>{workout.load}</p>
            <Link to="/">
                <button>workouts</button>
            </Link>
        </div>
        
       );

    }
    export default WorkoutDetailPage;