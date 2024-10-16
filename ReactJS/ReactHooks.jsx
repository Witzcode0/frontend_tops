// 1] useState :

import {useState} from 'react';
let stateArray = useState('init-val'); // return two elements : val & method
let stateVal = stateArray[0];
let stateMethod = stateArray[1];