// Arquivo: src/components/EstatisticasTurma.jsx

// 1. Receba a nova prop 'alunosAcimaDaMedia'
function EstatisticasTurma({ mediasDisciplina, alunosBaixaFrequencia, alunosAcimaDaMedia }) {
  return (
    <div>
      <h2>Estatísticas da Turma</h2>

      <section>
        <h3>Média da Turma por Disciplina</h3>
        <ul>
          {mediasDisciplina.map((media, index) => (
            <li key={index}>
              Disciplina {index + 1}: {media.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Alunos com Frequência Abaixo de 75%</h3>
        {alunosBaixaFrequencia.length > 0 ? (
          <ul>
            {alunosBaixaFrequencia.map(aluno => (
              <li key={aluno.id}>
                {aluno.nome} (Frequência: {aluno.frequencia}%)
              </li>
            ))}
          </ul>
        ) : (
          // Conforme o PDF, imprima uma linha vazia (ou mensagem) se não houver alunos
          <p>Nenhum aluno com frequência abaixo de 75%.</p>
        )}
      </section>

      {/* 2. Adicione a nova seção para exibir os alunos acima da média */}
      <section>
        <h3>Alunos com Média Acima da Média da Turma</h3>
        {alunosAcimaDaMedia.length > 0 ? (
          <ul>
            {alunosAcimaDaMedia.map(aluno => (
              <li key={aluno.id}>
                {aluno.nome}
              </li>
            ))}
          </ul>
        ) : (
           // Conforme o PDF, imprima uma linha vazia (ou mensagem) se não houver alunos
          <p>Nenhum aluno com média acima da média da turma.</p>
        )}
      </section>

    </div>
  );
}

export default EstatisticasTurma;