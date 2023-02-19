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

    type Repository = {
        readonly directory: FileEntry;
        readonly name: string;
        readonly dependsOn: string[];
    };

    type Options = {
        readonly repositories: ValueOrGet<{
            readonly directory: FileEntry;
        }[]>;
        readonly filter: {
            (dependency: Dependency): boolean;
        };
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly packageJson: {
            (directory: FileEntry): Promise<PackageJson>;
        };
        readonly repository: {
            (directory: FileEntry): Promise<Repository>;
        };
        readonly repositories: Get<Promise<Repository[]>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _DependencyTuningPlanner: Get<_Self>;
        readonly plan: Get<Promise<Repository[]>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type DependencyTuningPlanner = DependencyTuningPlanner.Self;

export declare const DependencyTuningPlanner: DependencyTuningPlanner.ConstructorWithCompanion;
