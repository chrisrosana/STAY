import React, { Component } from "react";
// import Item from "./Item";

const context = React.createContext();


const reducer = (state, action) => {
	switch(action.type){
		case 'SEARCH':
			return {
				...state, products: action.results,
				heading: 'Search Results'
			}
		default:
			// return state
			return {
				...state, products: action.results,
				heading: 'Latest Postings'
			}
	}
}
class ProductProvider extends Component{
state = {
		products: [],
		detail: '',
		// postings: []
		heading: 'Latest Postings',
		dispatch: action => this.setState(state => reducer(state, action))
	}


callAPI(){
	fetch('/Posting/')
		.then(res =>  res.json())
		.then(data => this.setState({products: data}))
		.catch(error => (console.log('Failed to fetch: ', error.message)));
}

componentDidMount() {
	this.callAPI();
}


getItem = item => {
	this.setState({detail: item})
}

getDetail = id => {
	this.state.products.map(
		item => {if(item.postId === id) {this.getItem(item)}}
	)
}


	render(){
		return (
			<context.Provider value={{...this.state, getDetail: this.getDetail}}>
				{this.props.children}
			</ context.Provider>
		)
	}
}

const ProductConsumer = context.Consumer;
export {ProductProvider, ProductConsumer}
