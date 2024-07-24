import { useState, useEffect } from "react";
import workoutsService from "../services/workout.service";
import { Link } from "react-router-dom";




function HomePage() {
  const [workouts, setWorkouts] = useState([]);

  const getAllWorkouts= () => {
    workoutsService
      .getAllWorkouts()
      .then((response) => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getAllWorkouts();
  }, []);
    return (
      <div className="HomePage">
      
        {workouts.map((workout) => {
          return (
            <div className="ProjectCard card" key={workout._id} >
              <Link to={`/workouts/${workout._id}`}>
                <h3>{workout.title}</h3>
              </Link>
            </div>
          );
        })}     
       
    </div>
    );
  }
   
  export default HomePage;