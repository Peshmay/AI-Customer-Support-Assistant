import ChatBot from './components/chat/ChatBot';

function App() {
   return (
      <main className="flex h-screen w-full flex-col bg-background p-4">
         <div className="flex-1 overflow-hidden">
            <ChatBot />
         </div>

         <footer className="pt-4 text-center text-sm text-gray-500">
            Built by Patience Evertsson
         </footer>
      </main>
   );
}

export default App;
