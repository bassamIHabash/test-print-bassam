import * as React from "react";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  canvasEl;

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {
            "\
   @page { size: landscape; }\
"
          }
        </style>
        <div className="flash" />
        <div className="key-value-wrapper">
          <div className="key-value">
            <span>الاسم:</span>
            <span>بسام</span>
          </div>
          <div className="key-value">
            <span>الفرع:</span>
            <span>نابلس</span>
          </div>
        </div>

        <table className="testClass">
          <thead>
            <tr>
              <th className="column1">السعر</th>
              <th>الصنف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>١٠</td>
              <td>منتج اول</td>
            </tr>

            <tr>
              <td>Fonts</td>
              <td>
                <div className="customFontText">منتح ثاني</div>
              </td>
            </tr>

            <tr>
              <td>Image: URL</td>
              <td>منتج مع صوره</td>
            </tr>
          </tbody>
        </table>

        <div className="key-value-wrapper">
          <div className="key-value">
            <span>المجموع:</span>
            <span>٢٠ شيكل</span>
          </div>
        </div>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} />;
});
