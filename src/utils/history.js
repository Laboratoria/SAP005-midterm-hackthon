export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    // eslint-disable-next-line comma-dangle
    path
  );

  // eslint-disable-next-line object-shorthand
  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
};
