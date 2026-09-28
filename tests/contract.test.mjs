import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function load(relativePath) {
    const file = new URL(relativePath, import.meta.url);
    const code = ts.transpileModule(readFileSync(file, 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true }
    }).outputText;
    const exports = {};
    runInNewContext(code, { exports, require: createRequire(file), Intl, Date });
    return exports;
}

test('Israel date rolls over correctly in winter and summer regardless of browser zone', () => {
    const { eventClock } = load('../src/contract/eventClock.ts');
    assert.equal(eventClock(new Date('2025-01-01T22:30:00Z')), '2025-01-02T00:30');
    assert.equal(eventClock(new Date('2025-07-01T22:30:00Z')), '2025-07-02T01:30');
    assert.equal(eventClock(new Date('2025-03-27T23:59:00Z')), '2025-03-28T01:59');
    assert.equal(eventClock(new Date('2025-03-28T00:00:00Z')), '2025-03-28T03:00');
});

test('every form option is canonical and result matching survives removal of trailing spaces', () => {
    const options = load('../src/data/formOptions.ts');
    const arrays = Object.values(options).filter(Array.isArray);
    assert.equal(arrays.length, 8);
    for (const values of arrays) {
        assert.equal(new Set(values).size, values.length);
        for (const value of values) assert.equal(value.trim(), value);
    }
    assert.equal(options.resultsArr.filter(value => value.includes(options.HAS_CASUALTIES)).length, 2);
    assert.ok(options.locationArr.includes(options.CIVILIAN_AREA));
});
