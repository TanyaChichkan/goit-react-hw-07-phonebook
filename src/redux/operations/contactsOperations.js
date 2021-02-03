import {addContactsRequest,
  addContactsSuccess,
  addContactsError} from '../actions/contactsActions';

  import axios from 'axios';

export const addContact = contact=>dispatch=>{
  dispatch(addContactsRequest());
  console.log("contact:", contact)

  axios
    .post("http://localhost:2000/contacts",contact)
    .then(response=>{
      console.log(response);
      dispatch(addContactsSuccess({name:"name",number:"number"}))
    })
    .catch(error=>dispatch(addContactsError(error)));
}

