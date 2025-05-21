export default function SidebarLabels({ isExpanded }) {
  const labels = [
    { id: 1, color: '#FF5F5F', text1: 'AB', text2: 'BA', selected: true },
    { id: 2, color: '#D16DFF', text1: 'CD', text2: 'DC', selected: false },
    { id: 3, color: '#FFE066', text1: 'EF', text2: 'FE', selected: false },
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
            {label.text1}
            {isExpanded ? (
              <span>{label.text2}</span>
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
}
