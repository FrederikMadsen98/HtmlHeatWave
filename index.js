const baseUrl = "https://heatwaveprojekt.azurewebsites.net/api/temp";

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

    computed: {
        recommendedIndoorTemperature() {
            if (this.currentTemperature && this.currentTemperature.outDoorTemperature !== null) {
                if (this.currentTemperature.outDoorTemperature >= 15 && this.currentTemperature.outDoorTemperature <= 20) {
                    return 20;
                } else if (this.currentTemperature.outDoorTemperature >= 10 && this.currentTemperature.outDoorTemperature <= 14) {
                    return 25;
                } else if (this.currentTemperature.outDoorTemperature >= 5 && this.currentTemperature.outDoorTemperature <= 9) {
                    return 25;
                } else if (this.currentTemperature.outDoorTemperature >= -11 && this.currentTemperature.outDoorTemperature <= 4) {
                    return 25;
                } else if (this.currentTemperature.outDoorTemperature >= 21 && this.currentTemperature.outDoorTemperature <= 30) {
                    return 20;
                } else {
                    return "Ingen specifik anbefaling";
                }
            }
            return "Ingen specifik anbefaling";
        }
    },

    methods: {
        async getPosts() {
            try {
                const response = await axios.get(baseUrl);
                this.TempMeasurements = response.data;
                this.getCurrentTemp();
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
        },
        mounted() {
            var slider = document.getElementById("myRange");
            var output = document.getElementById("demo");
            output.innerHTML = slider.value; // Display the default slider value

            // Update the current slider value (each time you drag the slider handle)
            slider.oninput = function () {
                output.innerHTML = this.value;
            }
        },
    }
}).mount('#app');