import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalForm } from "./components/ModalForm";
import BlockContext from "./context/BlockProvider";
import { Block } from "./pages/Block";

export const App = () => {
  const { addNotes, editNotes, deleteNotes, notes, popap, onShowandClosed } =
    useContext(BlockContext);

  const [noteId, setNoteId] = useState(null)

  return (
    <main>
      <Block
        onOpen={onShowandClosed}
        notes={notes}
        deleteNotes={deleteNotes}
        setNoteId={setNoteId}
      />
      <AnimatePresence>
        {popap &&
          <ModalForm
            notes={notes}
            noteId={noteId}
            onclosed={onShowandClosed}
            addNotes={addNotes}
            editNotes={editNotes}
            setNoteId={setNoteId}
        />}
      </AnimatePresence>
    </main>
  );
};
