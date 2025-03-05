import React, { useState } from 'react';
import '../../styles/HeavyComponents.css';

// This would be a more complex component in a real app
const HeavyComponent3 = () => {
  const [activeTab, setActiveTab] = useState('editor');
  
  return (
    <div className="heavy-component">
      <div className="component-content">
        <h4>Rich Text Editor & Media Processing</h4>
        <p>This component would typically include WYSIWYG editors and media handling libraries.</p>
        <div className="mock-editor">
          <div className="editor-toolbar">
            <button className="editor-tool">B</button>
            <button className="editor-tool"><i>I</i></button>
            <button className="editor-tool"><u>U</u></button>
            <span className="toolbar-divider"></span>
            <button className="editor-tool">Image</button>
            <button className="editor-tool">Table</button>
            <button className="editor-tool">Code</button>
          </div>
          <div className="editor-tabs">
            <button 
              className={`editor-tab ${activeTab === 'editor' ? 'active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              Editor
            </button>
            <button 
              className={`editor-tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
          </div>
          <div className="editor-content">
            {activeTab === 'editor' ? (
              <div className="content-area">
                <div className="text-line"></div>
                <div className="text-line"></div>
                <div className="text-line" style={{width: '75%'}}></div>
                <div className="image-placeholder"></div>
                <div className="text-line"></div>
                <div className="text-line" style={{width: '40%'}}></div>
              </div>
            ) : (
              <div className="preview-area">
                <div className="preview-text">Preview mode active</div>
              </div>
            )}
          </div>
        </div>
        <div className="component-footer">
          <p>✅ Component loaded successfully</p>
          <p className="code-note">Note: In a real application, this would include ~158KB of editor libraries</p>
        </div>
      </div>
    </div>
  );
};

export default HeavyComponent3; 