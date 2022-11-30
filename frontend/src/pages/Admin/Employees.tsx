import React, { useEffect, useState } from 'react';
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';
import styles from './page.module.css';
import Notification from '../../components/Notification/Notification';

const Employees = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = 'Employees - Carriage';
  });

  return (
    <main id="main">
      <div className={styles.pageTitle}>
        <h1 className={styles.header}>Employees</h1>
        <div className={styles.rightSection}>
          <button onClick={()=> setIsOpen(true)}>+ Add an employee</button>
          <EmployeeModal isOpen = {isOpen} setIsOpen = {setIsOpen}/>
          <Notification />
        </div>
      </div>
      <EmployeeCards />
    </main>
  );
};

export default Employees;
