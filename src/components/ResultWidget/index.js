import Widget from "../Widget";

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>Tela de Resultado</Widget.Header>
      <Widget.Content>
        <p>
          Voce Acertou{" "}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}{" "}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index + 1}ª Pergunta - Resultado:
              {result === true ? "Acertou!" : "Errou!"}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
