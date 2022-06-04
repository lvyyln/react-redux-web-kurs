import ItemDetails, {Record} from "../item-details";
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data";

const PersonDetails = (props) => {
    return (
        <ItemDetails
            {...props}>

            <Record field="gender" label="Стать"/>
            <Record field="eyeColor" label="Колір очей"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails,mapMethodsToProps)