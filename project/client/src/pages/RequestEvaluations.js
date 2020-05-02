import { CardStack, Card, people, SearchBar } from '../components';
import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Checkbox from '../components/Checkbox';

class RequestEvaluations extends Component {
    constructor(props) {
        super(props);  //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { people };
    };

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    };

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    };

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );

    renderTableData() {
        return this.state.people.map((people) => {
            const { background, imgSrc, imgBorderColor, name, title, mobileNo, location, role } = people; //destructuring
            return (
                <tr key={name}>
                    <td>
                        <ProfilePicture imgSrc={imgSrc}/> {name}, {title}
                    </td>
                    <td>
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckbox()}
                        </form>
                    </td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [ 'EMPLOYEES', 'REQUEST EVALUATION' ]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>REQUEST EVALUATION</h1>
                <table id='evaluations'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
                <SearchBar />
            </div>
        )
    }
}



const ProfilePicture = ({ imgSrc, borderColor }) => (
    <img
        style={{
            width: '60px',
            height: '60px',
        }}
        src={imgSrc}
    />
);
/*
const RequestEvaluations = (props) => (
    <div>
        <ul>
            <h1 align={"center"}>Request Evaluations!</h1>
        </ul>
        <CardStack
            height={500}
            width="full"
            background="#f8f8f8"
            hoverOffset={25}>

            {people.map((person, i) =>
                <Card
                    key={i}
                    background={person.background}>
                    <TeamMemberCard {...person} />
                </Card>
            )}
        </CardStack>

        <div>
            <h2 align={"center"} style={styles.messages}>
                Messages
            </h2>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
            <div align={"center"}>
                <Button variant="outline-success" align={"center"}>Submit Request</Button>{' '}

            </div>
        </div>

    </div>
);

const ProfilePicture = ({ imgSrc, borderColor }) => (
    <img
        style={{
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            border: `3px solid ${borderColor}`,
        }}
        src={imgSrc}
    />
);

const DetailsRow = ({ icon, title, summary }) => {
    const renderSummary = () => {
        if (summary)	return (
            <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
                {summary}
            </p>
        );
        return null;
    };

    return (
        <div style={styles.detailsRow.row}>
			<span
                className={`icon ${icon}`}
                style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
            />
            <div style={{ width: '80%' }}>
                <h2 style={styles.detailsRow.title}>
                    {title}
                </h2>
                {renderSummary()}
            </div>
        </div>
    );
};

const TeamMemberCard = (props) => (
    <div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
        <header style={styles.cardHeader} className='card-header-details'>
            <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
            <div>
                <h1 style={styles.headerName}>{props.name}</h1>
                <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
            </div>
        </header>

        <div style={{color: '#fff'}}>
            <DetailsRow
                icon='ion-ios-telephone-outline'
                title={props.mobileNo}
            />

            <DetailsRow
                icon='ion-ios-location-outline'
                title={props.location}
            />

            <DetailsRow
                icon='icon ion-ios-paper-outline'
                title='Main Role'
                summary={props.role}
            />
            <Form>
                <Button variant="outline-success" align={"center"}>Submit Request</Button>{' '}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        </div>
    </div>
);

const styles = {
    cardHeader: {
        display: 'flex',
        height: '125px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        color: '#fff',
    },
    headerName: {
        margin: 0,
        fontWeight: 500,
        fontSize: '25px',
        textAlign: 'right'
    },
    headerTitle: {
        margin: '4px 0 0',
        fontWeight: 300,
        fontSize: '17px',
        opacity: 0.8,
        textAlign: 'right'
    },
    detailsRow: {
        row: {
            width: '100%',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            margin: '25px 0',
        },
        icon: {
            display: 'block',
            width: '25px',
            height: '30px',
            margin: '0 20px 0 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            fontSize: '22px',
        },
        title: {
            fontWeight: 500,
            fontSize: '20px',
            margin: 0,
            fontStyle: 'italic',
        },
    },
    messages: {
        position: 'relative',
        paddingTop: '50px',
    },
};
 */


export default RequestEvaluations;