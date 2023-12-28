// SnowflakeCursor.js
import React, { useEffect } from 'react';
import './SnowflakeCursor.css';

const SnowflakeCursor = () => {
  useEffect(() => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    document.body.appendChild(snowflake);

    const updateCursor = (e) => {
      snowflake.style.left = e.pageX + 'px';
      snowflake.style.top = e.pageY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      snowflake.remove();

      // Restore the default cursor when the component is unmounted
      document.body.style.cursor = 'auto';
    };
  }, []);

  return null;
};

export default SnowflakeCursor;
