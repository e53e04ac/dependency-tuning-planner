# dependency-tuning-planner

~~~~~ sh
npm install e53e04ac/dependency-tuning-planner
~~~~~

~~~~~ mjs
import { DependencyTuningPlanner } from 'e53e04ac/dependency-tuning-planner';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["async"]);
    B_1(["e53e04ac/file-entry-native"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/async"]);
    B_4(["@types/node"]);
    B_5(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://www.npmjs.org/package/async/v/3.2.4";
  click B_1 "https://github.com/e53e04ac/file-entry-native/tree/3c7e8e20a8f04f390eaec31c9e9654c9fe219797";
  click B_2 "https://github.com/e53e04ac/hold/tree/49707680ccdf4c5673f64ff0bab30f408269b328";
  click B_3 "https://www.npmjs.org/package/@types/async/v/3.2.18";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.14.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/c2cb299755ce1e1acd4da616865b44ea054e9291";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/dependency-tuning-planner";
    E_0(["DependencyTuningPlanner"]);
  end;
  M(["index.mjs"])
  subgraph "async";
    I_0_0(["auto"]);
  end;
  subgraph "hold";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/dependency-tuning-planner";
    E_0(["namespace DependencyTuningPlanner"]);
    E_1(["type DependencyTuningPlanner"]);
    E_2(["const DependencyTuningPlanner"]);
  end;
  M(["index.d.ts"])
  subgraph "file-entry";
    I_0_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
