import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2-react-17'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

//FROM NPM CODEMIRROR GRAPHQL SITE
import type { ValidationContext, SDLValidationContext } from 'graphql';

import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';


function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
    <div className="editor-title">
      {displayName}
      <button
        type="button"
        className="expand-collapse-btn"
        onClick={() => setOpen(prevOpen => !prevOpen)}
      >
        <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
      </button>
    </div>
    <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'material',
        lineNumbers: true
      }}
    />
  </div>
  )
}

export default Editor
