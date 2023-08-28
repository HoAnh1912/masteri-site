import styles from './CustomCheckbox.module.scss';

interface checkbox {
  onChange?: (event: any) => void;
  label: string;
  name: string;
}

const CustomCheckbox = ({ label, name, onChange }: checkbox) => {
  return (
    <div className={styles.checkbox_wrapper}>
      <label className={styles.checkbox}>
        <input
          name={name}
          className={styles.checkbox_input}
          type="checkbox"
          onChange={e => {
            if (onChange) onChange(e);
          }}
        />
        <span className={styles.checkbox_label}>{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
