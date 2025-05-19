export default function SidebarLabels() {
  const labels = [
    { id: 1, color: '#FF5F5F', text: 'AB', selected: true },
    { id: 2, color: '#D16DFF', text: 'CD', selected: false },
    { id: 3, color: '#FFE066', text: 'EF', selected: false },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {labels.map(label => (
        <div
          key={label.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: label.selected ? '#89aeb0' : 'transparent',
            padding: '2px 5px',
            borderRadius: label.selected ? '25px' : '0px',
            transition: '0.2s',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: label.color,
            }}
          />
          <span
            style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: 1,
              paddingLeft: '10px',  
            }}
          >
            {label.text}
          </span>
        </div>
      ))}
    </div>
  );
}
