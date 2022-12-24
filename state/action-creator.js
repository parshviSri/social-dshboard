import * as types from "./action-types";
export const setmediaType = (type) => {
  const payload = type;
  return { type: types.MEDIA_TYPES, payload };
};
