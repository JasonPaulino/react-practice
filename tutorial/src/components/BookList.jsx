/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import books from "../model";

function BookList() {
  return (
    <>
      <h1 className="book-list-title">Top Books</h1>
      <section className="book-list">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

function Book({ img, title, author, number }) {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h2>{author.toUpperCase()}</h2>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
}

export default BookList;