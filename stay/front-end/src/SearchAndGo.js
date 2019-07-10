import React, { Component } from 'react';
import { ProductConsumer } from './ProductContext';
import { Link } from 'react-router-dom';

export default class SearchAndGo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          category: '',
          // result: ''
        };
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
          })
        }

    getSearchResult = (dispatch, event) => {
      event.preventDefault();
      var searchByCategory = this.state.category
      var searchByTerm = this.state.term
      var tempData = []
      fetch('/Posting/')
      .then(res =>  res.json())
      .then(data => tempData = data.filter(searchingFor(searchByCategory)))
      .then(
        tempData =>   dispatch({
                      type: 'SEARCH',
                      results: tempData.filter(searchingFor(searchByTerm)
          )})
        )
      .catch(error => (console.log('Failed to fetch: ', error.message)));

      this.setState({term: ''})
    }

      render() {
        return (
            <ProductConsumer>
            {
              value => {
              const { dispatch}  = value;

              
                return (
                <div >
                 <Link to="/" style={{color: 'white'}}>
                  
                   {/* <form type="text" onSubmit={this.getSearchResult.bind(this, dispatch)}> */}
                    <form className="btn-group" type="text" >
                      <select name="category" id="category"
                      onChange={this.handleChange} value={this.state.category}
                      >
                      <option value=""> Housing types </option>
                      <option value="House"> House </option>
                      <option value="Apartment"> Apartment </option>
                      <option value="Studio"> Studio </option>
                      </select>

                    {/* class="form-control"  for searching input*/}
                      <input className="search-box" name="term" type="search" placeholder="Search.."
                        value={this.state.term}
                        onChange={this.handleChange}
                        maxLength="40" />
                        
                            <button class="btn btn-primary" onClick={this.getSearchResult.bind(this, dispatch)}> 
                                  Go   
                            </button>


                      </form>
                  </Link>
                </div>
                )
              }
            }
          </ProductConsumer>
		      );
	    }
}

function searchingFor(term) {
  return function(x) {
    return (
      x.Name.toLowerCase().includes(term.toLowerCase()) ||
      x.Category.toLowerCase().includes(term.toLowerCase()) ||
      x.Address.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}
