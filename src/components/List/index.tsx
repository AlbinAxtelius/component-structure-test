import React from "react";
import useListState from "./useListState";
import ListItem from "./ListItem";

const List: React.FC = () => {
  const [state, functions] = useListState();

  return (
    <div>
      <h1>Me is list</h1>
      <ul>
        {state.items.map(({ id, ...props }) => (
          <ListItem key={id} {...props} />
        ))}
      </ul>
      <form onSubmit={functions.form.handleSubmit}>
        <input
          name="title"
          value={state.form.values.title}
          onChange={functions.form.handleChange}
        />
        <input
          name="description"
          value={state.form.values.description}
          onChange={functions.form.handleChange}
        />
        <input type="submit" value="Add thing" />
      </form>
    </div>
  );
};

export default List;
