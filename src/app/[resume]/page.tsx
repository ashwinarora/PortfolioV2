export default function ResumePage() {
  return (
    <div className="h-screen bg-gray-50 p-4 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1">
          <iframe
            src="/assets/Ashwin_Arora.pdf"
            className="w-full h-full border-0"
            title="Ashwin_Arora"
          />
        </div>
      </div>
    </div>
  );
}
