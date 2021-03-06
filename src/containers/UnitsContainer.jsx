import React, { Component } from 'react';
import UnitSearch from '../components/UnitSearch';
import UnitsList from '../components/UnitsList';
import { allUnits } from '../utils/allUnits';

export default class UnitsContainer extends Component{
	constructor(props){
		super(props);
		this.state = {inputValue:''};
	}

	searchBy(input){
		this.setState({ inputValue : input.target.value });
	}

	render(){
 		return(	
        <div>
 					<UnitSearch searchBy={this.searchBy.bind(this)} />
 					<UnitsList units={allUnits} inputValue={this.state.inputValue.toLowerCase()}/>
 				</div>
        );    
	}

}


