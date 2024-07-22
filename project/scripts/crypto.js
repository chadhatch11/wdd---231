const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR,GBP";

const vm = new Vue({
    el: '#app',
    data: {
        results: {},
        currentView: 'prices'
    },
    mounted() {
        if (this.currentView === 'prices') {
            this.startUpdating();
        }
    },
    watch: {
        currentView: function(newView) {
            if (newView === 'prices') {
                this.startUpdating();
            } else {
                this.stopUpdating();
            }
        }
    },
    methods: {
        startUpdating: function() {
            this.update();
            this.timer = setInterval(this.update, 1000);
        },
        stopUpdating: function() {
            clearInterval(this.timer);
        },
        update: function() {
            axios.get(url).then(response => {
                this.results = response.data;
            }).catch(error => {
                console.error("Error fetching data: ", error);
            });
        }
    }
});
