/* eslint-disable react/prop-types */
function BookList() {
  return (
    <section className="book-list">
      <Book
        img={"/public/giraffe.jpg"}
        title={
          "There Are Moms Way Worse Than You: Irrefutable Proof That You Are Indeed a Fantastic Parent"
        }
        author={"Gleen Boozaman"}
      />
      <Book img={"img"} title={"title"} author={"author"} />
    </section>
  );
}

function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.author.toUpperCase()}</h2>
    </article>
  );
}

export default BookList;
