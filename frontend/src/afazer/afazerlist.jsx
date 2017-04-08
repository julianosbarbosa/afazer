import React from 'react'
import IconButton from '../template/iconButton'

export default props=>{

    const renderRows = ()=>{
        const list = props.list || []

        return list.map(afazer => (
            <tr key={afazer._id}>
                <td>{afazer.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o"
                     onClick={()=>props.handleRemove(afazer)}></IconButton>
                </td>
            </tr>
        ))
    }
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}