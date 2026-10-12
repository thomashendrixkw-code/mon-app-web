import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
        className="flex-1 p-3 rounded-lg bg-surface border border-zinc-700 focus:ring-2 focus:ring-primary-500 focus:outline-none text-slate-200 placeholder-zinc-500 transition-all duration-200"
      />
      <button
        type="submit"
        className="px-4 py-3 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Ajouter la tâche"
      >
        <Plus className="w-5 h-5" />
      </button>
    </form>
  );
}
