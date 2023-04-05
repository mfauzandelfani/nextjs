import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Region from "../api/Region";
import { useDispatch, useSelector } from "react-redux";
import {
  EditRegionRequest,
  FindRegionRequest,
} from "../redux-saga/action/regionAction";

export default function FormikRegionEdit(props: any) {
  const dispatch = useDispatch();
  const { reg } = useSelector((state: any) => state.regionState);
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState<any>(false);
  useEffect(() => {
    dispatch(FindRegionRequest(props.id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: reg.regionName,
      file: reg.regionPhoto,
    },
    onSubmit: (values) => {
      let payload= new FormData();
      payload.append("id", values.id);
      payload.append("name", values.name);
      payload.append("file", values.file);

      dispatch(EditRegionRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Update");
      props.setRefresh(true);
    },
  });
  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };
  return (
    <div>
      <div>
        <label>Region ID</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={formik.values.id}
          onChange={formik.handleChange}
          disabled
        ></input>
      </div>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={formik.values.name}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {upload === false ? (
              <>
                <span>Kosong</span>
              </>
            ) : (
              <>
                <img src={previewImg} alt="img" />
                <span onClick={onClear}>Remove</span>
              </>
            )}
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={uploadConfig("file")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={() => formik.handleSubmit()}>
          Simpan
        </button>
        <button type="submit" onClick={() => props.setDisplay(false)}>
          cancel
        </button>
      </div>
    </div>
  );
}
