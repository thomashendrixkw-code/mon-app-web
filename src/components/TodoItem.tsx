import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types';
import { cn } from '../lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
  return (
    <li
      className={cn(
        'flex items-center justify-between p-3 rounded-lg bg-surface border border-zinc-700 transition-all duration-200',
        todo.completed ? 'opacity-70' : ''
      )}
    >
      <button
        onClick={() => onToggleComplete(todo.id)}
        className={cn(
          'flex items-center gap-3 flex-1 text-left',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md -ml-3 pl-3 py-1'
        )}
      >
        <div
          className={cn(
            'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0',
            todo.completed ? 'bg-primary-500 border-primary-500' : 'border-zinc-500 hover:border-zinc-400'
          )}
        >
          {todo.completed && <Check className="w-3 h-3 text-white" />}
        </div>
        <span
          className={cn(
            'text-slate-200 text-base',
            todo.completed ? 'line-through text-zinc-500' : ''
          )}
        >
          {todo.text}
        </span>
      </button>

      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-zinc-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Supprimer la tâche"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
}
