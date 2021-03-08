import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

const CkEditor = ({ setCkEditorContent, ckEditorContent }) => {
    return (
        <div className="CkEditor">
            <h5>Description *</h5>
            <CKEditor

                className="height"
                editor={ClassicEditor}
                data={ckEditorContent}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setCkEditorContent(data);
                    // console.log({ event, editor, data });
                }}
            // onBlur={(event, editor) => {
            //     const data = editor.getData();
            //     // console.log('Blur.', editor);
            //     console.log(data)
            // }}
            // onFocus={(event, editor) => {
            //     console.log('Focus.', editor);
            // }}
            />
        </div>
    );
}

export default CkEditor;