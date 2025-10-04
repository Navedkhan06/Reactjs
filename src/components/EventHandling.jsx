export const EventHandling = () => {
    // function handleButtonClick(){
    //     alert("Hey I am onClick Event");
    // }
    
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }

    return (
        <>
         {/* // ? Function components with named functions   */}
          <button onClick={handleButtonClick}>Click me</button>
          <br />
          <button onClick={() => handleButtonClick()}>Click Me 2</button>
          <br />
          <button onClick={(event) => console.log(event)}>Inline Function</button>
          {/* function components with inline arrow function  */}
          <button onClick={()=> alert("")}>Inline Arr fun</button>
          {/* Passing argument to event handlers  */}
          {/* <button onClick={handleWelcomeUser("Naved")}>Click Me</button> */}
          <button onClick={() => handleWelcomeUser("Naved")}>Click Me</button>
          <button onClick={() => handleWelcomeUser("Khan Sahab")}>Click Me</button>
        </>
    )
}