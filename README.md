# Curso Vue JS 2 - O Guia Completo
## Seção 1 e 2 - "Introdução" e Usando VueJS para interagir com a "DOM"

* https://jsfiddle.net/ - Testar seu codigo Vue online

*  Import do Vue <script src="https://unpkg.com/vue"></script>

* new Vue - Instancia do Vue que controla o template.

* el = elemento que será controlado.

* DATA: dados

* METHODS: quando um evento acontecer no html.

* COMPUTED -- sincronas// dado computado somente será reavaliado quando alguma de suas dependências for alterada.

* WATCH -- monitorando as propriedades

* {{}} double mustache // dentro tem que ser retornado uma string

### DIRETIVAS - propriedade personalizada 
* ://v-bind --- faz uma tag ser interpretado pelo vue
* //v-once --- ler esse valor apenas uma vez nao ira atualizar mais o conteudo da tag
* //v-html -- imprimir uma html puro
* @//v-on quando um evento acontecer vc vai chamar uma funcao
* //v-model garante o v bind e v on ou seja atualiza o dado e o dado atualiza a view

* setInterval - uma funcao de tempo

## Seção 3 e 4 Condicionais, Listas e Projeto 1

### DIRETIVAS

* v-if (oculta o html)

* v-else

* v-else-if

* v-show (mostra o html)

* v-for (push)(:key)

* Template Tag invisivel

* CSS: display: flex; flex-direction: column;

## Seção 5: entendendo a Instancia Vue

### Observações:

* No vue se pode controlar mais de uma instancia ao mesmo tempo porem não se pode chamar um objeto de outra instancia na outra.

* No vue voce pode mudar externamente uma instancia do Vue.

* Propriedades reativas são criadas no momento que vc passa o objeto de configuraçao para o vue. 

* Função proxy enchaminha para o local certo para ler ou modificar.

* $el: resoluçao do seletor que vc passou dentro da propriedade el.Ou seja, toda estrutura html passada no seu template

* $data: todos os dados passados na construcao da sua instancia. No data ja e criado os getters e setters de cada dado passado.

* $refs

* Template dentro da instancia Vue.

## Seção 6:Fluxo de Desenvolvimento "Real" Usando Vue CLI

* E preciso do NODE e NPM.

* Servidor Web para Desenvolvimento.

* Baixar o vue cliente: npm install -g @vue/cli

* Criar o projeto: vue create NomeDoProjeto

* Executar: npm run serve

#### Diretorios:
* Package.json dependencia e configuraçoes.
* Node Modules e uma pasta de dependencias. Para baixar la e so executar o comando npm install.
* Public contem a single page onde o processo de builds ira injetar dentro deste html.
* Src contem a main.js onde a instancia vue e criada.
* App.vue e um componente.(Scaffold)

* Como Gerar o arquivo de Build: npm run build

* Adicionando plugins: vue-cli-plugin // vue add E o nome do plugin
* Electron plugin para desktop.
* Vuetify material design

## Seção 7: Introdução aos Componentes

* Vue é um arvore de componentes, ou seja, fortemente baseada em components.

* Replicar uma mesma parte da aplicação e um componente.

* Um componente retorna apenas um unico elemento.

* O componente pode ser duplicado e cada componente tera seu proprio estado.

* A chamda do componente e case insensitive.

* O componente pode ser de registro global (Vue.component) ou não sendo criado uma const e chamando essa const na instancia vue (components).

* Para garantir que o css se aplique apenas no componente e utilizado scoped na tag style.(Se aplica ao Pai e ao Filho Direto)

* Organização de pastas: Components 	> template
					> widgets
					> user

## Seção 8: Comunicação Entre Componentes

* A comunicação direta entre o componente Pai e Filho e feito atraves da Props.

* Props: as propriedades que são suportadas por esse componente.

* No componente filho voce coloca quais propriedades voce espera receber e no componente pai voce essa propriedade.

* Para passar uma propriedade vc manda ela pela tag html do componente pai onde e referenciado o componente filho.

* Definir o tipo da propriedade sempre com letra maiuscula (String).

* Na Props pode ser colocar os seguintes propriedades: Type, Required, Default.

* A comunicação direta do Filho para o Pai é feito atraves de eventos ($emit).

* E a comunicaçao indireta do Filho para Pai é feito atraves de uma função passado do pai para o filho (Callback).

* A comunicação entre componentes Irmãos é feita atraves do componente Pai ou atraves de barramento.

## Seção 9: Uso Avançado de Components

* Backgrounds: https://uigradients.com/#Kashmir

* Ao inves de passar informação via props passar o dado por dentro do corpo do componente.Utiliza-se a tag slot.

* A estilização do slot e aplicada aos 2 componentes, podendo gerar conflito, se isso ocorrer usar o !important.

* Slot pode ter um nome definido.

* Pode ser passado mais de uma informação para slot padrao e para o nomeado.

* Os componentes podem ser renderizados dinamicamentes.

