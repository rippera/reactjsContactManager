import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
    this.OnClickShow = this.OnClickShow.bind(this);
  }
  OnClickShow() {
    this.setState({
      isShow: !this.state.isShow
    });
  }
  onDelete = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { isShow } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h6>
                {name}{' '}
                <i
                  onClick={this.OnClickShow}
                  style={{ cursor: 'pointer', fontSize: '22px' }}
                  className='fas fa-sort-down'
                ></i>
                <i
                  className='fas fa-times'
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'red',
                    fontSize: '20px'
                  }}
                  onClick={this.onDelete.bind(this, id, dispatch)}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className='fas fa-user-edit'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'green',
                      fontSize: '20px',
                      marginRight: '10px'
                    }}
                  ></i>
                </Link>
              </h6>

              {isShow ? (
                <ul className='list-group'>
                  <li className='list-group-item'>{email}</li>
                  <li className='list-group-item'>{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
