import React from "react";
import apiHandler from "../api/apiHandler";
import "../styles/global.css";

class Variete extends React.Component {
  state = {
    name: "",
    origine: "",
    image: "",
    ancienne: false,
    ajoute: false,
    plantId: this.props.match.params.plantId,
  };

  inputFileRef = React.createRef();

  componentDidMount() {
    console.log("PROPS", this.props);
  }

  handleChange = (event) => {
    console.log("COUCOU", event.target.checked);

    const key = event.target.name;
    const value = event.target.value;
    const isChecked = event.target.checked;

    console.log("ISCHECKED = ", isChecked)
    this.setState({
      [key]: value,
      ancienne: isChecked,
    });
    console.log("STATE", this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const file = this.inputFileRef.current.files[0];
    const myFormData = new FormData();

    console.log("FILE",file)
    myFormData.append("image", file);
    myFormData.append("name", this.state.name);
    myFormData.append("origine", this.state.origine);
    myFormData.append("ancienne", this.state.ancienne);
    myFormData.append("ajoute", this.state.ajoute);
    myFormData.append("plantId", this.state.plantId);

    console.log("STATE IMAGE", this.state.image);

    apiHandler
      .createVariete(myFormData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Ajouter une nouvelle variété</h1>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            placeholder="Quel est son petit nom ?"
          />

            <div className="inputLabelAddPlant">
              <label htmlFor="image" className="label">
                choose a picture
                <i className="icon fas fa-cloud-upload-alt fa-1x"></i>
              </label>
              <input
                className="is-hidden"
                type="file"
                id="image"
                name="image"
                ref={this.inputFileRef}
              />
            </div>

          <label htmlFor="origine">origine :</label>
          <input
            type="text"
            id="origine"
            name="origine"
            className="input"
            placeholder="De quel pays/région vient cette variété ?"
          />

          <label htmlFor="ancienne">Ancienne :</label>
          <input
            type="checkbox"
            id="ancienne"
            name="ancienne"
            value="true"
            className="input"
          />

          {/* <label htmlFor="">Vous pourrez bientôt ajouter une image ! :)</label> */}

          <button>Postez votre espèce !</button>
        </form>
      </div>
    );
  }
}

export default Variete;
