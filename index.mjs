/*!
    @e53e04ac/dependency-tuning-planner/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { auto as asyncAuto } from 'async';

import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').DependencyTuningPlanner.Constructor} */
const constructor = ((options) => {

    const _options = ({
        repositories: hold(() => {
            return unwrap(options.repositories);
        }),
        filter: options.filter,
    });

    /** @type {import('.').DependencyTuningPlanner._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        packageJson: ((directory) => {
            return directory.resolve('package.json').readJsonSync();
        }),
        repositories: hold(() => {
            return _options.repositories().map(({ directory }) => {
                const packageJson = _self.packageJson(directory);
                const dependsOn = [
                    ...Object.entries(packageJson.dependencies ?? {}),
                    ...Object.entries(packageJson.devDependencies ?? {}),
                ].map(([name, version]) => {
                    return { name, version };
                }).filter((dependency) => {
                    return _options.filter(dependency);
                }).map(({ name }) => {
                    return name;
                });
                return {
                    directory,
                    name: packageJson.name,
                    dependsOn,
                };
            });
        }),
    });

    /** @type {import('.').DependencyTuningPlanner.Self} */
    const self = ({
        _DependencyTuningPlanner: (() => {
            return _self;
        }),
        plan: hold(async () => {
            /** @type {import('.').DependencyTuningPlanner.Repository[]} */
            const result = [];
            const tasks = Object.fromEntries(_self.repositories().map(({ directory, name, dependsOn }) => {
                return [name, [...dependsOn, async () => {
                    result.push({ directory, name, dependsOn });
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
