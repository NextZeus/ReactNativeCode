//手势响应系统

/*
There are two methods to ask the view if it wants to become responder:
 View.props.onStartShouldSetResponder: (evt) => true,
    - Does this view want to become responder on the start of a touch?
 View.props.onMoveShouldSetResponder: (evt) => true,
 - Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?

 If the View returns true and attempts to become the responder, one of the following will happen:

 View.props.onResponderGrant: (evt) => {} - The View is now responding for touch events.
 This is the time to highlight and show the user what is happening

 View.props.onResponderReject: (evt) => {} - Something else is the responder right now and will not release it

 If the view is responding, the following handlers can be called:

 View.props.onResponderMove: (evt) => {} - The user is moving their finger
 View.props.onResponderRelease: (evt) => {} - Fired at the end of the touch, ie "touchUp"
 View.props.onResponderTerminationRequest: (evt) => true - Something else wants to become responder.
 Should this view release the responder? Returning true allows release
 View.props.onResponderTerminate: (evt) => {} - The responder has been taken from the View.
 Might be taken by other views after a call to onResponderTerminationRequest,
 or might be taken by the OS without asking (happens with control center/ notification center on iOS)

 evt is a synthetic［合成的］ touch event with the following form:
 nativeEvent
 changedTouches - Array of all touch events that have changed since the last event
 identifier - The ID of the touch
 locationX - The X position of the touch, relative to the element
 locationY - The Y position of the touch, relative to the element
 pageX - The X position of the touch, relative to the root element
 pageY - The Y position of the touch, relative to the root element
 target - The node id of the element receiving the touch event
 timestamp - A time identifier for the touch, useful for velocity calculation
 touches - Array of all current touches on the screen

 */