import styles from "./MealList.module.css";

import MealItem from "./MealItem";

const MealList = (props) => {
    return (
        <ul className={styles["meal-list"]}>
            {props.mealList?.length ? props.mealList.map((item) => <li key={item.id}><MealItem mealName={item.mealName} mealSummary={item.mealSummary} mealPrice={item.mealPrice} mealId={item.id} /></li>) : <h3>No Record(s) found</h3>}
        </ul>
    );
}

export default MealList;