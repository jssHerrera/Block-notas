import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useForm } from "../hook/useForm";
import { useEffect, useState } from "react";

const initialForm = {
  titulo: "",
  descripcion: "",
};

export const ModalForm = ({
  onclosed,
  addNotes,
  editNotes,
  notes,
  noteId,
  setNoteId,
}) => {
  const [message, setMessage] = useState(false);
  const { titulo, descripcion, id, setFormState, onInputChange } =
    useForm(initialForm);

  const onclosedReset = () => {
    onclosed();
    setFormState(initialForm);
    setNoteId(null);
  };
  console.log(message);

  const onInputSubmit = (e) => {
    e.preventDefault();

    if (titulo === "" || descripcion === "") {
      setMessage(true);

      setTimeout(() => {
        setMessage(false);
      }, 2000);
      return;
    }

    setMessage(false);

    if (noteId) {
      editNotes({ titulo, descripcion, id });
    } else {
      addNotes({ titulo, descripcion });
    }
    setFormState(initialForm);
    onclosed();
    setNoteId(null);
  };

  useEffect(() => {
    const taskFound = notes.find((elem) => elem.id === noteId);
    if (taskFound) {
      setFormState(taskFound);
      return;
    }
  }, [noteId, notes]);

  return (
    <motion.section
      className="fixed top-0 left-0 right-0 bottom-0  bg-black/80 flex justify-center items-center p-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
      onClick={onclosedReset}
    >
      <motion.div
        className="w-full max-w-[370px] "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl px-5 pt-6 pb-8">
          <div className=" w-full flex items-center justify-between ">
            <p className={`${message && 'text-red-700'}`}>
              {`
                ${message
                  ?'Complete los campos'
                  :noteId
                    ? "Editando nota "
                    : "Agrega una nueva nota"}
              `}
            </p>
            <IoMdClose
              className="text-xl text-blue-400 hover:text-blue-500 hover:cursor-pointer  transition-all"
              onClick={onclosedReset}
            />
          </div>
          <form className="w-full" onSubmit={onInputSubmit}>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tarea"
              >
                Nota
              </label>
              <input
                className=" bg-gray-200 shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white text-sm"
                id="tarea"
                type="text"
                name="titulo"
                placeholder="tituto"
                value={titulo}
                onChange={onInputChange}
              />
            </div>

            <div className="w-full ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className=" bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white text-sm"
                id="description"
                name="descripcion"
                rows="5"
                placeholder="Descripcion"
                value={descripcion}
                onChange={onInputChange}
              />
            </div>

            <input
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500  text-white py-2 mt-6 rounded  focus:shadow-outline hover:cursor-pointer hover:scale-[1.02]  transition-all"
              type="submit"
              value={`${noteId ? "Editar " : "Agregar Nota"}`}
            />
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};
