import React from 'react';
import { Task } from '../types';

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ 
    tasks, 
    onToggleTask, 
    onDeleteTask 
}) => {
    if (tasks.length === 0) {
        return (
            <div className="task-list task-list--empty">
                <p>No tasks yet. Add a task to get started!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div 
                    key={task.id} 
                    className={`task-item ${task.completed ? 'task-item--completed' : ''}`}
                >
                    <label className="task-item__label">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}
                            className="task-item__checkbox"
                        />
                        <span className="task-item__text">{task.text}</span>
                    </label>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        className="task-item__delete"
                        aria-label="Delete task"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};