import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails, {Record} from "../item-details";
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Назва"/>
            <Record field="crew" label="Команда"/>
            <Record field="manufacturer" label="Виробник"/>
            <Record field="length" label="Довжина"/>
            <Record field="costInCredits" label="Ціна в кредитах"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData : swapiService.getStarship,
        getImageUrl : swapiService.getStarshipImage
    }
};

export default withSwapiService(StarshipDetails,mapMethodsToProps)