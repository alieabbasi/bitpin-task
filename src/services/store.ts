import { MarketType } from "@/models/market.model";
import { bitpinAxios } from "@/utils/api-service";
import endpoints from "@/utils/endpoints";
import { create } from "zustand";

interface MarketsStoreType {
  markets: MarketType[];
  fetchMarkets: () => void;
  removeMarkets: () => void;
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
}

const useStore = create<MarketsStoreType>((set) => ({
  markets: [],
  isLoading: false,
  isError: false,
  isFetched: false,

  async fetchMarkets() {
    set({ isLoading: true, isError: false });
    try {
      const response = await bitpinAxios.get<BaseListResponse<MarketType>>(
        endpoints.markets
      );
      set({ markets: response.data.results, isLoading: false });
    } catch {
      set({ isError: true, isLoading: false });
    }
  },
  removeMarkets: () => set({ markets: [] }),
}));

export default useStore;
