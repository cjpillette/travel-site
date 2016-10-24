import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
	}
	createHeaderWaypoint(){
		var that = this;
		new Waypoint({  /* this method is available to us because it's in the library above */
			element: this.headerTriggerElement [0], /* 0 because 1 element in jquery array is a pointer to the DOM */
			handler: function(direction){
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
}

export default StickyHeader;