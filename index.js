const baseUrl = "https://heatwaveprojekt.azurewebsites.net/api/temp";

Vue.createApp({
    data() {
        return {
            TempMeasurements: [],
            error: "",
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get(baseUrl);
                this.TempMeasurements = response.data;
            } catch (error) {
                this.error = error.message;
            }
        }
    }
}).mount('#app');