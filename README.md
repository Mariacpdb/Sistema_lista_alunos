# Sistema de Análise de Notas e Frequência

Este projeto é uma solução para o desafio proposto no processo seletivo da DTI Digital. O sistema permite que um professor, Carlos, insira os dados de notas e frequência de seus alunos através de um formulário interativo para obter uma análise completa e automatizada, identificando pontos de atenção e o desempenho geral da turma.


## Screenshot da Aplicação

![Pré-visualização da Aplicação Funcionando](."/src/assets/Captura de tela 2025-06-23 231755.png")

## Decisões de Projeto

* **Arquitetura:** Optei por uma arquitetura **Frontend-only** utilizando React. Toda a lógica de negócio, desde a manipulação do formulário até os cálculos e análises, está contida na própria aplicação cliente. Esta abordagem foi escolhida por ser ágil e perfeitamente adequada ao escopo do problema, que não exige persistência de dados.

* **Stack Tecnológica:**
    * **Framework:** React (criado com Vite para um ambiente de desenvolvimento rápido e moderno).
    * **Estilização:** Foi utilizada a estilização padrão do Vite com CSS puro, focando na funcionalidade e clareza da interface.
    * **Gerenciamento de Estado:** Foi utilizado o hook nativo do React, `useState`, para gerenciar de forma eficiente o estado da aplicação (a lista de alunos).

* **Lógica Principal:** Conforme solicitado, a lógica central foi implementada do zero. A estrutura de componentes do React foi utilizada para separar responsabilidades: o estado principal e os cálculos residem no componente `App`, enquanto componentes filhos (`ListaAlunos`, `EstatisticasTurma`, `FormularioAluno`) são responsáveis pela exibição e coleta de dados, respectivamente, comunicando-se através de `props`.

## Premissas Assumidas

1.  **Formato da Entrada:** O sistema utiliza um formulário estruturado para a entrada de dados, garantindo que o usuário insira as informações nos campos corretos. O formulário inclui validações básicas do HTML5 (`required`, `min`, `max`) para guiar o preenchimento correto.
2.  **Cálculo da "Média da Turma":** A análise de "alunos com média acima da média da turma" considera a "média da turma" como a média aritmética das médias individuais de cada aluno.
3.  **Não Persistência de Dados:** Os dados são processados em memória. A aplicação não armazena as informações após o recarregamento da página, focando na análise da sessão atual.

## Como Executar o Sistema

Para executar este projeto localmente, você precisará ter o Node.js e o npm (ou yarn) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Mariacpdb/Sistema_lista_alunos.git](https://github.com/Mariacpdb/Sistema_lista_alunos.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Sistema_lista_alunos
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse o endereço fornecido no terminal (geralmente `http://localhost:5173`).

## Possíveis Melhorias Futuras

* **Deleção de Alunos:** Implementar a funcionalidade de deletar um aluno da lista.
* **Persistência Local:** Utilizar `localStorage` para salvar os dados inseridos, permitindo que o professor não perca seu trabalho ao fechar a aba do navegador.
* **Estilização Avançada:** Aplicar uma estilização mais elaborada com CSS ou uma biblioteca de componentes para melhorar a experiência visual.
* **Backend Completo:** Para uma solução mais escalável, um backend (ex: com Node.js/Express) poderia ser criado para gerenciar e persistir os dados em um banco de dados, permitindo o gerenciamento de múltiplas turmas e históricos.
