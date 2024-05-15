const baseUrl = "https://heatwaveprojekt.azurewebsites.net/api/temp";
const ApiUrl = "http://api.weatherapi.com/v1/current.json";
const ApiKey = "29501236f4854c099e1104709240405";

Vue.createApp({
    data() {
        return {
            TempMeasurements: [],
            error: "",
            currentTemperature: null,
            showTable: false
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
        },
        getCurrentTemp() {
            if (this.TempMeasurements.length > 0) {
                const lastMeasurement = this.TempMeasurements[this.TempMeasurements.length - 1];
                this.currentTemperature = lastMeasurement;
            }
        },
        toggleTable() {
            this.showTable = !this.showTable;
        }
    },
}
).mount('#app');