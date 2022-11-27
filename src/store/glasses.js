import { defineStore } from "pinia";
import axios from "axios";

import { BASE_URL, COLLECTIONS_ENDPOINT, PARAMS } from "../constants/config";

export const useGlassesStore = defineStore("glasses", {
  state: () => ({
    collection: [],
    selected_filter_color: "black",
    selected_filter_shape: "round",
    collectionType: "spectacles-women",
  }),
  getters: {
    getCollection(state) {
      return state.collection;
    },
  },
  actions: {
    async fetchCollection() {
      try {
        const collectionEndpoint = COLLECTIONS_ENDPOINT.replace(
          "{COLLECTION_TYPE}",
          this.collectionType
        );
        const params = PARAMS.replace(
          "{COLOR_PARAM}",
          this.selected_filter_color
        ).replace("{SHAPE_PARAM}", this.selected_filter_shape);
        const { data } = await axios.get(
          `${BASE_URL}${collectionEndpoint}${params}`
        );
        this.collection = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
