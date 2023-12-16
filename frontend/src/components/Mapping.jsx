function Mapping(props){
    const {names} = props
    return(
        <div>
            <h1>hello</h1>
            {names.map((name ,i)=>(
                <div>{name}- {i}</div>
            ))}
            
        </div>
    )
}

export default Mapping