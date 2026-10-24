import assert from 'node:assert/strict';
import { createZonePorts, isApiPort, isUiPort } from '@x12i/ports-manager';

const ports = createZonePorts({ zoneId: 'example', map: {
  schemaVersion: 1, avoid: {}, zones: { example: { min: 12000, max: 12019, defaults: { api: 12000, ui: 12001 } } },
} });
assert.equal(ports.assertInZone(12000), 12000);
assert.throws(() => ports.assertInZone(13000));
assert.equal(isApiPort(12000), true);
assert.equal(isUiPort(12001), true);
console.log({ api: ports.origin('127.0.0.1', ports.ports.api), ui: ports.ports.ui });
// This example checks configuration only; it does not bind a server.
