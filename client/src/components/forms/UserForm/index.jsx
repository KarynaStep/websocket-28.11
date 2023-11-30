import React from 'react';
import {useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {authUser} from "../../../store/userSlice"

const UserForm = () => {
const dispatch = useDispatch()

  const onSubmit = (values, formiBag) => {
    dispatch(authUser(values))
    formiBag.resetForm();
  }
  return (
    <Formik initialValues={{ login: "", email: "" }} onSubmit={onSubmit}>
      <Form style={{display: 'flex', justifyContent: 'space-between'}}>
        <label>
          <span>login: </span>
          <Field name="login" />
          <ErrorMessage name="login" />
        </label>
        <label>
          <span>email: </span>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </label>
        <button type="submit">Auth me</button>
      </Form>
    </Formik>
  );
}

export default UserForm;
