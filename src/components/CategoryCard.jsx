import logo from "../assets/react.svg";

export default function CategoryCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="Card Logo" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
