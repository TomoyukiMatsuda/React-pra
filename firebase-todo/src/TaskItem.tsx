import { db } from "./firebase";
import React, {useState} from "react";
import {Grid, ListItem, TextField} from "@material-ui/core";
import {DeleteOutlined, EditOutlined} from "@material-ui/icons";
import styles from "./TaskItem.module.css";

interface Props {
  id: string;
  title: string;
}

const TaskItem: React.FC<Props> = (props) => {
  // タスクタイトルのstateを持っておく（初期値をもとのタイトル）
  const [title, setTitle] = useState(props.title);
  const editTask = () => {
    db.collection("tasks").doc(props.id).set({ title: title }, { merge: true });
  };
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete();
  };

  return (
    <div>
      <ListItem>
        <h2>□ {props.title}</h2>
        <Grid container justify={"flex-end"}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            label="編集タスク"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </Grid>
        <button className={styles.taskitem__icon} onClick={editTask}>
          <EditOutlined />
        </button>
        <button className={styles.taskitem__icon} onClick={deleteTask}>
          <DeleteOutlined />
        </button>
      </ListItem>
    </div>
  )
}

export default TaskItem;
