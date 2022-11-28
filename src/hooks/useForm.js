import { useState } from "react";
const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      //!Propiedades computadas de los objetos.
      //*(Esto con la finalidad de poder detectar que input se esta actualizando)
      [name]: value,
    });
    // console.log(initialForm)
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
