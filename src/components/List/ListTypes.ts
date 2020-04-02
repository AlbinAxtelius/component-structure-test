import * as Yup from "yup";
import { FormikErrors } from "formik";

export interface ListItemBase {
  title: string;
  description: string;
}

export interface ListItem extends ListItemBase {
  id: string;
}

export const ListValidationSchema = Yup.object<ListItemBase>({
  title: Yup.string().required(),
  description: Yup.string().required()
});

export type useListStateDefinition = [
  useListStateValues,
  useListStateFunctions
];

export interface useListStateValues {
  items: ListItem[];
  form: {
    values: ListItemBase;
    errors: FormikErrors<ListItemBase>;
  };
}

export interface useListStateFunctions {
  addItem: (item: ListItemBase) => void;
  form: {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
      eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  };
}
