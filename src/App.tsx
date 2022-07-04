import React, { Suspense } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import Test from '@/components/Test';
import { resetCss, theme } from '@/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <Global styles={resetCss} />
        <h3>Hello World</h3>
        <div>Hi MY friends</div>
        <Test />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
