import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ items }) => {
  return (
    <div className={`${styles.itemsContainer} ${styles.itemsContainerBorder}`}>
    {items.map((item, index) => (
      <TodoItem key={index} name={item.name} date={item.date}/>
    ))}
    </div>
  );
};

export default TodoItems;
