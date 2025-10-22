import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';


const TaskItem = ({ task, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {task}
      {/* Delete button (OPTIONAL implementation)  */}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={onDelete}
      >
        ❌ Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TaskItem;