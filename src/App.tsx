import { Item } from "./components/Item/Item";
import styles from "./App.module.css";

function App() {
  const cols = 15;
  const rows = 5;
  const visibleColumns = 4;

  const itemWidth = 100;
  const itemHeight = 100;
  const itemCount = cols * rows;

  const array = Array.from({ length: itemCount }, (_, index) => ({
    id: index + 1,
    position: {
      x: index % cols,
      y: Math.floor(index / cols),
    },
  }));

  return (
    <main
      style={
        {
          "--item-width": `${itemWidth}px`,
          "--item-height": `${itemHeight}px`,
          "--row-count": `${rows}`,
          "--col-count": `${visibleColumns}`,
        } as React.CSSProperties
      }
      className={styles.container}
    >
      <section className={styles.itemsWrapper}>
        <div className={styles.itemsContainer}>
          {array.length &&
            array.map(({ id, position }) => (
              <Item
                key={id}
                position={position}
                visibleColumns={visibleColumns}
                cols={cols}
                rows={rows}
                itemWidth={itemWidth}
                itemHeight={itemHeight}
              />
            ))}
        </div>
      </section>
      <div className={styles.dropOff}></div>
    </main>
  );
}

export default App;
