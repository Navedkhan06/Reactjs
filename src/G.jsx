export const App = () => {
  return (
    <>
      <CartoonSeries />
      <CartoonSeries />
      <CartoonSeries />
      <CartoonSeries />
      <CartoonSeries />
    </>

  );
};

const CartoonSeries = () => {

  // use
  // 1. varibles
  // 2. Expressions
  // JSX allows you to write JavaScript expressions inside curly braces.
  // This includes operations, functions calls, and other javascript expressions that
  // produce a value.

  // 3. Function calls
  // Functions , expecially those that return JSX, can be
  // invoked directly within  your JSX.

  const name = "Doremon";
  const rating = "8.2";
  const summary = "Doraemon is a Japanese animated series about a robotic cat from the 22nd century who travels back in time to help a lazy and often unlucky boy named Nobita Nobi. Doraemon uses futuristic gadgets from his “4D pocket” to solve Nobita’s everyday problems, though things often get funny or chaotic. The show highlights friendship, imagination, and life lessons in a fun, light-hearted way";
  let age = 16;

  const returnGenre = () => {
    const genre = "Entertainment";
    return genre;
  };

  if (age < 18) {
    return (
      <div>
        <div>
          <img src="doremon.jpg" alt="image" width="30%" height="40%" />
        </div>
        <h2>Cartoon Name: {name} </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary : {summary}</p>
        <p>Genre : {returnGenre()}</p>
        <button>Not Available</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img src="doremon.jpg" alt="image" width="30%" height="40%" />
      </div>
      <h2>Cartoon Name: {name} </h2>
      <h3>Rating: {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Genre : {returnGenre()}</p>
      <button>Watch Now</button>
    </div>
  );
};