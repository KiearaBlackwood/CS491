import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './components/Tile.jsx';
import Card1 from './components/Card1.jsx';
import Counter2 from './components/Counter2.jsx';
import Counter3 from './components/Counter3.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Card, Form, InputGroup, Button, ListGroup, Row, Col } from 'react-bootstrap';
import TaskItem from './TaskItem'; // Component to display individual tasks

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([
    'Go out',
    'Go home',
    'Go to bed',
    'Do hw',
    'Prepare exam'
  ]); 

  // State to hold the current input value
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      // Add the new task to the end of the list 
      setTasks([...tasks, newTask.trim()]);
      setNewTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tile>
        <Card1 name= "CC1" idd="1"></Card1>
        <Card1 name= "CC2" idd="2"></Card1>
      </Tile>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Button></Button>

       <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={10} lg={10}>
          <Card className="shadow-lg">
            <Card.Header className="text-center bg-primary text-white">
              {/* Add a title to the user interface  */}
              <h1 className="mb-0">To-Do List </h1>
            </Card.Header>
            <Card.Body>
              {/* Input for new task and Add button */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter a task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleAddTask();
                  }}
                />
                <Button variant="success" onClick={handleAddTask}>
                  + {/* Button to add the task] */}
                </Button>
              </InputGroup>

              {/* List of Tasks */}
              <ListGroup>
                {tasks.map((task, index) => (
                  <TaskItem
                    key={index}
                    task={task}
                    // Pass the delete handler to the child component
                    onDelete={() => handleDeleteTask(index)}
                  />
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App

