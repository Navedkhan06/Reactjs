const CartoonSeries = () => {

  const name = "Doremon";
  const rating = "8.2";
  const summary = "Doraemon is a Japanese animated series about a robotic cat from the 22nd century who travels back in time to help a lazy and often unlucky boy named Nobita Nobi. Doraemon uses futuristic gadgets from his “4D pocket” to solve Nobita’s everyday problems, though things often get funny or chaotic. The show highlights friendship, imagination, and life lessons in a fun, light-hearted way";
  let age = 19;

  const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available"
  }

  const returnGenre = () => {
    const genre = "Entertainment";
    return genre;
  };

  return (
    <>
      <div>
        <img src="doremon.jpg" alt="image" width="30%" height="40%" />
      </div>
      <h2>Cartoon Name: {name} </h2>
      <h3>Rating: {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Genre : {returnGenre()}</p>
      {/* <button>{canWatch} </button> */}
      <button>{canWatch()} </button>
    </>
  );
};

export default CartoonSeries;

export const Header = () => {
    return <p>Welcome to Cartoon Series</p>;
};

export const Footer = () => {
    return <p>copyright @navedkhan</p>;
};