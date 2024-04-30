"use client";
import { useState } from "react";
import {
  ButtonForm,
  InputField,
  useForm,
  SelectFrom,
  TablesList,
} from "../components/index";
import { EditDialog } from "./editorBook";

const Book = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [editItemData, setEditItemData] = useState<any>({});

  const openEditDialog = (id: number) => {
    const item = users.find((user) => user.id === id);
    if (item) {
      setEditItemData(item);
      setEditItemId(id);
      setIsEditDialogOpen(true);
    }
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditItemId(null);
    setEditItemData({});
  };

  const saveEditDialog = (field: string, value: string) => {
    // Actualiza el elemento con el nuevo valor
    const updatedUsers = users.map((user) =>
      user.id === editItemId ? { ...user, [field]: value } : user
    );
    // Guarda los cambios
    console.log(updatedUsers);
    // Cierra el diálogo
    closeEditDialog();
  };

  const { form, handleChange, resetForm } = useForm({
    title: "",
    author: "",
    categoty: "",
  });

  const Selector = ["Programa", "Versión 2", "Versión 3"];

  const handleSelect = (selectedOption: string) => {
    const fakeEvent = {
      target: {
        name: "category",
        value: selectedOption,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    handleChange(fakeEvent);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  const users = [
    {
      id: 1,
      title: "John Doe",
      author: "john.doe@example.com",
      category: "cd",
    },
    {
      id: 2,
      title: "Jane Smith",
      author: "jane.smith@example.com",
      category: "cd",
    },
    {
      id: 3,
      title: "Alice Johnson",
      author: "alice.johnson@example.com",
      category: "cd",
    },
  ];
  const columns = ["ID", "TITLE", "AUTHOR", "category"];

  const handleEdit = (id: number) => {
    console.log(`Editar elemento con ID ${id}`);
    openEditDialog(id);
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar elemento con ID ${id}`);
    // Aquí puedes agregar la lógica para eliminar el elemento con el ID dado
  };

  return (
    <div className="container mx-auto pt-5">
      <div className="flex justify-center pt-5">
        <div className="w-full lg:w-1/2 md:w-2/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-center">
              <h1>Agregar Producto</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <SelectFrom
                  label="categoria"
                  options={Selector}
                  onSelect={handleSelect}
                />
              </div>
              <div className="columns-2">
                <InputField
                  text="title"
                  placeholder="Titulo"
                  type="default"
                  value={form.title}
                  onChange={handleChange}
                />
                <InputField
                  text="author"
                  placeholder="Autor"
                  type="default"
                  value={form.author}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <ButtonForm title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TablesList
          data={users}
          columns={columns}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      {/* --------------  Editar Producto --------------------- */}
      <EditDialog
        onSelect={handleSelect}
        options={Selector}
        open={isEditDialogOpen}
        onClose={closeEditDialog}
        onSave={saveEditDialog}
        field="category"
        value={form.author}
      />
    </div>
  );
};

export default Book;
