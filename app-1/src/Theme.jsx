import './index.css'

function Theme() {
  return (
    // 'bg-bg' uses your --color-bg (cyan)
    // 'text-text' uses your --color-text (red)
    <div className="flex h-screen w-screen items-center justify-center bg-bg">
      <h1 className="text-4xl font-bold text-text">
        This is Red text on a Cyan background
      </h1>
    </div>
  );
}

export default Theme;