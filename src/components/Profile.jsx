function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>

            <ProfileCard
                name="Naved"
                age={20}
                greeting={
                    <div>
                        <strong>Hi Naved,have a wonderfull day!</strong>
                    </div>
                } >

                <p>Hobbies: Reading,Hiking</p>
                <button>Contact</button>

            </ProfileCard>

            <ProfileCard
                name="Umair"
                age={22}
                greeting={
                    <div>
                        <strong>Hi Umair,have a wonderfull day!</strong>
                    </div>
                } >

                <p>Hobbies: Chess,Traveling</p>
                <button>Contact</button>

            </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard({name,age,greeting,children}){
    // const {name,age,greeting,children} = props;
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}

// function ProfileCard(props){
//     return(
//         <>
//         <h2>Name: {props.name}</h2>
//         <p>Age: {props.age}</p>
//         <p>{props.greeting}</p>
//         <div>{props.children}</div>
//         </>
//     )
// }