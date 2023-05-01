let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let manas ='Manas Shah'
let niraj='Niraj Pathre'
let jeet='Jeet Khagram'

    const ul =  (
        <ul style={{'color':'green', 'fontSize': '23px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{manas.toUpperCase()}</li>
            <li>{niraj.toUpperCase()}</li>
            <li>{jeet.toUpperCase()}</li>
        </ul>
    )

    ReactDOM.render(ul,document.getElementById('content'))