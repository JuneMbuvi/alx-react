import React, { useState } from 'react';
import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  headerRowStyle: {
    backgroundColor: '#deb5b545',
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  tableHeader: {
    textAlign: 'center',
    padding: '2px',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const handleChecks = () => {
    setChecked(prevChecked => !prevChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={checked ? css(styles.headerRowStyle, styles.rowChecked) : ''}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={checked ? css(styles.headerRowStyle, styles.rowChecked) : ''}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={checked ? css(styles.rowStyle, styles.rowChecked) : ''}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

