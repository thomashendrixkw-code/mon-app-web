import React from 'react';
import { Todo, FilterType } from '../types';
import { TodoItem } from './TodoItem';
import { cn } from '../lib/utils';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onFilterChange: (filter: FilterType) => void;
}

export function TodoList({ todos, filter, onToggleComplete, onDelete, onFilterChange }: TodoListProps) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="bg-surface rounded-b-lg border border-zinc-700/50 p-6">
      <div className="flex justify-center mb-6 gap-2">
        {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
              filter === f
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            )}
          >
            {f === 'all' ? 'Toutes' : f === 'active' ? 'Actives' : 'Complétées'}
          </button>
        ))}
      </div>

      {filteredTodos.length === 0 ? (
        <p className="text-center text-zinc-500 text-sm italic py-8">
          {filter === 'all'
            ? "Aucune tâche pour le moment !"
            : filter === 'active'
            ? "Toutes les tâches sont complétées !"
            : "Aucune tâche complétée."}
        </p>
      ) : (
        <ul className="space-y-3">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
