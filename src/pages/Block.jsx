import { IoMdAdd } from 'react-icons/io';
import { Note } from '../components/Note';


export const Block = ({notes, setNoteId, onOpen, deleteNotes}) => {

  return (
    <section className=" flex flex-wrap justify-center gap-3 p-5">
      <div className="w-full max-w-[265px]" onClick={onOpen}>
        <div className="flex flex-col justify-center items-center gap-2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 h-64  max-h-[250px]  hover:cursor-pointer group">
          <div className="h-3/4 flex items-center ">
            <span className=" rounded-full border-dashed border-2 border-blue-500 w-20 h-20 col  flex items-center justify-center group-hover:scale-125 transition-all">
              <IoMdAdd className="text-4xl text-blue-500"/>
            </span>
          </div>
          <div className="h-1/6flex items-end">
            <p className="text-center text-gray-500 text-xs">Agrega nueva nota.</p>
          </div>
        </div>
      </div>
     {notes.map(elem => (
      <Note
      key={elem.id}
      elem = {elem}
      deleteNotes={deleteNotes}
      onOpen={onOpen}
      setNoteId = {setNoteId}
      />
     ))}
    </section>
  )
}
