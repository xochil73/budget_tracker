import React from 'react';

import CategoryForm from '../CategoryForm/CategoryForm';
import {updateCategory, destroyCategory} from "../action/category-action";
import {connect} from "react-redux";

class CategoryItem extends React.Component {

  handleSubmitDestroy = () => {

    this.props.destroyCategory(this.props.currentCategory);

  };
  render() {
    return(
    <li key={this.props.currentCategory.id}>
      {this.props.currentCategory.title} {this.props.currentCategory.budget}
      <CategoryForm editing={true}/>
      <button onClick={this.handleSubmitDestroy.bind(null, this.props.currentCategory)}>Delete</button>
    </li>
  );

  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (category) => {
      dispatch(updateCategory(category));
    },
    destroyCategory: (category) => {
      dispatch(destroyCategory(category));
    }

  }
};



export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);