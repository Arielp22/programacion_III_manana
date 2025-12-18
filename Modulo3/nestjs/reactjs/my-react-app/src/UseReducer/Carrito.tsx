import { useReducer } from 'react';

type Product = {
  id: number;
  name: string;
};

type State = Product[];

type Action =
  | { type: 'add'; product: Product }
  | { type: 'remove'; id: number }
  | { type: 'clear' };

const initialState: State = [];

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      return state.filter(p => p.id !== action.id);
    case 'clear':
      return [];
    default:
      return state;
  }
}

export default function Carrito() {
  const [carrito, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'add', product: { id: 1, name: "Camisa" } })}>
        Agregar Camisa
      </button>
      <button onClick={() => dispatch({ type: 'add', product: { id: 2, name: "Pantalón" } })}>
        Agregar Pantalón
      </button>
      <button onClick={() => dispatch({ type: 'clear' })}>Vaciar Carrito</button>

      <ul>
        {carrito.map(p => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => dispatch({ type: 'remove', id: p.id })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
