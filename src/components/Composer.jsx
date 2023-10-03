import { BlockNoteView, useBlockNote } from '@blocknote/react';
import React from 'react'

const Composer = ({ value, onChange, viewOnly = false }) => {
    const editor = useBlockNote({
        initialContent: value,
        editable: !viewOnly,
        onEditorContentChange: (editor) => onChange(editor.topLevelBlocks)
    });
    return (
        <BlockNoteView editor={editor} />
    )
}

export default Composer