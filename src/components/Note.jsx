import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { EditAndDelet } from "./EditAndDelet";

export const Note = ({ elem, deleteNotes, onOpen, setNoteId }) => {
  const { titulo, descripcion, fecha, id } = elem;

  const onDelete = () => {
    deleteNotes(id);
  };
  return (
    <div className="w-full max-w-[265px]">
      <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-xl px-5 min-h-[250px] ">
        <div className=" w-full flex items-center justify-between ">
          <p>Nota</p>
          <IoMdClose
            className="text-xl text-blue-400 hover:text-blue-500 hover:cursor-pointer transition-all"
            onClick={onDelete}
          />
        </div>
        <div className="w-full mb-2 min-h-[128px] overflow-hidden">
          <h2 className="block text-gray-700 text-sm font-bold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {titulo}
          </h2>
          <p className=" overflow-hidden text-start text-sm">{descripcion}</p>
        </div>
        <div className="w-full flex content-start justify-between items-center min-h-[25px]">
          <p>{fecha}</p>
          <div className="relative  group">
            <BiDotsHorizontalRounded className="text-xl text-slate-400 hover:text-slate-500 transition-all hover:cursor-pointer " />
            <EditAndDelet
              onOpen={onOpen}
              setNoteId={setNoteId}
              id={id}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
