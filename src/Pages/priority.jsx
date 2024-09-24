import React, { useState } from 'react';
import '../styles/Display.css';
import NoPriorityIcon from '../assets/No-priority.svg';
import UrgentPriorityIcon from '../assets/Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/High Priority.svg';
import MediumPriorityIcon from '../assets/Medium Priority.svg';
import LowPriorityIcon from '../assets/Low Priority.svg';
import ThreeDotIcon from '../assets/3 dot menu.svg';
import AddIcon from '../assets/add.svg';


const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    sohomRM: [
      { id: 'CAM-2', title: 'Implement Email Notification System', description: '', type: 'Feature Request' },
      { id: 'CAM-3', title: 'Optimize Database Queries for Performance', description: '', type: 'Feature Request' }
    ],
    todo: [
      { id: 'CAM-4', title: 'Add Multi-Language Support', description: '', type: 'Feature Request' },
      { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', description: '', type: 'Feature Request' },
    ],
    inProgress: [
      { id: 'CAM-6', title: 'Enhance Search Functionality', description: '', type: 'Feature Request' },
      { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', description: '', type: 'Feature Request' },
      { id: 'CAM-1', title: 'Update User Profile Page UI', description: '', type: 'Feature Request' }
    ],
    done: [
      { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', description: '', type: 'Feature Request' },
      { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', description: '', type: 'Feature Request' },
    ],
    Canceled: [
      { id: 'CAM-10', title: 'Upgrade Server Infrastructure', description: '', type: 'Feature Request' },
      { id: 'CAM-5', title: 'Add Multi-Language Support - Enable multi-language support within the...', description: '', type: 'Feature Request' }, 
    ],
  });

  const [showForm, setShowForm] = useState({}); // Track which column is showing the form
  const [newTask, setNewTask] = useState({ id: '', title: '', description: '', type: '' });

  const handleAddClick = (column) => {
    setShowForm({ ...showForm, [column]: true });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFormSubmit = (column) => {
    setTasks({
      ...tasks,
      [column]: [...tasks[column], newTask] // Add the new task to the selected column
    });
    setNewTask({ id: '', title: '', description: '', type: '' }); // Reset form fields
    setShowForm({ ...showForm, [column]: false }); // Hide the form
  };

  const renderTasks = (status) => {
    return tasks[status].map(task => (
      <div key={task.id} className="task-card">
        <h3>{task.id}</h3>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <span>{task.type}</span>
      </div>
    ));
  };

  const renderForm = (column) => (
    <div className="task-form">
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={newTask.id}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTask.title}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTask.description}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={newTask.type}
        onChange={handleFormChange}
      />
      <button onClick={() => handleFormSubmit(column)}>Add Task</button>
    </div>
  );

  return (
    <div className="kanban-board">
      {/* Sohom Column */}
      <div className="column">
        <div className="sohom">
          <div className="done1">
            <img src={NoPriorityIcon} alt="No Priority" />
            <h4>No Prioriy <span className="task-count">{tasks.sohomRM.length}</span></h4> {/* Add task count */}
          </div>
          <div className="done2">
            <img src={AddIcon} alt="Add" onClick={() => handleAddClick('sohomRM')} />
            <img src={ThreeDotIcon} alt="Menu" />
          </div>
        </div>
        {renderTasks('sohomRM')}
        {showForm.sohomRM && renderForm('sohomRM')}
      </div>

      {/* To-Do Column */}
      <div className="column">
        <div className="sohom">
          <div className="done1">
            <img src={UrgentPriorityIcon} alt="Urgent Priority" />
            <h4>Urgent <span className="task-count">{tasks.todo.length}</span></h4> {/* Add task count */}
          </div>
          <div className="done2">
            <img src={AddIcon} alt="Add" onClick={() => handleAddClick('todo')} />
            <img src={ThreeDotIcon} alt="Menu" />
          </div>
        </div>
        {renderTasks('todo')}
        {showForm.todo && renderForm('todo')}
      </div>

      {/* In Progress Column */}
      <div className="column">
        <div className="sohom">
          <div className="done1">
            <img src={HighPriorityIcon} alt="High Priority" />
            <h4>High <span className="task-count">{tasks.inProgress.length}</span></h4> {/* Add task count */}
          </div>
          <div className="done2">
            <img src={AddIcon} alt="Add" onClick={() => handleAddClick('inProgress')} />
            <img src={ThreeDotIcon} alt="Menu" />
          </div>
        </div>
        {renderTasks('inProgress')}
        {showForm.inProgress && renderForm('inProgress')}
      </div>

      {/* Done Column */}
      <div className="column">
        <div className="sohom">
          <div className="done1">
            <img src={MediumPriorityIcon} alt="Medium Priority" />
            <h4>Medium <span className="task-count">{tasks.done.length}</span></h4> {/* Add task count */}
          </div>
          <div className="done2">
            <img src={AddIcon} alt="Add" onClick={() => handleAddClick('done')} />
            <img src={ThreeDotIcon} alt="Menu" />
          </div>
        </div>
        {renderTasks('done')}
        {showForm.done && renderForm('done')}
      </div>

      {/* Cancelled Column */}
      <div className="column">
        <div className="done1">
          <img src={LowPriorityIcon} alt="Low Priority" />
          <h4>Low <span className="task-count">{tasks.Canceled.length}</span></h4> {/* Add task count */}
        </div>
        {renderTasks('Canceled')}
        {showForm.Canceled && renderForm('Canceled')}
      </div>
    </div>
  );
}

export default KanbanBoard;
