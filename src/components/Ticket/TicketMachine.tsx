import { Target } from 'lucide-react';
import React from 'react';

interface TicketMachineProps {
  onClick?: () => void;
}

function TicketMachine({ onClick }: TicketMachineProps) {
  return (
    <div className='h-full flex items-center justify-center'>
        <div className='bg-gray-800 h-full flex flex-col p-6 gap-4 items-center justify-center text-2xl font-bold rounded-md shadow-xl border border-gray-700'>
            <div className='bg-gray-900 rounded-full w-4 h-full shadow-inner border border-gray-950' />
            <button 
              onClick={onClick}
              className='bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-full cursor-pointer active:scale-90 shadow-lg shadow-orange-900/40 transition-all duration-150 animate-pulse hover:animate-none'
            >
                <Target size={28} />
            </button>
        </div>
    </div>
  );
}

export default TicketMachine;