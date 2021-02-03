import React,{useEffect} from 'react';
import notStyles from './Notification.module.css';
import {connect} from 'react-redux';
import {changeAlert} from '../../redux/actions/contactsActions';

const Notification = ({name,changeAlert}) => {

  useEffect(()=>{
    const timer = setTimeout(()=>{changeAlert()},2000);
    return ()=>{
      clearTimeout(timer);
    }
  },[]);

  return(
    <div className={notStyles.alertWrapper}>
      <p className={notStyles.alertText}>{name && name[0].toUpperCase()+name.slice(1)} is already in the list!!!</p>
    </div>
  )
};

const mapStateToProps=(state)=>{
  return{
    name:state.contactsArr.repeatName
  }
}

const mapDispatchToProps=(dispatch)=>{

  return{
    changeAlert: ()=>{
      dispatch(changeAlert())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notification);

