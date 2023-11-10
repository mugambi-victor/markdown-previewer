import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styles from './App.css';
const App = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className={styles.wrapper}>
      <Editor onChange={setMarkdown}  />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
