import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'semantic-ui-react';

// -- Components
import { Input, Dropdown } from 'components/forms';

class SearchForm extends Component {
  state = {
    isSubmitting: false
  }

  onSubmit = (values, actions) => {
    console.log(values, actions);

  }

  render() {
    const { isSubmitting } = this.state;

    return <Formik
      initialValues={{ //TODO: Don't put it here
        illness: '',
        location: '',
        gender: '',
        age: ''
      }}
      onSubmit={this.onSubmit}
    >
      <Form>
        <Field placeholder="Illness" type="illness" name="illness" component={Input} />
        <Field placeholder="Location" type="location" name="location" component={Input} />
        <Field placeholder="Gender" type="gender"
          name="gender"
          component={Dropdown}
          options={[{ key: 'male', value: 'male', text: 'Male' }, { key: 'female', value: 'female', text: 'Female' }]} />
        <Field placeholder="Age" type="age" name="age" component={Input} />
        <Button content="primary" type="submit" disabled={isSubmitting}>
          Submit
		    </Button>
      </Form>
    </Formik>;
  }
}


export default SearchForm;