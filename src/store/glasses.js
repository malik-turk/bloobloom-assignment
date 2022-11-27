import { defineStore } from "pinia";
import axios from "axios";

import { BASE_URL, COLLECTIONS_ENDPOINT, PARAMS } from "../constants/config";

export const useGlassesStore = defineStore("glasses", {
  state: () => ({
    collection: [],
    selected_filter_color: "black",
    selected_filter_shape: "round",
    collectionType: "spectacles-women",
    isLoading: true,
  }),
  getters: {
    getCollection(state) {
      return state.collection;
    },
  },
  actions: {
    async fetchCollection(page = 1, isInfiniteScroll = false) {
      this.isLoading = true;

      try {
        const collectionEndpoint = COLLECTIONS_ENDPOINT.replace(
          "{COLLECTION_TYPE}",
          this.collectionType
        );
        const params = PARAMS.replace(
          "{COLOR_PARAM}",
          this.selected_filter_color
        )
          .replace("{SHAPE_PARAM}", this.selected_filter_shape)
          .replace("{PAGE_NUMBER}", page);

        // Use axios to fetch the data
        const res = await axios
          .get(`${BASE_URL}${collectionEndpoint}${params}`)
          .then((res) => {
            this.isLoading = false;
            return res;
          });

        if (isInfiniteScroll) {
          this.collection = [...this.collection, ...res.data.glasses];
        } else {
          this.collection = res.data.glasses;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
