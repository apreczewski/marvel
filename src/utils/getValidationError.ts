import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export const getValidationError = (error: ValidationError): Errors => {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}
