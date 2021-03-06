import "@babel/polyfill";
import { handleSubmit } from "./js/submit_handler";
import { addTrip } from "./js/add_trip";
import { removeTrip } from "./js/remove_trip";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/trip.scss";

//add click listener to "Add Trip" button 
window.addEventListener('load', (event) => {
    const submit = document.getElementById('add_trip')
    submit.addEventListener('click', Client.handleSubmit)
});

export {
    handleSubmit,
    addTrip,
    removeTrip
}