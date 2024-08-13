import { useForm } from "react-hook-form";
import styles from "./commandinput.module.scss";
import React, { useEffect } from "react";
import { UtilityButton } from "@/components/buttons/UtilityButton";

interface Props {
  onSubmit: (command: string) => void;
  onClear: () => void;
  initialCommand: string;
}

export default function CommandForm({
  onSubmit,
  onClear,
  initialCommand,
}: Props) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<{ command: string }>({
    defaultValues: {
      command: initialCommand,
    },
  });

  useEffect(() => {
    reset({ command: initialCommand });
  }, [initialCommand, reset]);

  function onFormSubmit(data: { command: string }) {
    onSubmit(data.command);
  }

  const handleClear = (event: any) => {
    event?.preventDefault();
    const formElement = document.getElementById(
      "commandForm"
    ) as HTMLFormElement;
    formElement?.reset();
    onClear();
  };

  return (
    <form id="commandForm" onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <div className={styles.form}>
        <input
          type="text"
          id="command"
          autoComplete="off"
          required
          className={styles.formInput}
          {...register("command", {
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 2" },
            maxLength: { value: 100, message: "Maximum length is 100" },
          })}
        />
        <label htmlFor="command" className={styles.formLabel}>
          <span className={styles.formLabelContent}>How can I help you?</span>
        </label>
      </div>
      {errors?.command && (
        <span className={styles.formInput__error}>
          {errors?.command?.message}
        </span>
      )}

      <div className={styles.buttonContainer}>
        <UtilityButton
          type="button"
          isDisabled={!isValid}
          onClick={handleClear}
        >
          Clear
        </UtilityButton>
        <UtilityButton isDisabled={!isValid} type="submit">
          Predict
        </UtilityButton>
      </div>
    </form>
  );
}
