import styled from "styled-components";
import Widget from "../Widget";

const ListPlayers = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  li {
    list-style: none;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => `${theme.colors.primary}60`};
  }
`;

function ResultWidget({ name, results }) {
  return (
    <Widget>
      <Widget.Header>Resultado</Widget.Header>
      <img
        src="https://media.tenor.com/images/b2202d792f37bbe9f6397b60e93ca66d/tenor.gif"
        alt=""
      />
      <Widget.Content>
        <span>Mandou bem, {name}!</span>
        <h3>
          Você fez{" "}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 100;
            }
            return somatoriaAtual;
          }, 0)}{" "}
          pontos, parabéns!
        </h3>
        <ListPlayers>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index + 1}ª Pergunta - Resultado:
              {result === true ? "Acertou!" : "Errou!"}
            </li>
          ))}
        </ListPlayers>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
