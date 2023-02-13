import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertFromRaw} from "draft-js";
  
  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "It is a long established faccvbdt that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {}
      }
    ]
  };
  export class InlineEditEditor extends React.Component{
  
    constructor(props:any) {
      super(props);
      const contentState = convertFromRaw(content);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        contentState,
        editorState
      };
    }
  
    onContentStateChange:any = (contentState: any) => {
      this.setState({
        contentState
      });
    };
  
    onEditorStateChange:any = (editorState: any) => {
      this.setState({
        editorState
      });
    };
  
    render() {
      const { editorState}:any = this.state;
      return (
      
          <Editor
            editorClassName={"report-editor"}
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />

      );
    }
  
};
