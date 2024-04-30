   
   const ContextMenu = ({ x, y, onDelete }) => {
    console.log('Rendering ContextMenu at:', x, y);
    return (
      <div style={{ position: 'absolute', top: y, left: x, zIndex: 1000, background: 'white', border: '1px solid black', padding: '10px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li onClick={onDelete} style={{ cursor: 'pointer' }}>Ta bort kort</li>
        </ul>
      </div>
    );
  };

  
export default ContextMenu;