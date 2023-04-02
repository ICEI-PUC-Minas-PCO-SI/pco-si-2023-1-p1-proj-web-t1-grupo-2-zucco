<div style="background-color: #ff0a0a">
## Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Roberto Souza, 66 anos, caminhoneiro, escolheu essa profissão por querer seguir os passos de seu pai. Roberto não tem muito contato com tecnologia, mas tudo que sabe aprendeu graças a sua neta. Ele quer continuar fazendo um trabalho eficiente pela empresa, e realizando assim, mais viagens pelo Brasil em seu caminhão, e, quem sabe, receber um aumento por sua eficiência. 

Ricardo Moura, 28 anos, trabalha como Analista de Logística na empresa. Ricardo é um homem divertido, em seu tempo livre gosta de jogar futebol e videogames. Ricardo é bastante eficiente em seu trabalho, e pensa em subir de cargo na empresa. Além disso, Ricardo é extremamente familiarizado com tecnologia, o que com certeza o ajudará a ser promovido. 

Rafaela Oliveira, 27 anos, trabalha em uma rede de supermercados que contratou o serviço de frete da empresa. Rafaela adora sair aos fins de semana, e seu maior hobby é assistir séries, principalmente após sair do trabalho. Além disso, é casada e pensa em desenvolver uma boa carreira na empresa, já que não pensa em mudar de cidade ou país. Rafaela tem uma média familiaridade com tecnologia.

José Carlos, 33 anos, é casado e tem uma filha. José trabalha como ajudante de carga e descarga, e faz de tudo para conseguir pagar uma boa escola para sua filha de 4 anos. José busca aumentar a sua comunicação com a empresa ao viajar levando as cargas, para que o tempo perdido comunicando local da carga e previsão de chegada diminua, e, consequentemente, o tempo da viagem também diminua, o que lhe daria mais tempo para realizar outras viagens, ganhar mais dinheiro, e conseguir continuar paga uma boa escola para sua filha. 

Felipe Garcia é Gerente de Logística, está há mais de 7 anos na Zucco. Felipe é casado, e não tem filhos, já foi promovido dentro da empresa algumas vezes por sua grande agilidade e eficiência em calcular rotas e fretes. Felipe agora trabalha supervisionando a área de logística, analisando se não está ocorrendo nenhum problema nas entregas, enviando informações sobre acidentes e paralisações nas estradas para os caminhoneiros da empresa, e precisa de uma plataforma que consiga lhe proporcionar uma comunicação mais rápida com os caminhoneiros, para que continue sendo o mais eficiente possível em seu trabalho. 

Ana Flávia Marques é uma mulher de 53 anos, solteira, dona de uma grande rede de supermercados no sul de Minas Gerais. Ana não é casada e não possui filhos, porém, ajuda a cuidar das duas filhas de sua irmã mais nova, que acabou perdendo o marido e tem passado por muitas dificuldades. Ana está na busca por uma empresa que transporte as mercadorias de seu supermercado e que tenha uma plataforma fácil de se utilizar e monitorar as cargas que seus funcionários encomendaram, para que ela continue lucrando bem, e ajudando sua irmã na criação de suas sobrinhas.  
  
<img src="img/diagrama (2).png">

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Caminhoneiro|Necessito de algo que eu possa notificar a empresa onde eu trabalho|Para que ela possa saber meu trajeto ao longo das entregas
|Administrador do sistema|Preciso de algo que possa me dar informações sobre como esta transcorrendo as entregas da empresa|Para poder informar ao cliente onde esta seu produto e para saber como todos os caminhões de transporte estão|
|Funcionária e supermercado/Contratante|Gostaria de algo que me mantivesse 100% do tempo informada sobre onde estão as minhas mercadorias que estão sendo transportadas|Para que eu possa me sentir segura e despreocupada se irei receber as minhas encomendas|
|Supervisor de logística|Algo que me mantenha em contato direto com os caminhoneiros e contratantes de forma fácil|Para facilitar o meu trabalho e aumentar minha eficiência
|Ajudante de caminhoneiro|Algo que facilite minha comunicação com a empresa|Para diminuir o tempo perdido comunicando sobre a carga e, consequentemente, diminuir o número de horas da viagem
| Dona de redes de supermercado/Contratante|Uma empresa que transporte minhas mercadorias com cuidado com plataforma fácil e rápida de usar|Para que os produtos do meu supermercado cheguem bem ao consumidor final e eu continue fazendo um bom trabalho


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----|--------|
|RF-001| O site deve incluir uma estrutura de navegação clara e fácil de usar, para ajudar os usuários a encontrar o que estão procurando rapidamente | ALTA | Raul |
|RF-002| O site deve permitir que os usuários preencham formulários, como formulários de contato, formulários de registro e formulários de requisição, e enviar essas informações com segurança por email para a empresa   | ALTA | Arthur |
|RF-003|Solicitar uma cotação de frete através do preenchimento de um formulário | ALTA | Alice |
|RF-004|Solicitar uma coleta através do preenchimento de um formulário | ALTA | Nicole |
|RF-005|Cadastro de curriculo (anexar documento) através do preenchimento de um formulário | MEDIA | Matheus |
|RF-006|O site deve fornecer informações detalhadas sobre a empresa, incluindo sua história, missão e valores | ALTA | Nicole |
|RF-007|O site deve incluir páginas estáticas, como páginas de informações e contato | ALTA | Alice |
|RF-008|O sistema deve ter botões direcionando para as páginas do site | ALTA | Rafael |
|RF-009|O sistema deve ter a geolocalização das unidades (matriz/filiais) - Infraestrutura | ALTA | Raul |
|RF-010|O site deve fornecer informações sobre os serviços de transporte oferecidos, como tipos de carga aceitos, regiões atendidas, prazos de entrega e valores de frete e variações de meios de transportes | ALTA | Matheus |
|RF-011|Deve ser possível entrar em contato com direcionamento de mensagem para o email ou chat online direto com atendente/funcionário | MEDIA | Arthur |
|RF-012|Deve disponibilizar opções de comentários/ avaliações | BAIXA | Nicole |
|RF-013|O site deve ter integração de mídia social, redirecionado e permitindo que os usuários vejam e sigam as contas de mídia social do site | BAIXA | Matheus |
|RF-014|O site deve incluir imagens e vídeos relevantes que complementem o conteúdo do site | ALTA | Rafael |
|RF-015|O site deve incluir suporte a arquivos de vídeo, foto e outras formas de mídia, como galerias de fotos | MEDIA | Alice |
|RF-016|O site pode fornecer informações sobre serviços adicionais oferecidos, como armazenamento e seguro de carga | MEDIA | Raul |
|RF-017|O site pode permitir que os usuários personalizem o estilo da página, como botão que muda as cores do site para o modo noturno | BAIXA | Rafael |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | ALTA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  ALTA |
|RNF-003| O site deve ficar fora do ar no máximo 3 horas por ano |  ALTA |
|RNF-004| Todos os formularios devem ter validação de dados que filtram comandos html e javascript |  ALTA |
|RNF-005| O Chat bot deve atender o ser instantâneo e ser capaz de atender as principais duvidas do cliente  |  ALTA |
|RNF-006| As informações da empresa devem ser asseguradas pela LGPD  |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Utilizar as seguintes tecnologias HTML, CSS, JAVASCRIPT, JSON CRUD server, Local Storage e AJAX|
|04| O gasto máximo com o site tem que ser de R$00,00|
|05| Trabalhar com a paleta de cores e fontes definidas pela empresa|
