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
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/async"]);
    B_5(["@types/node"]);
    B_6(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  click B_0 "https://www.npmjs.com/package/async/v/3.2.4";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/faf256d4d2350ffa0af1fed794236faa4f0740a1";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/9f6065504bf14be690aee1bb9beb982b21eef0d2";
  click B_3 "https://github.com/e53e04ac/hold/tree/443c2e801bbe20409c761994a91fa88fb6044602";
  click B_4 "https://www.npmjs.com/package/@types/async/v/3.2.18";
  click B_5 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click B_6 "https://github.com/e53e04ac/file-entry/tree/69045717124e824d6d83b98b6866fcafe8f295ef";
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/dependency-tuning-planner";
    E_0(["namespace DependencyTuningPlanner"]);
    E_1(["type DependencyTuningPlanner"]);
    E_2(["const DependencyTuningPlanner"]);
  end;
  M(["index.d.ts"])
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
