import React from 'react';
import { css } from '@styled-system/css';
import { Text } from '~/components/Text';
import { Box } from '~/components/Box';
import { Grid } from '@styled-system/jsx';
// import '../../../styled-system/styles.css';

interface ColorTokens {
  [key: number]: { value: object };
}

interface ColorSwatchesProps {
  tokens: ColorTokens;
  color: string;
}

//const ColorSwatches: React.FC<ColorSwatchesProps> = ({ color, tokens }) => {
//  return (
//    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//    <Grid columns={6} gap='3'>
//      {Object.entries(tokens).map(([key, token]) => {
//        var colorKey = color + "." + key;
//        console.log(colorKey);
//        return (
//          <div style={{ paddingBottom: 10}} >
//            <Text textAlign="center" >{ color + "." + key }</Text>
//            <Box
//              style={{ height:100 }}
//              as="div"
//              className={css({
//                backgroundColor: `${color}.${key}` as any,
//                width: 'auto',
//                border: '1px solid black'
//              })}/>
//            <Text textAlign="center" >{ token.value }</Text>
//          </div>
//        );
//      })}
//      </Grid>
//    </div>
//  );
//};

const ColorSwatches: React.FC<ColorSwatchesProps> = ({ color, tokens }) => {
  const swatches = [];

  for (const key in tokens) {
    if (Object.prototype.hasOwnProperty.call(tokens, key)) {
      const token = tokens[key];
      if (token) {
        swatches.push(
          <div style={{ paddingBottom: 10 }}>
            <Text textAlign="center">{`${color}.${key}`}</Text>
            <Box
              style={{
                height: 100,
                backgroundColor: `${token.value}`,
                borderRadius: 4,
              }}
              as="div"
              className={css({
                width: 'auto',
              })}
            />
            <Text textAlign="center">{String(token.value)}</Text>
          </div>,
        );
      }
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <Grid columns={6} gap="0">
        {swatches}
      </Grid>
    </div>
  );
};

export default ColorSwatches;
