import React from "react";
import { ListItemBase } from "./ListTypes";

const ListItem: React.FC<ListItemBase> = ({ description, title }) => (
  <li className="p-2 my-1 bg-blue-100 rounded shadow">
    <h1 className="text-lg">{title}</h1>
    <p className="text-sm">{description}</p>
  </li>
);

export default ListItem;
