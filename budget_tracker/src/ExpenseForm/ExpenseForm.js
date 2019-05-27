import React from 'react';

import {createExpense, updateExpense, destroyExpense} from "../action/expense-action";

import {connect} from "react-redux";

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      cost: '',
    };
  }
  handleChange =(event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmitCreate = (event) => {
    event.preventDefault();

    this.props.createExpense(this.state);
  };

  handleSubmitUpdate = (event) => {
    event.preventDefault();

    this.props.updateExpense(this.expense)

  };

  render() {
    const buttonText = this.props.editing ? 'Update' : 'Create';
    return(
      <form onSubmit={this.handleSubmitCreate}>
        <input
          type='text'
          name='item'
          value={this.state.item}
          onChange={this.handleChange}
          placeholder='item'
        />
        <input
          type='number'
          name='cost'
          value={this.state.cost}
          onChange={this.handleChange}
          placeholder='cost'
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    expenses: state,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: (expense) => {
      dispatch(createExpense(expense.item, expense.cost));
    },
    updateExpense: (expense) => {
      dispatch(updateExpense(expense));
    },
    destroyExpense: (expense) => {
      dispatch(destroyExpense(expense));
    }

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);