const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

interface AddTodo {
  type: string;
  text: string;
}

// actionは、何を行なうものかを識別するために"type"プロパティを必ず持つ。他のプロパティについては自由。
export const todoActionTypes = [ADD_TODO, COMPLETE_TODO, REMOVE_TODO];

// actionを作るだけ
export const addTodo = (text: string): AddTodo => {
  return {
    type: ADD_TODO,
    text,
  };
};
