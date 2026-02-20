import { jsPDF } from "jspdf";

export function generateCertificate(studentName: string, eventTitle: string, date: string) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  // Background and Border
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(1);
  doc.rect(10, 10, 277, 190);

  // Decorative Accent
  doc.setFillColor(37, 99, 235); // Accent Blue
  doc.rect(10, 10, 5, 190, "F");

  // Content
  doc.setFont("helvetica", "bold");
  doc.setFontSize(40);
  doc.setTextColor(37, 99, 235);
  doc.text("Certificate of Completion", 148.5, 60, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.setTextColor(100, 100, 100);
  doc.text("This is to certify that", 148.5, 85, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text(studentName, 148.5, 105, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.setTextColor(100, 100, 100);
  doc.text(`has successfully participated in and completed`, 148.5, 125, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(eventTitle, 148.5, 140, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(150, 150, 150);
  doc.text(`Issued on: ${date}`, 148.5, 170, { align: "center" });

  // Signature line
  doc.setDrawColor(0, 0, 0);
  doc.line(100, 185, 197, 185);
  doc.text("Event Organizer", 148.5, 192, { align: "center" });

  return doc;
}
