// Arquivo: src/components/FormularioAluno.jsx
import { useState } from 'react';

// Recebemos a função onAdicionarAluno como prop, vinda do App.jsx
function FormularioAluno({ onAdicionarAluno }) {
  // Usamos um único estado para guardar todos os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    notas: ['', '', '', '', ''], // Começamos com 5 strings vazias para as notas
    frequencia: ''
  });

  // Função para lidar com a mudança no nome e na frequência
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Função para lidar com a mudança em cada campo de nota
  const handleNotaChange = (index, value) => {
    // Criamos uma cópia do array de notas atual
    const novasNotas = [...formData.notas];
    // Atualizamos a nota específica pelo seu índice
    novasNotas[index] = value;
    // Atualizamos o estado com o novo array de notas
    setFormData(prevData => ({
      ...prevData,
      notas: novasNotas
    }));
  };

  // Função chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Converte os dados para os tipos corretos (números)
    const novoAluno = {
      nome: formData.nome,
      // Garante que todas as notas sejam convertidas para número, ou 0 se estiverem vazias
      notas: formData.notas.map(nota => Number(nota) || 0),
      frequencia: Number(formData.frequencia) || 0
    };

    // Chama a função do App.jsx para adicionar o aluno ao estado principal
    onAdicionarAluno(novoAluno);

    // Limpa o formulário após o envio
    setFormData({
      nome: '',
      notas: ['', '', '', '', ''],
      frequencia: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Novo Aluno</h3>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do aluno"
          required
        />
      </div>
      <div>
        <label>Notas: </label>
        {/* Criamos 5 campos de nota dinamicamente */}
        {formData.notas.map((nota, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max="10"
            value={nota}
            onChange={(e) => handleNotaChange(index, e.target.value)}
            placeholder={`Nota ${index + 1}`}
            required
            style={{ width: '60px', marginRight: '5px' }}
          />
        ))}
      </div>
      <div>
        <label>Frequência (%): </label>
        <input
          type="number"
          name="frequencia"
          min="0"
          max="100"
          value={formData.frequencia}
          onChange={handleChange}
          placeholder="Ex: 80"
          required
        />
      </div>
      <button type="submit">Adicionar Aluno</button>
    </form>
  );
}

export default FormularioAluno;