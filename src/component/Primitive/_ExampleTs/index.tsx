import styles from './Example.module.scss'

interface ExampleProps {
  children: React.ReactNode
}

const Example: React.FC<ExampleProps> = ({ children }) => (
  <div className={styles.Example}>{children}</div>
)

export default Example
