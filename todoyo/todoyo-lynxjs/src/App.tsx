import { useCallback, useEffect, useState } from "@lynx-js/react";
import "./App.scss";
import forumLogo from "@assets/images/logo-forum.png?inline";
import "@lynx-js/preact-devtools";
import "@lynx-js/react/debug";

export function App(props: { onMounted?: () => void }) {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = useCallback((e) => {
    console.info("Input changed:", e.detail.value);
    setInputValue(e.detail.value);
  }, []);
  const handleSave = useCallback(() => {
    console.info("Save button clicked", inputValue);
    const taskText = String(inputValue || "").trim();

    if (taskText) {
      console.info("Hello, ReactLynx", inputValue);
      const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false,
        createdAt: new Date().toLocaleString("it-IT"),
      };
      console.info("New Task:", newTask);

      setTasks((prev) => [...prev, newTask]);
      setInputValue("");
    }
  }, [inputValue]);
  return (
    <view clip-radius="true" className="page__light">
      <view className="page-header__notch">
        <view className="nav-bar">
          <image src={forumLogo} className="logo" mode="aspectFit" />
          <text className="home-title__light">TODOYO</text>
        </view>

        <view className="input-card__light">
          <text className="bold-text__light">Aggiungi Attività</text>

          <input
            className="input-box__light"
            placeholder="Inserisci nuova attività..."
            value={inputValue}
            bindinput={handleInputChange}
          />
          <view className="button-app__light" bindtap={handleSave}>
            <text className="text-button-app__light">Salva Attività</text>
          </view>
        </view>

        <text className="bold-text__light">Lista di Attività</text>

        {tasks.length === 0 ? (
          <text className="text__light">Nessuna attività ancora</text>
        ) : (
          <list
            scroll-orientation="vertical"
            list-type="single"
            span-count={1}
            style={{
              width: "100%",
              height: "100vh",
              marginTop: "16px",
            }}
          >
            {tasks.map((task) => {
              return (
                <list-item
                  item-key={`list-item-${task.id}`}
                  key={`list-item-${task.id}`}
                >
                  <view className="task-item">
                    <text className="task-text__light">{task.text}</text>
                    <text className="task-text__light">{task.createdAt}</text>
                  </view>
                </list-item>
              );
            })}
          </list>
        )}
      </view>
    </view>
  );
}
