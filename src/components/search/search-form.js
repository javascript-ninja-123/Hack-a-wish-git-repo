import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;

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

  onSubmit = (values, {resetForm}) => {
    const searchParams = pickBy(values, (val) => val);
    resetForm({})
    this.props.history.push({
      search: stringify(searchParams)
    });
  }

  render() {
    const { isSubmitting, initialValues } = this.state;
    console.log(this.state);
    return (
      <div style={{ display: 'relative', marginTop: '75px', width: '80%', marginLeft: '10%' }}>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={this.onSubmit}>
          {({ handleSubmit, setValues }) => (
            <Form onSubmit={handleSubmit}> {/*TODO: Sample fields only*/}
              <FieldWrapper>
                <label><b>Illness</b></label>
                <Field placeholder="Illness"
                  name="illness"
                  component={Dropdown}
                  options={illnesses} />
              </FieldWrapper>
              <FieldWrapper>
                <label><b>Wish Type</b></label>
                <Field placeholder="Wish Type"
                  name="wishType"
                  component={Dropdown}
                  options={wishTypes} />
              </FieldWrapper>
              <FieldWrapper>
                <label><b>Gender</b></label>
                <Field placeholder="Gender"
                  name="gender"
                  component={Dropdown}
                  options={genders} />
              </FieldWrapper>
              <FieldWrapper>
                <label><b>Age</b></label>
                <Field type="number" placeholder="Age" name="age" component={Input} />
              </FieldWrapper>
              <div style={{ textAlign: 'right' }}>
                <Button primary type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <a onClick={() => setValues('')}>Clear</a>
              </div>
            </Form>

          )}
        </Formik>
      </div>

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