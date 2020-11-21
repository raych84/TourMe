import axios from "axios";



// export default {
// 	searchCity: function (query) {
// 		return axios.get("https://www.mapquestapi.com/search/v4/place?sort=relevance&feedback=false&key=k6jUAGTlbhX3baOZ27xGACKQbJxEURyV&q=" + query)
// 	},
export default {

	getTours: function (query) {
		return axios.get("/api/tours");
	},
	getSaved: function (id) {
		return axios.get("/api/tours" + id);
	},
	deleteSaved: function (id) {
		return axios.delete("/api/tours/" + id);
	},
	saveTour: function (postData) {
		return axios.post("/api/tours", postData);
	}
};