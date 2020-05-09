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
