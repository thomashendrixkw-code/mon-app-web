import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Todo, FilterType } from './types';

const LOCAL_STORAGE_KEY = 'todo-list-app';

// Données initiales pour le localStorage
const initialTodos: Todo[] = [
  { id: uuidv4(), text: 'Apprendre React et TypeScript', completed: false },
  { id: uuidv4(), text: 'Construire une application To-Do List', completed: true },
  { id: uuidv4(), text: 'Ajouter la persistance avec localStorage', completed: true },
  { id: uuidv4(), text: 'Créer des composants modulaires', completed: false },
  { id: uuidv4(), text: 'Implémenter les filtres de tâches (actives, complétées)', completed: false },
  { id: uuidv4(), text: 'Faire les courses (lait, pain, œufs)', completed: false },
  { id: uuidv4(), text: 'Préparer le dîner pour ce soir', completed: false },
  { id: uuidv4(), text: 'Planifier la réunion de sprint', completed: false },
  { id: uuidv4(), text: 'Lire le chapitre 3 du livre', completed: true },
  { id: uuidv4(), text: 'Répondre aux e-mails importants', completed: false }
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : initialTodos;
  });
  const [filter, setFilter] = useState<FilterType>('all');

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg mx-auto bg-surface rounded-xl shadow-2xl overflow-hidden border border-zinc-800">
        <Header />
        <div className="p-6 pt-0">
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            filter={filter}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  );
}
