/*!
    @e53e04ac/dependency-tuning-planner/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace DependencyTuningPlanner {

    type PackageJson = {
        readonly name: string;
        readonly dependencies?: Record<string, string>;
        readonly devDependencies?: Record<string, string>;
    } & Record<string, unknown>;

    type Dependency = {
        readonly name: string;
        readonly version: string;
        readonly dev: boolean;
    };

    type Repository<T> = {
        readonly directory: FileEntry;
        readonly tags: T;
    };

    type RepositoryContent<T> = Repository<T> & {
        readonly name: string;
        readonly dependsOn: string[];
    };

    type Options<T> = {
        readonly repositories: ValueOrGet<Repository<T>[]>;
        readonly filter: {
            (dependency: Dependency): boolean;
        };
        readonly __GenericTypes__?: {
            readonly T: T;
        };
    };

    type EventSpecs = Record<never, never>;

    type _Self<T> = {
        readonly options: Get<Options<T>>;
        readonly _options: Get<unknown>;
        readonly packageJson: {
            (directory: FileEntry): Promise<PackageJson>;
        };
        readonly repositoryContent: {
            (directory: Repository<T>): Promise<RepositoryContent<T>>;
        };
        readonly repositoryContents: Get<Promise<RepositoryContent<T>[]>>;
    };

    type Self<T> = EventEmitter<EventSpecs> & {
        readonly _DependencyTuningPlanner: Get<_Self<T>>;
        readonly plan: Get<Promise<RepositoryContent<T>[]>>;
    };

    type Constructor = {
        <T>(options: Options<T>): Self<T>;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type DependencyTuningPlanner<T> = DependencyTuningPlanner.Self<T>;

export declare const DependencyTuningPlanner: DependencyTuningPlanner.ConstructorWithCompanion;
