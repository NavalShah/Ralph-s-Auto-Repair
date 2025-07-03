function Link(props) {
  return (
    <a href={props.href || "#"} className="Link">
      <span className="Link-text">{props.text}</span>
      <img src="/red-arrow.png" alt="" className={props.class} />
    </a>
  );
}

export default Link;
