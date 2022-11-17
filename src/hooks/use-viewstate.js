import { useEffect, useState } from '@nebula.js/stardust';
import { storage as createViewState } from 'qlik-chart-modules';

export default function useViewState() {
  const [viewState, setViewState] = useState();

  useEffect(() => {
    setViewState(
      createViewState({
        viewRange: [0, 1],
        scrollOffset: undefined,
      })
    );
  }, []);

  return viewState;
}
