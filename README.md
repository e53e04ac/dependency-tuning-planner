# dependency-tuning-planner

~~~~~ sh
npm install e53e04ac/dependency-tuning-planner
~~~~~

~~~~~ mjs
import { DependencyTuningPlanner } from 'e53e04ac/dependency-tuning-planner';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/dependency-tuning-planner"]);
  subgraph "dependencies";
    B_0(["async"]);
    B_1(["e53e04ac/file-entry"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/async"]);
    B_5(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://www.npmjs.org/package/async/v/3.2.4";
  click B_1 "https://github.com/e53e04ac/file-entry/tree/6ec4bb84174ecf5f51e960e068007a0bca650867";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/c7b9cd44bc0929d780ee59deb03bfe5b30526c6f";
  click B_3 "https://github.com/e53e04ac/hold/tree/71c950a1abcf1cfea9606e5b433f86791c962772";
  click B_4 "https://www.npmjs.org/package/@types/async/v/3.2.16";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/dependency-tuning-planner"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "async"
    D0(["auto"]);
  end;
  subgraph "hold"
    D1(["hold"]);
    D2(["unwrap"]);
    D4(["Get"]);
    D5(["ValueOrGet"]);
  end;
  subgraph "file-entry"
    D3(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C1;
  D4 --import--> C1;
  D5 --import--> C1;
~~~~~
