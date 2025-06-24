// Arquivo: src/components/ListaAlunos.jsx

function ListaAlunos({ alunos }) {

  // Função para calcular a média de um array de notas
  const calcularMedia = (notas) => {
    // 'reduce' soma todos os valores do array. Começa com a soma em 0.
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length; // Retorna a soma dividida pelo número de notas
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {/* Usamos .map() para percorrer a lista de alunos */}
        {alunos.map(aluno => {
          // Para cada aluno, calculamos sua média individual
          const mediaDoAluno = calcularMedia(aluno.notas);

          // Agora, o item da lista (li) exibe todas as informações
          return (
            <li key={aluno.id}>
              {aluno.nome} - Média: {mediaDoAluno.toFixed(2)} - Frequência: {aluno.frequencia}%
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListaAlunos;