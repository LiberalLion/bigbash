'use strict';

var constants = angular.module('appConstants', []);

constants.constant('FilterKey', {
    SEASON: "season",
    BRAND: "brand",
    TAG: "tag",
    PRICE: "price_limit",
    LAYER: "layer_filter",
    BASKET_VARIANTS: "basket_variant_filter",
    RECO_VARIANTS: "reco_variant_filter",
    REMOVE_ALL: "remove_all",
    TARGET_GROUP_SET: "target_group_set",
    SEASON_CODE: "season_code",
    ATTRIBUTE_SET_CODE: "attribute_set_code",
    SALE_CODE: "sale_code",
    GENDER_CODE: "gender_code",
    AGE_GROUP_CODE: "age_group_code"
});

constants.constant('ScoringFunctionKey', {
    UPSELLING: "upselling",
    AB_UPSELLING: "ab_upselling"
});