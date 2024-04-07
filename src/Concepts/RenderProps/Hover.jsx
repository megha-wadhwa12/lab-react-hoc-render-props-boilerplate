const Hover = (props) => {    
    return (
        <div>
            <button onMouseEnter={props.increase}>Hover me : {props.count}</button>
        </div>
    )
}

export default Hover