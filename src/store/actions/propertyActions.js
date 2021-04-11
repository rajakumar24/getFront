import {
  SET_PROPERTY,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_ALL_PROPERTIES,
  SET_TOTAL_COUNT,
  CLEAR_PROPERTY,
  SET_PROFILE,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../types";
import axios from "axios";
import { getUserPropertyList } from "./profileActions";
import { baseUrl } from "../../baseURL/baseURL";

export const addProperty = (propertyDetails) => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
  dispatch({
    type: CLEAR_MESSAGE,
  });
  try {
    const res = await axios.post(`${baseUrl}api/property/add`, propertyDetails);

    dispatch({
      type: SET_PROPERTY,
      payload: res.data.newProperty,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: res.data.msg,
    });
    dispatch({
      type: CLEAR_MESSAGE,
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      //payload: err.response.data,
    });
  }
};

//add
export const addAdminProperty = (propertyDetails) => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
  dispatch({
    type: CLEAR_MESSAGE,
  });
  try {
    const res = await axios.post(
      `${baseUrl}api/property/AdminMaster`,
      propertyDetails
    );

    dispatch({
      type: SET_PROPERTY,
      payload: res.data.newProperty1,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: res.data.msg,
    });
    dispatch({
      type: CLEAR_MESSAGE,
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data,
    });
  }
};
//add

export const updateProperty = (propertyDetails) => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
  // const property = await axios.post("/api/property/update", propertyDetails);
  try {
    const property = await axios.post(
      `${baseUrl}api/property/update`,
      propertyDetails
    );
    dispatch({
      type: SET_PROPERTY,
      payload: property.data,
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteProperty = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}api/property/delete`, {
      params: {
        id: id,
      },
    });

    dispatch(getUserPropertyList(1, 5));
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getAllProperties = (
  currentPage,
  pageSize,
  selectedFilter
) => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });

  try {
    const propertiesList = await axios.get(`${baseUrl}api/property/all`, {
      params: { currentPage, pageSize, selectedFilter },
    });

    const totalCount = await axios.get(`${baseUrl}api/property/`, {
      params: { filter: selectedFilter },
    });

    dispatch({
      type: SET_TOTAL_COUNT,
      payload: totalCount.data,
    });

    dispatch({
      type: SET_ALL_PROPERTIES,
      payload: propertiesList.data,
    });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      // payload: err.response.data
    });
  }
};

export const getProperty = (id, history) => async (dispatch) => {
  try {
    let property = await axios.get(`${baseUrl}api/property/${id}`);

    const profile = await axios.get(
      `${baseUrl}api/profile/${property.data.user._id}`
    );

    dispatch({
      type: SET_PROFILE,
      payload: profile.data,
    });

    dispatch({
      type: SET_PROPERTY,
      payload: property.data,
    });
  } catch (err) {
    history.push("/not-found");
  }
};

export const clearProperty = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROPERTY,
  });
};
