import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { todo } from './models/todo.model';


export const initialState: todo[] = [
    new todo('Salvar al Mundo'),
    new todo('Un todo nuevo'),
    new todo('Vencer a Spiderman'),
    new todo('Trabajar en Ford')
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new todo(texto)]),
);