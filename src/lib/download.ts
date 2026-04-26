/**
 * Utility to simulate a PDF download since we don't have a backend to serve real PDFs
 * This creates a text blob that looks like a technical document.
 */
export const downloadPDF = (title: string, content: string = "") => {
  const text = `
--------------------------------------------------
UNIQUE DC MOTOR BRAKES - TECHNICAL DATA SHEET
--------------------------------------------------
PRODUCT: ${title}
DATE: ${new Date().toLocaleDateString()}
ISO 9001:2015 CERTIFIED

${content || "Technical specifications, installation guides, and maintenance protocols for Unique DC Motor Brakes."}

For more information, contact sales@uniquedcbrakes.com
--------------------------------------------------
© ${new Date().getFullYear()} UNIQUE DC MOTOR BRAKES
  `;
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title.replace(/\s+/g, '_')}_Technical_Specs.pdf.txt`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};
