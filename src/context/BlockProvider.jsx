import { createContext, useEffect, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";
import { formatearFecha } from "../helpers";
import { v4 as uuidv4 } from "uuid";

const BlockContext = createContext();


const initialNotes = [
  {
    titulo: "Comienza agregando notas",
    descripcion:
      "Click en agregar nueva nota y comience agregandolos. En la parte inferior tiene opciones de editar y eliminar sus notas.",
    id: uuidv4(),
    fecha: formatearFecha(new Date()),
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("tareas")) || initialNotes || [];
};


const BlockProvider = ({ children }) => {
  const [popap, setPopap] = useState(false);
  const [notes, dispatch] = useReducer(AppReducer, [], init);
  // create new notes
  //------------------------
  const addNotes = (tareas) => {
    dispatch({
      type: "nuevo",
      payload: {
        ...tareas,
        id: uuidv4(),
        fecha: formatearFecha(new Date()),
      },
    });
  };
console.log(notes);
  // delete notes
  //------------------------
  const editNotes = (block) => {
    dispatch({
      type: "editar",
      payload: block
    })
  };

  // delete notes
  //------------------------
  const deleteNotes = (id) => {
    dispatch({
      type: "deleted",
      payload: id
    });
  };

// -----------------------------
  const onShowandClosed = () => {
    setPopap(!popap);
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(notes));
  }, [notes]);

  return (
    <BlockContext.Provider
      value={{
        // state
        notes,
        popap,

        // function
        addNotes,
        editNotes,
        deleteNotes,
        onShowandClosed,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export { BlockProvider };

export default BlockContext;
