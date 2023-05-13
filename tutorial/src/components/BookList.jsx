/* eslint-disable react/prop-types */
function BookList() {
  return (
    <section className="book-list">
      <Book
        img="/public/giraffe.jpg"
        title="There Are Moms Way Worse Than You: Irrefutable Proof That You Are Indeed a Fantastic Parent"
        author="Gleen Boozaman"
      />
      <Book
        img="/public/drSeuss.jpg"
        title="Oh, the Places You'll Go!"
        author="Dr. Seuss"
      />
    </section>
  );
}

function Book(props) {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.author.toUpperCase()}</h2>
    </article>
  );
}

export default BookList;
