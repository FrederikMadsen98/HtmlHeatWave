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
        }
    },
}
).mount('#app');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}