import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails, {Record} from "../item-details";
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data";


const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Населення"/>
            <Record field="rotationPeriod" label="Час оберту навколо власної осі"/>
            <Record field="diameter" label="Діаметр"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) =>{
    return{
        getData : swapiService.getPlanet,
        getImageUrl : swapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails,mapMethodsToProps)