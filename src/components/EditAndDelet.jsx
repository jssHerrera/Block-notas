import { RiPencilFill } from "react-icons/ri";
import { AiOutlineDelete} from "react-icons/ai";


export const EditAndDelet = ({ onOpen, onDelete, setNoteId, id }) => {
  const onEditNotes = () => {
    onOpen();
    setNoteId(id);
  };

  return (
    <div
      className="bg-gray-200 rounded-lg absolute bottom-0 right-0 shadow shadow-stone-400/60 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all "
    >
      <div
        className="py-2 px-3"  >
        <button
          className="flex gap-1 justify-center items-center hover:cursor-pointer
                  hover:text-blue-400"
          onClick={onEditNotes}
        >
          <RiPencilFill className="hover:text-blue-400" />
          Editar
        </button>
        <button
          className="flex gap-1 justify-center items-center hover:cursor-pointer
                  hover:text-red-500"
          onClick={onDelete}
        >
          <AiOutlineDelete className="hover:text-red-500" />
          Eliminar
        </button>
      </div>
    </div>
  );
};
