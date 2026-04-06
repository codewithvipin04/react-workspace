type ListProp = {
    list: {
        first: string,
        last: string
    }[]
}

export const PersonList = (props: ListProp) => {
    return(
        <>
        {props.list.map( name => {
            return(
                <h3>{name.first} {name.last}</h3>
            )
        })}
        </>
    )
}