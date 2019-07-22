import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbo } from "../component/jumbo";
import { EventCards } from "../component/eventcard";
import { MeetupCards } from "../component/meetupcard";
import Moment from "react-moment";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YYYY">{data}</Moment>;
			}
			if (format == "time") {
				return (
					<Moment format="LT" parse="HH:mm:ss">
						{data}
					</Moment>
				);
			}
		};
		return (
			<>
				<Jumbo />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map(event => {
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
			</>
		);
	}
}
