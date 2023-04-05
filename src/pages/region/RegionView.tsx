import React, { useState, useEffect } from "react";
import Region from "../api/Region";
import RegionCreate from "./RegionCreate";
import RegionUpdate from "./RegionUpdate";
import Layout from "@/component/layout";
export default function RegionView() {
  const [region, setRegion] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<any>(false)
  const [display, setDisplay] = useState<any>(false)
  const [displayEdit, setDisplayEdit] = useState<any>(false)
  const [id, setId] = useState<any>()
  useEffect(() => {
    Region.GetData().then(data => {
      setRegion(data);
    });
  }, [refresh]);

  const onClick = (id:any) =>{
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      <Layout>
        {displayEdit ? (
          <RegionUpdate
            setRefresh={setRefresh}
            setDisplay={setDisplayEdit}
            id={id}
          />
        ) : display ? (
          <RegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
          <>
            <button onClick={() => setDisplay(true)}>Add Region</button>
            <h2>List Region</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Region ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Region Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Region Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {region && region.map(item =>{
                    return (
                      <>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            {item.regionId}
                          </th>
                          <td className="px-6 py-4">{item.regionName}</td>
                          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {item.regionPhoto}
                          </td>
                          <td className="px-6 py-4">
                            <button onClick={()=>onClick(item.regionId)}>Edit</button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              
              
            
          
                </tbody>
              </table>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}
