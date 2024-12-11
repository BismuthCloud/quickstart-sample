import { Task } from '../types';

const STORAGE_KEY = 'todo-app-tasks';

export const saveTasks = (tasks: Task[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
    }
};

export const loadTasks = (): Task[] => {
    try {
        const tasksJson = localStorage.getItem(STORAGE_KEY);
        if (!tasksJson) return [];
        return JSON.parse(tasksJson) as Task[];
    } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        return [];
    }
};