import axios from "axios";

export default {
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