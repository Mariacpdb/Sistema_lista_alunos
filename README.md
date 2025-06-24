#  Sistema de Análise de Notas

Este projeto é uma solução para o desafio proposto no processo seletivo da DTI Digital. O sistema permite que um professor, Carlos, insira os dados de notas e frequência de seus alunos para obter uma análise completa e automatizada, identificando pontos de atenção e o desempenho geral da turma.

## Decisões de Projeto

* **Arquitetura:** Optei por uma arquitetura **Frontend-only** utilizando React. Toda a lógica de negócio, desde o parsing dos dados de entrada até os cálculos e análises, está contida na própria aplicação cliente. Esta abordagem foi escolhida por ser ágil e perfeitamente adequada ao escopo do problema, que não exige persistência de dados em um banco de dados.

* **Stack Tecnológica:**
    * **Framework:** React (criado com Vite para um ambiente de desenvolvimento rápido).
    * **Estilização:** Tailwind CSS foi utilizado para criar uma interface limpa, moderna e responsiva de forma eficiente, sem a necessidade de escrever CSS customizado.
    * **Gerenciamento de Estado:** Foram utilizados os hooks nativos do React (`useState`, `useEffect`), que são suficientes para gerenciar o estado simples da aplicação (texto de entrada, resultados e erros).

* **Lógica Principal:** Conforme solicitado, a lógica central foi implementada do zero. Uma função `processStudentData` centraliza o parsing, a validação, o cálculo e a filtragem dos dados, garantindo uma separação clara das responsabilidades e facilitando a manutenção.

## Premissas Assumidas

1.  **Formato da Entrada:** O sistema espera que cada linha de entrada siga estritamente o formato `<Nome> <Nota1> <Nota2> <Nota3> <Nota4> <Nota5> <Frequencia%>`.
    * O nome do aluno deve ser uma única palavra (não pode conter espaços).
    * As notas são números (inteiros ou decimais) entre 0 e 10.
    * A frequência é um número seguido do caractere `%` (ex: `85%`).

2.  **Cálculo da "Média da Turma"**: A análise de "alunos com média acima da média da turma" considera a "média da turma" como a **média aritmética das médias individuais de cada aluno**. Esta é a interpretação mais comum para uma "média geral" de desempenho.

3.  **Tratamento de Erros:** O sistema possui uma validação robusta para o formato de entrada. Caso uma linha não siga o padrão esperado ou contenha valores inválidos (notas fora do intervalo, texto em vez de número), uma mensagem de erro clara e específica será exibida ao usuário.

4.  **Não Persistência de Dados:** Os dados são processados em memória a cada clique no botão "Processar". A aplicação não armazena as informações, sendo reiniciada a cada recarregamento da página.

## Como Executar o Sistema

Para executar este projeto localmente, você precisará ter o Node.js e o npm (ou yarn) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Mariacpdb/Sistema_lista_alunos.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-do-repositorio
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

* **Upload de Arquivo:** Implementar a funcionalidade de upload de arquivos `.txt` ou `.csv` para facilitar a inserção de dados de muitos alunos.
* **Persistência Local:** Utilizar `localStorage` para salvar os dados inseridos, permitindo que o professor não perca seu trabalho ao fechar a aba do navegador.
* **Edição em Tabela:** Permitir a edição dos dados dos alunos diretamente em uma tabela na interface, oferecendo uma experiência de usuário mais rica.
* **Backend Completo:** Para uma solução mais escalável, um backend (ex: com Node.js/Express) poderia ser criado para gerenciar e persistir os dados em um banco de dados (como PostgreSQL ou MongoDB), permitindo o gerenciamento de múltiplas turmas e históricos.
