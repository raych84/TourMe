import axios from "axios";


const BASEURL = "http://webapi.globusandcosmos.com/GetAllAvailableTours";
const APIKEY = "C11x16A!";

export default {
	GetAllAvailableTours: function (query) {
		return axios.get(BASEURL + query + APIKEY)
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