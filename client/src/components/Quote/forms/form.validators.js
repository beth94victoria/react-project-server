import React from 'react';
import validator from 'validator';

const required = (value) => {
    if (!value) {
        required.preventDefault()
        return 'this field is required';
    }
}

export default required