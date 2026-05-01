import type { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
    return(
        <>
        <h3>{`FirstName: ${props.name.first}`}</h3>
        <h3>{`LastName: ${props.name.last}`}</h3>
        </>
    )
};