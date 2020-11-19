import axios from "axios";


// const BASEURL = "http://webapi.globusandcosmos.com/GetAllAvailableTours";
// const APIKEY = "C11x16A!";

export default {
	searchCity: function (query) {
		return axios.get("https://www.mapquestapi.com/search/v4/place?sort=relevance&feedback=false&key=k6jUAGTlbhX3baOZ27xGACKQbJxEURyV&q=" + query)
	},

	getAllSaved: function () {
		return axios.get("/api/saved");
	},
	getSaved: function (id) {
		return axios.get("/api/saved" + id);
	},
	deleteSaved: function (id) {
		return axios.delete("/api/saved/" + id);
	},
	saveTour: function (postData) {
		return axios.post("/api/saved", postData);
	}
};