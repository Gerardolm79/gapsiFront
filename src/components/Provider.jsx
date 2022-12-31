import React from "react";
import '../css/Provider.css'

const Provider = () => {

    const [providerData, setProvider] = React.useState([])

    React.useEffect(() => {
        getProviderData()
    }, [])

    const getProviderData = async() => {
        const data = await fetch('http://localhost:8080/provider/list')
        const providers = await data.json()
        //console.log(msgString)
        setProvider(providers)
    }

    return(
        <div className="Container-provider">
            <table className="Table-provider">
            <thead className="Header">Provider</thead>
            <tr className="Row-header">
                <td className="Field-data">Nombre</td>
                <td className="Field-data">Razón Social</td>
                <td className="Field-data">Dirección</td>
                <td className="Field-data">Acción</td>
            </tr> 
                {
                    providerData.map(item => (
                        <tr className="Row-data">
                          <td className="Field-data"> {item.commercialName} </td>
                          <td className="Field-data"> {item.businessName} </td>
                          <td className="Field-data"> {item.address} </td>
                          <td className="Field-data"> 
                            <a className="Reference" href='http://localhost:8080/provider/delete/{item.id}'>Borrar</a>  
                          </td>
                        </tr>
                    ))
                }
            
            </table>
        </div>
    )

}

export default Provider