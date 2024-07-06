function IntegerdleHeader() {
    return (
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
            <p className="text-2xl font-bold"></p>
            {/*Replace with components later */}
            <div className="flex items-center space-x-4">
                    {/* Sign In/Log Out Button */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                    {/* Profile Section */}
                    <div className="flex items-center space-x-2">
                        
                        <span className="hidden sm:block text-lg">John Doe</span>
                    </div>
                </div>
        </div>
    );
}

export default IntegerdleHeader;