import React from "react";

import Container from "../UI/Container";
import Card from "../UI/Card";
import MealList from "./MealList";


const mealList = [
    {
        id: Math.random().toString(),
        mealName: "Burger",
        mealSummary: "An american specility",
        mealPrice: 14.56
    },
    {
        id: Math.random().toString(),
        mealName: "Sushi",
        mealSummary: "Finest fish and veggies",
        mealPrice: 145.99
    },
    {
        id: Math.random().toString(),
        mealName: "Schnitzel",
        mealSummary: "A german specility",
        mealPrice: 5.67
    },
    {
        id: Math.random().toString(),
        mealName: "Tandoori Chicken",
        mealSummary: "Fresh chicken",
        mealPrice: 33.33
    }
]

const Meals = () => {
    return (
        <React.Fragment>
            <Container className="mt20 p5">
                <Card cardHeading="Choose your favourite Meal">
                    <MealList mealList={mealList} />
                </Card>
            </Container>
        </React.Fragment>
    )
};

export default Meals;