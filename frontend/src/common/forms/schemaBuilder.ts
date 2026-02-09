import * as yup from "yup";
import type { FieldConfig } from "./types";

export const buildYupSchema = (fields: FieldConfig[]) => {
  const shape: Record<string, any> = {};

  fields.forEach((field) => {
    let validator = yup.string();

    const rules = field.validation;

    if (!rules) {
      shape[field.name] = validator;
      return;
    }

    if (rules.required) {
      validator = validator.required(`${field.label} is required`);
    }

    if (rules.email) {
      validator = validator.email("Enter a valid email");
    }

    if (rules.minLength) {
      validator = validator.min(
        rules.minLength,
        `${field.label} must be at least ${rules.minLength} characters`
      );
    }

    if (rules.hasLetter) {
      validator = validator.matches(
        /[A-Za-z]/,
        `${field.label} must contain at least one letter`
      );
    }

    if (rules.hasNumber) {
      validator = validator.matches(
        /[0-9]/,
        `${field.label} must contain at least one number`
      );
    }

    if (rules.hasSpecialChar) {
      validator = validator.matches(
        /[@$!%*#?&]/,
        `${field.label} must contain at least one special character`
      );
    }

    shape[field.name] = validator;
  });

  return yup.object(shape);
};
