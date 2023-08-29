
export default function Square({ value, onSquareClick }) {
  return (
    <button className="border-2 border-white float-left text-2xl font-bold leading-8 h-16 -mr-px -mt-px text-center w-16 text-white" onClick={onSquareClick}>
      {value}
    </button>
  );
}