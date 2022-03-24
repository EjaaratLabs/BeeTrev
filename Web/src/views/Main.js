import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Login } from './Authentication/Login';
import { MDBBtn } from 'mdb-react-ui-kit';
import { CustomerWeb } from './CustomerWeb';

export function Main() {

  return (
    <div>
      <div >
        <CustomerWeb />

      </div>
    </div>
  );
}
