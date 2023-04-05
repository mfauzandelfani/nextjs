import React, { useEffect, useState } from 'react'
import Region from '../api/Region'

export default function RegionUpdate(props:any) {
    const [region, setRegion] = useState<any>({})
    const [values, setValues] = useState<any>({
        id: undefined,
        name: undefined
    })
    useEffect(()=>{
        Region.findData(props.id).then(data =>{
            setRegion(data)
        })
    },[])

    const HandleChange = (name:any)=>(event:any)=>{
        setValues({ ...values, [name]: event.target.value})
    }

    const onEdit = async()=>{
        const payload = {
            id:(props.id),
            name:(values.name)

        }
        await Region.Update(payload).then(()=>{
            props.setRefresh(true)
            window.alert("Data Success Edit")
        })
    }
  return (
    <div>
      <h2>Edit Region</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Region Id</label>
          <input type="text" defaultValue={region.regionId} disabled />
        </div>

        <div>
          <label>Region Name</label>
          <input type="text" defaultValue={region.regionName} onChange={HandleChange("name")}/>
        </div>

        <div>
            <button type='submit'>Simpan</button>
            <button onClick={()=>props.setDisplay(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}
