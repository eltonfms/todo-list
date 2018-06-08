# To do List

O objetivo é ter uma _single page application_ onde o usuário pode:

- Listar e criar suas to-do lists
- Selecionar uma lista para ver/editar suas tarefas
- Adicionar/remover tarefas a esta lista
- Marcar uma tarefa com completa (ou não)

Apenas como referência, segue um screen shot com uma sugestão de design:
![to-do list](sample.jpg)

Não é necessário seguir este design/comportamento. Fique a vontade para (re)definir o design/comportamento que preferir. Por exemplo, se preferir usar checkboxes ao invés de botões que mudam de estado para indicar que uma tarefa foi concluída, tudo bem. Se quiser adicionar algo como um botão para limpar todas as tarefas concluídas, também.

Como o foco do teste é o front-end, fique livre para implementar (ou não) o back-end como desejar. Por exemplo, você pode fazer um back-end que sequer salve os dados no banco, apenas aceita as requisições e retornando resultados "fake". A linguagem também é livre (node/js, ruby, ...)

## Importante

- Pelo menos a princípio, *_NÃO_ use uma framework JS, como Angular, Vue ou React*. Você até pode enviar uma versão *adicional* da resolução deste problema usando uma destas frameworks.
- Está liberado usar jQuery ou bibliotecas utilitárias (como underscore).
- Se preferir, use uma *twitter bootstrap* ou similar.

## Será avaliado

- Obviamente, o funcionamento da aplicação.
- O uso correto do git. Por isso, registre seus passos com commits que façam sentido e com mensagens claras e objetivas. Crie branches quando achar que faz sentido.
- O README.md do projeto.
- A qualidade do código. Do nome que é dado para os elementos (classes, arquivos, recursos, ...) à separação de responsabilidades. Faça de conta que isso faz parte de um projeto que vai crescer, mas tome cuidado com a "over-engineering".
- Responsividade.
- Como você completa as lacunas desta especificação. Muita coisa não foi dita.

## Recomendações

- Testes.
- Mantenha o código limpo, simples.
- Use bem os recursos da linguagem e as ferramentas. Async/await, sass, babel, etc.
- Apresente duas versões, uma sem e outra com uma framework JS (ex: React).

