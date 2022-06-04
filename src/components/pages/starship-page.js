import React,{Component} from 'react'
import {StarshipList} from "../sw-components/item-lists";
import { withRouter } from 'react-router-dom'
import StarshipDetails from '../sw-components/starship-details';
import Row from "../row";

class StarshipPage extends Component{
    state = {
        selectedItem : null
    };
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render(){
        return(
            <Row left={<StarshipList onItemSelected={this.onItemSelected}></StarshipList>}
            right={<StarshipDetails itemId={this.state.selectedItem}></StarshipDetails>}></Row>
        )
    }
}

export default withRouter(StarshipPage)