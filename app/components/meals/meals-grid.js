import classes from './meals-grid.module.css';
import MealItem from './meals-item';

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id} className={classes.meals}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
