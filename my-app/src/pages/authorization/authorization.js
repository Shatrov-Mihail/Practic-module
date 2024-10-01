import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState } from "react";
import styled from "styled-components";

const authFormSchema = yup.object().shape({
  Login: yup
    .string()
    .required("Заполните логин")
    .matches(/^\w+$/, "Неверно заполнен логин.Допускаются только буквы и цифры")
    .min(3, "Минимальная длина логина 3 символа")
    .max(15, "Максимальная длина логина 15 символов"),
  Password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры и знаки № %"
    )
    .min(6, "Неверно заполнен пароль. Минимум 6 символов")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
});
const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState();
  const formError = errors?.Login || errors?.Password;

  const errorMessage = formError || serverError;
  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ errors, res }) => {
      if (errors) {
        setServerError(`Ошибка запроса: ${errors}`);
      }
    });
  };

  return (
    <div className={className}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Логин" {...register("login")} />
        <input type="password" placeholder="Пароль" {...register("password")} />
        <button type="submit" disabled={!!formError}>
          Войти
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
  }
`;
