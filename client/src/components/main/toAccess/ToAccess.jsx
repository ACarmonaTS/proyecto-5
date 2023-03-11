import styles from "./toAccess.module.css";

import Access from "./access/Access";
import Create from "./createAcount/Create";

const ToAccess = () => (
  <>
    <div id="access" className={styles.access}>
      <Access />
    </div>
    <div id="create" className={styles.create}>
      <Create />
    </div>
  </>
);

export default ToAccess;
