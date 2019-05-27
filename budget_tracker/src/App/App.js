import React from 'react';
import {connect} from 'react-redux';
import { createCategory } from '../action/category-action';
import CategoryItem from '../CategoryItem/CategoryItem';

import CategoryForm from '../CategoryForm/CategoryForm';


class App extends React.Component {
  render() {
    return (
      <div>
        <CategoryForm onComplete={this.props.mappedCategoryCreate}/>
        <ul>
          {this.props.categories.map(current => {
              return (
                <CategoryItem currentCategory={current} key={current.id}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    mappedCategoryCreate: (category) => {
      dispatch(createCategory(category.title, category.budget));
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
