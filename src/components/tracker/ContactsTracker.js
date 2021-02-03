import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';

import Form from '../form/Form';
import Section from '../section/Section';
import List from '../list/List';
import Filter from '../filter/Filter';
import {getContacts} from '../../redux/actions/contactsActions';


const ContactsTracker = () => {
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getContacts());
  },[]);

  return(
    <>
    <Section>
      <h1>Phonebook</h1>
      <Form/>
      <Filter/>
      <List/>
    </Section>
    </>
  )
};

const mapStateToProps=(state)=>{
  return {
    selectedContact:state.contactsArr.selectedContact
  }
}


export default connect(mapStateToProps,null)(ContactsTracker);


