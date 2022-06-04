import React,{Component} from 'react'
import Row from "../row";
import FilmDetails from '../sw-components/film-details';
import {FilmList, PersonList} from "../sw-components/item-lists";

export default class FilmPage extends Component{
    render(){
        const id =this.props.match.params.id;
        return(
            <Row left={<FilmList onItemSelected={(id) => this.props.history.push(id)}></FilmList>}
                 right={<FilmDetails itemId={id}></FilmDetails>}>
            </Row>
        )
    }
}