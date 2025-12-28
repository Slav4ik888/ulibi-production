/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharUpperCase = require('../first-char-upper-case');
const camelCase = require('../camel-case');



module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(camelCase(sliceName))}Schema`;

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types';

const initialState: ${typeName} = {
  
};

export const ${typeName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {
      
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: ${typeName}Actions } = ${typeName}Slice;
export const { reducer: ${typeName}Reducer } = ${typeName}Slice;
`;
};
