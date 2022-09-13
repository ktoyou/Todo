import './components/App.css';
import Todo from './components/Lists/Todo';

const data = [
    {
        id: 0,
        title: 'Add tasks',
        isCompleted: false
    },
    {
        id: 1,
        title: 'Delete tasks',
        isCompleted: false
    },
    {
        id: 2,
        title: 'React is good!',
        isCompleted: false
    }
]

function App() {
  return (
      <div className="bg-gray-900 flex h-screen items-center justify-center">
          <div className="bg-gray-900 h-full w-screen max-w-5xl p-10">
              <h1 className="text-white font-bold text-2xl text-center mb-10">Todo App</h1>
              <Todo items={data}/>
          </div>
      </div>
  );
}

export default App;
