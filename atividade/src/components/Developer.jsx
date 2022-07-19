import "./style.css";

export function Developer(props) {
  return (
    <label htmlFor="">
      <p>
        {props.name}
      </p>
      
      <p>
        {props.age}
      </p>
      
      <p>
        {props.country}
      </p>
    </label>
  );
}
