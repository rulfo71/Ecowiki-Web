export const Constants = {
    Backend: {
        // url: 'https://reciclarte-63ba5.appspot.com'
        url: 'http://localhost:4200'
    }
}

export const listOfMaterials = [
    ["Plástico", "plastico"],
    ["Metal y Aluminio", "metalAluminio"],
    ["Papel y Cartón", "papelCarton"],
    ["Orgánico", "organico"],
    ["Botella de Amor", "botellaDeAmor"],
    ["No se Recicla", "noSeRecicla"],
  ];

export const materialMapper = {
    plastico: 'Plástico',
    metalAluminio: 'Metal y Aluminio',
    papelCarton: 'Papel y Cartón',
    organico: 'Orgánico',
    botellaDeAmor: 'Botella de Amor',
    noSeRecicla: 'No se Recicla'
}