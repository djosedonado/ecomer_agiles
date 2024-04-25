'use client'
import {TablesList} from '../components/index';


const ListUsers = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", admin: 1 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", admin: 0 },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      admin: 1,
    },
  ];
  const columns = ["ID", "Name", "Email", "ADMIN"];
  const handleEdit = (id: number) => {
    console.log(`Editar elemento con ID ${id}`);
    // Aquí puedes agregar la lógica para editar el elemento con el ID dado
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar elemento con ID ${id}`);
    // Aquí puedes agregar la lógica para eliminar el elemento con el ID dado
  };
  return (
    <div className="container mx-auto pt-5">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TablesList
          data={users}
          columns={columns}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default ListUsers;