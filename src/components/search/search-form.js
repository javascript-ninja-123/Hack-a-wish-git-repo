import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, ErrorMessage, withFormik } from 'formik';
import { stringify, parse } from 'query-string';
import { withRouter, Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { pickBy, isEmpty } from 'lodash';

// -- Components
import { Input, Dropdown, LocationInput } from 'components/forms';

// -- Actions
import { search } from 'actions';

// -- Constants
import { genders, illnesses, wishTypes } from 'utils/constants';

class SearchForm extends Component {
  state = {
    isSubmitting: false,
    mapLocation: {},
    initialValues: {}
  }

  componentDidMount() {
    const { location: { search: searchLocation }, search } = this.props;
    const query = parse(searchLocation);
    console.log('componentDidMount', this.props, query);

    search(query);
    this.setState({ initialValues: query });
  }

  onSubmit = (values, actions) => {
    const searchParams = pickBy(values, (val) => val);

    this.props.history.push({
      search: stringify(searchParams)
    });
  }

  render() {
    const { isSubmitting, initialValues } = this.state;
    console.log(this.state);
    return (
      <div style={{ display: 'relative', marginTop: '75px' }}>
      </div>
      //   <Formik
      //     enableReinitialize={true}
      //     initialValues={initialValues}
      //     onSubmit={this.onSubmit}>
      //     {({ handleSubmit, setValues }) => (
      //       <Form onSubmit={handleSubmit}> {/*TODO: Sample fields only*/}
      //         <Field placeholder="Illness"
      //           name="illness"
      //           component={Dropdown}
      //           options={illnesses} />
      //         <Field placeholder="Wish Type"
      //           name="wishType"
      //           component={Dropdown}
      //           options={wishTypes} />
      //         <Field placeholder="Gender"
      //           name="gender"
      //           component={Dropdown}
      //           options={genders} />
      //         <Field type="number" placeholder="Age" name="age" component={Input} />
      //         <Button type="submit" disabled={isSubmitting}>
      //           Submit
      //     </Button>
      //         <a onClick={() => setValues('')}>Clear</a>
      //       </Form>
      //     )}
      //   </Formik>
      // </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  search: request => dispatch(search(request))
});

export default withRouter(withFormik({
  enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(SearchForm)));