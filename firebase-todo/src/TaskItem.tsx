import React from "react";
import {ListItem} from "@material-ui/core";


interface Props {
  id: string;
  title: string;
}

const TaskItem: React.FC<Props> = (props) => {
  return (
    <div>
      <ListItem>
        <h2>□ {props.title}</h2>
      </ListItem>
    </div>
  )
}

export default TaskItem;
