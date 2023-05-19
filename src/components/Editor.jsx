import React from "react"
import { useState } from 'react'
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({ tempNoteText, setTempNoteText, newNote }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <div>            
            <section className="pane editor">                        
                <ReactMde
                    value={tempNoteText}
                    onChange={setTempNoteText}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                    minEditorHeight={40}
                    heightUnits="vh"
                />            
            </section>
            <button className="add-button" onClick={newNote}>Add note</button>
        </div>

    )
}
