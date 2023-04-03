<div style="background-color: #ff0a0a">
  
## Especificações do Projeto

  Ao desenvolver um projeto de uma aplicação, é essencial considerar uma variedade de fatores que afetam sua funcionalidade e usabilidade. Entre esses fatores, destacam-se as personas, os requisitos funcionais, requisitos não funcionais e as restrições. A abordagem de personas, envolve a criação de personagens fictícios que representam os usuários-alvo da aplicação. Ao compreender as necessidades e objetivos desses usuários, é possível desenvolver uma aplicação mais eficaz e personalizada. Os requisitos funcionais são as funcionalidades específicas que o site deve ter para atender às necessidades dos usuários, como a capacidade de pesquisar, navegar e nesse caso, por exemplo, solicitar a cotação de fretes. Por outro lado, os requisitos não funcionais incluem características que afetam a usabilidade, desempenho e segurança do site, como a velocidade de carregamento, a compatibilidade com dispositivos móveis e a segurança dos dados. As restrições podem incluir limitações de tempo, orçamento, tecnologia ou recursos humanos. Ao considerar todas essas questões, é possível criar um projeto de site mais eficiente e eficaz. Para especificar o projeto, foi definido que seria usado diagrama de personas. Essa ferramenta ajuda a visualizar e planejar as funcionalidades e interfaces do site de acordo com a necessidade dos usuários. 
  
  Para a reestruturação dessa aplicação, serão necessárias tecnologias modernas e eficazes que garantam uma experiência do usuário otimizada. Dentre as tecnologias que serão utilizadas, destacam-se: o HTML, CSS e JavaScript, que são fundamentais para a construção e estilização da interface gráfica do usuário. Além disso, o JSON e o CRUD server serão utilizados para gerenciar as informações e dados do aplicativo, tornando o processo mais eficiente e organizado. O Local Storage e o AJAX serão utilizados para armazenar informações e realizar atualizações em tempo real, proporcionando uma experiência de usuário mais fluida e interativa.
  
  Com a utilização dessas tecnologias, a reestruturação da aplicação poderá melhorar significativamente a experiência do usuário e a eficiência dos serviços prestados. Além disso, essas tecnologias também podem trazer benefícios em termos de segurança, escalabilidade e manutenção do sistema, tornando a aplicação mais robusta e confiável.


## Personas

Roberto Souza tem 43 anos e é caminhoneiro. Ele optou por essa profissão porque gosta de dirigir e não tem muito contato com tecnologia. Roberto preza pela eficiência do seu trabalho, já que recebe por produtividade, ou seja, quanto mais entregas conseguir fazer, mais irá receber. 

Ricardo Moura tem 28 anos e atua como Analista de Logística na empresa. Em seu tempo livre gosta de jogar futebol e videogame. Bastante eficiente em seu trabalho pensa em ser promovido, ele é extremamente familiarizado com tecnologia, o que com certeza o ajudará a atingir seu objetivo.

Rafaela Oliveira tem 27 anos e trabalha em uma rede de supermercados. Ela contratou o serviço de frete da empresa para suas necessidades pessoais. Rafaela gosta de sair aos fins de semana e assistir séries é o seu maior hobby. Casada e com o objetivo de desenvolver uma carreira de sucesso na empresa, ela busca transportadoras com bom custo-benefício e atendimento eficiente. Embora não seja especialista em tecnologia, Rafaela tem uma familiaridade média.

José Carlos tem 33 anos, é casado e tem uma filha de 4 anos. Ele trabalha como Auxiliar de Carga e Descarga e se esforça para pagar uma boa escola para a filha. Para otimizar o tempo de suas viagens e realizar mais entregas, José busca melhorar a comunicação com a empresa enquanto viaja, diminuindo o tempo perdido comunicando o local da carga e previsão de chegada. Dessa forma, ele conseguiria realizar mais viagens, ganhar mais dinheiro e manter sua filha em uma boa escola.

Felipe Garcia é Gerente de Logística há mais de 7 anos na Zucco. Felipe é casado, e não tem filhos, mas já foi promovido dentro da empresa algumas vezes por sua grande agilidade e eficiência em calcular rotas e fretes. Felipe agora trabalha supervisionando a área de logística, analisando se não está ocorrendo nenhum problema nas entregas, enviando informações sobre acidentes e paralisações nas estradas para os caminhoneiros da empresa, e precisa de uma plataforma que consiga lhe proporcionar uma comunicação mais rápida com os caminhoneiros, para que continue sendo o mais eficiente possível em seu trabalho. 

Ana Flávia Marques é uma mulher de 53 anos, solteira, dona de uma grande rede de supermercados no sul de Minas Gerais. Ana não é casada e não possui filhos, porém, ajuda a cuidar das duas filhas de sua irmã mais nova, que acabou perdendo o marido e tem passado por muitas dificuldades. Ana está na busca por uma empresa que transporte as mercadorias de seu supermercado e que tenha uma plataforma fácil de se utilizar e monitorar as cargas que seus funcionários encomendaram, para que assim, possa continuar lucrando e, ajudando sua irmã na criação de suas sobrinhas.  
  
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
|RF-001| A aplicação deve incluir uma estrutura de navegação clara e fácil de usar, para ajudar os usuários a encontrar o que estão procurando rapidamente | ALTA | Raul |
|RF-002| A aplicação deve permitir que os usuários preencham formulários, como formulários de contato, formulários de registro e formulários de requisição, e enviar essas informações com segurança por email para a empresa   | ALTA | Arthur |
|RF-003|Solicitar uma cotação de frete através do preenchimento de um formulário | ALTA | Alice |
|RF-004|Solicitar uma coleta através do preenchimento de um formulário | ALTA | Nicole |
|RF-005|Cadastro de curriculo (anexar documento) através do preenchimento de um formulário | MEDIA | Matheus |
|RF-006|A aplicação deve fornecer informações detalhadas sobre a empresa, incluindo sua história, missão e valores | ALTA | Nicole |
|RF-007|A aplicação deve incluir páginas estáticas, como páginas de informações e contato | ALTA | Alice |
|RF-008|O sistema deve ter botões direcionando para as páginas do site | ALTA | Rafael |
|RF-009|O sistema deve ter a geolocalização das unidades (matriz/filiais) - Infraestrutura | ALTA | Raul |
|RF-010|A aplicação deve fornecer informações sobre os serviços de transporte oferecidos, como tipos de carga aceitos, regiões atendidas, prazos de entrega e valores de frete e variações de meios de transportes | ALTA | Matheus |
|RF-011|Deve ser possível entrar em contato com direcionamento de mensagem para o email ou chat online direto com atendente/funcionário | MEDIA | Arthur |
|RF-012|Deve disponibilizar opções de comentários/ avaliações | BAIXA | Nicole |
|RF-013|A aplicação deve ter integração de mídia social, redirecionado e permitindo que os usuários vejam e sigam as contas de mídia social do site | BAIXA | Matheus |
|RF-014|A aplicação deve incluir imagens e vídeos relevantes que complementem o conteúdo do site | ALTA | Rafael |
|RF-015|A aplicação deve incluir suporte a arquivos de vídeo, foto e outras formas de mídia, como galerias de fotos | MEDIA | Alice |
|RF-016|A aplicação pode fornecer informações sobre serviços adicionais oferecidos, como armazenamento e seguro de carga | MEDIA | Raul |
|RF-017|A aplicação pode permitir que os usuários personalizem o estilo da página, como botão que muda as cores do site para o modo noturno | BAIXA | Rafael |


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
