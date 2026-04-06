type Person = {
    name : {
       first: string,
       last: string
    }
}

export const Person = (props: Person) => {
    return(
        <>
        <h3>{`FirstName: ${props.name.first}`}</h3>
        <h3>{`LastName: ${props.name.last}`}</h3>
        </>
    )
};