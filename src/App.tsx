import JsPDF from 'jspdf';
import React from 'react';

import View from './components/Editor/View';
import Button from './components/Form/Button';
import Textarea from './components/Form/Textarea';
import Center from './components/Layout/Center';
import Flex from './components/Layout/Flex';
import { black, white } from './configs/colors';
import GlobalStyles from './styles/GlobalStyles';
import marked from './utils/external/marked';

function App() {
  const [text, setText] = React.useState('');
  const [md, setMd] = React.useState('');
  const viewRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    setMd(marked(text));
  };

  React.useEffect(() => {
    setMd(marked(text));
  }, [text]);

  const htmlToPdf = () => {
    const doc = new JsPDF({
      orientation: 'portrait',
      format: 'a4',
      unit: 'px',
    });

    doc.html(viewRef.current, {
      async callback(doc) {
        await doc.save('export.pdf');
      },
      x: 10,
      y: 10,
      width: 1000,
    });
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Center background={black} width="100%" height="48px">
        <Button
          onClick={htmlToPdf}
          background={white}
          color={black}
          width="96px"
          height="100%"
          fontSize="12px"
          fontWeight={700}
          borderRadius="4px"
        >
          Export PDF
        </Button>
      </Center>
      <Flex width="100%">
        <Textarea
          width="50%"
          minHeight="calc(100vh - 48px)"
          value={text}
          onChange={handleChange}
          fontSize="16px"
          padding="4px 8px"
          placeholder="Type here"
        ></Textarea>
        <View
          id="view"
          width="50%"
          height="100%"
          dangerouslySetInnerHTML={{ __html: md }}
          ref={viewRef}
        ></View>
      </Flex>
    </div>
  );
}

export default App;
