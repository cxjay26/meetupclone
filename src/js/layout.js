import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Event } from "./views/event";
import { Meetup } from "./views/meetup";
import injectContext from "./store/appContext";

import { Navb } from "./component/navbar";
import { Footer } from "./component/footer";
import { Jumbo } from "./component/jumbo";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navb />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route path="/event/:theid" component={Event} />
							<Route path="/meetup/:theid" component={Meetup} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
