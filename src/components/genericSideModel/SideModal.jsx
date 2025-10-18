import { useState } from "react";

// Generic Side Modal Component
const SideModal = ({ 
  isOpen, 
  onClose, 
  title = "Modal", 
  children, 
  width = "60%", // Can be "50%", "60%", "70%", etc. or Tailwind classes like "w-1/2", "w-3/5"
  position = "right", // "right" or "left"
  showOverlay = true,
  showCloseButton = true,
  className = "",
  headerClassName = "",
  contentClassName = ""
}) => {
  if (!isOpen) return null;

  // Convert percentage to Tailwind class if needed
  const getWidthClass = () => {
    switch(width) {
      case "40%": return "w-2/5";
      case "50%": return "w-1/2";
      case "60%": return "w-3/5";
      case "70%": return "w-7/12";
      case "80%": return "w-4/5";
      case "90%": return "w-11/12";
      case "100%": return "w-full";
      default: 
        return width.startsWith('w-') ? width : "w-3/5";
    }
  };

  const positionClasses = position === "left" 
    ? "left-0 animate-in slide-in-from-left" 
    : "right-0 animate-in slide-in-from-right";

  return (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Side Modal */}
      <div className={`fixed top-0 h-full bg-white shadow-xl z-50 duration-300 ease-out ${getWidthClass()} ${positionClasses} ${className}`}>
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`flex justify-between items-center p-4 border-b bg-gray-50 ${headerClassName}`}>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full p-1 text-2xl w-8 h-8 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className={`p-6 overflow-y-auto h-full ${contentClassName}`}>
          {children}
        </div>
      </div>
    </>
  );
};

// Example usage component
const App = () => {
  const [modalStates, setModalStates] = useState({
    basic: false,
    leftSide: false,
    fullWidth: false,
    noHeader: false,
    customContent: false
  });

  const openModal = (modalName) => {
    setModalStates(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModalStates(prev => ({ ...prev, [modalName]: false }));
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Generic Side Modal Examples</h1>
      
      {/* Demo Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={() => openModal('basic')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Basic Modal (Right, 60%)
        </button>

        <button
          onClick={() => openModal('leftSide')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Left Side Modal (50%)
        </button>

        <button
          onClick={() => openModal('fullWidth')}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Wide Modal (80%)
        </button>

        <button
          onClick={() => openModal('noHeader')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          No Header Modal
        </button>

        <button
          onClick={() => openModal('customContent')}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Custom Content Modal
        </button>
      </div>

      {/* Basic Modal */}
      <SideModal
        isOpen={modalStates.basic}
        onClose={() => closeModal('basic')}
        title="Basic Side Modal"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Welcome to the Basic Modal</h3>
          <p className="text-gray-600 mb-4">
            This is a basic side modal that slides in from the right with 60% width.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              You can put any content here - forms, lists, detailed information, etc.
            </p>
          </div>
        </div>
      </SideModal>

      {/* Left Side Modal */}
      <SideModal
        isOpen={modalStates.leftSide}
        onClose={() => closeModal('leftSide')}
        title="Left Side Modal"
        width="50%"
        position="left"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">This modal slides from the left!</h3>
          <p className="text-gray-600 mb-4">
            Notice how this modal slides in from the left side and takes up 50% of the screen width.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Position: Left
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Width: 50%
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Animation: Slide from left
            </li>
          </ul>
        </div>
      </SideModal>

      {/* Full Width Modal */}
      <SideModal
        isOpen={modalStates.fullWidth}
        onClose={() => closeModal('fullWidth')}
        title="Wide Modal (80%)"
        width="80%"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Extra Wide Modal</h3>
          <p className="text-gray-600 mb-6">
            This modal takes up 80% of the screen width, giving you more space for complex content.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Column 1</h4>
              <p className="text-sm text-gray-600">
                With more width, you can create multi-column layouts and display more information side by side.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Column 2</h4>
              <p className="text-sm text-gray-600">
                This is perfect for dashboards, detailed forms, or any content that needs more horizontal space.
              </p>
            </div>
          </div>
        </div>
      </SideModal>

      {/* No Header Modal */}
      <SideModal
        isOpen={modalStates.noHeader}
        onClose={() => closeModal('noHeader')}
        showCloseButton={false}
        title=""
        contentClassName="p-0"
      >
        <div className="relative h-full">
          {/* Custom header integrated into content */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Custom Header Design</h3>
              <button
                onClick={() => closeModal('noHeader')}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              This modal has no default header, so you can create completely custom designs.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                Perfect for branded modals or unique layouts that don't fit the standard header pattern.
              </p>
            </div>
          </div>
        </div>
      </SideModal>

      {/* Custom Content Modal */}
      <SideModal
        isOpen={modalStates.customContent}
        onClose={() => closeModal('customContent')}
        title="Advanced Content Example"
        width="70%"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Form Example</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Submit
            </button>
            <button 
              onClick={() => closeModal('customContent')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </SideModal>
    </div>
  );
};

export default App;