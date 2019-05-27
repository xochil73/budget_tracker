
import React from 'react';
import {createCategory, updateCategory, destroyCategory} from "../action/category-action";

import {connect} from "react-redux";

export class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      budget: '',
    };
  }
  handleChange =(event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmitCreate = (event) => {
    event.preventDefault();

    this.props.createCategory(this.state);
  };

  handleSubmitUpdate = (event) => {
    event.preventDefault();

    this.props.updateCategory(this.category)

  };

  render() {
    const buttonText = this.props.editing ? 'Update' : 'Create';
    return(
      <form onSubmit={this.handleSubmitCreate}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='title'
        />
        <input
          type='number'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange}
          placeholder='budget'
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    categories: state,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (category) => {
      dispatch(createCategory(category.title, category.budget));
    },
    updateCategory: (category) => {
      dispatch(updateCategory(category));
      },
    destroyCategory: (category) => {
      dispatch(destroyCategory(category));
    }

  }
};


 export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);