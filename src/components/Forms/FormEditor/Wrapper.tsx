import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


export const Wrapper = () => {

  const [description, setDescription] = useState<any>({
    htmlValue: "<p>fsegfvfrgdzfgzfdzb</p>\n",
    editorState: EditorState.createEmpty()
  });

  const onEditorStateChange = (editorValue:any) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue
    });
  };
function uploadImageCallBack(file:any) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}
  return (
      <Editor
        toolbarHidden={false}
        editorState={description.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Quill is a free, open dfgdfgdghsource WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
        The icons use here as a replacement to default svg icons are from Line Awesome Icons."
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
  );
};





