import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FieldConfig } from "./types";
import { buildYupSchema } from "./schemaBuilder";

type Props = {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
  submitLabel?: string;
};

export default function DynamicForm({
  fields,
  onSubmit,
  submitLabel = "Submit",
}: Props) {
  const schema = buildYupSchema(fields);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className="row mb-3" key={field.name}>
          <label className="col-4 col-form-label">
            {field.label}
          </label>

          <div className="col-8">
            <input
              type={field.type}
              {...register(field.name)}
              className={`form-control ${
                errors[field.name] ? "is-invalid" : ""
              }`}
            />

            {errors[field.name] && (
              <div className="text-danger small">
                {errors[field.name]?.message as string}
              </div>
            )}
          </div>
        </div>
      ))}

      <button type="submit" className="btn btn-primary w-100">
        {submitLabel}
      </button>
    </form>
  );
}
