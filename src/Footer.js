import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import History from 'material-ui/svg-icons/action/history';



const Footer = (props) => {

    const style = {
        flex: '1',
        alignItems: 'center',
        margin: '5px',
        position: "relative",
        bottom: '0',
    };

    const textStyle = {
        padding: "5px",
        display: "inline-block",
    };
    return (
        <div style={{display: 'flex', marginLeft:"15%", marginRight:"15%"}}>
					<Paper zDepth={2} style={style}>
						<h3 style={textStyle}>Schedule incorrect?&nbsp;&nbsp;&nbsp;
							<span>
								<RaisedButton label="Email me"
									primary='true'
									icon={<EmailIcon />}
									href={'mailto:vppicone@ascension.org?subject=Medspeed%20Route%20Issue&body=Hospital:%0ATime:%0A'}
								/>
							</span>
						</h3>
					</Paper>
					<Paper zDepth={2} style={style}>
						<h3 style={textStyle}>Today's schedule.&nbsp;&nbsp;&nbsp;
							<span>
								<RaisedButton label="Show"
									primary='true'
									icon={<History />}
									onClick={props.showSchedule}
								/>
							</span>
						</h3>
					</Paper>
        </div>
    )
}

export default Footer;
