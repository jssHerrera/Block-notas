export function AppReducer(notes, action) {
  switch (action.type) {
    case "nuevo": {
      return [...notes, action.payload];
    }

    case "editar": {
      return notes.map((elem) => {
        if (elem.id === action.payload.id) {
          elem.titulo = action.payload.titulo
          elem.descripcion = action.payload.descripcion;
          return elem
        }
        return elem;
      });
    }
    case "deleted": {
      return notes.filter((elem) => elem.id !== action.payload);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
