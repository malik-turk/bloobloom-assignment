const BASE_URL = "https://staging-api.bloobloom.com/";
const COLLECTIONS_ENDPOINT =
  "user/v1/sales_channels/website/collections/{COLLECTION_TYPE}/glasses";
const PARAMS =
  "?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]={PAGE_NUMBER}&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured&filters[frame_variant_home_trial_available]=false&filters[glass_variant_frame_variant_colour_tag_configuration_names][]={COLOR_PARAM}&filters[glass_variant_frame_variant_frame_tag_configuration_names][]={SHAPE_PARAM}";

export { BASE_URL, COLLECTIONS_ENDPOINT, PARAMS };
