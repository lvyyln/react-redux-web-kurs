import ItemDetails, {Record} from "../item-details";
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data";

const FilmDetails = (props) => {
    return (
        <ItemDetails
            {...props}>

            <Record field="title" label=""/>
            <Record field="director" label="Директор"/>
            <Record field="producer" label="Продюсер"/>
            <Record field="release_date" label="Дата виходу"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getFilm,
        getImageUrl: swapiService.getFilmImage
    }
};

export default withSwapiService(FilmDetails,mapMethodsToProps)