import React, { Component } from 'react';
import EquipmentSearch from '../components/EquipmentSearch';
import EquipmentList from '../components/EquipmentList';
import { allItems } from '../utils/allItems';

export default class UnitsContainer extends Component{
	constructor(props){
		super(props);
		this.state = {inputValue:''};
	}

	searchBy(input){
		this.setState({ inputValue : input.target.value });
	}

	render(){
 		return(	<div>
 					<EquipmentSearch searchBy={this.searchBy.bind(this)} />
 					<EquipmentList items={allItems} inputValue={this.state.inputValue.toLowerCase()}/>
 				</div>
        );    
	}

}
