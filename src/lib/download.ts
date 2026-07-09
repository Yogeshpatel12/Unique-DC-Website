// src/lib/download.ts
export const downloadPDF = (filePath: string, fileName: string) => {
  const link = document.createElement("a");
  // The path to the file in your public folder
  link.href = filePath; 
  // The name the file will have when saved to the user's computer
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};