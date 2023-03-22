


new Vue ({
    el: '#app',

    data (){
        return {
            info: null,
            meta: null
        }
    },

    mounted (){
        axios
            .get('https://mindhub-xj03.onrender.com/api/amazing')
            .then(response => (
                this.info = response.data.events,
                this.meta = response.data.currentDate
            ))
    },  

    methods: {
        siguiente() {
            axios
            .get(this.meta.next)
            .then(response => (
                this.info = response.data.events,
                this.meta = response.data.currentDate
            ))

        }
    }
})