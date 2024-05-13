const baseUrl = 'https://heatwaveprojekt.azurewebsites.net/api/temp'

Vue.createApp({
    data() {
        return {
            
            temp: null,
            time: null
        }
    },
    created() {
        this.getPosts()
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get(baseUrl)
                this.posts = await response.data
            } catch (error) {
                this.error = error.message
            }
    }
    
}
}).mount('#app')