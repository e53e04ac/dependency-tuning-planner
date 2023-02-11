# dependency-tuning-planner

~~~~~ sh
npm install e53e04ac/dependency-tuning-planner
~~~~~

~~~~~ mjs
import { DependencyTuningPlanner } from 'e53e04ac/dependency-tuning-planner';
~~~~~

~~~~~ mermaid
graph LR;
  A(["dependency-tuning-planner"]);
  B0(["async"]);
  B1(["e53e04ac/file-entry"]);
  B2(["e53e04ac/file-entry-native"]);
  B3(["e53e04ac/hold"]);
  C0(["@types/async"]);
  C1(["@types/node"]);
  click B1 href "https://github.com/e53e04ac/file-entry";
  click B2 href "https://github.com/e53e04ac/file-entry-native";
  click B3 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/dependency-tuning-planner";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
