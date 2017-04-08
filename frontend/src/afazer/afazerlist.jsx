import React from 'react'
import IconButton from '../template/iconButton'

export default props=>{

    const renderRows = ()=>{
        const list = props.list || []

        return list.map(afazer => (
            <tr key={afazer._id}>
                <td className={afazer.done ? 'markedAsDone': ''}>{afazer.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={afazer.done}
                     onClick={()=>props.handleMarckAsDone(afazer)}></IconButton>
                     <IconButton style="warning" icon="undo" hide={!afazer.done}
                     onClick={()=>props.handleMarckAsPending(afazer)}></IconButton>
                    <IconButton style="danger" icon="trash-o" hide={!afazer.done}
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
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}