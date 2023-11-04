async function verificarUsuario() {
  // Obtener los valores de los campos de texto
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Crear un objeto con los datos del usuario
  const usuario = {
    username: username,
    password: password
  };

  try {
    // Enviar la solicitud POST a la API
    const response = await fetch('https://smoggy-red-ant.cyclic.app/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    // Verificar si la solicitud fue exitosa (código de estado 2xx)
    if (response.ok) {
      const data = await response.json(); // Obtener los datos de la API
      const apiPassword = data.password; // Obtener la contraseña de la API

      // Comparar contraseñas
      if (password === apiPassword) {
        console.log('Contraseña correcta');
        console.log('Datos del usuario:', data);
      } else {
        console.log('Contraseña incorrecta');
      }
    } else {
      console.error('Error al enviar la solicitud a la API:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
  
verificarUsuario();

