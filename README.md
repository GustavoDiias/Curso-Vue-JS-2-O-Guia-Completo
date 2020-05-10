# Curso Vue JS 2 - O Guia Completo
Seção 1 e 2 - "Introdução" e Usando VueJS para interagir com a "DOM"

https://jsfiddle.net/ ----- Testar seu codigo online

<script src="https://unpkg.com/vue"></script> import do JS do vue

new Vue --- Instancia do Vue que controla o template

el = elemento que sera controlado

--Components
DATA

METHODS: quando um evento acontecer no html

COMPUTED -- sincronas// dado computado somente será reavaliado quando alguma de suas dependências for alterada.

WATCH -- monitorando as propriedades

{{}} double mustache // dentro tem que ser retornado uma string

DIRETIVAS -- propriedade personalizada 
://v-bind --- faz uma tag ser interpretado pelo vue
//v-once --- ler esse valor apenas uma vez nao ira atualizar mais o conteudo da tag
//v-html -- imprimir uma html puro
@//v-on quando um evento acontecer vc vai chamar uma funcao
//v-model garante o v bind e v on ou seja atualiza o dado e o dado atualiza a view

INTERPOLADA

Metodos
setInterval - uma funcao de tempo

Seção 3 e 4 Condicionais, Listas e Projeto 1

//DIRETIVAS

---v-if (oculta o html)

---v-else

---v-else-if

---v-show (mostra o html)

---v-for  (push)(:key)

TAG HTML

-- <Template> Tag invisivel

CSS
display: flex;
flex-direction: column;

Seção 5: entendendo a Instancia Vue

Observações:

No vue se pode controlar mais de uma instancia ao mesmo tempo porem não se pode chamar um objeto de outra instancia na outra.

No vue voce pode mudar externamente uma instancia do Vue.

Propriedades reativas são criadas no momento que vc passa o objeto de configuraçao para o vue. 

Função proxy enchaminha para o local certo para ler ou modificar.

$el: resoluçao do seletor que vc passou dentro da propriedade el.Ou seja, toda estrutura html passada no seu template

$data: todos os dados passados na construcao da sua instancia. No data ja e criado os getters e setters de cada dado passado.

$refs

Template dentro da instancia Vue.

Seção 6:Fluxo de Desenvolvimento "Real" Usando Vue CLI

E preciso do NODE e NPM.

Servidor Web para Desenvolvimento.

Baixar o vue cliente: npm install -g @vue/cli

Criar o projeto: vue create NomeDoProjeto

Executar: npm run serve

Diretorios:
Package.json dependencia e configuraçoes.
Node Modules e uma pasta de dependencias. Para baixar la e so executar o comando npm install.
Public contem a single page onde o processo de builds ira injetar dentro deste html.
Src contem a main.js onde a instancia vue e criada.
App.vue e um componente.(Scaffold)

Como Gerar o arquivo de Build: npm run build

Adicionando plugins: vue-cli-plugin // vue add E o nome do plugin
Electron plugin para desktop.
Vuetify material design
