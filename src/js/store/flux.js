const getState = ({ setStore, getStore }) => {
	return {
		store: {
			events: [],
			meetups: []
		},
		actions: {
			findMeetupName: meetupID => {
				let store = getStore();
				if (store.meetups !== []) {
					let meetup = store.meetups.filter((item, index) => {
						if (item.ID == meetupID) {
							return item;
						}
					});
					if (meetup[0] !== undefined) {
						return meetup[0].post_title;
					}
				}
			},
			getMeetupEvents: meetID => {
				let store = getStore();
				return store.events.filter(evt => evt.meta_keys._meetup === meetID);
			},
			findEvent: eventID => {
				let store = getStore();
				if (store.events !== []) {
					let event = store.events.filter((item, index) => {
						if (item.ID == eventID) {
							return item;
						}
					});
					if (event[0] !== undefined) {
						return event[0];
					}
				}
			}
		}
	};
};

export default getState;
