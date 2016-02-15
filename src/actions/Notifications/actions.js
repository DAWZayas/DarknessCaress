export function removeNotification(notificationId) {
	return (dispatch, getState) => {
		const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}/notifications/${notificationId}`).remove();
	};
}
