import React from 'react';
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? value : 'Required')



export { required }