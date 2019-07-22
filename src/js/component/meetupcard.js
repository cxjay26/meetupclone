import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { EventCards } from "../component/eventcard";
import { Context } from "../store/appContext.js";

export function MeetupCards(props) {
	return (
		<div className="text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					let meetupID = this.props.match.params.theid;
					let meetupName = actions.findMeetupName(meetupID);
					return <EventCards />;
				}}
			</Context.Consumer>
		</div>
	);
}

MeetupCards.propTypes = {
	match: PropTypes.object
};
