import Button from '@mui/material/Button';
import styles from './Button.module.css'

export default function BasicButtons() {
  return (
    <>
    <button className={styles.btn}>hello</button>
      <Button  variant="outlined">Outlined</Button>
      </>
  );
}