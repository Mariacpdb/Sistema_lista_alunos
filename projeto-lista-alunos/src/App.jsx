// Arquivo: src/App.jsx

import { useState } from 'react';
import Header from './components/Header.jsx';
import FormularioAluno from './components/FormularioAluno.jsx'; // Importação do formulário
import ListaAlunos from './components/ListaAlunos.jsx';
import EstatisticasTurma from './components/EstatisticasTurma.jsx';
import './App.css';

// Função auxiliar para calcular média
const calcularMedia = (notas) => {
  if (!notas || notas.length === 0) return 0;
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
};

function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'João', notas: [7, 8, 6, 9, 10], frequencia: 80 },
    { id: 2, nome: 'Maria', notas: [5, 6, 7, 8, 9], frequencia: 70 },
    { id: 3, nome: 'Pedro', notas: [9, 9, 10, 9, 10], frequencia: 90 }
  ]);

  // Função para adicionar um novo aluno à lista
  const adicionarAluno = (novoAluno) => {
    setAlunos(alunosAtuais => [
      ...alunosAtuais,
      {
        id: Date.now(), // Cria um ID único baseado no tempo
        ...novoAluno // Adiciona os dados vindos do formulário (nome, notas, frequencia)
      }
    ]);
  };

  // --- LÓGICA DE CÁLCULO (sem alterações) ---
  const numeroDeDisciplinas = 5;
  const mediasPorDisciplina = Array(numeroDeDisciplinas).fill(0);
  if (alunos.length > 0) {
    for (const aluno of alunos) {
      for (let i = 0; i < numeroDeDisciplinas; i++) {
        mediasPorDisciplina[i] += aluno.notas[i];
      }
    }
    for (let i = 0; i < numeroDeDisciplinas; i++) {
      mediasPorDisciplina[i] /= alunos.length;
    }
  }

  const alunosComBaixaFrequencia = alunos.filter(aluno => aluno.frequencia < 75);

  let mediaGeralDaTurma = 0;
  if (alunos.length > 0) {
    const somaDasMediasIndividuais = alunos.reduce((acc, aluno) => acc + calcularMedia(aluno.notas), 0);
    mediaGeralDaTurma = somaDasMediasIndividuais / alunos.length;
  }

  const alunosAcimaDaMedia = alunos.filter(aluno => calcularMedia(aluno.notas) > mediaGeralDaTurma);

  return (
    <div>
      <Header />
      {/* Reativamos o formulário e passamos a função de adicionar */}
      <FormularioAluno onAdicionarAluno={adicionarAluno} />
      <hr />
      <ListaAlunos alunos={alunos} />
      <hr />
      <EstatisticasTurma
        mediasDisciplina={mediasPorDisciplina}
        alunosBaixaFrequencia={alunosComBaixaFrequencia}
        alunosAcimaDaMedia={alunosAcimaDaMedia}
      />
    </div>
  );
}

export default App;