* Para manter o componente dinamico vivo deve se usar a tag keep-alive. Ele ativa e desativa o componente inves de mata-lo.

## Seção 10: Projeto #02 - Tarefas (TODO)

* Um projeto onde voce adiciona suas tarefas, marcando elas como feita ou nào.
* Não são aceitas tarefas com o mesmo nome, e as tarefas são salvas em memoria.
* Ainda tem uma barra de progresso aonde mostra a % das conclusões das tarefas.

* Para guardar uma string em memoria e so chamar a função localStorage.Porem você tem que ler a localStorage toda vez que criar o componente.

## Seção 11: Manipulando Entrada de Usuário com Formulários

* Ao criar um objeto você não precisa ter o atributo declarado.

* Lazy: Atualiza quando voce sair do campo em que está digitando.

* Trim: Tira os espaços em branco.

* Number: Se dentro da String tiver um valor numerico ele converte para Float.

* Tag "pre" preserva os espaços em branco, tanto como o Style pre.

* Checkbox usa se um array, porque e multipla seleção.

* Radio é seleção unica.

## Seção 12: Usando e Criando Diretivas

* v-text: Pega o texto e coloca dentro da tag.
* v-html: Pega uma tag e coloque dentro de outra tag.

* Para criar uma diretiva globalmente na main onde você passa o Vue.directive("Nome",{})

* Criar uma diretiva localmente você usa directives na parte dos scripts.

### Gatilhos(Hooks)
* bind(el, binding, vnode) : Quando a diretiva é interligada com elemento.
* inserted(el, binding, vnode) : Elemento inserido no nó pai
* update (el, binding, vnodem oldVNode) : Quando o componente é atualizado (antes filhos)
* componentUpdated (el, binding, vnodem oldVNode) : Quando o componente é atualizado (depois filhos)
* unbind (el, binding, vnode) : Quando a diretiva é desvinculada do elemento

* Acessar o valor da diretiva = binding.value
* Acessar o argumento = binding.agr
* Acessar os modificadores = binding.modifiers

## Seção 13: Melhorando sua App com Filtros e Mixins

* Filtros são transformações feitas em cima dos valores.

* Para declarar um filtro localmente se usa a chamada Filters. Onde uma função recebe um valor, transforma ele e o retorna.

* Para declarar uma filtro globalmente você coloca Vue.filter na main.js.

* Exemplo de Filtro e colocar a mascara em um CPF.

* No caso do CPF sempre bom colocar ele como String pois em caso numerico ele pode perder sua propriedade caso começe com 000.

* Observação quando se tem uma cadeia de filtros o resultado do filtro anterior e passado para os demais sucessivamente.

* Mixins são formas de Re-Uso baseado em composição.

* Faz a chamada dos mixins colocando um array onde e passado todos os mixins que serão usados.

* O componente tem prioridade em relação ao mixin.

## Seção 14: Adicionando Animações e Transições

* Transition tem como objetivo envolver o elemento o qual você quer fazer uma transição ou uma animação.
* Os elementos não sao envolvidos por uma tag.

* Adicionou o plugin de BootStrap
* Os componente do BootStrap começam com b-(alguma coisa)

### Transições com Classes CSS
* 3 Classes CSS para Colocar o elemento na tela
{Estado Inicial (.nome-enter); Processo de Transição(.nome-enter-active); Destino da Transição (.nome-enter-to)}
3 Classes CSS para Tirar o elemento na tela
{Estado Inicial (.nome-leave); Processo de Transição(.no me-leave-active); Destino da Transição (.nome-leave-to)}

* O nome da transition vai impactar na nomenclatura de classe.

* Ele usa opacity para demonstrar um exemplo de transição.

* @keyframes ponto de inicio e fim qualquer trasição.Ele usa os @keyframes para fazer um slide de cima para baixo.

* Propriedade type serve para controlar o tempo da animação ou transição.

* Appear faz a transição no carregamento da aplicação.

* Biblioteca animated.css. Ele usa essa animação dentro da transition nas classes enter-active-class/leave-active-class.

* Control + / comenta o codigo selecionado.

* Para alternar entre animações precisa-se do key com valor unico.

* Mode=out-in o primeiro elemento vai sair para depois o outro entrar.in out primeiro entra depois o outro sai.

### Transições com Classes JavaScript (Hooks)
* 4 Metodos de Entrada
{Antes de Entrar (before-enter); Entrar (enter); Depois de Entrar (.after-enter); Quando Entrar for Cancelada (enter-cancelled)}
4 Metodos de Saida
{Antes de Sair (before-leave); Sair (leave); Depois de Sair (.after-leave); Quando Sair for Cancelada (leave-cancelled)}

* No metodo Enter e no Leave precisa ser chamado o metodo done pois com ele voce fala para o vue que conclui a animação.

* :css= false para o transition não usar o css para animação.

* Transition-Group para fazer uma animação em grupo de elementos.Os elemento são envolvidos por uma tag.

* Projeto Quiz que usa animação Flip.

