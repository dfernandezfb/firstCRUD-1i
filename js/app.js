//! C      R     U      D
//* Create Read  Update Delete

//? READ

const getProfes = async () => {
  try {
    const response = await fetch("http://localhost:3000/profes");
    const profes = await response.json();
    console.log(profes);
  } catch (error) {
    console.warn(error.message);
  }
};

//? CREATE
const addAlumno = async () => {
  try {
    await fetch("http://localhost:3000/alumnos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 3, name: "Felicitas Cagna" }),
    });
  } catch (error) {
    console.log(error.message);
  }
};

//? DELETE

const deleteAlumno = async(id)=>{
  try {
    await fetch("http://localhost:3000/alumnos/"+id,{
      method:'DELETE'
    })
  } catch (error) {
    console.log(error.message);
  }
}

//? UPDATE

const updateAlumno = async(id,data)=>{
  try {
    await fetch("http://localhost:3000/alumnos/"+id,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
  } catch (error) {
    console.log(error.message);
  }
}