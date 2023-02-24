# dependency-tuning-planner

~~~~~ sh
npm install e53e04ac/dependency-tuning-planner
~~~~~

~~~~~ mjs
import { DependencyTuningPlanner } from 'e53e04ac/dependency-tuning-planner';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["async"]);
    B_1(["event-emitter"]);
    B_2(["file-entry-native"]);
    B_3(["hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/async"]);
    B_5(["@types/node"]);
    B_6(["file-entry"]);
  end;
  subgraph "github";
    C_1(["e53e04ac/event-emitter\naea7d828d486572514f193752191206e0cbeeaa5"]);
    C_2(["e53e04ac/file-entry-native\n28461cf367f875f2a2f6250f4adb4db316354162"]);
    C_3(["e53e04ac/hold\n593585d63bb24dc044f13a88375b53f9fa565229"]);
    C_6(["e53e04ac/file-entry\n3b584f55af253b70ed8fddf4d804848782ef8705"]);
  end;
  subgraph "npmjs";
    C_0(["async\n3.2.4"]);
    C_4(["@types/async\n3.2.18"]);
    C_5(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  click C_0 "https://www.npmjs.com/package/async/v/3.2.4";
  click C_1 "https://github.com/e53e04ac/event-emitter/tree/aea7d828d486572514f193752191206e0cbeeaa5";
  click C_2 "https://github.com/e53e04ac/file-entry-native/tree/28461cf367f875f2a2f6250f4adb4db316354162";
  click C_3 "https://github.com/e53e04ac/hold/tree/593585d63bb24dc044f13a88375b53f9fa565229";
  click C_4 "https://www.npmjs.com/package/@types/async/v/3.2.18";
  click C_5 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_6 "https://github.com/e53e04ac/file-entry/tree/3b584f55af253b70ed8fddf4d804848782ef8705";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/dependency-tuning-planner";
    E_0(["namespace DependencyTuningPlanner"]);
    E_1(["type DependencyTuningPlanner"]);
    E_2(["const DependencyTuningPlanner"]);
  end;
  M["index.d.ts"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/dependency-tuning-planner";
    E_0(["DependencyTuningPlanner"]);
  end;
  M["index.mjs"]
  subgraph "async";
    I_0_0(["auto"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~
