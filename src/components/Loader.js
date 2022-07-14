import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin, RotatingSquare } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <RotatingSquare color="grey" />
  </Stack>
);

export default Loader;