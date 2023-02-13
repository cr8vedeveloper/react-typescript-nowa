import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";

export const BasicEditor = () => {
    const { handleSubmit, control } = useForm({
      mode: "onChange",
    });
    const handleSubmitOnClick:any = ({ editor_content }:any) => {
      console.log("editor_content ==> ", editor_content);
    };
  
  
    return (
      <section>
        <form className="richText br-5" onSubmit={handleSubmit(handleSubmitOnClick)}>
          <Controller
            name="editor_content"
            control={control}
            defaultValue=""
            render={(props:any) => (
              <Editor
                {...props}
                onEditorStateChange={(editorState:any) => {
                  if (editorState.blocks) {
                    props.onChange(editorState.blocks[0]);
                  }
                }}
              />
            )}
          />
        </form>
      </section>
    );
  };
