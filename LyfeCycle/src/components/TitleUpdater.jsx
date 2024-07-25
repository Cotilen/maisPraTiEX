import { useEffect, useState } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Welcome!");

  document.title = title;

  useEffect(() => {
    if (title == "Welcome!") {
      setTitle(() => "Good Bye!");
    } else {
      setTitle(() => "Welcome!");
    }
  }, [count]);

  return (
    <div className="main">
      <h2>Atualizar título</h2>
      <h3>Contador: {count}</h3>
      <div className="botoes">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  );
}

export default TitleUpdater;
