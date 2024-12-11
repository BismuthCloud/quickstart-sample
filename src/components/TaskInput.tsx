import React, { useState } from 'react';
import { Task } from '../types';

interface TaskInputProps {
    onAddTask: (task: Task) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!text.trim()) return;

        const newTask: Task = {
            id: Date.now().toString(),
            text: text.trim(),
            completed: false
        };

        onAddTask(newTask);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-input">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className="task-input__field"
            />
            <button 
                type="submit" 
                disabled={!text.trim()}
                className="task-input__button"
            >
                Add Task
            </button>
        </form>
    );
};