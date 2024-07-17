import React ,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons'


function Editor (props) {
    const[open,setOpen] = useState(true)
    function handleChange(editor,data,value)
    {
        props.onChange(value)
    }

  return (
    <div className={`grow basis-0 flex flex-col p-2 ${open ?'':'grow-0'}`}>

      {/* title part of the editor */}
      <div className='flex justify-between bg-black text-white p-5 rounded-t-lg '>
        {props.displayName}
        <button onClick={ () => {setOpen(!open)}}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} className='ml-2' />
        </button>
      </div>


      {/*Code Editing part of the editr */}
      <ControlledEditor
        className='grow rounded-b-lg overflow-hidden'
        onBeforeChange={handleChange}
        value={props.value}
        options={{
            lineWrapping: true,
            line: true,
            mode: props.language,
            theme:'material',
            lineNumbers: true
        }}
      />

    </div>
  )
}

export default Editor
