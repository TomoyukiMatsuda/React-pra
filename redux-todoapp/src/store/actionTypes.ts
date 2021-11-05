// action types
// 一意となるキーを指定するので、Actionが増えるたびにここにキーを書いていく

export const ActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  countReset: "COUNT_RESET",
  addTodo: "ADD_TODO",
  deleteTodo: "DELETE_TODO",
  deleteAllTodo: "DELETE_ALL_TODO",
  openModal: "OPEN_MODAL",
  closeModal: "CLOSE_MODAL",
} as const;
