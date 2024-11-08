
import { useEffect, useState } from 'react';
import styles from "../styles/table.module.css"

export function Users () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
              throw new Error('Ошибка подключения');
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
      }, []);

    if (loading) {
      return <div className={styles.loading}></div>;
    }
  
    return (
      <div className={styles.table}>
        <h1 className={styles.title}>Таблица с пользователями</h1>
        <table className={styles.tablebody}>
          <thead className={styles.header}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };