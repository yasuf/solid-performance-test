import styles from './App.module.css';
import { onMount, createSignal } from 'solid-js';

const NUMBER_OF_ROWS = 5000;

function App() {
  let startTime = performance.now();
  const [elements, setElements] = createSignal([]);

  onMount(() => {
    const newElements = [];
    for(let i=0; i<NUMBER_OF_ROWS; i++) {
      newElements.push({ title: `Element ${i}`});
    }
    setElements(newElements);
    const endTime = performance.now();
    console.log(`It took ${(endTime - startTime).toFixed(2)}ms to mount this component`)
  });

  const replaceRowsData = () => {
    startTime = performance.now();
    const newElements = [];
    for(let i=0;i<NUMBER_OF_ROWS; i++) {
      newElements.push({ title: `Changed title ${i}`});
    }
    setElements(newElements);
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`This re-render took ${(endTime - startTime).toFixed(2)}ms`);
    }, 0);
  };

  return (
    <div class={styles.App}>
      <h1>Solid</h1>
      <h2>Performance test</h2>
      <button onClick={replaceRowsData}>Replace rows</button>
      {
        elements().map(el => {
          return <div>{el.title}</div>
        })
      }
    </div>
  );
}

export default App;
