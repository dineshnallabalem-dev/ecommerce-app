export type FieldType =
  | "text"
  | "email"
  | "password";

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  email?: boolean;
  hasNumber?: boolean;
  hasLetter?: boolean;
  hasSpecialChar?: boolean;
};

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  validation?: ValidationRule;
};
