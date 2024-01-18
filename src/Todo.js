function Todo(props)
{
    return(
        <div><li>
        <button className='btn-1' onClick={()=>{props.onSelect(props.id)}}>-</button>
        {props.item}
        </li>
        </div>
    )
}
export default Todo