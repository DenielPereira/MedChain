<p align="center"><img src="https://svgshare.com/i/MNT.svg"/></p>
<hr>
<p align="center">Repositório com código fonte do frontend MedChain</p>


## Medchain
MedChain é um projeto focado na área da saúde, foco inicial do projeto é um prontuário digital com máximo de informação do paciente. Contendo todo seu histórico médico em apenas um local.

### Tecnologias utilizadas
* [Vue](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Jest](https://jestjs.io/)
* [Storybook](https://storybook.js.org/)
* [Sass](https://sass-lang.com/)

### Estrutura do projeto

| Nome do arquivo 　　　　　　　　　　　　　　| Descrição 　　　　　　　　<br><br>|
| :--  | :--         |
| `├── .storybook` (_diretorio_) | Configuração para carregar os componentes no storybook |
| `└── src ` (_diretorio_) | _Contém todo código da aplicação utilizando vue_ |
| `　　├── assets` (_diretorio_) | Diretório para armazenamento de arquivos estáticos |
| `　　　　└── fonts` (_diretorio_) | Diretório que mantém armazenado as fontes utilizadas no projeto |
| `　　├── components` (_diretorio_) | Diretório com todos componentes do vue utilizando conceito do **atomic design** |
| `　　　　└── atoms` (_diretorio_) | Diretório dos **atoms** do conceito _Atomic Design_ |
| `　　　　　　　　└── Button` (_diretorio_) | Diretório de um componente específico, nesse exemplo Button |
| `　　　　　　　　　　└── index.stories.js`| Arquivo utilizado para gerar os testes de componente no _storybook_ |
| `　　　　　　　　　　└── index.test.js` | Arquivo utilizado para testes unitários dos componentes no _jest_ |
| `　　　　　　　　　　└── index.vue` | Arquivo **vue** para construção do componente atómico |
| `　　　　└── index.js`  | Arquivo que instância todas as rotas do projeto no vue |
| `　　　　└── molecules` (_diretorio_) | Diretório dos **molecules** do conceito _Atomic Design_ |
| `　　　　└── organisms` (_diretorio_) | Diretório dos **organisms** do conceito _Atomic Design_ |
| `　　　　└── pages` (_diretorio_) | Diretório dos **pages** do conceito _Atomic Design_ |
| `　　　　└── templates` (_diretorio_) | Diretório dos **templates** do conceito _Atomic Design_ |
| `　　├── router` (_diretorio_) | Diretório com as rotas |
| `　　　　└── index.js` | Arquivo que instância todas as rotas do projeto no vue |
| `　　├── store` (_diretorio_) | Diretório que armazena todos os **dados** do vuex, seria um _data_ global |
| `　　　　└── modules.js` (_diretorio_) | Diretório que armazena cada modulo com seus *actions, mutations, defaultState e getters* do conceito do **vuex** |
| `　　　　└── index.js`  | Arquivo que instância todas as rotas do projeto no vue |
| `　　├── App.vue` | Principal arquivo **vue** para carregar todo ecossistema do vue |
| `　　├── main.js` | Instância vue principal do projeto, arquivo **core** para carregar o vue |

## Artigos para conhecer mais nossa stack frontend

* Atomic Design
  * [Bad Frost - Criador do conceito de Atomic Design 🇺🇸](https://bradfrost.com/blog/post/atomic-web-design/)
  * [UX Collection - Explicando conceito de Atomic Design 🇧🇷](https://brasil.uxdesign.cc/atomic-design-redesenhando-os-entreg%C3%A1veis-de-designers-e-desenvolvedores-da8886c7258d)