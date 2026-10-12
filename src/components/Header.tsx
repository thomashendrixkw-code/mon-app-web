import React from 'react';
import { ListTodo } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center gap-3 p-4 bg-surface rounded-t-lg border-b border-zinc-700/50 mb-6">
      <ListTodo className="w-7 h-7 text-primary-400" />
      <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Ma To-Do List</h1>
    </header>
  );
}
