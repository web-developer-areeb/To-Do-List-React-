import TodosForm from '../components/TodosForm';
import TodosList from '../components/TodosList';


const Home = ({ onFormSubmit, todoItems, onDelete, onEditClick, handleTodoStatus }) => {
    return (
        <div>
            <TodosForm onFormSubmit={onFormSubmit} />
            <TodosList
                todoItems={todoItems}
                onDelete={onDelete}
                onEditClick={onEditClick}
                handleTodoStatus={handleTodoStatus}

            />
        </div>
    );
};

export default Home;