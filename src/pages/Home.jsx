import TodosForm from '../components/TodosForm';
import TodosList from '../components/TodosList';


const Home = ({ onFormSubmit, todoItems, onDelete, onEditClick }) => {
    return (
        <div>
            <TodosForm onFormSubmit={onFormSubmit} />
            <TodosList
                todoItems={todoItems}
                onDelete={onDelete}
                onEditClick={onEditClick}
            />
        </div>
    );
};

export default Home;