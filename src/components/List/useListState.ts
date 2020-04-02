import { useState } from "react";
import {
  ListItem,
  ListItemBase,
  ListValidationSchema,
  useListStateDefinition,
  useListStateValues,
  useListStateFunctions
} from "./ListTypes";
import { useFormik, FormikHelpers } from "formik";

const useListState = (): useListStateDefinition => {
  const [items, setItems] = useState<ListItem[]>([]);

  const addItem = (item: ListItemBase) => {
    setItems(i => [...i, { ...item, id: Date.now().toString() }]);
  };

  const onSubmit = (
    values: ListItemBase,
    formikHelpers: FormikHelpers<ListItemBase>
  ) => {
    addItem({ ...values });
    formikHelpers.resetForm();
  };

  const { values, errors, handleSubmit, handleChange } = useFormik<
    ListItemBase
  >({
    validationSchema: ListValidationSchema,
    initialValues: {
      description: "",
      title: ""
    },
    onSubmit,
    isInitialValid: false
  });

  const state: useListStateValues = {
    items,
    form: { errors, values }
  };

  const functions: useListStateFunctions = {
    addItem,
    form: {
      handleSubmit,
      handleChange
    }
  };

  return [state, functions];
};

export default useListState;
