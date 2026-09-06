import Image from "next/image";

const KEYS_PER_ROW = 12;
const KEY_COUNT = 60;

function Keyboard() {
  return (
    <div className="notebook-keyboard">
      {Array.from({ length: KEY_COUNT }, (_, index) => {
        const row = Math.floor(index / KEYS_PER_ROW);
        const col = index % KEYS_PER_ROW;
        return <i key={`kb-${row}-${col}`} />;
      })}
    </div>
  );
}

export function Notebook() {
  return (
    <div className="continuity-surface">
      <div className="notebook">
        <div className="notebook-lid">
          <div className="notebook-camera" aria-hidden="true" />
          <div className="capture-frame notebook-display">
            <Image
              className="capture-vscode"
              src="/examples/vscode.png"
              alt="Tema Umbra no VS Code, na tela do notebook"
              fill
              sizes="(max-width: 760px) 88vw, 72vw"
              preload
            />
            <Image
              className="capture-zed"
              src="/examples/zed.png"
              alt="Tema Umbra no Zed, na tela do notebook"
              fill
              sizes="(max-width: 760px) 88vw, 72vw"
              preload
            />
            <Image
              className="capture-kitty"
              src="/examples/kitty.png"
              alt="Tema Umbra no Kitty, na tela do notebook"
              fill
              sizes="(max-width: 760px) 88vw, 72vw"
              preload
            />
          </div>
        </div>
        <div className="notebook-base" aria-hidden="true">
          <Keyboard />
          <div className="notebook-trackpad" />
          <div className="notebook-front" />
        </div>
      </div>
    </div>
  );
}
