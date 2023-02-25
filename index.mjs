/*!
    @e53e04ac/dependency-tuning-planner/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { auto as asyncAuto } from 'async';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').DependencyTuningPlanner.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['T']} T */

    const _options = ({
        repositories: hold(() => {
            return unwrap(options.repositories);
        }),
        filter: options.filter,
    });

    /** @type {import('.').DependencyTuningPlanner._Self<T>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        packageJson: ((directory) => {
            return directory.resolve('package.json').readJson();
        }),
        repositoryContent: (async (repository) => {
            const packageJson = await _self.packageJson(repository.directory);
            return {
                directory: repository.directory,
                tags: repository.tags,
                name: packageJson.name,
                dependsOn: [
                    ...Object.entries(packageJson.dependencies ?? {}).map(([name, version]) => {
                        return { name, version, dev: false };
                    }),
                    ...Object.entries(packageJson.devDependencies ?? {}).map(([name, version]) => {
                        return { name, version, dev: true };
                    }),
                ].filter((dependency) => {
                    return _options.filter(dependency);
                }).map(({ name }) => {
                    return name;
                }),
            };
        }),
        repositoryContents: hold(() => {
            return Promise.all(_options.repositories().map((repository) => {
                return _self.repositoryContent(repository);
            }));
        }),
    });

    /** @type {import('.').DependencyTuningPlanner.Self<T>} */
    const self = ({
        ...EventEmitter({}),
        _DependencyTuningPlanner: (() => {
            return _self;
        }),
        plan: hold(async () => {
            /** @type {import('.').DependencyTuningPlanner.RepositoryContent<T>[]} */
            const result = [];
            const repositories = await _self.repositoryContents();
            const tasks = Object.fromEntries(repositories.map(({ directory, tags, name, dependsOn }) => {
                return [name, [...dependsOn, async () => {
                    result.push({ directory, tags, name, dependsOn });
                }]];
            }));
            await asyncAuto(tasks, 1);
            return result;
        }),
    });

    return self;

});

/** @type {import('.').DependencyTuningPlanner.Companion} */
const companion = ({});

/** @type {import('.').DependencyTuningPlanner.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as DependencyTuningPlanner };
