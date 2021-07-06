import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './components/addTodo';
import Todolist from './components/todoList';
import Completedtodo from './components/completedTodo';

function App() {
  return (
    <div className="contaier bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <Addtodo />
      <Todolist />
      <Completedtodo />
    </div>
  );
}

export default App;
