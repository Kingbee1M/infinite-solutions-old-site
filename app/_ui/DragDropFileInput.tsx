import { useState, DragEvent, ChangeEvent } from 'react';
import { MdCloudUpload } from 'react-icons/md';

const DragDropFileInput: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  return (
    <div className="w-full p-4 border-2 border-dashed border-primary bg-gray-50">
      <div
        id="dropzone"
        className="flex flex-col items-center justify-center cursor-pointer text-gray-500"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <MdCloudUpload className='text-3xl'/>

        <p className="mt-2 text-sm">Upload a file</p>
        <p className="text-slate-400 text-sm">Drag & drop your files here</p>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
      </div>
      {files.length > 0 && (
        <ul className="">
          {files.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DragDropFileInput;
