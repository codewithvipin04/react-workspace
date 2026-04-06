type GreetProp = {
    name: string,
    messageCount?: number, // ? means optional prop
    isLoggedIn: boolean
}

export const Greet = (props: GreetProp) => {
  return <h2>
    {
    props.isLoggedIn ? `Hello World, My name is ${props.name}, You have ${props.messageCount} unread messages.`: 'Hello Greet !!' 
    }
    </h2>;
};
