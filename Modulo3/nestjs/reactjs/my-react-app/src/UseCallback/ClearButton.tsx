interface ClearButtonProps {
  onClear: () => void;
}

const ClearButton = ({ onClear }: ClearButtonProps) => {
  return <button onClick={onClear}>Limpiar</button>;
};

export default ClearButton;
