import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api';

const App: Component = () => {

  invoke('greet', { name: 'Mohamad Moein' }).then(res => console.log(res))

  return (
    <div>
      <h1 class="font-bold text-3xl text-green-700 text-center py-20">Hello World!</h1>
    </div>
  );
};

export default App;
