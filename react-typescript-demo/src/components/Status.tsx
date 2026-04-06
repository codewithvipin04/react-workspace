type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message;

    if(props.status === 'loading') {
        message = '...loading!'
    }else if(props.status === 'success') {
        message = 'Data fetched successfully !!'
    }else if(props.status === 'error') {

    }

    return(
        <h2>{`Status: ${message}`}</h2>
    )
}