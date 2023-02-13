import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";

export function Modaleditor() {
    const [lgShow, setLgShow] = useState(false);
    const { handleSubmit, control } = useForm({
      mode: "onChange",
    });
  
    const handleSubmitOnClick = ({ editor_content }:any) => {
      console.log("editor_content ==> ", editor_content);
    };
  
    const values = [true];
  
    return (
      <>
        {values.map((v:any, idx:any) => (
          <Button
            variant="primary"
            className="mt-3 me-2"
            key={idx}
            onClick={() => setLgShow(true)}
          >
            View Live Demo
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Create New Document
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
              <form
                className="richText rich"
                onSubmit={handleSubmit(handleSubmitOnClick)}
              >
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
          </Modal.Body>
        </Modal>
      </>
    );
  }
