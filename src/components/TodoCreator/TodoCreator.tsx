import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./todocreator.module.css";
import { useTodoStore } from "../../store";

export function TodoCreator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTodo = useTodoStore((state) => state.createTodo);
  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    createTodo(data.todoTitle);
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todoTitle", { required: true })}
          className={styles.todoInput}
          type="text"
          placeholder="Create a new todo..."
        />
        {errors.todoTitle && (
          <span className={styles.errorMessage}>This is required!</span>
        )}
      </form>
    </>
  );
}
