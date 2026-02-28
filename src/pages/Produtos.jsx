import { useParams } from "react-router-dom";

export default function Produtos() {
  const { categoria } = useParams();

  return (
    <div>
      <h1>Produtos</h1>

      {categoria && (
        <h2>Produto selecionado: {categoria}</h2>
      )}
    </div>
  );
}
