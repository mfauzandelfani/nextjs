import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/region");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/region/", payload);
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      "http://localhost:3002/region/" + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:3002/region/" + id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:3002/region/" + id);
    return result;
  } catch (error) {
    return await error;
  }
};

const updatePhoto = async (data: any) => {
  const id = parseInt(data.get("id"));
  try {
    const result = await axios.put("http://localhost:3002/region/" + id, data);
    return result;
  } catch (error) {
    return await error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(
      `http://localhost:3002/region/upload`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Update,
  findData,
  upload,
  deleted,
  updatePhoto,
};
