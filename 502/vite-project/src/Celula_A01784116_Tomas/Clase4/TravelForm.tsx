import { useReducer, ChangeEvent, FormEvent } from 'react';

// Tipos para el estado y las acciones
type FormState = {
  destination: string;
  reason: string;
  date: string;
};

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof FormState; value: string }
  | { type: 'RESET' };

// Estado inicial
const initialForm: FormState = {
  destination: '',
  reason: '',
  date: '',
};

// Reducer
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialForm;
    default:
      return state;
  }
};

const TravelForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Travel Request:', form);
    dispatch({ type: 'RESET' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name as keyof FormState, value: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Travel Request</h2>

      <label htmlFor="destination">Destination</label>
      <input
        id="destination"
        name="destination"
        type="text"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <label htmlFor="reason">Reason</label>
      <input
        id="reason"
        name="reason"
        type="text"
        placeholder="Reason"
        value={form.reason}
        onChange={handleChange}
      />

      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TravelForm;
