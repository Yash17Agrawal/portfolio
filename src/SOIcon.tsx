import * as React from 'react';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import StackoverflowIcon from './assets/stackoverflow.svg';
import { SvgIcon } from '@material-ui/core';

export default createSvgIcon(
  <SvgIcon>
    <img src={StackoverflowIcon}></img>
  </SvgIcon>,
  'NewIcon'
);