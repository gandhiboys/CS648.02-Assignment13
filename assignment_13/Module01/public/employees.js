let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let manas ='Manas Shah'
let niraj='Niraj Pathre'
let jeet='Jeet Khagram'

const ul = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'black',
    'fontSize': '28px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, manas), /*#__PURE__*/React.createElement("li", null, niraj), /*#__PURE__*/React.createElement("li", null, jeet));

ReactDOM.render(ul, document.getElementById('content'));