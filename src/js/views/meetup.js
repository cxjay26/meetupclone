import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbo } from "../component/jumbo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Moment from "react-moment";
import { EventCards } from "../component/eventcard";
import { MeetupCards } from "../component/meetupcard";

export class Meetup extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YYYY">{data}</Moment>;
			}
			if (format == "time") {
				let timeArr = data.split(":");
				let theTime = String(timeArr[0]) + ":" + String(timeArr[1]);
				return theTime;
			}
		};

		return (
			<div className="text-center">
				<Context.Consumer>
					{({ store, actions }) => {
						let meetupID = this.props.match.params.theid;
						let meetupName = actions.findMeetupName(meetupID);
						let meet = actions.getMeetupEvents(meetupID);
						return (
							<div className="wrapper">
								<div className="jumbotron jumbotron-fluid bg-dark text-white">
									<div className="row">
										<div className="col-9">{meetupName}</div>

										<div className="col-3">
											<div className="rsvp">
												people going
												<br />
												<button>Login to RSVP</button>
												<br />
												Social Icons
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="container">
					<Context.Consumer>
						{({ store, actions }) => {
							let meetupID = this.props.match.params.theid;
							let meet = actions.getMeetupEvents(meetupID);
							return meet.map(event => {
								if (event) {
									return (
										<EventCards
											eventDate={parseMoment(event.meta_keys.day, "date")}
											eventTime={parseMoment(event.meta_keys.time, "time")}
											eventTitle={event.post_title}
											meetup={actions.findMeetupName(event.meta_keys._meetup)}
											meetupID={event.meta_keys._meetup}
											eventID={event.ID}
											key={event.ID}
										/>
									);
								} else {
									return <h5>Loading...</h5>;
								}
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Meetup.propTypes = {
	match: PropTypes.object
};
