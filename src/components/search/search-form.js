import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import { stringify, parse } from 'query-string';
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { pickBy, isEmpty } from 'lodash';

// -- Components
import { Input, Dropdown, LocationInput } from 'components/forms';

class SearchForm extends Component {
  state = {
    isSubmitting: false,
    mapLocation: {},
    initialvalues: {}
  }

  componentDidMount() {
    const { location: { search }, setValues } = this.props;

    console.log('componentDidMount', this.props, parse(search));

    this.setState({ initialValues: parse(search) });
    // TODO: Dispatch search action 
  }

  onSubmit = (values, actions) => {
    console.log('SearchForm.onSubmit', values, actions); //TODO: There is a bug in select not getting the selected value

    const searchParams = pickBy(values, (val) => val);

    if (!isEmpty(searchParams)) {
      this.props.history.push({
        search: stringify(searchParams)
      })
    }
  }

  render() {
    const { isSubmitting, initialValues } = this.state;

    return <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={this.onSubmit}>
        <Form> {/*TODO: Sample fields only*/}
          <Field placeholder="Illness" type="illness" name="illness" component={Input} />
          <Field placeholder="Location" type="location" name="location" component={LocationInput} onSuggestSelect={this.props.onSuggestSelect} />
          <Field placeholder="Gender" type="gender"
            name="gender"
            component={Dropdown}
            options={[{ key: 'male', value: 'male', text: 'Male' }, { key: 'female', value: 'female', text: 'Female' }]} />
          <Field placeholder="Age" type="age" name="age" component={Input} />
          <Button type="submit" disabled={isSubmitting}>
            Submit
		      </Button>
          <Link to="/search">Clear Search</Link>
        </Form>
    </Formik>;
  }
}


export default withRouter(withFormik({
  enableReinitialize: true
})(SearchForm));