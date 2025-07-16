function Host({name, picture}) {
  return (
    <div className="host">
      <span className="host-name">
        {name.split(" ").map((part, i) => (
          <span key={i}>
            {part}
            <br />
          </span>
        ))}
      </span>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  );
}

export default Host;
