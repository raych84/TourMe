import axios from "axios";


// const BASEURL = "http://webapi.globusandcosmos.com/GetAllAvailableTours";
// const APIKEY = "5ae2e3f221c38a28845f05b6a4d9bb81e481a101b1ab4343d0616713";

export default {
	searchCity: function (query) {
		return axios.get("https://www.mapquestapi.com/search/v4/place?sort=relevance&feedback=false&key=k6jUAGTlbhX3baOZ27xGACKQbJxEURyV&q=" + query)
	},

	getAllSaved: function () {
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