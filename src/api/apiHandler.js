import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateProfile() {
    return service
      .get("/api/auth/updateProfile")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getPlants() {
    return service
      .get("/api/plants")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updatePlant(plant, updatedPlant) {
    return service
      .patch(`/api/plants/update/${plant._id}`, updatedPlant)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createPlant(plant) {
    return service
      .post("/api/plants/create", plant)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deletePlant(plant) {
    return service
      .delete(`/api/plants/delete/${plant._id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getVariete() {
    return service
      .get("/api/variete")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createVariete(variete) {
    return service
      .post("/api/variete/create", variete)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateVariete(variete) {
    return service
      .patch(`/api/variete/update/${variete._id}`, variete)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteVariete(variete) {
    return service
      .delete(`/api/variete/delete/${variete._id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
