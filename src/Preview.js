import React from 'react';
import MarkdownIt from 'markdown-it';
import { FaFreeCodeCamp, FaExpand } from "react-icons/fa";
import styles from "./App.css"
const md = new MarkdownIt();

const Preview = ({ markdown }) => {
  const html = md.render(markdown);
  md.renderer.rules.softbreak = () => '<br>';
  return (
    <div className='preview-container'>
      <div className='flex-container'>
      <div className="icon_label">
            <div>
              <FaFreeCodeCamp className="ico" size={18} color="" />
              <label>The previewer</label>
            </div>
            <div>
            <FaExpand className="ico2" size={18} color=""  />
            </div>
          </div>
      
    <div
    className='the-previewer'
      id="preview"
      dangerouslySetInnerHTML={{ __html: html }}
    />
      </div>
     
    </div>
  );
};

export default Preview;
