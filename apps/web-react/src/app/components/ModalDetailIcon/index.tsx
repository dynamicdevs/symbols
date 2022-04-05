import { useState } from 'react';
import { SymbolIcon } from '@symbol/stencil-component-react';

import './styles.scss';

interface Props {
  icon: string;
  type: string;
  close: () => void;
}

type TypeImport = 'HTML' | 'React';

const ModalDetailIcon = ({
  icon,
  type,
  close
}: Props) => {
  const [typeImport, setTypeImport] = useState<TypeImport>('HTML');

  return (
    <div className="content-modal">
      <div className="modal">
        <svg onClick={close} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>
        <div className="modal-header">
          <h2>{icon}</h2>
          <div></div>
        </div>

        <div className="modal-body">
          <div className="content-icon">
            <SymbolIcon 
              name={icon} 
              iconClass="symbol-xl" 
              type={type}
              class="icon"
            />
          </div>

          <div className="content-code">
            <ul>
              <li 
                onClick={() => setTypeImport('HTML')}
                className={typeImport === 'HTML' ? 'selected' : ''}
              >
                HTML
              </li>
              <li 
                onClick={() => setTypeImport('React')}
                className={typeImport === 'React' ? 'selected' : ''}
              >
                React/Angular
              </li>
            </ul>
            <div className="code-snippet">
              <div className="code-snippet-block">
                <pre>
                  <code>
                    {typeImport === 'HTML' && (
                      <>
                        <span className="token">
                          <span className="punctuation">{'<'}</span>
                          i&nbsp;
                          <span className="attr-name">class</span>
                          <span className="attr-value">
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            {icon}
                            <span className="punctuation">"</span>
                          </span>
                          <span className="punctuation">{'>'}</span>
                        </span>
                        <span className="token">
                          <span className="punctuation">{'</'}</span>
                          i
                          <span className="punctuation">{'>'}</span>
                        </span>
                      </>
                    )}

                    {typeImport === 'React' && (
                      <span className="token">
                        <span className="punctuation">{'<'}</span>
                        SymbolIcon&nbsp;
                        <span className="attr-name">name</span>
                        <span className="attr-value">
                          <span className="punctuation">=</span>
                          <span className="punctuation">"</span>
                          {icon}
                          <span className="punctuation">"</span>
                        </span>
                        {type && (
                          <>
                            &nbsp;
                            <span className="attr-name">type</span>
                            <span className="attr-value">
                              <span className="punctuation">=</span>
                              <span className="punctuation">"</span>
                              {type}
                              <span className="punctuation">"</span>
                            </span>
                          </>
                        )}
                        &nbsp;
                        <span className="punctuation">{'/>'}</span>
                      </span>
                    )}
                  </code>
                </pre>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ModalDetailIcon;