## Seção 15: Conectando com Servidor HTTP

* Criação de um projeto no firebase e um database.

* Instalação do axios: npm i --save axios

* Registra um plugin chamado Axios para que o Axios possa ser chmado globalmente com $http.

* Onde define o URl do Back End: axios.defaults.baseURL = ""

* O firebase exige voce colocar .json no final de uma coleção que você quer salvar.

* Criação de instancias do axios cada uma com suas proprias configurações. Axios.create

* Exemplo de Post onde o ele envia os dados do form para o firebase e caso aja sucesso .then limpa os campos do formulario.

* Exemplo de Get onde ele vai obterUsuario registrados no firebase.

* Exemplo do Axios localmente.Quando isso ocorre você deve passar a url nos metodos.

* Exemplo de como interceptar as requisições.

* Exemplo de como interceptar as resposta. A onde você pode tratar como a resposta chegará. Transformou o objeto em um array.

* Exemplo de headers globalmente. axios.defaults.headers.common["Authorization"] = 'abc123'. Pode ser passado dentro das instancia de configuração do axios.

* Exemplo de delete.

* Exemplo de patch, a onde ele usa um if no id para saber o que a função salvar vai fazer se ela vai alterar ou incluir.

* Tratamento de erros e mostragem de mensagens.

## Seção 16: Rotas em uma Aplicação VueJS

* Router e um plugin que vai controlar a navegação entre multiplos componentes.(Single Page Aplication)

* Intalar o router: npm i --save vue-router@3.0.2 -E

* Arquivo router.js na raiz do projeto. Importa todos os Componentes.

* Registrar o Router no Vue usando Vue.use(Router).

* Cria uma função construtora onde recebe o caminho(path) e o nome do componente associado a esse caminho.

* Tag router-view/router-link onde sera apresentado os componentes da aplicação usando o routes.

* Rotas mode Hash -> localhost:8080/#/... o hash não e enviado para o servidor da aplicação. A requisição vai ate o /

* Rotas mode History -> localhost:8080/... todo o caminho e enviado como requisição, se não houver a requisição certa o Vue não sera carregado. Precisa de comfiguração no servidor.

* Router-Link propriedade (to = caminho), (tag = li), (active-class = chama uma classe que e ativada) (exact = o caminho exato)

* Criar um metodo para voltar você pode passar a o caminho absoluto ou passar um objeto.

* Pegar um parametro da rota (this.$routes.params.id). Precisa usar o watch para funcionar corretamente.

* Pegar um parametro da rota usando props. Router passa automaticamente o parametro para o props facilitando a utilização.

* Fazer uma Rota (Aninhada) com componentes filhos você passa a propriedade children nas rotas.

* A navegação entre rotas pode ser feita atraves de um nome fornecida para a rota como paramentro.

* Atraves do $route.query você consegue pegar os valores das querys.

* Se colar um * no path voce pode redirecionar qualquer rota que não existe para uma padrão.

* Para o Hash funcionar e preciso adicionar a função Scroll Behavior no routes.

* Proteger a rota antes de entrar nela (BeforeEnter) . Proteger a rota antes de sair dela (BeforeLeave). Carregando as rotas tardiamente

## Seção 17: Melhor Gerenciamento de Estado com Vuex

* Vuex e um gerenciador de estado poderoso e simples de usar.

* Um problema de Gerenciamento de Estado e a conversa entre um neto e um filho que não tem relacionamento direto.

* O Uso do Event bus para solucionar esse problema gera alguns problemas quando se e usado frenquentemente como desorganização e dificil monitoramento de mudanças.

* VUEX: Usando o Estado Central um nó altera o Store(Central) e o outro nó o lê. o Store armazena o Estado.

* Foi criado uma Store onde e armazenado os produtos e cada componente Le e escreve nessa store de acordo com as alterações.

* Getter uma função que vai ler uma determinada informação e vai retornar essa informação.

* A Store central ira retorna para o Getter onde havera um calculo e o Getter sera lido pelos componentes.

* A Store pode ser alterada atraves de uma Mutation(alterar o estado). 

* A Actions e um complemento das mutations onde as actions pode ser adicionadas regras para chamar as mutations.

* Actions so aceita um parametro ou objeto.

## Seção 18: Projeto #03 - The Shock Trader

* Uma aplicação de Negociação e Consulta de Ações.

* Vue Devetools plugin de navegador para ajudar no desenvolvimento.

* Components: Home, Header, Portfolio ( Portfolio, Stock ), Stocks ( Stock, Stocks )

* Vue Router: Modo History / 3 Rotas : Home , Portfolio e Stocks

* Vuex separado em modulos sendo eles Stocks e Porfolio.

* Vuetify para estilização.

* Desabilita o button quando voce não estiver saldo suficiente.

* Filtro de Valor para adicionar R$ nas operações.

* A finalização do dia randomizara os preços das ações.

* Animando as Transições de tela.

* Axios e Firebase (PUT e GET)





