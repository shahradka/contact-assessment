import BREAK_POINTS from "./queries";
import useMediaQuery from "./useMediaQuery";

function useMediaQueries() {
  const tabletQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.TABLET}px)`);
  const mobileQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.MOBILE}px)`);

  const result = {
    tablet: tabletQuery,
    mobile: mobileQuery,
  };

  if (result.tablet) result.mobile = false;

  return result;
}

export default useMediaQueries;
