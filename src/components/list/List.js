import React from 'react';
import {deleteContact,resetSelected,updateContact,addToSelected} from '../../redux/actions/contactsActions';
import {list} from './List.module.css';

import {connect} from 'react-redux';
import ListItem from '../listItem/ListItem';

const List = ({contacts,deleteContact,updateContact,addToSelected,resetSelected,selectedContact}) => {


  const handleDelete=e=>{
    deleteContact(e.target.dataset.id)
  }

  const handleChange=e=>{
    updateContact(e.target.dataset.id);

    e.target.checked?
      addToSelected(e.target.dataset.id):
      resetSelected();

  }

  return(
    <ul className = {list}>
      {contacts.map(contact=>(
      <ListItem
        key={contact.id}
        {...contact}
        selectedContact={selectedContact}
        onUpdate={handleChange}
        onDelete={handleDelete}/>
      ))}
    </ul>
  )
};

const mapStateToProps=(state)=>{
  return{
    contacts:[...state.contactsArr.contacts.filter(contact=>(contact.name.toLowerCase())
      .includes(state.filterValue.toLowerCase()))],
    selectedContact:state.contactsArr.selectedContact,
    onUpdateItem:state.contactsArr.onUpdateItem
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteContact:(id)=>{
      dispatch(deleteContact(id))
    },
    updateContact:(id)=>{
      dispatch(updateContact(id))
    },
    addToSelected:(id)=>{
      dispatch(addToSelected(id))
    },
    resetSelected:()=>{
      dispatch(resetSelected())
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);

