export const TRADE_MODAL_VISIBILITY = "TRADE_MODAL_VISIBILITY";

export const setTradeModalVisibilitySuccess = (isVisible) => ({
	type: TRADE_MODAL_VISIBILITY,
	payload: { isVisible }
});

export function setTradeModalVisibility(isVisible) {
	return (dispatch) => {
		dispatch(setTradeModalVisibilitySuccess(isVisible));
	};
}
