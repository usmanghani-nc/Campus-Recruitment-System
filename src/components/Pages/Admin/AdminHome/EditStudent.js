import React, { useEffect } from 'react';

// IMPORTS...
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { update_user } from '../../../../store/action/index';

const EditStudent = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(update_user(id, 'student'));
  }, [dispatch, id]);

  return <div>EditStudent:{id}</div>;
};

export default EditStudent;
