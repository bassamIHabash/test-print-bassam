import * as React from "react";
import ReactToPrint from "react-to-print";

import { ComponentToPrint } from "../ComponentToPrint";

export const CustomPrint = () => {
  const componentRef = React.useRef(null);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <button>Print using a custom print method (check dev console)</button>
    );
  }, []);

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        // print={(iframe) => {
        //   return new Promise((resolve) => {
        //     console.log("Custom printing, 1.5 second mock delay...");
        //     setTimeout(() => {
        //       console.log("Mock custom print of iframe complete", iframe);
        //       resolve();
        //     }, 1500);
        //   });
        // }}
        trigger={reactToPrintTrigger}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
