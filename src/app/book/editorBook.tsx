import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; author: string; category: string }) => void;
  initialData: { title: string; author: string; category: string };
}

export const EditDialog: React.FC<EditDialogProps> = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <span className="inline-block h-screen align-middle"></span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Editar elemento
              </Dialog.Title>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Autor</label>
                    <input
                      type="text"
                      name="author"
                      value={form.author}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
                    <input
                      type="text"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Guardar</button>
                    <button type="button" onClick={onClose} className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md">Cancelar</button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
