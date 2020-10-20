import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentDidMount() {
      this.requestInterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptors = axios.interceptors.response.use(res => res, error => { this.setState({ error }) });
    };
    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptors);
      axios.interceptors.response.eject(this.responseInterceptors);
    }

    handleErrorConfirmed = () => {
      this.setState({ error: null });
    }

    render() {
      return (
      <>
          <Modal
            show={!!this.state.error}
            modalClosed={this.handleErrorConfirmed}
          >
          {this.state.error? this.state.error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
      </>
      );
    }
    
  }
}

export default withErrorHandler;