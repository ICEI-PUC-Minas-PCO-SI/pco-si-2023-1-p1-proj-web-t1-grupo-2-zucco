<div style="background-color: #ff0a0a">
# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Roberto Souza, de 43 anos, um trabalhador comum, caminhoneiro, que tem essa profissão por gostar de dirigir, e não tem muito contato com tecnologia. Roberto busca continuar fazendo um trabalho eficiente pela empresa, continuar fazendo suas viagens pelo Brasil em seu caminhão, e, quem sabe, receber um aumento por sua eficiência na empresa. 

Ricardo Moura, de 28 anos, que trabalha na área de logística da empresa. Ricardo é um homem comum, gosta de sair do trabalho e jogar futebol e videogames. Ricardo é bastante eficiente em seu trabalho, e pensa em subir de cargo na empresa. Além disso, Ricardo é extremamente familiarizado com tecnologia, o que com certeza o ajudará a subir bem na empresa. 

Rafaela Oliveira, de 27 anos, trabalha em uma rede de supermercados que contratou o serviço de frete da empresa. Rafaela adora sair aos fins de semana, e seu maior hobby é assistir séries, principalmente após sair do trabalho. Além disso, é casada e pensa em desenvolver uma boa carreira na empresa, já que não pensa em mudar de cidade ou país. Rafaela tem uma média familiaridade com tecnologia. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve incluir uma estrutura de navegação clara e fácil de usar, para ajudar os usuários a encontrar o que estão procurando rapidamente | ALTA | 
|RF-002| O site deve permitir que os usuários preencham formulários, como formulários de contato, formulários de registro e formulários de requisição, e enviar essas informações com segurança por email para a empresa   | ALTA |
|RF-003|Solicitar uma cotação de frete através do preenchimento de um formulário | ALTA |
|RF-004|Solicitar uma coleta através do preenchimento de um formulário | ALTA |
|RF-005|Cadastro de curriculo (anexar documento) através do preenchimento de um formulário | MEDIA |
|RF-006|O site deve fornecer informações detalhadas sobre a empresa, incluindo sua história, missão e valores | ALTA |
|RF-007|O site deve incluir páginas estáticas, como páginas de informações e contato | ALTA |
|RF-008|O sistema deve ter botões direcionando para as páginas do site | ALTA |
|RF-009|O sistema deve ter a geolocalização das unidades (matriz/filiais) - Infraestrutura | ALTA |
|RF-010|O site deve fornecer informações sobre os serviços de transporte oferecidos, como tipos de carga aceitos, regiões atendidas, prazos de entrega e valores de frete e variações de meios de transportes | ALTA |
|RF-011|Deve ser possível entrar em contato com direcionamento de mensagem para o email ou chat online direto com atendente/funcionário | MEDIA |
|RF-012|Deve disponibilizar opções de comentários/ avaliações | BAIXA |
|RF-013|O site deve ter integração de mídia social, redirecionado e permitindo que os usuários vejam e sigam as contas de mídia social do site | BAIXA |
|RF-014|O site deve incluir imagens e vídeos relevantes que complementem o conteúdo do site | ALTA |
|RF-015|O site deve incluir suporte a arquivos de vídeo, foto e outras formas de mídia, como galerias de fotos | MEDIA |
|RF-016|O site pode fornecer informações sobre serviços adicionais oferecidos, como armazenamento e seguro de carga | MEDIA |
|RF-017|O site pode permitir que os usuários personalizem o estilo da página, como botão que muda as cores do site para o modo noturno | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  ALTA |
|RNF-003| O site deve ficar fora do ar no máximo 3 horas por ano |  ALTA |
|RNF-004| Todos os formularios devem ter validação de dados que filtram comandos html e javascript |  ALTA |
|RNF-005| O Chat bot deve atender o ser instantâneo e ser capaz de atender as principais duvidas do cliente  |  ALTA |
|RNF-006| As informações da empresa devem ser asseguradas pela LGPD  |  ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Utilizar as seguintes tecnologias HTML, CSS, JAVASCRIPT, JSON, Local Storage e AJAX|
|04| O gasto máximo com o site tem que ser de R$00,00|
|05| Trabalhar com a paleta de cores e fontes definidas pela empresa|


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
