new Vue({
    el: '#desafio',
    data: {
        Nome: 'Gustavo Henrique Dias Silva',
        Idade: '21',
        link: 'https://thumbs.gfycat.com/BlissfulQuarrelsomeCopepod-size_restricted.gif'
    },
    methods: {
        vezes3: function () {
            return this.Idade * 3
        },

        random: function () {
            return Math.random();
        }
    }
})