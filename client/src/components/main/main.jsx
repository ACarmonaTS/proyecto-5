import styles from "./main.module.css";

import Access from "./toAccess/access/Access";
import Create from "./toAccess/createAcount/Create";

const Main = () => {
  return (
    <main>
      <div id="access" className={styles.container}><Access /></div>
      <div id="create" className={styles.container}><Create /></div>
      {/* <Access />
      {/* <Access />
      <Create /> */}
    </main>
  );
};

export default Main;
